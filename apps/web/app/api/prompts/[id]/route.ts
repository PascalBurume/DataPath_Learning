import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

const Body = z.object({
  decision: z.enum(["accept", "edit", "reject"]).nullable().optional(),
  verified: z.boolean().optional(),
});

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const log = await prisma.promptLog.findUnique({ where: { id }, select: { userId: true } });
  if (!log || log.userId !== user.id)
    return NextResponse.json({ error: "not found" }, { status: 404 });

  const updated = await prisma.promptLog.update({
    where: { id },
    data: {
      ...(parsed.data.decision !== undefined ? { decision: parsed.data.decision } : {}),
      ...(parsed.data.verified !== undefined ? { verified: parsed.data.verified } : {}),
    },
  });

  return NextResponse.json({ id: updated.id, decision: updated.decision, verified: updated.verified });
}
