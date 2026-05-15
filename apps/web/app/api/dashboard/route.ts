import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { loadProgress } from "@/lib/progress";
import { cohortWeek, moduleOrderForWeek } from "@/lib/cohort";

const CURRICULUM_DIR = path.resolve(process.cwd(), "../..", "datapath");
const DAY_MS = 24 * 60 * 60 * 1000;

/** Count cells flagged AI-OFF in a notebook by checking metadata.aiOff. */
function countAiOffCells(moduleId: string): number {
  try {
    const file = path.join(CURRICULUM_DIR, moduleId, "lab.ipynb");
    if (!fs.existsSync(file)) return 0;
    const nb = JSON.parse(fs.readFileSync(file, "utf8"));
    let n = 0;
    for (const cell of nb.cells ?? []) {
      if (cell?.metadata?.aiOff || cell?.metadata?.ai_off) n++;
    }
    return n;
  } catch {
    return 0;
  }
}

function defaultEta(kind: string): number {
  if (kind === "lab") return 25;
  if (kind === "quiz") return 8;
  if (kind === "checkpoint") return 15;
  return 12; // lecture
}

export async function GET() {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const [cohort, progress, recentPromptLogs, completions] = await Promise.all([
    user.cohortId
      ? prisma.cohort.findUnique({ where: { id: user.cohortId } })
      : Promise.resolve(null),
    loadProgress(user.id),
    (async () => {
      const since = new Date();
      since.setDate(since.getDate() - 28);
      since.setHours(0, 0, 0, 0);
      return prisma.promptLog.findMany({
        where: { userId: user.id, createdAt: { gte: since } },
        select: { createdAt: true },
      });
    })(),
    prisma.checkpointCompletion.findMany({
      where: { userId: user.id },
      select: { checkpointId: true, completedAt: true },
    }),
  ]);

  const week = cohortWeek({ startDate: cohort?.startDate ?? null, weeks: cohort?.weeks ?? 14 });
  const totalModules = progress.perModule.length;
  const currentOrder = moduleOrderForWeek(week.week, week.totalWeeks, totalModules);

  // Build the path: each module gets a status. A module is `done` when pct === 100,
  // `current` when its order matches the cohort's expected current module (or the
  // first non-100 module after that), and `locked` otherwise.
  let currentNodeOrder = currentOrder;
  // Promote current to first non-completed module starting at currentOrder.
  const firstUnfinished = progress.perModule.find((m) => m.order >= currentOrder && m.pct < 100)
    ?? progress.perModule.find((m) => m.pct < 100);
  if (firstUnfinished) currentNodeOrder = firstUnfinished.order;

  const path_ = progress.perModule.map((m) => ({
    id: m.id,
    order: m.order,
    title: m.title,
    pct: m.pct,
    status:
      m.pct === 100
        ? ("done" as const)
        : m.order === currentNodeOrder
          ? ("current" as const)
          : m.order < currentNodeOrder
            ? ("current" as const) // rare: current cohort module already 0%; mark as current too
            : ("locked" as const),
    aiOff: m.aiOff,
  }));

  // In-front-of-you lesson: next non-viewed lesson under the current module.
  const currentModule = progress.perModule.find((m) => m.order === currentNodeOrder);
  let inFront: {
    lessonId: string;
    title: string;
    moduleId: string;
    etaMin: number;
    aiCellsOff: number;
    kind: string;
    aiOff: boolean;
  } | null = null;

  if (currentModule) {
    const lessons = await prisma.lesson.findMany({
      where: { moduleId: currentModule.id },
      orderBy: { order: "asc" },
      select: { id: true, title: true, kind: true, aiOff: true },
    });
    const seenIds = new Set(
      (await prisma.progressEvent.findMany({
        where: { userId: user.id, moduleId: currentModule.id, kind: "slide_view" },
        select: { lessonId: true },
      })).map((e) => e.lessonId).filter(Boolean) as string[],
    );
    const next = lessons.find((l) => !seenIds.has(l.id)) ?? lessons[0];
    if (next) {
      inFront = {
        lessonId: next.id,
        title: next.title,
        moduleId: currentModule.id,
        kind: next.kind,
        aiOff: next.aiOff,
        etaMin: defaultEta(next.kind),
        aiCellsOff: next.kind === "lab" ? countAiOffCells(currentModule.id) : 0,
      };
    }
  }

  // Rhythm calendar: 4 weeks × 7 days. Newest column = today.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const rhythm: { date: string; count: number }[][] = [];
  for (let row = 0; row < 4; row++) {
    const week_: { date: string; count: number }[] = [];
    for (let col = 0; col < 7; col++) {
      const offsetDays = (3 - row) * 7 + (6 - col); // top-left = 4 weeks ago
      const day = new Date(today.getTime() - offsetDays * DAY_MS);
      const start = new Date(day);
      const end = new Date(day.getTime() + DAY_MS);
      const count = recentPromptLogs.filter((p) => p.createdAt >= start && p.createdAt < end).length;
      week_.push({ date: day.toISOString().slice(0, 10), count });
    }
    rhythm.push(week_);
  }

  // Next checkpoint (not yet completed, dueAt >= now). Skip past ones.
  const completedIds = new Set(completions.map((c) => c.checkpointId));
  let nextCheckpoint: any = null;
  if (cohort) {
    const upcoming = await prisma.checkpoint.findMany({
      where: { cohortId: cohort.id },
      orderBy: { dueAt: "asc" },
    });
    const next = upcoming.find((c) => !completedIds.has(c.id) && c.dueAt.getTime() >= today.getTime());
      // fall back: most recent not-yet-completed if all are in the past
    const fallback = upcoming.find((c) => !completedIds.has(c.id));
    const chosen = next ?? fallback ?? null;
    if (chosen) {
      nextCheckpoint = {
        id: chosen.id,
        title: chosen.title,
        kind: chosen.kind,
        moduleId: chosen.moduleId,
        dueAt: chosen.dueAt.toISOString(),
        durationMin: chosen.durationMin,
        location: chosen.location,
        mentor: chosen.mentor,
        prepPrompt: chosen.prepPrompt,
      };
    }
  }

  // Disclosure score: passed = number of completed modules with at least one
  // Disclosure entry; total = number of completed modules.
  const completedModuleIds = progress.perModule.filter((m) => m.pct === 100).map((m) => m.id);
  let disclosurePassed = 0;
  if (completedModuleIds.length) {
    const disclosed = await prisma.disclosure.findMany({
      where: { userId: user.id, moduleId: { in: completedModuleIds } },
      select: { moduleId: true },
      distinct: ["moduleId"],
    });
    disclosurePassed = disclosed.length;
  }

  return NextResponse.json({
    cohort: cohort
      ? {
          id: cohort.id,
          name: cohort.name,
          week: week.week,
          totalWeeks: week.totalWeeks,
          dayLabel: week.dayLabel,
          startDate: cohort.startDate?.toISOString() ?? null,
        }
      : null,
    user: {
      name: user.name,
      disclosureScore: { passed: disclosurePassed, total: completedModuleIds.length },
    },
    path: path_,
    inFront,
    rhythm,
    nextCheckpoint,
    promptsLast7: progress.totals.aiPromptsLast7,
    totals: progress.totals,
  });
}
