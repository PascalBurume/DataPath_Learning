// Translate a lesson body from English into FR or SW via local Ollama.
//
// Strategy: split the markdown on fenced code blocks so we never send code to
// the model. Each prose chunk is translated separately; code chunks are
// emitted verbatim. The final stitched body is cached in LessonTranslation
// keyed by (lessonId, lang) — subsequent reads stream the cached body
// instantly without touching Ollama.
//
// Wire: NDJSON. {token: "..."} per chunk, {done: true, cached?: true} terminal.

import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "gemma4:e2b";

const LANG_NAME: Record<string, string> = {
  fr: "French",
  sw: "Swahili",
};

const CODE_FENCE = /(^```[\s\S]*?^```$)/gm;

type Chunk = { kind: "code" | "prose"; text: string };

function splitMarkdown(body: string): Chunk[] {
  const parts = body.split(CODE_FENCE);
  return parts
    .filter((p) => p.length > 0)
    .map((p) => ({ kind: p.startsWith("```") ? "code" : "prose", text: p }));
}

function systemPrompt(lang: string): string {
  const langName = LANG_NAME[lang];
  return [
    `You are a precise technical translator. Translate the following Markdown from English to ${langName}.`,
    `RULES:`,
    `- Output ONLY the translated Markdown. No preamble, no explanation, no surrounding quotes.`,
    `- Preserve ALL Markdown formatting exactly: headings (####), bold (**…**), italic (*…*), lists (-, 1.), tables, blockquotes (>), links [x](y).`,
    `- Preserve inline code spans (\`code\`) and LaTeX math ($…$ and $$…$$) unchanged.`,
    `- Preserve lesson IDs (L3.4, M3, etc.) and book anchors like [Géron Ch2 p.85–95] unchanged.`,
    `- Keep technical data-science terms recognisable; do not translate library names (pandas, numpy, scikit-learn).`,
    `- Match the source paragraph structure exactly.`,
  ].join("\n");
}

async function translateChunk(text: string, lang: string, signal: AbortSignal): Promise<string> {
  const r = await fetch(`${OLLAMA_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      messages: [
        { role: "system", content: systemPrompt(lang) },
        { role: "user", content: text },
      ],
      stream: false,
      options: { temperature: 0.2 },
    }),
    signal,
  });
  if (!r.ok) throw new Error(`ollama ${r.status}`);
  const j = await r.json();
  return j?.message?.content ?? "";
}

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  if (!user) return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });

  const { id } = await ctx.params;
  const url = new URL(req.url);
  const lang = (url.searchParams.get("lang") ?? "fr").toLowerCase();
  if (!LANG_NAME[lang]) {
    return new Response(JSON.stringify({ error: `unsupported lang: ${lang}` }), { status: 400 });
  }

  const lesson = await prisma.lesson.findUnique({ where: { id }, select: { body: true } });
  if (!lesson) return new Response(JSON.stringify({ error: "lesson not found" }), { status: 404 });

  const cached = await prisma.lessonTranslation.findUnique({
    where: { lessonId_lang: { lessonId: id, lang } },
    select: { body: true },
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) => controller.enqueue(encoder.encode(JSON.stringify(obj) + "\n"));
      try {
        if (cached) {
          send({ token: cached.body });
          send({ done: true, cached: true });
          return; // finally closes the controller
        }

        const chunks = splitMarkdown(lesson.body);
        const out: string[] = [];
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 120_000);

        for (const c of chunks) {
          if (c.kind === "code") {
            out.push(c.text);
            send({ token: c.text });
            continue;
          }
          const translated = await translateChunk(c.text, lang, ctrl.signal);
          out.push(translated);
          send({ token: translated });
        }
        clearTimeout(t);

        const finalBody = out.join("");
        await prisma.lessonTranslation.upsert({
          where: { lessonId_lang: { lessonId: id, lang } },
          create: { lessonId: id, lang, body: finalBody, model: OLLAMA_MODEL },
          update: { body: finalBody, model: OLLAMA_MODEL },
        });
        send({ done: true, cached: false });
      } catch (err: any) {
        send({ error: err?.message ?? String(err), done: true });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
    },
  });
}

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  // Quick cache lookup: returns 404 if no translation cached yet.
  const user = await requireUser();
  if (!user) return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  const { id } = await ctx.params;
  const url = new URL(req.url);
  const lang = (url.searchParams.get("lang") ?? "fr").toLowerCase();
  const cached = await prisma.lessonTranslation.findUnique({
    where: { lessonId_lang: { lessonId: id, lang } },
    select: { body: true, createdAt: true, model: true },
  });
  if (!cached) return new Response(JSON.stringify({ error: "not cached" }), { status: 404 });
  return Response.json({ lessonId: id, lang, ...cached });
}
