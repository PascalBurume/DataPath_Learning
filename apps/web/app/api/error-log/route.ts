import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { logError } from "@/lib/errorLog";

const Body = z.object({
  word: z.string().min(1).max(200),
  message: z.string().max(1000).default(""),
  source: z.enum(["nepskin", "self_report"]),
  moduleId: z.string().optional(),
  lessonId: z.string().optional(),
  context: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  await logError({ ...parsed.data, userId: user.id });
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const isInstructor = user.role === "instructor" || user.role === "admin";
  const logs = await prisma.errorLog.findMany({
    where: isInstructor ? {} : { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 500,
  });
  return NextResponse.json({ logs });
}
