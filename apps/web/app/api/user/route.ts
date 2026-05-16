import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET() {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const u = await prisma.user.findUnique({
    where: { id: user.id },
    include: { cohort: true },
  });
  if (!u) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({
    user: {
      id: u.id, email: u.email, name: u.name, role: u.role,
      theme: u.theme, autoDisclose: u.autoDisclose, nepskinEnabled: u.nepskinEnabled,
      cohort: u.cohort ? { code: u.cohort.code, label: u.cohort.name } : null,
    },
  });
}

const Body = z.object({
  name: z.string().min(1).optional(),
  theme: z.enum(["light", "dark", "paper"]).optional(),
  autoDisclose: z.boolean().optional(),
  nepskinEnabled: z.boolean().optional(),
});

export async function PATCH(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  await prisma.user.update({ where: { id: user.id }, data: parsed.data });
  return NextResponse.json({ ok: true });
}
