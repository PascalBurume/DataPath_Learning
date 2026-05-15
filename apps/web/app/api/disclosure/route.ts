import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";

export async function GET() {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const list = await prisma.disclosure.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ disclosures: list });
}

const Body = z.object({
  moduleId: z.string(),
  body: z.string().min(10),
  promptIds: z.array(z.string()).optional(),
});

export async function POST(req: Request) {
  const user = await requireUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const d = await prisma.disclosure.create({
    data: {
      userId: user.id,
      moduleId: parsed.data.moduleId,
      body: parsed.data.body,
      promptIds: JSON.stringify(parsed.data.promptIds ?? []),
    },
  });
  return NextResponse.json({ id: d.id });
}
