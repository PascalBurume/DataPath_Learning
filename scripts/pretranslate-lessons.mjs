// Pre-translate M1-M3 lessons into FR and SW using local Ollama and cache in
// the LessonTranslation table. Idempotent: skips lessons already cached.
//
// Run from repo root:  node scripts/pretranslate-lessons.mjs [modules...]
// Default modules: M1 M2 M3
// Optional env: OLLAMA_URL (default http://localhost:11434),
//               OLLAMA_MODEL (default gemma4:e2b)

import { PrismaClient } from "../apps/web/node_modules/@prisma/client/default.js";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "gemma4:e2b";
const MODULES = process.argv.slice(2).filter(Boolean);
const TARGET_MODULES = MODULES.length ? MODULES : ["M1", "M2", "M3"];
const TARGET_LANGS = ["fr", "sw"];

const LANG_NAME = { fr: "French", sw: "Swahili" };
const CODE_FENCE = /(^```[\s\S]*?^```$)/gm;

function splitMarkdown(body) {
  return body
    .split(CODE_FENCE)
    .filter((p) => p.length > 0)
    .map((p) => ({ kind: p.startsWith("```") ? "code" : "prose", text: p }));
}

function systemPrompt(lang) {
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

async function translateChunk(text, lang, signal) {
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

async function translateBody(body, lang) {
  const chunks = splitMarkdown(body);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 300_000);
  try {
    const out = [];
    for (const c of chunks) {
      if (c.kind === "code") {
        out.push(c.text);
      } else {
        out.push(await translateChunk(c.text, lang, ctrl.signal));
      }
    }
    return out.join("");
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  // Probe Ollama
  const tags = await fetch(`${OLLAMA_URL}/api/tags`).catch(() => null);
  if (!tags?.ok) {
    console.error(`Ollama unreachable at ${OLLAMA_URL}. Start it with: ollama serve`);
    process.exit(2);
  }
  const tagsJson = await tags.json();
  const hasModel = (tagsJson.models ?? []).some((m) => m.name === OLLAMA_MODEL);
  if (!hasModel) {
    console.error(`Model ${OLLAMA_MODEL} not pulled. Run: ollama pull ${OLLAMA_MODEL}`);
    process.exit(2);
  }
  console.log(`Ollama ok · model ${OLLAMA_MODEL}`);

  const prisma = new PrismaClient();
  const lessons = await prisma.lesson.findMany({
    where: { moduleId: { in: TARGET_MODULES } },
    select: { id: true, moduleId: true, title: true, body: true },
    orderBy: [{ moduleId: "asc" }, { order: "asc" }],
  });

  const total = lessons.length * TARGET_LANGS.length;
  let done = 0;
  let skipped = 0;
  const t0 = Date.now();

  console.log(`Translating ${lessons.length} lessons × ${TARGET_LANGS.length} languages = ${total} jobs\n`);

  for (const lesson of lessons) {
    for (const lang of TARGET_LANGS) {
      done++;
      const tag = `[${done}/${total}] ${lesson.id} → ${lang}`;
      const existing = await prisma.lessonTranslation.findUnique({
        where: { lessonId_lang: { lessonId: lesson.id, lang } },
        select: { id: true },
      });
      if (existing) {
        console.log(`${tag}  ✓ cached, skip`);
        skipped++;
        continue;
      }
      const tStart = Date.now();
      process.stdout.write(`${tag}  ... `);
      try {
        const translated = await translateBody(lesson.body, lang);
        await prisma.lessonTranslation.upsert({
          where: { lessonId_lang: { lessonId: lesson.id, lang } },
          create: { lessonId: lesson.id, lang, body: translated, model: OLLAMA_MODEL },
          update: { body: translated, model: OLLAMA_MODEL },
        });
        const dt = ((Date.now() - tStart) / 1000).toFixed(1);
        console.log(`✓ ${dt}s · ${translated.length} chars`);
      } catch (e) {
        console.log(`✗ ${e.message}`);
      }
    }
  }

  const totalMin = ((Date.now() - t0) / 60_000).toFixed(1);
  console.log(`\nDone in ${totalMin} min · ${done - skipped} translated · ${skipped} skipped`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
