'use client';

import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { applyTheme } from '@/components/ThemeProvider';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function SettingsPage() {
  const { data, mutate } = useSWR<any>('/api/user', fetcher);
  const u = data?.user;
  const [name, setName] = useState('');
  const [autoDisclose, setAutoDisclose] = useState(true);
  const [nepskinEnabled, setNepskinEnabled] = useState(true);
  const [theme, setTheme] = useState('light');
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (u) { setName(u.name); setAutoDisclose(u.autoDisclose); setNepskinEnabled(u.nepskinEnabled ?? true); setTheme(u.theme); }
  }, [u?.id]);

  async function save() {
    setMsg(null);
    const r = await fetch('/api/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, autoDisclose, nepskinEnabled, theme }),
    });
    setMsg(r.ok ? 'Saved ✓' : 'Save failed');
    mutate();
  }

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar title="Settings" crumbs="Profile · preferences" />
          <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1, maxWidth: 720 }}>
            {!u && <div className="sk-tiny">Loading…</div>}
            {u && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="sk-box shadow" style={{ padding: 14 }}>
                  <h3 className="sk-h3" style={{ margin: 0 }}>Profile</h3>
                  <hr className="sk-divider" />
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10, alignItems: 'center' }}>
                    <label className="sk-label">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                      style={{ padding: '6px 10px', border: '1.25px solid var(--ink)', borderRadius: 6, fontFamily: 'inherit' }} />
                    <label className="sk-label">Email</label>
                    <div className="sk-mono" style={{ fontSize: 13 }}>{u.email}</div>
                    <label className="sk-label">Role</label>
                    <div><span className="sk-chip xs">{u.role}</span></div>
                    <label className="sk-label">Cohort</label>
                    <div className="sk-mono" style={{ fontSize: 13 }}>{u.cohort ? `${u.cohort.code} — ${u.cohort.label}` : 'none'}</div>
                  </div>
                </div>

                <div className="sk-box" style={{ padding: 14 }}>
                  <h3 className="sk-h3" style={{ margin: 0 }}>Preferences</h3>
                  <hr className="sk-divider" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input type="checkbox" checked={autoDisclose} onChange={(e) => setAutoDisclose(e.target.checked)} />
                      <span>Auto-log every Gemma prompt to my disclosure ledger</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input type="checkbox" checked={nepskinEnabled} onChange={(e) => setNepskinEnabled(e.target.checked)} />
                      <span>Enable Visualizations (select text in lessons to generate diagrams)</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      Theme:
                      <select
                        value={theme}
                        onChange={(e) => {
                          setTheme(e.target.value);
                          applyTheme(e.target.value); // live preview
                        }}
                        style={{ padding: '4px 8px', border: '1.25px solid var(--ink)', borderRadius: 6, background: 'var(--paper)', color: 'var(--ink)' }}
                      >
                        <option value="light">light</option>
                        <option value="paper">paper</option>
                        <option value="dark">dark</option>
                      </select>
                      <span className="sk-tiny" style={{ color: 'var(--ink-4)' }}>previews live ↑</span>
                    </label>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="sk-btn primary" onClick={save}>save changes</button>
                  <button className="sk-btn ghost" onClick={() => signOut({ callbackUrl: '/signin' })}>sign out</button>
                  {msg && <span className="sk-chip" style={{ marginLeft: 'auto' }}>{msg}</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
