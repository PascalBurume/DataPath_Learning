import type { ReactNode } from 'react';

interface SketchFrameProps {
  children: ReactNode;
  w?: number;
  h?: number;
}

export function SketchFrame({ children, w = 1100, h = 720 }: SketchFrameProps) {
  return (
    <div className="sk-paper" style={{ width: w, height: h, position: 'relative' }}>
      {children}
    </div>
  );
}
