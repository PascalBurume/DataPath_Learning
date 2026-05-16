'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

type NavItem = { k: string; g: string; href: string };

const NAV: NavItem[] = [
  { k: 'Dashboard', g: '⌂', href: '/dashboard' },
  { k: 'Modules',   g: '☷', href: '/modules' },
  { k: 'Progress',  g: '↗', href: '/progress' },
  { k: 'Resources', g: '✎', href: '/resources' },
  { k: 'Confusion', g: '?', href: '/errors' },
  { k: 'Settings',  g: '✦', href: '/settings' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/dashboard') return pathname === '/dashboard' || pathname === '/';
  if (href === '/modules') {
    return pathname.startsWith('/modules') || pathname.startsWith('/module') ||
           pathname === '/lecture' || pathname === '/lab' || pathname === '/disclosure';
  }
  if (href === '/project') return pathname === '/project';
  return pathname.startsWith(href);
}

export function NavSidebar({ collapsed = false }: { collapsed?: boolean }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { data: dashData } = useSWR<any>('/api/dashboard', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const cohortWeek: number = dashData?.cohort?.week ?? 0;
  const w = collapsed ? 56 : 200;
  const userName = session?.user?.name ?? 'guest';
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div
      className="sk-rail"
      style={{ width: w, height: '100%', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 4, boxSizing: 'border-box', flexShrink: 0 }}
    >
      <Link href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px', marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, border: '1.5px solid var(--ink)', borderRadius: 6, display: 'grid', placeItems: 'center', fontFamily: 'Caveat', fontSize: 20, fontWeight: 700, lineHeight: 1, background: 'var(--paper)' }}>D</div>
          {!collapsed && <div style={{ fontFamily: 'Caveat', fontWeight: 700, fontSize: 22 }}>DataPath</div>}
        </div>
      </Link>

      {NAV.map(it => {
        const active = isActive(pathname, it.href);
        return (
          <Link key={it.k} href={it.href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px',
              borderRadius: 6,
              background: active ? 'var(--ink)' : 'transparent',
              color: active ? 'var(--paper)' : 'var(--ink-2)',
              border: active ? '1.5px solid var(--ink)' : '1.5px solid transparent',
              fontSize: 13, fontWeight: active ? 700 : 500,
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>{it.g}</span>
              {!collapsed && <span>{it.k}</span>}
            </div>
          </Link>
        );
      })}

      {cohortWeek >= 9 && (
        <Link key="Project" href="/project" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px',
            borderRadius: 6,
            background: isActive(pathname, '/project') ? 'var(--ink)' : 'transparent',
            color: isActive(pathname, '/project') ? 'var(--paper)' : 'var(--amber)',
            border: isActive(pathname, '/project') ? '1.5px solid var(--ink)' : '1.5px solid transparent',
            fontSize: 13, fontWeight: isActive(pathname, '/project') ? 700 : 600,
            cursor: 'pointer',
          }}>
            <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>◈</span>
            {!collapsed && <span>Project</span>}
          </div>
        </Link>
      )}

      <div style={{ flex: 1 }} />
      <div style={{ borderTop: '1.25px dashed var(--rule)', paddingTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--good)', border: '1px solid var(--ink)' }} />
          {!collapsed && <span className="sk-tiny" style={{ color: 'var(--ink-2)' }}>Gemma · local</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 6px' }}>
          <div style={{ width: 24, height: 24, borderRadius: 12, border: '1.5px solid var(--ink)', background: 'var(--amber-tint)', display: 'grid', placeItems: 'center', fontFamily: 'Caveat', fontWeight: 700 }}>{initial}</div>
          {!collapsed && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
              <span className="sk-tiny" style={{ color: 'var(--ink-2)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{userName}</span>
              <button onClick={() => signOut({ callbackUrl: '/signin' })} className="sk-tiny" style={{ background: 'none', border: 'none', padding: 0, color: 'var(--ink-3)', cursor: 'pointer', textAlign: 'left' }}>sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
