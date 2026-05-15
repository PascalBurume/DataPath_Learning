import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!user.cohortId) return NextResponse.json({ checkpoints: [] });

  const url = new URL(req.url);
  const moduleId = url.searchParams.get("module") ?? undefined;

  const [rows, completions] = await Promise.all([
    prisma.checkpoint.findMany({
      where: { cohortId: user.cohortId, ...(moduleId ? { moduleId } : {}) },
      orderBy: { dueAt: "asc" },
    }),
    prisma.checkpointCompletion.findMany({
      where: { userId: user.id },
      select: { checkpointId: true, completedAt: true },
    }),
  ]);

  const doneByCp = new Map(completions.map((c) => [c.checkpointId, c.completedAt]));
  return NextResponse.json({
    checkpoints: rows.map((c) => ({
      id: c.id,
      moduleId: c.moduleId,
      title: c.title,
      kind: c.kind,
      dueAt: c.dueAt.toISOString(),
      durationMin: c.durationMin,
      location: c.location,
      mentor: c.mentor,
      prepPrompt: c.prepPrompt,
      completedAt: doneByCp.get(c.id)?.toISOString() ?? null,
    })),
  });
}

const Body = z.object({
  checkpointId: z.string(),
  done: z.boolean().optional(),
});

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  // Validate the checkpoint exists and belongs to the user's cohort.
  const cp = await prisma.checkpoint.findUnique({ where: { id: parsed.data.checkpointId } });
  if (!cp || cp.cohortId !== user.cohortId) return NextResponse.json({ error: "not found" }, { status: 404 });

  const wantDone = parsed.data.done ?? true;
  if (wantDone) {
    await prisma.checkpointCompletion.upsert({
      where: { userId_checkpointId: { userId: user.id, checkpointId: cp.id } },
      update: {},
      create: { userId: user.id, checkpointId: cp.id },
    });
  } else {
    await prisma.checkpointCompletion.deleteMany({
      where: { userId: user.id, checkpointId: cp.id },
    });
  }
  return NextResponse.json({ ok: true });
}
