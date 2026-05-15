'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

interface Props {
  inFront: {
    lessonId: string;
    title: string;
    moduleId: string;
    etaMin: number;
    aiCellsOff: number;
    kind: string;
    aiOff: boolean;
  } | null;
}

export function InFrontCard({ inFront }: Props) {
  const [peeking, setPeeking] = useState(false);
  const { data: promptsData } = useSWR<any>(
    peeking && inFront ? `/api/modules/${inFront.moduleId}` : null,
    fetcher,
  );

  if (!inFront) {
    return (
      <div className="sk-box" style={{ padding: 14, minHeight: 200 }}>
        <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>IN FRONT OF YOU</div>
        <h3 style={{ fontFamily: 'Caveat, cursive', fontSize: 22, fontWeight: 700, margin: '4px 0 8px' }}>
          You're all caught up
        </h3>
        <div className="sk-tiny">No active lesson — explore modules or jump to the project.</div>
      </div>
    );
  }

  const labelByKind: Record<string, string> = {
    lab: 'Lab',
    lecture: 'Lesson',
    quiz: 'Quiz',
    checkpoint: 'Checkpoint',
  };
  const prefix = labelByKind[inFront.kind] ?? 'Next';

  return (
    <div className="sk-box shadow" style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200 }}>
      <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        In front of you
      </div>
      <h3 style={{ fontFamily: 'Caveat, cursive', fontSize: 26, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
        {prefix} {inFront.lessonId.replace(/^L/, '')} — {inFront.title}
      </h3>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <span className="sk-chip ai" title="This lesson may use AI">+ amber = AI</span>
        {inFront.aiOff && <span className="sk-chip aioff">⊘ AI-OFF lesson</span>}
        {inFront.aiCellsOff > 0 && (
          <span className="sk-chip aioff">⊘ {inFront.aiCellsOff} cell{inFront.aiCellsOff === 1 ? '' : 's'} off</span>
        )}
        <span className="sk-chip">~{inFront.etaMin} min</span>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
        <Link href={`/lecture?lesson=${inFront.lessonId}`}>
          <button className="sk-btn primary">▶ continue</button>
        </Link>
        <Link href={`/module/${inFront.moduleId}`}>
          <button className="sk-btn sm">module →</button>
        </Link>
        <button className="sk-btn sm" type="button" onClick={() => setPeeking((p) => !p)}>
          {peeking ? 'hide prompts' : 'peek prompts'}
        </button>
      </div>

      {peeking && (
        <div className="sk-box dashed" style={{ padding: 8, marginTop: 4, maxHeight: 140, overflowY: 'auto' }}>
          {!promptsData && <div className="sk-tiny">loading…</div>}
          {promptsData?.prompts?.length === 0 && (
            <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>No approved prompts for this module yet.</div>
          )}
          {promptsData?.prompts?.map((p: any) => (
            <div key={p.id} style={{ padding: '4px 0', borderBottom: '1px dashed var(--rule-soft)' }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{p.title}</div>
              <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>{p.body.slice(0, 100)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
