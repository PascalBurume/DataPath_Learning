interface ProgressRingProps {
  pct?: number;
  size?: number;
  stroke?: number;
  label?: string;
}

export function ProgressRing({ pct = 60, size = 56, stroke = 5, label }: ProgressRingProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <span className="sk-ring" style={{ width: size, height: size, position: 'relative', display: 'inline-block', verticalAlign: 'middle' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth={stroke} strokeDasharray="3 3" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke="var(--ink)" strokeWidth={stroke}
          strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'Caveat', fontWeight: 700, fontSize: size > 50 ? 18 : 14 }}>
        {label ?? `${pct}%`}
      </span>
    </span>
  );
}
