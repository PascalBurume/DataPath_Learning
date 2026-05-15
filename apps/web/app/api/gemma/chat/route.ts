// Gemma chat endpoint: proxies to local Ollama, falls back to a deterministic
// stub message if Ollama is unreachable (so the UI keeps working offline).
//
// Streams text in NDJSON so the client can render tokens incrementally.

import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { requireUser } from "@/lib/auth";

const Body = z.object({
  prompt: z.string().min(1),
  history: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() })).optional(),
  moduleId: z.string().optional(),
  lessonId: z.string().optional(),
  context: z.string().optional(),
});

const SYSTEM_PROMPT_PATH = path.resolve(process.cwd(), "../..", "datapath/AI_SYSTEM/gemma_system_prompt.md");
let cachedSystem: string | null = null;
function systemPrompt(): string {
  if (cachedSystem) return cachedSystem;
  try { cachedSystem = fs.readFileSync(SYSTEM_PROMPT_PATH, "utf8"); }
  catch {
    cachedSystem = "You are DataPath Tutor — a Socratic, calm, pedagogically sound data-science teaching assistant. Always cite which lesson the answer applies to. Encourage students to think first.";
  }
  return cachedSystem!;
}

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "gemma4:e2b";

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });

  // Two-phase reasoning protocol — instruct the model to emit a short
  // first-person planning trace inside <think>…</think>, then the final
  // pedagogical answer inside <answer>…</answer> as GitHub-flavored markdown.
  // The client parses these channels and renders a Claude-style "Thinking…"
  // pill above the rich-markdown answer.
  const reasoningProtocol =
    `## Output protocol (REQUIRED)\n` +
    `Reply in EXACTLY this shape, with no text outside the tags:\n` +
    `<think>\n` +
    `Two to four short sentences in the first person about how you'll teach this. ` +
    `Mention which lesson concept it touches and what the student likely needs (intuition vs. mechanics vs. debugging). ` +
    `Keep it under ~120 words. Plain text only — no markdown, no code fences.\n` +
    `</think>\n` +
    `<answer>\n` +
    `The final teaching answer in GitHub-flavored markdown. Use fenced code blocks with the language tag (e.g. \`\`\`python). ` +
    `Use short paragraphs, headings (####), bullet lists, and inline math when helpful ($x$ or $$…$$). ` +
    `Cite the lesson id when relevant. End with one Socratic prompt that nudges the student to verify their understanding.\n` +
    `</answer>`;

  const sys = parsed.data.context
    ? `${systemPrompt()}\n\n## Lesson context\n${parsed.data.context}\n\n${reasoningProtocol}`
    : `${systemPrompt()}\n\n${reasoningProtocol}`;
  const messages = [
    { role: "system", content: sys },
    ...(parsed.data.history ?? []),
    { role: "user", content: parsed.data.prompt },
  ];

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        const r = await fetch(`${OLLAMA_URL}/api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: OLLAMA_MODEL, messages, stream: true }),
          signal: AbortSignal.timeout(60_000),
        });
        if (!r.ok || !r.body) throw new Error(`ollama ${r.status}`);
        const reader = r.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          const lines = buf.split("\n");
          buf = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const j = JSON.parse(line);
              const tok = j?.message?.content ?? "";
              if (tok) controller.enqueue(encoder.encode(JSON.stringify({ token: tok }) + "\n"));
              if (j?.done) controller.enqueue(encoder.encode(JSON.stringify({ done: true }) + "\n"));
            } catch { /* skip non-JSON keep-alives */ }
          }
        }
      } catch (err: any) {
        // Wrap the offline fallback in the same <think>/<answer> envelope so
        // the client renderer treats it identically to a live Ollama response.
        const fallback =
          `<think>\n` +
          `The Gemma backend is offline so I can't generate a real tutoring reply. ` +
          `I'll point the student at how to start it and acknowledge their question briefly.\n` +
          `</think>\n` +
          `<answer>\n` +
          `🟡 **Gemma is offline.** Ollama at \`${OLLAMA_URL}\` is unreachable (${err?.message ?? err}).\n\n` +
          `To enable real replies, run:\n\n` +
          "```bash\n" +
          `ollama serve &\n` +
          `ollama pull ${OLLAMA_MODEL}\n` +
          "```\n\n" +
          `I noted your question about "${parsed.data.prompt.slice(0, 80)}" — once Ollama is up, ask again and I'll teach it properly.\n` +
          `</answer>`;
        for (const tok of fallback.match(/.{1,32}/gs) ?? [fallback]) {
          controller.enqueue(encoder.encode(JSON.stringify({ token: tok }) + "\n"));
        }
        controller.enqueue(encoder.encode(JSON.stringify({ done: true, fallback: true }) + "\n"));
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
