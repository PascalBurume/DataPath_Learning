'use client';

interface Props {
  /** 4 rows × 7 columns. Each cell has `{ date, count }`. */
  rhythm: { date: string; count: number }[][];
}

const DAY_LABELS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function RhythmCalendar({ rhythm }: Props) {
  const allCounts = rhythm.flat().map((c) => c.count);
  const max = Math.max(1, ...allCounts);

  // Today's ISO date string for highlighting
  const todayStr = new Date().toISOString().slice(0, 10);

  // Derive day-of-week from the first row's dates (or fallback)
  const firstRowDates = rhythm[0] ?? [];
  const dayIndices = firstRowDates.map((cell) => {
    if (!cell.date) return -1;
    return new Date(cell.date + 'T00:00:00').getDay();
  });

  return (
    <div className="sk-box" style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 6, minHeight: 200 }}>
      <div className="sk-tiny" style={{ color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        AI rhythm
      </div>
      <div className="sk-tiny" style={{ color: 'var(--ink-4)', fontSize: 10, marginTop: -2 }}>
        how often you asked Gemma · last 4 weeks
      </div>

      {/* Day-of-week headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 22px)', gap: 4, marginTop: 2 }}>
        {dayIndices.map((di, c) => (
          <div
            key={c}
            style={{
              width: 22,
              textAlign: 'center',
              fontSize: 9,
              color: 'var(--ink-4)',
              fontFamily: 'inherit',
              letterSpacing: '0.04em',
            }}
          >
            {di >= 0 ? DAY_LABELS[di] : ''}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div
        role="grid"
        aria-label="AI prompt density over 4 weeks"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 22px)',
          gridAutoRows: 22,
          gap: 4,
        }}
      >
        {rhythm.flatMap((week, r) =>
          week.map((cell, c) => {
            const isToday = cell.date === todayStr;
            const opacity = cell.count === 0 ? 0 : Math.max(0.15, Math.min(1, cell.count / Math.max(4, max)));
            const bg = cell.count === 0 ? 'transparent' : `rgba(200, 127, 28, ${opacity})`;
            return (
              <div
                key={`${r}-${c}`}
                role="gridcell"
                title={cell.date ? `${cell.date} · ${cell.count} prompt${cell.count === 1 ? '' : 's'}` : ''}
                style={{
                  background: bg,
                  border: isToday ? '2px solid var(--ink)' : '1.25px solid var(--ink)',
                  borderRadius: 3,
                  width: 22,
                  height: 22,
                  position: 'relative',
                }}
              >
                {isToday && (
                  <div style={{
                    position: 'absolute',
                    bottom: -6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: 8,
                    color: 'var(--ink)',
                    whiteSpace: 'nowrap',
                  }}>
                    ·
                  </div>
                )}
              </div>
            );
          }),
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
        <span className="sk-tiny" style={{ color: 'var(--ink-3)', fontSize: 10 }}>none</span>
        {[0, 0.15, 0.4, 0.7, 1].map((o, i) => (
          <span
            key={o}
            title={['0', '1–2', '3–4', '5–6', '7+'][i]}
            style={{
              width: 14,
              height: 14,
              background: o === 0 ? 'transparent' : `rgba(200, 127, 28, ${o})`,
              border: '1px solid var(--ink)',
              borderRadius: 2,
              display: 'inline-block',
            }}
          />
        ))}
        <span className="sk-tiny" style={{ color: 'var(--ink-3)', fontSize: 10 }}>heavy</span>
        <span style={{ flex: 1 }} />
        <span className="sk-tiny" style={{ color: 'var(--ink-4)', fontSize: 10 }}>today = bold border</span>
      </div>
    </div>
  );
}
