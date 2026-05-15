'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { ProgressRing } from '@datapath/ui/src/primitives/ProgressRing';

type ModuleSummary = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  aiUseSummary: string;
  datasets: string[];
  lessonCount: number;
  progress: { lessonsDone: number; total: number; pct: number };
};

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function ModulesPage() {
  const { data, isLoading } = useSWR<{ modules: ModuleSummary[] }>('/api/modules', fetcher);
  const modules = data?.modules ?? [];
  const done = modules.filter((m) => m.progress.pct >= 100).length;
  const inProgress = modules.filter((m) => m.progress.pct > 0 && m.progress.pct < 100).length;

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="Modules"
            crumbs="Course · all units"
            right={<>
              <span className="sk-chip">{modules.length} modules</span>
              <span className="sk-chip good">{done} done</span>
              <span className="sk-chip ai">{inProgress} in progress</span>
            </>}
          />
          <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1 }}>
            <div style={{ marginBottom: 14 }}>
              <div className="sk-h2">All modules</div>
              <div className="sk-body" style={{ marginTop: 2 }}>Complete in order — each unlocks the next.</div>
            </div>

            {isLoading && <div className="sk-tiny">Loading modules…</div>}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {modules.map((m) => {
                const isDone = m.progress.pct >= 100;
                return (
                  <Link key={m.id} href={`/module/${m.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="sk-box shadow hoverable" style={{ padding: 14, cursor: 'pointer', transition: 'transform 0.1s, box-shadow 0.1s' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        {isDone ? (
                          <div style={{ width: 44, height: 44, borderRadius: 44, border: '2px solid var(--good)', background: 'var(--good-tint)', display: 'grid', placeItems: 'center', fontSize: 20, color: 'var(--good)', flexShrink: 0 }}>✓</div>
                        ) : (
                          <ProgressRing pct={m.progress.pct} size={44} />
                        )}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="sk-label">{m.id}</div>
                          <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2, marginTop: 2 }}>{m.title}</div>
                          <div className="sk-tiny" style={{ marginTop: 3, lineHeight: 1.35 }}>{m.subtitle}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                        {isDone && <span className="sk-chip good xs">done</span>}
                        {!isDone && <span className="sk-chip xs">{m.progress.pct}% complete</span>}
                        <span className="sk-tiny" style={{ marginLeft: 'auto' }}>{m.lessonCount} lessons</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
