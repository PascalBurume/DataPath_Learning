import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { loadProgress } from "@/lib/progress";

export async function GET() {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const summary = await loadProgress(user.id);

  // Heatmap (kept for the legacy /progress page): 7 days × all modules.
  const days = 7;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const events = await prisma.progressEvent.findMany({
    where: { userId: user.id, createdAt: { gte: new Date(today.getTime() - days * 24 * 60 * 60 * 1000) } },
    select: { moduleId: true, createdAt: true },
  });
  const heat: { module: string; day: number; count: number }[] = [];
  for (const m of summary.perModule) {
    for (let d = 0; d < days; d++) {
      const start = new Date(today);
      start.setDate(today.getDate() - (days - 1 - d));
      const end = new Date(start);
      end.setDate(start.getDate() + 1);
      const count = events.filter((e) => e.moduleId === m.id && e.createdAt >= start && e.createdAt < end).length;
      heat.push({ module: m.id, day: d, count });
    }
  }

  return NextResponse.json({
    perModule: summary.perModule,
    heat,
    totals: summary.totals,
  });
}

const PostBody = z.object({
  kind: z.enum(["slide_view", "quiz_pass", "lab_done", "checkpoint_pass"]),
  moduleId: z.string().optional(),
  lessonId: z.string().optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = PostBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const { kind, moduleId, lessonId, payload } = parsed.data;
  const ev = await prisma.progressEvent.create({
    data: { userId: user.id, kind, moduleId, lessonId, payload: payload ? JSON.stringify(payload) : null },
  });
  return NextResponse.json({ ok: true, id: ev.id });
}
