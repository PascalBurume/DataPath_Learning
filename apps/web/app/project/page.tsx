'use client';

import { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { useSWRConfig } from 'swr';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { MarkdownView } from '@datapath/ui/src/primitives/MarkdownView';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function formatDue(iso: string) {
  const d = new Date(iso);
  let hh = d.getHours();
  const mm = d.getMinutes();
  const ampm = hh >= 12 ? 'pm' : 'am';
  hh = hh % 12 || 12;
  const time = mm === 0 ? `${hh}${ampm}` : `${hh}:${String(mm).padStart(2, '0')}${ampm}`;
  return `${DOW[d.getDay()]} ${d.getDate()} · ${time}`;
}

const PROJECT_BRIEF = `## What you'll build

Choose a real-world dataset and frame an **actionable question** a stakeholder could act on. Build a reproducible, end-to-end analysis notebook that walks from raw data to justified conclusions. Present it in a 15-minute oral defense.

---

## The five questions to answer before writing a single line of code

1. **What decision** will this analysis support?
2. **Who is the stakeholder** or end user?
3. **What is the target** and what counts as one unit of analysis?
4. **Which metric** will determine success, and why?
5. **What action** will be taken if the result is strong enough?

---

## Problem statement template

\`\`\`text
We are helping [stakeholder] make the decision of [decision].
The analytical objective is to [predict / estimate / rank / describe] [target].
Each row represents [unit of analysis].
Success will be measured with [metric] because [business reason].
If the project succeeds, the stakeholder will use the result to [action].
Key constraints include [timing, fairness, cost, data availability].
\`\`\`

---

## Required sections

| Section | What it must contain |
|---------|----------------------|
| **Problem statement** | Stakeholder, decision, target, metric, action |
| **Baseline model** | DummyClassifier or DummyRegressor — report before tuning |
| **EDA** | ≥ 3 charts; each title is a *claim*, not a topic |
| **Final model** | Explicit improvement over baseline (Δ value and % gain) |
| **Limitations** | 2–3 specific limits: boundary → consequence → next step |
| **Reproducibility** | Clean kernel rerun succeeds; relative paths; seed fixed |
| **AI Disclosure** | \`AI_USE.md\` with every Gemma interaction; AI-OFF cells yours |

---

## Scoring rubric

| Area | Weight |
|------|--------|
| Problem framing — question, metric, baseline | 25 % |
| Analysis quality — EDA, modelling, limitations | 35 % |
| Communication — story structure, chart titles, README | 20 % |
| AI disclosure and academic honesty | 20 % |

---

## Example questions

- **Bus delays** — predict route-stop-hour delays > 10 min; daily risk list for dispatchers
- **Student performance** — features that predict final exam score; tutoring centre prioritisation
- **Air quality** — 7-day PM2.5 forecast; threshold alerts for the health team
- **E-commerce returns** — predict returns before shipping; flag for intervention

---

## AI Disclosure expectations

Every Gemma prompt must be logged in \`AI_USE.md\`. Your **AI-OFF cells** must be written entirely by you — Gemma may not draft or revise them. Defense question 8 asks you to walk through your most important AI interaction.`;

export default function ProjectPage() {
  const { data: cpData, mutate: mutateCp } = useSWR<any>('/api/checkpoints?module=M9', fetcher);
  const { mutate } = useSWRConfig();
  const [markingId, setMarkingId] = useState<string | null>(null);

  const checkpoints: any[] = cpData?.checkpoints ?? [];

  async function markDone(id: string, isDone: boolean) {
    setMarkingId(id);
    try {
      await fetch('/api/checkpoints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checkpointId: id, done: !isDone }),
      });
      mutateCp();
      mutate('/api/dashboard');
    } finally {
      setMarkingId(null);
    }
  }

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="Final Project"
            crumbs="M9 · Capstone"
            right={
              <>
                <Link href="/lecture?lesson=L9.1">
                  <button className="sk-btn sm">▶ start lessons</button>
                </Link>
                <a href="/jupyterlite/lab/index.html?path=M9/lab.ipynb" target="_blank" rel="noopener noreferrer">
                  <button className="sk-btn sm">🧪 open notebook</button>
                </a>
              </>
            }
          />

          <div
            style={{
              padding: '28px 40px',
              overflow: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            {/* Milestones */}
            <section>
              <div
                className="sk-tiny"
                style={{
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                milestones
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {!cpData && (
                  <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                    Loading…
                  </div>
                )}
                {checkpoints.map((cp) => (
                  <MilestonePill
                    key={cp.id}
                    cp={cp}
                    marking={markingId === cp.id}
                    onMark={markDone}
                  />
                ))}
                {cpData && checkpoints.length === 0 && (
                  <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                    No M9 milestones seeded yet.
                  </div>
                )}
              </div>
            </section>

            {/* Workspace links */}
            <section>
              <div
                className="sk-tiny"
                style={{
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                workspace
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/lecture?lesson=L9.1">
                  <button className="sk-btn">📖 Start M9 lessons</button>
                </Link>
                <Link href="/lab?module=M9">
                  <button className="sk-btn">⚗ Module lab</button>
                </Link>
                <a
                  href="/jupyterlite/lab/index.html?path=M9/lab.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="sk-btn primary">🧪 Open notebook</button>
                </a>
              </div>
            </section>

            {/* Brief */}
            <section>
              <div
                className="sk-tiny"
                style={{
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 12,
                }}
              >
                project brief
              </div>
              <div className="sk-box" style={{ padding: '20px 24px' }}>
                <h1
                  style={{
                    fontFamily: 'Caveat, cursive',
                    fontSize: 36,
                    fontWeight: 700,
                    margin: '0 0 16px',
                    lineHeight: 1.1,
                  }}
                >
                  Final Project — Capstone
                </h1>
                <MarkdownView>{PROJECT_BRIEF}</MarkdownView>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function MilestonePill({
  cp,
  marking,
  onMark,
}: {
  cp: any;
  marking: boolean;
  onMark: (id: string, isDone: boolean) => void;
}) {
  const isDone = !!cp.completedAt;

  return (
    <div
      className="sk-box"
      style={{
        padding: '14px 18px',
        minWidth: 200,
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        opacity: isDone ? 0.72 : 1,
        background: isDone ? 'var(--paper-2)' : 'var(--paper)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 16, lineHeight: 1 }}>{isDone ? '✓' : '○'}</span>
        <strong style={{ fontSize: 13 }}>{cp.title}</strong>
      </div>
      <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>{formatDue(cp.dueAt)}</div>
      {cp.mentor && (
        <div className="sk-tiny">
          with <strong>{cp.mentor}</strong>
        </div>
      )}
      {cp.location && (
        <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
          📍 {cp.location}
        </div>
      )}
      <button
        className="sk-btn sm"
        style={{ marginTop: 4 }}
        disabled={marking}
        onClick={() => onMark(cp.id, isDone)}
      >
        {marking ? '…' : isDone ? '↩ undo' : '✓ mark done'}
      </button>
    </div>
  );
}
