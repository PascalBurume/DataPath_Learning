import fs from "node:fs";
import path from "node:path";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  if (!user) return new Response("unauthorized", { status: 401 });

  const { id } = await params;
  if (!/^L[\d.]+$/.test(id)) return new Response("bad id", { status: 400 });

  // Resolve lesson → module via DB (lessons are seeded from datapath/ at build).
  let moduleId: string | null = null;
  try {
    const lesson = await prisma.lesson.findUnique({ where: { id }, select: { moduleId: true } });
    moduleId = lesson?.moduleId ?? null;
  } catch {
    // fall through
  }

  // Fallback: derive moduleId from the lesson id prefix (e.g. L3.4 → M3).
  if (!moduleId) {
    const m = id.match(/^L(\d+)\./);
    if (m) moduleId = `M${m[1]}`;
  }
  if (!moduleId) return new Response("module not found for lesson", { status: 404 });

  const root = path.resolve(process.cwd(), "../..", "datapath", moduleId);
  const lessonOverride = path.join(root, `${id}_lab.ipynb`);
  const moduleDefault = path.join(root, "lab.ipynb");
  const file = fs.existsSync(lessonOverride) ? lessonOverride : moduleDefault;
  if (!fs.existsSync(file)) return new Response("notebook not found", { status: 404 });

  const buf = fs.readFileSync(file);
  return new Response(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": "application/x-ipynb+json",
      "Content-Disposition": `attachment; filename="${moduleId}_${id}_lab.ipynb"`,
    },
  });
}
