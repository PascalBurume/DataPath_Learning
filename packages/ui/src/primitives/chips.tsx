import type { ReactNode } from 'react';

export function AIChip({ children = 'AI assisted' }: { children?: ReactNode }) {
  return <span className="sk-chip ai">✦ {children}</span>;
}

export function AIOffChip({ children = 'AI-OFF zone' }: { children?: ReactNode }) {
  return <span className="sk-chip aioff">⊘ {children}</span>;
}

export function VerifiedChip({ on = true }: { on?: boolean }) {
  return on
    ? <span className="sk-chip good">✓ verified</span>
    : <span className="sk-chip warn">⚠ needs verify</span>;
}
