import path from "node:path";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { parseAllModules } from "../lib/content/parser";

const prisma = new PrismaClient();
const CURRICULUM_DIR = path.resolve(__dirname, "../../../datapath");

async function main() {
  console.log("📚 Parsing curriculum from", CURRICULUM_DIR);
  const modules = parseAllModules(CURRICULUM_DIR);

  // Wipe in dependency order
  await prisma.slide.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.prompt.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.module.deleteMany();

  for (const m of modules) {
    const slideCount = m.lessons.reduce((total, lesson) => total + lesson.slides.length, 0);

    await prisma.module.create({
      data: {
        id: m.id,
        order: m.order,
        title: m.title,
        subtitle: m.subtitle,
        aiUseSummary: m.aiUseSummary,
        datasetsJson: JSON.stringify(m.datasets),
        lessons: {
          create: m.lessons.map((l) => ({
            id: l.id,
            order: l.order,
            title: l.title,
            kind: l.kind,
            aiOff: l.aiOff,
            body: l.body,
            slides: {
              create: l.slides.map((s) => ({
                order: s.order,
                title: s.title,
                body: s.body,
                code: s.code,
                language: s.language,
                aiOff: s.aiOff,
              })),
            },
          })),
        },
        prompts: {
          create: m.prompts.map((p) => ({ order: p.order, title: p.title, body: p.body })),
        },
        quiz: {
          create: m.quiz.map((q) => ({
            order: q.order,
            question: q.question,
            choices: JSON.stringify(q.choices),
            answer: q.answer,
            kind: q.kind,
          })),
        },
      },
    });
    console.log(
      `  ✓ ${m.id} — ${m.title}  (${m.lessons.length} lessons, ${slideCount} slides, ${m.prompts.length} prompts, ${m.quiz.length} quiz Qs)`,
    );
  }

  // Demo cohort: anchor startDate 4 weeks before today so the dashboard
  // shows "week 4 of 16" out of the box.
  const TOTAL_WEEKS = 16;
  const now = new Date();
  const cohortStart = new Date(now);
  cohortStart.setDate(now.getDate() - 28);
  cohortStart.setHours(9, 0, 0, 0);

  const cohort = await prisma.cohort.upsert({
    where: { code: "COHORT-A" },
    update: { startDate: cohortStart, weeks: TOTAL_WEEKS },
    create: {
      name: "Cohort A — Pilot",
      code: "COHORT-A",
      startDate: cohortStart,
      weeks: TOTAL_WEEKS,
    },
  });

  // Seed Checkpoint rows. dueAt = cohort.startDate + (moduleOrder - 1) * 7 days
  // (rough mapping: M1 in week 1, M3 in week 3, etc.) plus a fixed time of day.
  const at = (moduleOrder: number, dow = 3, hour = 16) => {
    const d = new Date(cohortStart);
    d.setDate(cohortStart.getDate() + (moduleOrder - 1) * 7);
    // Snap to the requested day-of-week (0 Sun..6 Sat) within that week.
    const delta = (dow - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + delta);
    d.setHours(hour, 0, 0, 0);
    return d;
  };

  type CheckpointSeed = {
    moduleId: string;
    title: string;
    kind: "oral" | "project" | "lab" | "checkpoint";
    dueAt: Date;
    durationMin?: number;
    location?: string;
    mentor?: string;
    prepPrompt?: string;
  };

  const checkpoints: CheckpointSeed[] = [
    {
      moduleId: "M2",
      title: "Oral checkpoint 1 — tools & CRISP-DM",
      kind: "oral",
      dueAt: at(2, 3, 16),
      durationMin: 15,
      mentor: "Priya",
      location: "Room B, in person",
      prepPrompt: "explain CRISP-DM phases back to me in two minutes",
    },
    {
      moduleId: "M3",
      title: "Oral checkpoint 2 — descriptive stats walkthrough",
      kind: "oral",
      dueAt: at(3, 3, 16), // Wed of week 3 at 4pm
      durationMin: 20,
      mentor: "Priya",
      location: "Room B, in person",
      prepPrompt: "explain quartiles back to me",
    },
    {
      moduleId: "M9",
      title: "Project proposal",
      kind: "project",
      dueAt: at(9, 5, 17),
      durationMin: 10,
      mentor: "Priya",
      prepPrompt: "1-page proposal: dataset, question, planned analysis",
    },
    {
      moduleId: "M9",
      title: "Mid-project review",
      kind: "project",
      dueAt: at(10, 3, 16),
      durationMin: 20,
      mentor: "Priya",
      prepPrompt: "share a notebook with EDA + a draft modelling plan",
    },
    {
      moduleId: "M9",
      title: "Final presentation",
      kind: "project",
      dueAt: at(12, 5, 14),
      durationMin: 25,
      mentor: "Priya + cohort",
      prepPrompt: "20-minute oral defense + Q&A",
    },
    {
      moduleId: "M10",
      title: "Oral checkpoint — end of M10",
      kind: "oral",
      dueAt: at(11, 3, 16),
      durationMin: 15,
      mentor: "Priya",
      prepPrompt: "explain pipelines and why scaling-after-split matters",
    },
    {
      moduleId: "M12",
      title: "Local LLM Mastery — lab review",
      kind: "lab",
      dueAt: at(14, 3, 16),
      durationMin: 30,
      mentor: "Priya",
      prepPrompt: "demo your local DS assistant: load a CSV, ask a question about it via RAG, show the answer",
    },
    {
      moduleId: "M13",
      title: "Agentic DS — final agent demo",
      kind: "project",
      dueAt: at(16, 5, 14),
      durationMin: 20,
      mentor: "Priya + cohort",
      prepPrompt: "run your autonomous EDA agent live — explain each tool call it makes and verify its output",
    },
  ];

  // Replace existing checkpoint rows for this cohort to keep seed idempotent.
  await prisma.checkpoint.deleteMany({ where: { cohortId: cohort.id } });
  for (const c of checkpoints) {
    await prisma.checkpoint.create({ data: { ...c, cohortId: cohort.id } });
  }
  console.log(`  ✓ Cohort A startDate=${cohortStart.toDateString()}, ${checkpoints.length} checkpoints`);

  const studentHash = await bcrypt.hash("datapath123", 10);
  await prisma.user.upsert({
    where: { email: "sofia@datapath.local" },
    update: {},
    create: {
      email: "sofia@datapath.local",
      name: "Sofia Chen",
      passwordHash: studentHash,
      role: "student",
      cohortId: cohort.id,
    },
  });
  await prisma.user.upsert({
    where: { email: "instructor@datapath.local" },
    update: {},
    create: {
      email: "instructor@datapath.local",
      name: "Instructor",
      passwordHash: studentHash,
      role: "instructor",
      cohortId: cohort.id,
    },
  });

  console.log("\n👥 Users seeded — login: sofia@datapath.local / datapath123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
