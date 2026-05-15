import type { ReactNode } from 'react';

interface SketchTopbarProps {
  title: string;
  crumbs?: string;
  right?: ReactNode;
}

export function SketchTopbar({ title, crumbs, right }: SketchTopbarProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '14px 22px', borderBottom: '1.25px dashed var(--rule)', gap: 16, background: 'var(--paper)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        {crumbs && <div className="sk-tiny" style={{ marginBottom: 2 }}>{crumbs}</div>}
        <div className="sk-h1" style={{ fontSize: 30 }}>{title}</div>
      </div>
      {right && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{right}</div>
      )}
    </div>
  );
}
