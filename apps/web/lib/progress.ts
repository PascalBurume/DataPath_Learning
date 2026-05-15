// Per-module progress aggregation, extracted from /api/progress so the
// dashboard endpoint and the legacy progress endpoint share one implementation.

import { prisma } from "@/lib/db";

export interface PerModule {
  id: string;
  order: number;
  title: string;
  lessonsDone: number;
  total: number;
  pct: number;
  aiOff: boolean;
}

export interface ProgressSummary {
  perModule: PerModule[];
  totals: {
    lessonsDone: number;
    lessonsTotal: number;
    modulesDone: number;
    aiPromptsLast7: number;
  };
}

export async function loadProgress(userId: string): Promise<ProgressSummary> {
  const [events, modules, aiCount] = await Promise.all([
    prisma.progressEvent.findMany({
      where: { userId, kind: "slide_view" },
      orderBy: { createdAt: "desc" },
      take: 2000,
      select: { lessonId: true, moduleId: true },
    }),
    prisma.module.findMany({
      orderBy: { order: "asc" },
      include: { lessons: { select: { id: true, aiOff: true } } },
    }),
    (async () => {
      const since = new Date();
      since.setDate(since.getDate() - 7);
      return prisma.promptLog.count({ where: { userId, createdAt: { gte: since } } });
    })(),
  ]);

  const perModule: PerModule[] = modules.map((m) => {
    const lessonIds = new Set(m.lessons.map((l) => l.id));
    const seen = new Set(
      events
        .filter((e) => e.lessonId && lessonIds.has(e.lessonId))
        .map((e) => e.lessonId!),
    );
    const total = m.lessons.length;
    return {
      id: m.id,
      order: m.order,
      title: m.title,
      lessonsDone: seen.size,
      total,
      pct: total ? Math.round((seen.size / total) * 100) : 0,
      aiOff: m.lessons.some((l) => l.aiOff),
    };
  });

  return {
    perModule,
    totals: {
      lessonsDone: perModule.reduce((s, m) => s + m.lessonsDone, 0),
      lessonsTotal: perModule.reduce((s, m) => s + m.total, 0),
      modulesDone: perModule.filter((m) => m.pct === 100).length,
      aiPromptsLast7: aiCount,
    },
  };
}
