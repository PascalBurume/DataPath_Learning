import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await ctx.params;
  const lesson = await prisma.lesson.findUnique({
    where: { id },
    include: {
      module: { select: { id: true, title: true } },
      slides: { orderBy: { order: "asc" } },
    },
  });
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  const siblings = await prisma.lesson.findMany({
    where: { moduleId: lesson.moduleId },
    orderBy: { order: "asc" },
    select: { id: true, title: true, order: true },
  });
  const idx = siblings.findIndex((s) => s.id === lesson.id);

  return NextResponse.json({
    lesson: {
      id: lesson.id,
      moduleId: lesson.moduleId,
      title: lesson.title,
      kind: lesson.kind,
      aiOff: lesson.aiOff,
      body: lesson.body,
    },
    module: lesson.module,
    slides: lesson.slides.map((s) => ({ title: s.title, body: s.body, code: s.code ?? undefined, aiOff: !!s.aiOff })),
    prev: idx > 0 ? siblings[idx - 1] : null,
    next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
  });
}
