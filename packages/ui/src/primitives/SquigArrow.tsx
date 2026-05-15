interface SquigArrowProps {
  length?: number;
  color?: string;
}

export function SquigArrow({ length = 60, color = 'var(--amber)' }: SquigArrowProps) {
  return (
    <svg width={length} height={22} viewBox={`0 0 ${length} 22`} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <path
        d={`M2 11 Q ${length / 3} 4 ${(length * 2) / 3} 14 T ${length - 6} 11`}
        fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d={`M${length - 12} 6 L ${length - 4} 11 L ${length - 12} 16`}
        fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
