import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const user = await requireUser();
  const m = await prisma.module.findUnique({
    where: { id },
    include: {
      lessons: { orderBy: { order: "asc" } },
      prompts: { orderBy: { order: "asc" } },
      quiz: { orderBy: { order: "asc" } },
    },
  });
  if (!m) return NextResponse.json({ error: "Module not found" }, { status: 404 });

  let doneIds = new Set<string>();
  if (user) {
    const events = await prisma.progressEvent.findMany({
      where: { userId: user.id, moduleId: id, kind: "slide_view" },
      select: { lessonId: true },
      distinct: ["lessonId"],
    });
    doneIds = new Set(events.map((e) => e.lessonId).filter(Boolean) as string[]);
  }

  const lessons = m.lessons.map((l) => ({
    id: l.id,
    ref: l.id,
    order: l.order,
    title: l.title,
    kind: l.kind,
    aiOff: l.aiOff,
    done: doneIds.has(l.id),
  }));

  return NextResponse.json({
    module: {
      id: m.id,
      order: m.order,
      title: m.title,
      subtitle: m.subtitle,
      aiUseSummary: m.aiUseSummary,
      datasetsJson: m.datasetsJson,
    },
    lessons,
    prompts: m.prompts.map((p) => ({ id: p.id, idx: p.order, title: p.title, body: p.body })),
    quiz: m.quiz.map((q) => ({ id: q.id, order: q.order, question: q.question, choices: JSON.parse(q.choices), kind: q.kind })),
    progress: {
      lessonsDone: lessons.filter((l) => l.done).length,
      total: lessons.length,
      pct: lessons.length ? Math.round((lessons.filter((l) => l.done).length / lessons.length) * 100) : 0,
    },
  });
}
