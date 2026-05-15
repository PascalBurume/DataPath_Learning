'use client';

interface Props {
  /** 4 rows × 7 columns. Each cell has `{ date, count }`. */
  rhythm: { date: string; count: number }[][];
}

export function RhythmCalendar({ rhythm }: Props) {
  const allCounts = rhythm.flat().map((c) => c.count);
  const max = Math.max(1, ...allCounts);

  return (
    <div className="sk-box" style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 200 }}>
      <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        AI rhythm
      </div>

      <div
        role="grid"
        aria-label="AI prompt density over 4 weeks"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 22px)',
          gridAutoRows: 22,
          gap: 4,
          marginTop: 4,
        }}
      >
        {rhythm.flatMap((week, r) =>
          week.map((cell, c) => {
            const opacity = cell.count === 0 ? 0 : Math.max(0.15, Math.min(1, cell.count / Math.max(4, max)));
            const bg = cell.count === 0 ? 'transparent' : `rgba(200, 127, 28, ${opacity})`;
            return (
              <div
                key={`${r}-${c}`}
                role="gridcell"
                title={`${cell.date} · ${cell.count} prompt${cell.count === 1 ? '' : 's'}`}
                style={{
                  background: bg,
                  border: '1.25px solid var(--ink)',
                  borderRadius: 3,
                  width: 22,
                  height: 22,
                }}
              />
            );
          }),
        )}
      </div>

      <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
        4 weeks · denser cells = more prompts
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 'auto' }}>
        <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>sparse</span>
        {[0.15, 0.35, 0.55, 0.75, 1].map((o) => (
          <span
            key={o}
            style={{
              width: 14,
              height: 14,
              background: `rgba(200, 127, 28, ${o})`,
              border: '1px solid var(--ink)',
              borderRadius: 2,
            }}
          />
        ))}
        <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>dense</span>
      </div>
    </div>
  );
}
