import type { CSSProperties, ReactNode } from 'react';

interface MarginNoteProps {
  children: ReactNode;
  rot?: number;
  style?: CSSProperties;
}

export function MarginNote({ children, rot = -3, style }: MarginNoteProps) {
  return (
    <div className="sk-note" style={{ transform: `rotate(${rot}deg)`, ...style }}>
      {children}
    </div>
  );
}
