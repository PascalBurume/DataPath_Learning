// Markdown ingestion for DataPath curriculum.
// Parses datapath/M*/{instructor,prompts,quiz}.md into structured records
// for Prisma seed.ts to insert.
//
// We deliberately avoid remark/unified to keep deps lean — these files all
// follow the same authoring template, so targeted regex/line-walking works.

import fs from "node:fs";
import path from "node:path";

export interface ParsedSlide {
  order: number;
  title: string;
  body: string;
  code: string | null;
  language: string | null;
  aiOff: boolean;
}

export interface ParsedLesson {
  id: string;            // "L3.4"
  order: number;
  title: string;
  kind: "lecture" | "lab" | "quiz" | "checkpoint";
  aiOff: boolean;
  body: string;
  slides: ParsedSlide[];
}

export interface ParsedPrompt {
  order: number;
  title: string;
  body: string;
}

export interface ParsedQuiz {
  order: number;
  question: string;
  choices: string[];
  answer: string;
  kind: "mcq" | "free";
}

export interface ParsedModule {
  id: string;            // "M3"
  order: number;
  title: string;
  subtitle: string;
  aiUseSummary: string;
  datasets: string[];
  lessons: ParsedLesson[];
  prompts: ParsedPrompt[];
  quiz: ParsedQuiz[];
}

const AI_OFF_RE = /\[AI[\s-]?OFF\]/i;

function readIfExists(p: string): string | null {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function splitFenced(body: string): { prose: string; code: string | null; language: string | null } {
  const fence = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/m.exec(body);
  if (!fence) return { prose: body.trim(), code: null, language: null };
  const prose = (body.slice(0, fence.index) + body.slice(fence.index + fence[0].length)).trim();
  return { prose, code: fence[2].trim(), language: fence[1] || null };
}

// Slides come from the lesson body itself: split on H4 sub-headings if present,
// otherwise on code blocks. Each slide gets at most one code block.
function bodyToSlides(lessonBody: string, aiOffLesson: boolean): ParsedSlide[] {
  const slides: ParsedSlide[] = [];

  // Split on `#### ` sub-headings — these typically structure a lesson into sections.
  const subRe = /^####\s+(.+?)\s*$/gm;
  const subs: { idx: number; title: string }[] = [];
  let s: RegExpExecArray | null;
  while ((s = subRe.exec(lessonBody))) subs.push({ idx: s.index, title: s[1].trim() });

  if (subs.length >= 2) {
    // Multi-section: each #### → one slide (with optional first code block).
    for (let i = 0; i < subs.length; i++) {
      const start = lessonBody.indexOf("\n", subs[i].idx) + 1;
      const end = i + 1 < subs.length ? subs[i + 1].idx : lessonBody.length;
      const block = lessonBody.slice(start, end).trim();
      const split = splitFenced(block);
      slides.push({
        order: i,
        title: subs[i].title.replace(/[*_`]+/g, "").trim() || `Slide ${i + 1}`,
        body: split.prose,
        code: split.code,
        language: split.language,
        aiOff: aiOffLesson || AI_OFF_RE.test(block),
      });
    }
    return slides;
  }

  // Fallback: split on fenced code blocks so each code block becomes its own slide,
  // bracketed by the prose before/after it.
  const parts: { kind: "prose" | "code"; text: string; lang?: string }[] = [];
  const re = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(lessonBody))) {
    const before = lessonBody.slice(last, m.index).trim();
    if (before) parts.push({ kind: "prose", text: before });
    parts.push({ kind: "code", text: m[2].trim(), lang: m[1] || "text" });
    last = m.index + m[0].length;
  }
  const tail = lessonBody.slice(last).trim();
  if (tail) parts.push({ kind: "prose", text: tail });

  let order = 0;
  let buffer = "";
  for (const p of parts) {
    if (p.kind === "prose") {
      buffer = buffer ? `${buffer}\n\n${p.text}` : p.text;
    } else {
      const slideAiOff = aiOffLesson || AI_OFF_RE.test(buffer);
      slides.push({
        order: order++,
        title: deriveSlideTitle(buffer, slides.length + 1),
        body: buffer,
        code: p.text,
        language: p.lang ?? "text",
        aiOff: slideAiOff,
      });
      buffer = "";
    }
  }
  if (buffer) {
    slides.push({
      order: order++,
      title: deriveSlideTitle(buffer, slides.length + 1),
      body: buffer,
      code: null,
      language: null,
      aiOff: aiOffLesson || AI_OFF_RE.test(buffer),
    });
  }
  if (slides.length === 0) {
    slides.push({
      order: 0,
      title: "Walkthrough",
      body: lessonBody.trim(),
      code: null,
      language: null,
      aiOff: aiOffLesson,
    });
  }
  return slides;
}

function deriveSlideTitle(prose: string, fallbackIdx: number): string {
  // First non-blank line, stripped of markdown emphasis & headings.
  const line = prose.split(/\r?\n/).find((l) => l.trim().length > 0);
  if (!line) return fallbackIdx === 1 ? "Walkthrough" : `Step ${fallbackIdx}`;
  const cleaned = line.replace(/^#+\s*/, "").replace(/[*_`]+/g, "").trim();
  if (!cleaned) return fallbackIdx === 1 ? "Walkthrough" : `Step ${fallbackIdx}`;
  return cleaned.length > 80 ? cleaned.slice(0, 77) + "…" : cleaned;
}

export function parseInstructor(md: string, moduleId: string): {
  title: string;
  subtitle: string;
  aiUseSummary: string;
  datasets: string[];
  lessons: ParsedLesson[];
} {
  const lines = md.split(/\r?\n/);
  // Title: first H1 "# M3 — Instructor Guide: ..."
  const h1 = lines.find((l) => l.startsWith("# "));
  const fullTitle = h1 ? h1.replace(/^#\s*/, "").trim() : moduleId;
  // The "Instructor Guide:" prefix is metadata; keep what's after the colon as title.
  const titleAfterColon = fullTitle.includes(":") ? fullTitle.split(":").slice(1).join(":").trim() : fullTitle;
  // Strip leading "MX — " from titleAfterColon for cleanness
  const title = titleAfterColon.replace(/^M\d+\s*[—-]\s*/, "");

  // Subtitle: blockquote line right after H1
  const subtitleLine = lines.find((l) => l.startsWith("> "));
  let subtitle = "";
  let datasets: string[] = [];
  if (subtitleLine) {
    subtitle = subtitleLine.replace(/^>\s*/, "").trim();
    const dsMatch = subtitle.match(/Dataset[s]?:\s*`?([^`|]+)`?/i);
    if (dsMatch) datasets = dsMatch[1].split(/[,;]/).map((s) => s.replace(/`/g, "").trim()).filter(Boolean);
  }

  // Lessons: "### LX.Y — Title  `[ref]`" headers, optionally with [AI-OFF] suffix
  const lessonHeaderRe = /^###\s+L(\d+)\.(\d+)\s*[—-]\s*(.+?)\s*$/;
  const lessons: ParsedLesson[] = [];
  let current: { id: string; order: number; title: string; aiOff: boolean; bodyLines: string[] } | null = null;
  let inKeyConcepts = false;

  // Sections that mark the END of lesson content (after these we stop capturing).
  const TERMINATORS = /^##\s+(Common Misconceptions|Oral Defense|Updated Capstone|Scoring Rubric|Resources|Homework|Pre[-\s]?reading)/i;

  for (const line of lines) {
    if (/^##\s+Key Concepts/i.test(line)) { inKeyConcepts = true; continue; }
    if (!inKeyConcepts) continue;
    if (TERMINATORS.test(line)) {
      if (current) lessons.push(finalizeLesson(current));
      current = null;
      inKeyConcepts = false;
      continue;
    }
    const lm = lessonHeaderRe.exec(line);
    if (lm) {
      if (current) lessons.push(finalizeLesson(current));
      const [, mod, num, rest] = lm;
      const aiOff = AI_OFF_RE.test(rest);
      const titleClean = rest.replace(AI_OFF_RE, "").replace(/`\[[^\]]+\]`/g, "").replace(/⚠️/g, "").trim();
      current = {
        id: `L${mod}.${num}`,
        order: parseInt(num, 10),
        title: titleClean,
        aiOff,
        bodyLines: [],
      };
    } else if (current) {
      current.bodyLines.push(line);
    }
  }
  if (current) lessons.push(finalizeLesson(current));

  // AI-USE summary: pull from the AI Policy or first paragraph that mentions [AI-OFF]
  const aiUseSummary = computeAiUseSummary(lessons);

  return { title, subtitle, aiUseSummary, datasets, lessons };
}

function finalizeLesson(c: { id: string; order: number; title: string; aiOff: boolean; bodyLines: string[] }): ParsedLesson {
  const body = c.bodyLines.join("\n").trim();
  return {
    id: c.id,
    order: c.order,
    title: c.title,
    kind: "lecture",
    aiOff: c.aiOff,
    body,
    slides: bodyToSlides(body, c.aiOff),
  };
}

function computeAiUseSummary(lessons: ParsedLesson[]): string {
  const off = lessons.filter((l) => l.aiOff).map((l) => l.id);
  const on = lessons.filter((l) => !l.aiOff).map((l) => l.id);
  if (off.length === 0) return `AI ON for all lessons (${on.length} total)`;
  return `AI OFF for ${off.join(", ")}; AI ON for the rest (${on.length}/${lessons.length})`;
}

export function parsePrompts(md: string): ParsedPrompt[] {
  const out: ParsedPrompt[] = [];
  const re = /^##\s+Template\s+(\d+)\s*[—-]\s*(.+?)\s*$/gm;
  const matches: { idx: number; order: number; title: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) matches.push({ idx: m.index, order: parseInt(m[1], 10), title: m[2].trim() });
  for (let i = 0; i < matches.length; i++) {
    const start = md.indexOf("\n", matches[i].idx) + 1;
    const end = i + 1 < matches.length ? matches[i + 1].idx : md.length;
    out.push({ order: matches[i].order, title: matches[i].title, body: md.slice(start, end).trim() });
  }
  return out;
}

export function parseQuiz(md: string): ParsedQuiz[] {
  const out: ParsedQuiz[] = [];
  // Question markers like "**Q1.**", "**Q12.**"
  const re = /\*\*Q(\d+)\.\*\*/g;
  const matches: { idx: number; order: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) matches.push({ idx: m.index, order: parseInt(m[1], 10) });
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].idx + `**Q${matches[i].order}.**`.length;
    const end = i + 1 < matches.length ? matches[i + 1].idx : md.length;
    const block = md.slice(start, end).trim();
    // Stop at horizontal rule "---" if present
    const hr = block.indexOf("\n---");
    const text = (hr >= 0 ? block.slice(0, hr) : block).trim();
    out.push({
      order: matches[i].order,
      question: text,
      choices: [],
      answer: "(see instructor key)",
      kind: "free",
    });
  }
  return out;
}

const SPEC_TITLES: Record<string, { title: string; subtitle: string; datasets: string[] }> = {
  M1: { title: "Course Orientation & Intro to Data Science", subtitle: "Welcome — pipeline, ML landscape, ethics, AI policy", datasets: ["sales_monthly.csv"] },
  M2: { title: "Stats Foundations I: Descriptive & Probability", subtitle: "Mean, median, std, distributions, Bayes", datasets: ["world_population.csv"] },
  M3: { title: "Stats Foundations II: Inference Basics", subtitle: "CLT, sampling, confidence intervals", datasets: ["students_scores.csv"] },
  M4: { title: "Confidence Intervals & Sampling", subtitle: "Bootstrap, sampling distributions", datasets: ["students_scores.csv"] },
  M5: { title: "Hypothesis Testing & P-values", subtitle: "t-tests, effect size, multiple comparisons", datasets: ["students_scores.csv"] },
  M6: { title: "pandas (cleaning, groupby, merge)", subtitle: "Real-world wrangling at scale", datasets: ["titanic_clean.csv", "ecommerce_orders.csv"] },
  M7: { title: "Exploratory Data Analysis", subtitle: "Outliers, missingness, profiling", datasets: ["titanic_clean.csv"] },
  M8: { title: "Data Visualisation", subtitle: "matplotlib, seaborn, design rules", datasets: ["world_population.csv"] },
  M9: { title: "Capstone Project", subtitle: "End-to-end pipeline; oral defence", datasets: ["student_choice.csv"] },
  M10: { title: "ML Bridge", subtitle: "From statistics to scikit-learn", datasets: ["housing_prices.csv"] },
  M11: { title: "Time Series Foundations", subtitle: "Trend, seasonality, basic forecasting", datasets: ["air_passengers.csv"] },
};

export function parseModule(rootDir: string, moduleId: string, order: number): ParsedModule {
  const dir = path.join(rootDir, moduleId);
  const instructor = readIfExists(path.join(dir, "instructor.md")) ?? "";
  const prompts = readIfExists(path.join(dir, "prompts.md")) ?? "";
  const quiz = readIfExists(path.join(dir, "quiz.md")) ?? "";

  const parsed = parseInstructor(instructor, moduleId);
  const spec = SPEC_TITLES[moduleId];
  return {
    id: moduleId,
    order,
    title: spec?.title ?? parsed.title ?? moduleId,
    subtitle: spec?.subtitle ?? parsed.subtitle ?? "",
    aiUseSummary: parsed.aiUseSummary,
    datasets: spec?.datasets ?? parsed.datasets,
    lessons: parsed.lessons,
    prompts: parsePrompts(prompts),
    quiz: parseQuiz(quiz),
  };
}

export function parseAllModules(rootDir: string): ParsedModule[] {
  const ids = Array.from({ length: 11 }, (_, i) => `M${i + 1}`);
  return ids.map((id, i) => parseModule(rootDir, id, i + 1));
}
