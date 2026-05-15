import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db";

const Body = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(80),
  password: z.string().min(8).max(200),
  cohortCode: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const { email, name, password, cohortCode } = parsed.data;
  if (await prisma.user.findUnique({ where: { email } })) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }
  let cohortId: string | undefined;
  if (cohortCode) {
    const c = await prisma.cohort.findUnique({ where: { code: cohortCode } });
    if (!c) return NextResponse.json({ error: "Invalid cohort code" }, { status: 400 });
    cohortId = c.id;
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, passwordHash, cohortId },
    select: { id: true, email: true, name: true },
  });
  return NextResponse.json({ user });
}
