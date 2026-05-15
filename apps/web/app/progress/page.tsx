'use client';

import React from 'react';
import useSWR from 'swr';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { ProgressRing } from '@datapath/ui/src/primitives/ProgressRing';

const fetcher = (u: string) => fetch(u).then((r) => r.json());
const DAYS = ['M','T','W','T','F','S','S'];

export default function ProgressPage() {
  const { data: prog } = useSWR<any>('/api/progress', fetcher);
  const { data: prompts } = useSWR<any>('/api/prompts?limit=8', fetcher);
  const perModule: any[] = prog?.perModule ?? [];
  const heat: { module: string; day: number; count: number }[] = prog?.heat ?? [];
  const totals = prog?.totals ?? { lessonsDone: 0, lessonsTotal: 0, modulesDone: 0, aiPromptsLast7: 0 };
  const recent: any[] = prompts?.prompts ?? [];
  const maxHeat = Math.max(1, ...heat.map((h) => h.count));

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="Your progress"
            crumbs="Course · this term"
            right={<>
              <span className="sk-chip">{totals.lessonsDone}/{totals.lessonsTotal} lessons</span>
              <span className="sk-chip good">{totals.modulesDone} modules done</span>
              <span className="sk-chip ai">{totals.aiPromptsLast7} prompts · 7d</span>
            </>}
          />
          <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, alignContent: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="sk-box shadow" style={{ padding: 14 }}>
                <h3 className="sk-h3" style={{ margin: 0 }}>Modules</h3>
                <hr className="sk-divider" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                  {perModule.map((m) => (
                    <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px dashed var(--rule)', padding: 8, borderRadius: 6 }}>
                      <ProgressRing pct={m.pct} size={42} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="sk-label">{m.id}</div>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{m.title}</div>
                        <div className="sk-tiny">{m.lessonsDone}/{m.total} lessons</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sk-box" style={{ padding: 14 }}>
                <h3 className="sk-h3" style={{ margin: 0 }}>Activity · last 7 days</h3>
                <hr className="sk-divider" />
                <div style={{ display: 'grid', gridTemplateColumns: `90px repeat(7, 1fr)`, gap: 4, fontSize: 11 }}>
                  <div></div>
                  {DAYS.map((d, i) => <div key={i} style={{ textAlign: 'center', color: 'var(--ink-3)' }}>{d}</div>)}
                  {perModule.map((m) => (
                    <React.Fragment key={m.id}>
                      <div style={{ color: 'var(--ink-2)', textAlign: 'right', paddingRight: 6 }}>{m.id}</div>
                      {DAYS.map((_, d) => {
                        const cell = heat.find((h) => h.module === m.id && h.day === d);
                        const v = cell?.count ?? 0;
                        const op = v === 0 ? 0.05 : 0.2 + (v / maxHeat) * 0.8;
                        return <div key={`${m.id}-${d}`} title={`${v} events`} style={{ height: 18, background: `rgba(212,124,38,${op})`, border: '1px solid var(--rule)', borderRadius: 3 }} />;
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="sk-box" style={{ padding: 14 }}>
                <h3 className="sk-h3" style={{ margin: 0 }}>Recent AI prompts</h3>
                <hr className="sk-divider" />
                {recent.length === 0 && <div className="sk-tiny">No prompts yet. Start a lecture and ask Gemma a question.</div>}
                {recent.map((p) => (
                  <div key={p.id} style={{ padding: '6px 0', borderBottom: '1px dashed var(--rule)' }}>
                    <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                      {new Date(p.createdAt).toLocaleString()} {p.lessonId ? `· ${p.lessonId}` : ''}
                    </div>
                    <div style={{ fontSize: 13 }}>{p.prompt.slice(0, 140)}{p.prompt.length > 140 ? '…' : ''}</div>
                  </div>
                ))}
              </div>

              <div className="sk-box dashed" style={{ padding: 12, background: 'var(--amber-tint)' }}>
                <div className="sk-label" style={{ color: 'var(--amber)' }}>Honesty pact</div>
                <div className="sk-tiny" style={{ marginTop: 6 }}>
                  Every AI prompt is auto-disclosed. The instructor sees what you asked + how you used it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
