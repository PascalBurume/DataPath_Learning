'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { ProgressRing } from '@datapath/ui/src/primitives/ProgressRing';
import { MarginNote } from '@datapath/ui/src/primitives/MarginNote';

const fetcher = (u: string) => fetch(u).then((r) => r.json());
const ICON: Record<string, string> = { lecture: '▶', lab: '⚗', quiz: '✎', checkpoint: '◆' };

export default function ModuleDetail() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data } = useSWR<any>(`/api/modules/${id}`, fetcher);
  const { data: list } = useSWR<{ modules: { id: string; order: number }[] }>('/api/modules', fetcher);

  if (!data) return <Shell><div style={{ padding: 24 }} className="sk-tiny">Loading…</div></Shell>;
  if (data.error) return <Shell><div style={{ padding: 24 }}>Module not found</div></Shell>;

  const m = data.module;
  const lessons: any[] = data.lessons ?? [];
  const prompts: any[] = data.prompts ?? [];
  const quiz: any[] = data.quiz ?? [];
  const total = lessons.length;
  const lessonsDone: number = data.progress?.lessonsDone ?? 0;
  const pct: number = data.progress?.pct ?? 0;
  const isDone = pct >= 100;
  const inProgress = pct > 0 && !isDone;

  const ordered = list?.modules ?? [];
  const idx = ordered.findIndex((x) => x.id === id);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null;
  const firstLesson = lessons[0]?.id;

  return (
    <Shell>
      <SketchTopbar
        title={`${m.id} · ${m.title}`}
        crumbs={`Modules › ${m.id}`}
        right={<>
          <Link href="/modules"><button className="sk-btn sm">← all modules</button></Link>
          {firstLesson && <Link href={`/lecture?lesson=${firstLesson}`}><button className="sk-btn sm primary">▶ open lesson</button></Link>}
        </>}
      />
      <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, alignContent: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="sk-box shadow" style={{ padding: 16, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              {isDone ? (
                <div style={{ width: 64, height: 64, borderRadius: 64, border: '2px solid var(--good)', background: 'var(--good-tint)', display: 'grid', placeItems: 'center', fontSize: 32, color: 'var(--good)', flexShrink: 0 }}>✓</div>
              ) : (
                <ProgressRing pct={pct} size={64} />
              )}
              <div style={{ flex: 1 }}>
                <div className="sk-label">module {idx + 1} of {ordered.length || '–'}</div>
                <div className="sk-h2 sk-squiggle" style={{ display: 'inline-block', marginTop: 4 }}>{m.title}</div>
                <div className="sk-body" style={{ marginTop: 4 }}>{m.subtitle}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  {firstLesson && <Link href={`/lecture?lesson=${firstLesson}`}><button className="sk-btn primary">▶ {lessonsDone > 0 ? 'continue' : 'start'} lecture</button></Link>}
                  <Link href={`/lab?module=${m.id}`}><button className="sk-btn sm">go to lab</button></Link>
                  <span className="sk-tiny" style={{ marginLeft: 'auto' }}>{lessonsDone}/{total} lessons</span>
                </div>
              </div>
            </div>
            {inProgress && <MarginNote rot={3} style={{ position: 'absolute', right: -8, top: -12 }}>in progress!</MarginNote>}
          </div>

          {lessons.length > 0 && (
            <div className="sk-box" style={{ padding: 14 }}>
              <h3 className="sk-h3">Lessons</h3>
              <hr className="sk-divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {lessons.map((l: any) => (
                  <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', borderBottom: '1px dashed var(--rule)' }}>
                    <span style={{ fontSize: 14, width: 18, textAlign: 'center', color: l.done ? 'var(--good)' : 'var(--ink-3)' }}>
                      {l.done ? '✓' : ICON[l.kind] ?? '▶'}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: l.done ? 500 : 600, color: l.done ? 'var(--ink-3)' : 'var(--ink)', textDecoration: l.done ? 'line-through' : 'none' }}>
                        <span className="sk-mono" style={{ color: 'var(--ink-3)', fontSize: 11, marginRight: 6 }}>{l.ref}</span>
                        {l.title}
                      </div>
                    </div>
                    {l.aiOff && <span className="sk-chip aioff xs">AI-OFF</span>}
                    <Link href={`/lecture?lesson=${l.id}`}><button className="sk-btn xs">open</button></Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {(JSON.parse(m.datasetsJson || '[]') as string[]).length > 0 && (
            <div className="sk-box" style={{ padding: 12 }}>
              <h3 className="sk-h3">Datasets</h3>
              <hr className="sk-divider" />
              {(JSON.parse(m.datasetsJson || '[]') as string[]).map((d) => (
                <div key={d} className="sk-mono" style={{ fontSize: 12, padding: '3px 0', color: 'var(--ink-2)' }}>📊 {d}</div>
              ))}
            </div>
          )}

          {prompts.length > 0 && (
            <div className="sk-box" style={{ padding: 12 }}>
              <h3 className="sk-h3">Approved prompt templates</h3>
              <hr className="sk-divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                {prompts.map((p: any) => (
                  <div key={p.id} className="sk-tiny" style={{ padding: '4px 0', borderBottom: '1px dashed var(--rule)' }}>
                    <strong style={{ color: 'var(--amber)' }}>✦ T{p.idx}</strong> {p.title}
                  </div>
                ))}
              </div>
            </div>
          )}

          {quiz.length > 0 && (
            <div className="sk-box" style={{ padding: 12 }}>
              <h3 className="sk-h3">Quiz · {quiz.length} questions</h3>
              <hr className="sk-divider" />
              <div className="sk-tiny">After all lessons, take the quiz to consolidate.</div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Link href="/modules"><button className="sk-btn sm ghost">← all modules</button></Link>
            {prev && <Link href={`/module/${prev.id}`}><button className="sk-btn sm ghost">‹ {prev.id}</button></Link>}
            {next && <Link href={`/module/${next.id}`}><button className="sk-btn sm ghost">{next.id} ›</button></Link>}
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>{children}</div>
      </div>
    </div>
  );
}
