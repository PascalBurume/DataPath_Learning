'use client';

export type PathNodeStatus = 'done' | 'current' | 'locked';

export interface PathNode {
  id: string;
  order: number;
  title: string;
  pct: number;
  status: PathNodeStatus;
  aiOff?: boolean;
}

interface Props {
  nodes: PathNode[];
  /** Optional click handler; receives the module id. */
  onNodeClick?: (id: string) => void;
  /** Pixel height of the SVG (default 230). */
  height?: number;
}

/**
 * Hand-drawn "your path" curve: a cubic-Bezier dashed line wandering left→right
 * through the modules, with circular nodes that show status (done = filled
 * black, current = amber ring + "you · X% in" margin note, locked = white
 * outline). AI-OFF modules get a small ⊘ badge. The final node gets a
 * "the path bends, that's ok" annotation when the cohort has crossed past M7.
 */
export function PathView({ nodes, onNodeClick, height = 230 }: Props) {
  if (!nodes.length) return null;

  const padL = 60;
  const padR = 60;
  const padTop = 30;
  const padBot = 80; // leave room for annotations below
  const width = Math.max(900, nodes.length * 110 + padL + padR);

  // Y coordinates wander gently between two bands to feel hand-drawn.
  const bandTop = padTop + 10;
  const bandBot = height - padBot;
  const midY = (bandTop + bandBot) / 2;

  const positions = nodes.map((n, i) => {
    const t = nodes.length === 1 ? 0.5 : i / (nodes.length - 1);
    const x = padL + t * (width - padL - padR);
    // Sinusoidal undulation + a small per-index nudge to avoid feeling regular.
    const y = midY + Math.sin(t * Math.PI * 2.4 + 0.7) * 32 + ((i % 2) === 0 ? -4 : 4);
    return { x, y };
  });

  // Build a smooth path that threads through all positions using catmull-rom-like
  // cubic segments.
  function buildPath(): string {
    if (positions.length < 2) return '';
    const cmds: string[] = [`M ${positions[0].x} ${positions[0].y}`];
    for (let i = 0; i < positions.length - 1; i++) {
      const p0 = positions[i - 1] ?? positions[i];
      const p1 = positions[i];
      const p2 = positions[i + 1];
      const p3 = positions[i + 2] ?? p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      cmds.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`);
    }
    return cmds.join(' ');
  }

  const currentIdx = nodes.findIndex((n) => n.status === 'current');
  const showPathBendsNote = currentIdx >= 7;

  return (
    <div style={{ width: '100%', overflowX: 'auto', outline: 'none', WebkitOverflowScrolling: 'touch' }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        style={{ display: 'block', minWidth: 800 }}
      >
        {/* Curve */}
        <path
          key="curve"
          d={buildPath()}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={1.5}
          strokeDasharray="6 5"
          strokeLinecap="round"
        />

        {/* Nodes */}
        {nodes.map((n, i) => {
          const p = positions[i];
          const isCurrent = n.status === 'current';
          const isDone = n.status === 'done';
          const isLocked = n.status === 'locked';
          const r = isCurrent ? 30 : 26;
          const cursor = onNodeClick ? 'pointer' : 'default';

          return (
            <g
              key={n.id}
              transform={`translate(${p.x} ${p.y})`}
              style={{ cursor }}
              onClick={onNodeClick ? () => onNodeClick(n.id) : undefined}
            >
              {/* Amber outer ring for current node */}
              {isCurrent && (
                <circle
                  key="amber-ring"
                  r={r + 6}
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth={2}
                  strokeDasharray="4 3"
                />
              )}
              {/* Main circle */}
              <circle
                key="main-circle"
                r={r}
                fill={isDone ? 'var(--ink)' : isCurrent ? 'var(--amber-tint)' : 'var(--paper)'}
                stroke="var(--ink)"
                strokeWidth={1.5}
              />
              {/* M-label */}
              <text
                key="m-label"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Caveat, cursive"
                fontWeight={700}
                fontSize={isCurrent ? 28 : 24}
                fill={isDone ? 'var(--paper)' : 'var(--ink)'}
              >
                M{n.order}
              </text>

              {/* AI-OFF lock badge (top-right) */}
              {n.aiOff && (
                <g key="aioff-badge" transform={`translate(${r - 4} ${-r + 4})`}>
                  <circle
                    r={9}
                    fill="var(--aioff-tint)"
                    stroke="var(--aioff)"
                    strokeWidth={1.25}
                  />
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={11}
                    fontWeight={700}
                    fill="var(--aioff)"
                  >
                    ⊘
                  </text>
                </g>
              )}

              {/* Module title below */}
              <text
                key="node-title"
                textAnchor="middle"
                y={r + 18}
                fontFamily="inherit"
                fontSize={11}
                fill={isLocked ? 'var(--ink-3)' : 'var(--ink-2)'}
                fontWeight={isCurrent ? 700 : 500}
              >
                {n.title.length > 18 ? n.title.slice(0, 17) + '…' : n.title}
              </text>

              {/* "you · X% in" note under current */}
              {isCurrent && (
                <g key="current-note" transform={`translate(0 ${r + 38})`}>
                  <text
                    textAnchor="middle"
                    fontFamily="Caveat, cursive"
                    fontSize={18}
                    fontWeight={700}
                    fill="var(--amber)"
                  >
                    you
                  </text>
                  <text
                    textAnchor="middle"
                    y={18}
                    fontFamily="Caveat, cursive"
                    fontSize={15}
                    fill="var(--amber)"
                  >
                    {n.pct}% in
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* "the path bends, that's ok" annotation */}
        {showPathBendsNote && nodes.length > 7 && (
          <g key="bends-note" transform={`translate(${positions[Math.min(7, positions.length - 1)].x + 30} ${positions[Math.min(7, positions.length - 1)].y - 50})`}>
            <text
              fontFamily="Caveat, cursive"
              fontWeight={700}
              fontSize={16}
              fill="var(--amber)"
              transform="rotate(-4)"
            >
              the path bends. that's ok.
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
