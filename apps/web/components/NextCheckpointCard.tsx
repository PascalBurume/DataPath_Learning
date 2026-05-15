'use client';

import { useState } from 'react';
import { useSWRConfig } from 'swr';

interface Props {
  checkpoint: {
    id: string;
    title: string;
    kind: string;
    moduleId?: string | null;
    dueAt: string;
    durationMin?: number | null;
    location?: string | null;
    mentor?: string | null;
    prepPrompt?: string | null;
  } | null;
}

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function formatDue(iso: string): { primary: string; secondary: string } {
  const d = new Date(iso);
  const dow = DOW[d.getDay()];
  const date = d.getDate();
  let hh = d.getHours();
  const mm = d.getMinutes();
  const ampm = hh >= 12 ? 'pm' : 'am';
  hh = hh % 12 || 12;
  const time = mm === 0 ? `${hh}${ampm}` : `${hh}:${String(mm).padStart(2, '0')}${ampm}`;
  return {
    primary: `${dow} ${date} · ${time}`,
    secondary: d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' }),
  };
}

export function NextCheckpointCard({ checkpoint }: Props) {
  const { mutate } = useSWRConfig();
  const [marking, setMarking] = useState(false);

  if (!checkpoint) {
    return (
      <div className="sk-box" style={{ padding: 14, minHeight: 200 }}>
        <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Next checkpoint
        </div>
        <div className="sk-tiny" style={{ marginTop: 8 }}>
          🎉 No upcoming checkpoints. Nice work staying ahead.
        </div>
      </div>
    );
  }

  const { primary, secondary } = formatDue(checkpoint.dueAt);

  async function markDone() {
    if (!checkpoint) return;
    setMarking(true);
    try {
      await fetch('/api/checkpoints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checkpointId: checkpoint.id, done: true }),
      });
      mutate('/api/dashboard');
      mutate('/api/checkpoints');
    } finally {
      setMarking(false);
    }
  }

  return (
    <div className="sk-box" style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 200 }}>
      <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Next checkpoint
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <h3 style={{ fontFamily: 'Caveat, cursive', fontSize: 26, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
          {primary}
        </h3>
        <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>{secondary}</span>
      </div>

      <div style={{ fontSize: 13 }}>
        {checkpoint.title}
        {checkpoint.mentor ? <> — with <strong>{checkpoint.mentor}</strong></> : null}
        {checkpoint.durationMin ? <> · ~{checkpoint.durationMin} min</> : null}
      </div>
      {checkpoint.location && (
        <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>📍 {checkpoint.location}</div>
      )}

      {checkpoint.prepPrompt && (
        <div style={{ marginTop: 4 }}>
          <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
            prep prompt
          </div>
          <code
            style={{
              display: 'block',
              fontFamily: 'Cutive Mono, ui-monospace, monospace',
              fontSize: 12,
              background: 'var(--paper-2)',
              border: '1px solid var(--rule-soft)',
              borderRadius: 4,
              padding: '6px 8px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {checkpoint.prepPrompt}
          </code>
        </div>
      )}

      <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
        <button className="sk-btn sm" type="button" disabled={marking} onClick={markDone}>
          {marking ? '…' : '✓ mark done'}
        </button>
      </div>
    </div>
  );
}
