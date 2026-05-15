import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const url = new URL(req.url);
  const limit = Math.min(200, Math.max(1, Number(url.searchParams.get("limit") ?? 50)));
  const moduleId = url.searchParams.get("module") ?? undefined;
  const logs = await prisma.promptLog.findMany({
    where: { userId: user.id, ...(moduleId ? { moduleId } : {}) },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return NextResponse.json({ prompts: logs });
}

const Body = z.object({
  prompt: z.string().min(1),
  response: z.string(),
  moduleId: z.string().optional(),
  lessonId: z.string().optional(),
  model: z.string().optional(),
});

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const log = await prisma.promptLog.create({
    data: {
      userId: user.id,
      ...parsed.data,
      model: parsed.data.model ?? "gemma4:e2b",
      decision: "accept",
      verified: false,
    },
  });
  return NextResponse.json({ id: log.id });
}
