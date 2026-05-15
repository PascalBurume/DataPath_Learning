import fs from "node:fs";
import path from "node:path";
import { requireUser } from "@/lib/auth";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  if (!user) return new Response("unauthorized", { status: 401 });
  const { id } = await params;
  if (!/^M\d+$/.test(id)) return new Response("bad id", { status: 400 });
  const file = path.resolve(process.cwd(), "../..", "datapath", id, "lab.ipynb");
  if (!fs.existsSync(file)) return new Response("not found", { status: 404 });
  const buf = fs.readFileSync(file);
  return new Response(new Uint8Array(buf), {
    status: 200,
    headers: {
      "Content-Type": "application/x-ipynb+json",
      "Content-Disposition": `attachment; filename="${id}_lab.ipynb"`,
    },
  });
}
