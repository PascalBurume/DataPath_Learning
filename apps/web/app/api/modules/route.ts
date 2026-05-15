import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET() {
  const user = await requireUser();
  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
    include: { lessons: { orderBy: { order: "asc" }, select: { id: true, title: true, kind: true, aiOff: true } } },
  });

  let progressByModule: Record<string, { lessonsDone: number; total: number; pct: number }> = {};
  if (user) {
    for (const m of modules) {
      const total = m.lessons.length;
      const done = await prisma.progressEvent.findMany({
        where: { userId: user.id, moduleId: m.id, kind: "slide_view" },
        select: { lessonId: true },
        distinct: ["lessonId"],
      });
      const lessonsDone = done.filter((d) => d.lessonId && m.lessons.some((l) => l.id === d.lessonId)).length;
      progressByModule[m.id] = { lessonsDone, total, pct: total ? Math.round((lessonsDone / total) * 100) : 0 };
    }
  }

  return NextResponse.json({
    modules: modules.map((m) => ({
      id: m.id,
      order: m.order,
      title: m.title,
      subtitle: m.subtitle,
      aiUseSummary: m.aiUseSummary,
      datasets: JSON.parse(m.datasetsJson),
      lessonCount: m.lessons.length,
      lessons: m.lessons,
      progress: progressByModule[m.id] ?? { lessonsDone: 0, total: m.lessons.length, pct: 0 },
    })),
  });
}
