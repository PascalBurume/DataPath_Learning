#!/usr/bin/env tsx
// Usage:
//   pnpm tsx scripts/generate-error-report.ts               # all modules, last 30 days
//   pnpm tsx scripts/generate-error-report.ts --module M3   # single module
//   pnpm tsx scripts/generate-error-report.ts --days 7      # last N days
//
// Prints Markdown to stdout. Pipe to a file:
//   pnpm tsx scripts/generate-error-report.ts > error-report.md

import path from "node:path";

// Set DATABASE_URL before importing Prisma so the script is runnable from repo root
process.env.DATABASE_URL ??= `file:${path.resolve("apps/web/prisma/dev.db")}`;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const args = process.argv.slice(2);
  const moduleIdx = args.indexOf("--module");
  const daysIdx = args.indexOf("--days");
  const moduleArg = moduleIdx !== -1 ? args[moduleIdx + 1] : undefined;
  const daysArg = daysIdx !== -1 ? parseInt(args[daysIdx + 1] ?? "30", 10) : 30;
  const since = new Date(Date.now() - daysArg * 24 * 60 * 60 * 1000);

  const logs = await prisma.errorLog.findMany({
    where: {
      ...(moduleArg ? { moduleId: moduleArg } : {}),
      createdAt: { gte: since },
    },
    orderBy: { createdAt: "desc" },
  });

  const now = new Date().toISOString().split("T")[0];

  // --- frequency maps ---
  const wordCounts = new Map<string, number>();
  const byModule = new Map<string, typeof logs>();

  for (const log of logs) {
    wordCounts.set(log.word, (wordCounts.get(log.word) ?? 0) + 1);
    const key = log.moduleId ?? "unknown";
    if (!byModule.has(key)) byModule.set(key, []);
    byModule.get(key)!.push(log);
  }

  const topTerms = [...wordCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  // --- build report ---
  let md = `# DataPath Error Report — ${now}\n\n`;
  md += `> Generated from **${logs.length}** error log entries`;
  md += ` over the past **${daysArg} days**`;
  if (moduleArg) md += ` (Module \`${moduleArg}\`)`;
  md += `\n\n---\n\n`;

  // Top confused terms
  md += `## Top Confused Terms\n\n`;
  if (topTerms.length === 0) {
    md += `_No entries in this period._\n\n`;
  } else {
    md += `| # | Term | Count |\n|---|------|-------|\n`;
    topTerms.forEach(([term, count], i) => {
      md += `| ${i + 1} | \`${term}\` | ${count} |\n`;
    });
    md += "\n";
  }

  // By module
  md += `## By Module\n\n`;
  const sortedModules = [...byModule.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  if (sortedModules.length === 0) {
    md += `_No entries in this period._\n\n`;
  } else {
    for (const [moduleId, moduleLogs] of sortedModules) {
      const moduleWords = new Map<string, number>();
      for (const log of moduleLogs) {
        moduleWords.set(log.word, (moduleWords.get(log.word) ?? 0) + 1);
      }
      const topModuleTerms = [...moduleWords.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      md += `### ${moduleId} (${moduleLogs.length} ${moduleLogs.length === 1 ? "entry" : "entries"})\n\n`;
      md += `**Top terms:** ${topModuleTerms.map(([t, c]) => `\`${t}\` ×${c}`).join(", ")}\n\n`;

      // Source breakdown
      const sources = new Map<string, number>();
      for (const log of moduleLogs) {
        sources.set(log.source, (sources.get(log.source) ?? 0) + 1);
      }
      md += `**Sources:** ${[...sources.entries()].map(([s, c]) => `${s} (${c})`).join(", ")}\n\n`;
    }
  }

  // Recent logs table
  md += `## Recent Logs (last 50)\n\n`;
  const recent = logs.slice(0, 50);
  if (recent.length === 0) {
    md += `_No entries in this period._\n`;
  } else {
    md += `| Date | Module | Lesson | Word | Source | Message |\n`;
    md += `|------|--------|--------|------|--------|---------|\n`;
    for (const log of recent) {
      const date = log.createdAt.toISOString().split("T")[0];
      const msg = log.message.slice(0, 60).replace(/\|/g, "╎");
      md += `| ${date} | ${log.moduleId ?? "—"} | ${log.lessonId ?? "—"} | \`${log.word.slice(0, 30)}\` | ${log.source} | ${msg} |\n`;
    }
  }

  process.stdout.write(md + "\n");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
