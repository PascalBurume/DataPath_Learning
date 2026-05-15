// Cohort time helpers — pure functions safe for both server and client.
// A cohort has a startDate (Monday-aligned for display) and a fixed number of
// weeks. Week 1 = the week containing startDate.

export type CohortInfo = { startDate: Date | null; weeks: number };

const DAY_MS = 24 * 60 * 60 * 1000;

export interface CohortWeek {
  week: number;          // 1-based; clamped to [1, totalWeeks]
  totalWeeks: number;
  dayOfWeek: number;     // 0 Sun .. 6 Sat
  dayLabel: string;      // e.g. "Wed"
  weekStart: Date;       // Monday 00:00 of the current week
  weekEnd: Date;         // Sunday 23:59 of the current week
}

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

/** Monday 00:00 of the week containing `d`. */
function startOfWeek(d: Date): Date {
  const x = startOfDay(d);
  const dow = x.getDay();          // 0 Sun .. 6 Sat
  const delta = dow === 0 ? -6 : 1 - dow;
  x.setDate(x.getDate() + delta);
  return x;
}

export function cohortWeek(cohort: CohortInfo, now: Date = new Date()): CohortWeek {
  const totalWeeks = cohort.weeks ?? 14;
  const weekStart = startOfWeek(now);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  let week = 1;
  if (cohort.startDate) {
    const cohortWeekStart = startOfWeek(cohort.startDate);
    const diffWeeks = Math.floor((weekStart.getTime() - cohortWeekStart.getTime()) / (7 * DAY_MS));
    week = Math.max(1, Math.min(totalWeeks, diffWeeks + 1));
  }

  return {
    week,
    totalWeeks,
    dayOfWeek: now.getDay(),
    dayLabel: DAY_LABELS[now.getDay()],
    weekStart,
    weekEnd,
  };
}

/** Maps a cohort week (1..totalWeeks) to the module the cohort is currently in.
 * Even spread: e.g. with 11 modules over 14 weeks, week 4 → M3 (since 4 * 11/14 ≈ 3.14). */
export function moduleOrderForWeek(week: number, totalWeeks: number, totalModules: number): number {
  const orderFloat = (week / totalWeeks) * totalModules;
  return Math.max(1, Math.min(totalModules, Math.ceil(orderFloat)));
}

/** Inverse: which week is the start of the given module? Used for "unlock" hints. */
export function weekForModuleOrder(order: number, totalWeeks: number, totalModules: number): number {
  return Math.max(1, Math.ceil(((order - 1) / totalModules) * totalWeeks) + 1);
}
