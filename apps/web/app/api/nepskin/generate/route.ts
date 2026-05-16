// Nepskin diagram generation: takes selected lesson text, asks Ollama/Gemma
// to produce a Mermaid.js diagram. Returns JSON (not streaming) since the
// diagram needs to be parsed before rendering. Falls back gracefully if Ollama
// is offline. Logs to PromptLog (disclosure ledger) + ErrorLog (confusion heatmap).

import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { logError } from "@/lib/errorLog";

const Body = z.object({
  text: z.string().min(10).max(1500),
  moduleId: z.string().optional(),
  lessonId: z.string().optional(),
});

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "gemma4:e2b";

const SYSTEM_PROMPT =
  `You are a data science visual learning assistant. Create a Mermaid.js diagram from the selected text.\n\n` +
  `Reply in EXACTLY this format — nothing before the opening fence:\n` +
  "```mermaid\n" +
  `[valid mermaid syntax here]\n` +
  "```\n\n" +
  `1-2 sentences explaining what the diagram shows.\n\n` +
  `Diagram type guidelines:\n` +
  `- flowchart LR: data pipelines, processes, sequential steps\n` +
  `- mindmap: concepts, relationships, categories, vocabulary\n` +
  `- classDiagram: data structures, models, schemas\n` +
  `- sequenceDiagram: ordered operations, transformations\n\n` +
  `Rules: at most 8 nodes, node labels at most 20 chars each, no quotes inside node labels.`;

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { text, moduleId, lessonId } = parsed.data;

  try {
    const r = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Create a diagram for this data science concept:\n\n${text}` },
        ],
        stream: false,
      }),
      signal: AbortSignal.timeout(60_000),
    });

    if (!r.ok) throw new Error(`ollama ${r.status}`);
    const json = await r.json();
    const raw: string = json.message?.content ?? "";

    const fenceMatch = raw.match(/```mermaid\n([\s\S]+?)```/);
    const mermaidCode = fenceMatch?.[1]?.trim() ?? "";
    const explanation = raw.replace(/```mermaid[\s\S]+?```/, "").trim();

    if (!mermaidCode) throw new Error("no diagram in response");

    // Log to disclosure ledger and confusion heatmap in parallel
    await Promise.all([
      prisma.promptLog.create({
        data: {
          userId: user.id,
          moduleId: moduleId ?? null,
          lessonId: lessonId ?? null,
          prompt: text,
          response: raw,
          model: OLLAMA_MODEL,
          decision: "nepskin",
        },
      }),
      logError({
        userId: user.id,
        moduleId,
        lessonId,
        word: text.slice(0, 80),
        message: "student requested visual diagram",
        source: "nepskin",
        context: text.slice(0, 500),
      }),
    ]);

    return NextResponse.json({ mermaidCode, explanation, fallback: false });
  } catch (err: any) {
    return NextResponse.json({
      mermaidCode: "",
      explanation:
        `🟡 **Ollama is offline** (\`${OLLAMA_URL}\` — ${err?.message ?? err}).\n\n` +
        `To enable diagrams, run:\n\`\`\`bash\nollama serve &\nollama pull ${OLLAMA_MODEL}\n\`\`\``,
      fallback: true,
    });
  }
}
