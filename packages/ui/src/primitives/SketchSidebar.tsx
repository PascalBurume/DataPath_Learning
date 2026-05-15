type NavItem = { k: string; g: string };

const NAV: NavItem[] = [
  { k: 'Dashboard', g: '⌂' },
  { k: 'Modules',   g: '☷' },
  { k: 'Progress',  g: '↗' },
  { k: 'Resources', g: '✎' },
  { k: 'Settings',  g: '✦' },
];

interface SketchSidebarProps {
  collapsed?: boolean;
  active?: string;
}

export function SketchSidebar({ collapsed = false, active = 'Dashboard' }: SketchSidebarProps) {
  const w = collapsed ? 56 : 200;
  return (
    <div
      className="sk-rail"
      style={{ width: w, height: '100%', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 4, boxSizing: 'border-box' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px', marginBottom: 12 }}>
        <div style={{ width: 28, height: 28, border: '1.5px solid var(--ink)', borderRadius: 6, display: 'grid', placeItems: 'center', fontFamily: 'Caveat', fontSize: 20, fontWeight: 700, lineHeight: 1, background: 'var(--paper)' }}>D</div>
        {!collapsed && <div style={{ fontFamily: 'Caveat', fontWeight: 700, fontSize: 22 }}>DataPath</div>}
      </div>

      {NAV.map(it => {
        const isActive = active === it.k;
        return (
          <div
            key={it.k}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px',
              borderRadius: 6,
              background: isActive ? 'var(--ink)' : 'transparent',
              color: isActive ? 'var(--paper)' : 'var(--ink-2)',
              border: isActive ? '1.5px solid var(--ink)' : '1.5px solid transparent',
              fontSize: 13, fontWeight: isActive ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>{it.g}</span>
            {!collapsed && <span>{it.k}</span>}
          </div>
        );
      })}

      <div style={{ flex: 1 }} />
      <div style={{ borderTop: '1.25px dashed var(--rule)', paddingTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--good)', border: '1px solid var(--ink)' }} />
          {!collapsed && <span className="sk-tiny" style={{ color: 'var(--ink-2)' }}>Gemma · connected</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 6px' }}>
          <div style={{ width: 24, height: 24, borderRadius: 12, border: '1.5px solid var(--ink)', background: 'var(--amber-tint)', display: 'grid', placeItems: 'center', fontFamily: 'Caveat', fontWeight: 700 }}>S</div>
          {!collapsed && <span className="sk-tiny" style={{ color: 'var(--ink-2)' }}>sofia · cohort A</span>}
        </div>
      </div>
    </div>
  );
}
