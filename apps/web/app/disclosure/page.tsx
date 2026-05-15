'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function DisclosurePage() {
  return (
    <Suspense fallback={<div className="sk-paper" style={{ minHeight: '100vh' }} />}>
      <DisclosurePageContent />
    </Suspense>
  );
}

function DisclosurePageContent() {
  const sp = useSearchParams();
  const initialModule = sp.get('module') ?? '';
  const [moduleId, setModuleId] = useState(initialModule);
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const { data: mods } = useSWR<any>('/api/modules', fetcher);
  const { data: prompts, mutate: refetchP } = useSWR<any>(
    moduleId ? `/api/prompts?module=${moduleId}&limit=50` : null,
    fetcher,
  );
  const { data: allPromptsData } = useSWR<any>('/api/prompts?limit=500', fetcher);
  const { data: disc, mutate: refetchD } = useSWR<any>('/api/disclosure', fetcher);

  const all: any[] = mods?.modules ?? [];
  const recent: any[] = prompts?.prompts ?? [];
  const allPrompts: any[] = allPromptsData?.prompts ?? [];
  const past: any[] = disc?.disclosures ?? [];

  useEffect(() => {
    if (!moduleId && all[0]?.id) setModuleId(all[0].id);
  }, [moduleId, all]);

  async function submit() {
    if (!moduleId) { setMsg('Choose a module before submitting.'); return; }
    if (body.length < 10) { setMsg('Disclosure should be at least 10 characters.'); return; }
    setSubmitting(true);
    const r = await fetch('/api/disclosure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ moduleId, body, promptIds: recent.map((p) => p.id) }),
    });
    setSubmitting(false);
    if (r.ok) { setMsg('Disclosure submitted ✓'); setBody(''); refetchD(); }
    else setMsg('Failed to submit.');
  }

  const uniqueLessons = new Set(recent.map((p) => p.lessonId).filter(Boolean)).size;
  const currentModuleDisclosed = past.some((d: any) => d.moduleId === moduleId);

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="AI-USE.md disclosure"
            crumbs="Honesty pact · per module"
            right={
              <>
                <span className="sk-chip">{past.length} submitted</span>
                <span className="sk-chip ai">{allPrompts.length} prompts total</span>
              </>
            }
          />

          {/* Module progression strip */}
          <div
            style={{
              borderBottom: '1.5px solid var(--rule)',
              padding: '8px 26px',
              background: 'var(--paper-2)',
              display: 'flex',
              gap: 6,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span className="sk-tiny" style={{ color: 'var(--ink-3)', marginRight: 4, flexShrink: 0 }}>
              progression →
            </span>
            {all.map((m) => {
              const mCount = allPrompts.filter((p: any) => p.moduleId === m.id).length;
              const hasDone = past.some((d: any) => d.moduleId === m.id);
              const active = moduleId === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setModuleId(m.id)}
                  className={`sk-btn xs${active ? ' primary' : ''}`}
                  title={`${m.title} · ${mCount} prompt${mCount !== 1 ? 's' : ''} · ${hasDone ? 'disclosed ✓' : 'not yet disclosed'}`}
                >
                  {hasDone ? '✓ ' : mCount > 0 ? '⚠ ' : ''}
                  {m.id}
                  {mCount > 0 && (
                    <span style={{ opacity: 0.65, marginLeft: 2, fontSize: 9 }}>{mCount}</span>
                  )}
                </button>
              );
            })}
            <Link
              href="/project"
              className="sk-btn xs"
              style={{ marginLeft: 'auto', flexShrink: 0 }}
            >
              → project
            </Link>
          </div>

          <div
            style={{
              padding: '18px 26px',
              overflow: 'auto',
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 18,
              alignContent: 'start',
            }}
          >
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="sk-box shadow" style={{ padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <h3 className="sk-h3" style={{ margin: 0 }}>Compose disclosure</h3>
                  <span className="sk-chip xs ai">{moduleId}</span>
                  {currentModuleDisclosed && (
                    <span className="sk-chip xs good">✓ already disclosed</span>
                  )}
                </div>
                <hr className="sk-divider" />
                <div className="sk-tiny" style={{ marginBottom: 8 }}>
                  Describe in your own words what you asked Gemma, what you used, and what you wrote yourself.
                </div>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder={`# AI-USE.md — ${moduleId}\n\n## What I asked Gemma\n- …\n\n## What I used\n- …\n\n## What I did myself\n- …`}
                  rows={14}
                  style={{
                    width: '100%',
                    padding: 10,
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 12,
                    border: '1.25px solid var(--ink)',
                    borderRadius: 6,
                  }}
                />
                {msg && <div className="sk-chip" style={{ marginTop: 8 }}>{msg}</div>}
                <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button className="sk-btn primary" disabled={submitting} onClick={submit}>
                    {submitting ? 'submitting…' : 'submit disclosure'}
                  </button>
                  <button className="sk-btn sm ghost" onClick={() => refetchP()}>refresh prompts</button>
                  <select
                    value={moduleId}
                    onChange={(e) => setModuleId(e.target.value)}
                    style={{
                      marginLeft: 'auto',
                      padding: '4px 8px',
                      border: '1.25px solid var(--ink)',
                      borderRadius: 6,
                      fontFamily: 'inherit',
                      fontSize: 12,
                    }}
                  >
                    {all.map((m) => (
                      <option key={m.id} value={m.id}>{m.id} · {m.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {past.length > 0 && (
                <div className="sk-box" style={{ padding: 14 }}>
                  <h3 className="sk-h3" style={{ margin: 0 }}>
                    Past disclosures{' '}
                    <span className="sk-chip xs" style={{ marginLeft: 4 }}>{past.length}</span>
                  </h3>
                  <hr className="sk-divider" />
                  {past.map((d: any) => (
                    <details key={d.id} style={{ borderBottom: '1px dashed var(--rule)', padding: '6px 0' }}>
                      <summary style={{ cursor: 'pointer' }}>
                        <strong>{d.moduleId}</strong>{' '}
                        <span className="sk-tiny">{new Date(d.createdAt).toLocaleString()}</span>
                      </summary>
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          fontSize: 12,
                          padding: 8,
                          background: '#faf7f0',
                          borderRadius: 4,
                        }}
                      >
                        {d.body}
                      </pre>
                    </details>
                  ))}
                </div>
              )}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* AI-USE story box */}
              {recent.length > 0 && (
                <div className="sk-box dashed" style={{ padding: 12 }}>
                  <div className="sk-tiny" style={{ color: 'var(--ink-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    AI-USE story · {moduleId}
                  </div>
                  <div className="sk-body" style={{ lineHeight: 1.55 }}>
                    You used the AI assistant{' '}
                    <strong>{recent.length} time{recent.length !== 1 ? 's' : ''}</strong>
                    {uniqueLessons > 0 && (
                      <> across <strong>{uniqueLessons} lesson{uniqueLessons !== 1 ? 's' : ''}</strong></>
                    )}.
                  </div>
                  <div className="sk-tiny" style={{ marginTop: 6, color: 'var(--ink-3)' }}>
                    {recent[recent.length - 1] && (
                      <>
                        First: {new Date(recent[recent.length - 1].createdAt).toLocaleDateString()}
                        {' · '}
                        Last: {new Date(recent[0].createdAt).toLocaleDateString()}
                      </>
                    )}
                  </div>
                  <div className="sk-tiny" style={{ marginTop: 8, fontStyle: 'italic', color: 'var(--ink-2)' }}>
                    Use the logged prompts below to write a meaningful disclosure.
                  </div>
                </div>
              )}

              {/* Logged prompts */}
              <div className="sk-box" style={{ padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <h3 className="sk-h3" style={{ margin: 0 }}>Logged prompts</h3>
                  <span className="sk-chip xs ai">{moduleId}</span>
                  <span className="sk-chip xs" style={{ marginLeft: 'auto' }}>{recent.length} logged</span>
                </div>
                <hr className="sk-divider" />
                {recent.length === 0 && (
                  <div className="sk-tiny">No prompts logged for this module yet.</div>
                )}
                {recent.map((p: any) => (
                  <details key={p.id} style={{ padding: '6px 0', borderBottom: '1px dashed var(--rule)' }}>
                    <summary style={{ cursor: 'pointer', fontSize: 13 }}>
                      <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                        {new Date(p.createdAt).toLocaleString()} · {p.lessonId ?? '—'}
                      </span>
                      <div>{p.prompt.slice(0, 90)}{p.prompt.length > 90 ? '…' : ''}</div>
                    </summary>
                    <div style={{ fontSize: 12, padding: 6 }}>
                      <strong>response:</strong>
                      <div style={{ marginTop: 4, whiteSpace: 'pre-wrap' }}>{p.response}</div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
