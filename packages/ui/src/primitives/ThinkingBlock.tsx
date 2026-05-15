'use client';

import { useEffect, useState } from 'react';

type Props = {
  state: 'streaming' | 'done';
  /** ms elapsed for the thinking phase, shown in the header when done. */
  elapsedMs?: number;
  defaultOpen?: boolean;
  children?: React.ReactNode;
};

/**
 * Collapsible "Thinking…" pill that mirrors the Claude UI reasoning trace.
 * - While `state === 'streaming'` the header pulses gently and the body is open.
 * - Once `state === 'done'` the header switches to "Thought for {Xs}" and
 *   the body collapses (unless the user already toggled it).
 */
export function ThinkingBlock({ state, elapsedMs, defaultOpen, children }: Props) {
  const [open, setOpen] = useState<boolean>(defaultOpen ?? true);
  const [userToggled, setUserToggled] = useState(false);

  // Auto-collapse when streaming finishes — but only if the user hasn't taken
  // manual control of the disclosure.
  useEffect(() => {
    if (state === 'done' && !userToggled) setOpen(false);
    if (state === 'streaming' && !userToggled) setOpen(true);
  }, [state, userToggled]);

  const seconds = elapsedMs != null ? Math.max(1, Math.round(elapsedMs / 1000)) : null;

  return (
    <div
      className="sk-thinking"
      style={{
        border: '1.25px dashed var(--think-rule, #b9b1a4)',
        borderLeftWidth: 3,
        borderLeftStyle: 'solid',
        borderLeftColor: 'var(--ink-3, #6b6258)',
        background: 'var(--think-bg, #f3efe5)',
        borderRadius: 6,
        padding: '6px 10px',
        margin: '4px 0',
        fontSize: 13,
      }}
    >
      <button
        type="button"
        onClick={() => { setUserToggled(true); setOpen((o) => !o); }}
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: 'var(--ink-3, #6b6258)',
          fontFamily: 'inherit',
          fontSize: 13,
          textAlign: 'left',
        }}
      >
        <span
          aria-hidden
          style={{
            display: 'inline-block',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s',
            width: 10,
          }}
        >
          ▸
        </span>
        <span
          style={{
            animation: state === 'streaming' ? 'pulse-think 1.4s ease-in-out infinite' : undefined,
            fontStyle: 'italic',
          }}
        >
          {state === 'streaming'
            ? 'Thinking…'
            : seconds != null
              ? `Thought for ${seconds}s`
              : 'Thought'}
        </span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 6,
            paddingTop: 6,
            borderTop: '1px dashed var(--think-rule, #b9b1a4)',
            fontFamily: 'Cutive Mono, ui-monospace, monospace',
            fontSize: 12.5,
            lineHeight: 1.55,
            color: 'var(--ink-2, #3a3530)',
            fontStyle: 'italic',
            whiteSpace: 'pre-wrap',
          }}
        >
          {children || (state === 'streaming'
            ? <span style={{ color: 'var(--ink-4, #9a9087)' }}>…</span>
            : <span style={{ color: 'var(--ink-4, #9a9087)' }}>(no reasoning trace)</span>)}
        </div>
      )}
    </div>
  );
}
