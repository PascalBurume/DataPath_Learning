'use client';

import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { PathView } from '@datapath/ui/src/primitives/PathView';
import { InFrontCard } from '@/components/InFrontCard';
import { RhythmCalendar } from '@/components/RhythmCalendar';
import { NextCheckpointCard } from '@/components/NextCheckpointCard';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function DashboardPage() {
  const { data, isLoading } = useSWR<any>('/api/dashboard', fetcher, { refreshInterval: 30_000 });
  const router = useRouter();

  const cohort = data?.cohort;
  const path: any[] = data?.path ?? [];
  const inFront = data?.inFront ?? null;
  const rhythm: { date: string; count: number }[][] =
    data?.rhythm ??
    Array.from({ length: 4 }, () =>
      Array.from({ length: 7 }, () => ({ date: '', count: 0 })),
    );
  const nextCheckpoint = data?.nextCheckpoint ?? null;
  const disclosureScore = data?.user?.disclosureScore ?? { passed: 0, total: 0 };
  const promptsLast7 = data?.promptsLast7 ?? 0;
  const recentActivity: any[] = data?.recentActivity ?? [];

  const weekLabel = cohort ? `week ${cohort.week} of ${cohort.totalWeeks}` : '—';
  const cohortName = cohort?.name ?? '';

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="your path"
            crumbs={cohortName ? `${cohortName} · ${weekLabel}` : weekLabel}
            right={
              <>
                <span className="sk-chip">{weekLabel}</span>
                <span className="sk-chip ai">{promptsLast7} prompts · 7d</span>
                <span className="sk-chip">
                  disclosure {disclosureScore.passed}/{disclosureScore.total}
                </span>
              </>
            }
          />

          <div
            style={{
              padding: '18px 26px',
              overflow: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            {/* Hero: PathView */}
            <div className="sk-box" style={{ padding: '14px 14px 8px' }}>
              <div
                className="sk-tiny"
                style={{
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                your path
              </div>
              {isLoading && path.length === 0 ? (
                <div
                  className="sk-tiny"
                  style={{ color: 'var(--ink-3)', minHeight: 230, display: 'flex', alignItems: 'center' }}
                >
                  Loading…
                </div>
              ) : path.length === 0 ? (
                <div className="sk-tiny" style={{ color: 'var(--ink-3)', minHeight: 60 }}>
                  No path data yet.
                </div>
              ) : (
                <PathView
                  nodes={path}
                  height={260}
                  onNodeClick={(id) => router.push(`/module/${id}`)}
                />
              )}
            </div>

            {/* Three-card row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 14,
                alignItems: 'stretch',
              }}
            >
              <InFrontCard inFront={inFront} />
              <RhythmCalendar rhythm={rhythm} />
              <NextCheckpointCard checkpoint={nextCheckpoint} />
            </div>

            {/* Recent activity */}
            {recentActivity.length > 0 && (
              <div className="sk-box" style={{ padding: 14 }}>
                <div
                  className="sk-tiny"
                  style={{
                    color: 'var(--ink-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 8,
                  }}
                >
                  recent activity
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {recentActivity.map((item: any) => {
                    const icon =
                      item.kind === 'prompt' ? '✦' :
                      item.kind === 'disclosure' ? '✓' :
                      item.kind === 'slide_view' ? '▸' :
                      item.kind === 'lab_submit' ? '⌬' : '◉';
                    const color =
                      item.kind === 'prompt' ? 'var(--amber)' :
                      item.kind === 'disclosure' ? 'var(--good)' : 'var(--ink-3)';
                    const when = (() => {
                      const diff = Date.now() - new Date(item.ts).getTime();
                      const mins = Math.floor(diff / 60000);
                      if (mins < 60) return `${mins}m ago`;
                      const hrs = Math.floor(mins / 60);
                      if (hrs < 24) return `${hrs}h ago`;
                      return new Date(item.ts).toLocaleDateString([], { month: 'short', day: 'numeric' });
                    })();
                    return (
                      <div
                        key={item.id}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '18px 1fr auto',
                          alignItems: 'baseline',
                          gap: 8,
                          padding: '5px 0',
                          borderBottom: '1px dashed var(--rule-soft)',
                        }}
                      >
                        <span style={{ color, fontSize: 13 }}>{icon}</span>
                        <div>
                          <span style={{ fontSize: 12, color: 'var(--ink)' }}>{item.label}</span>
                          {item.sub && (
                            <span className="sk-tiny" style={{ marginLeft: 6 }}>{item.sub}</span>
                          )}
                        </div>
                        <span className="sk-tiny" style={{ whiteSpace: 'nowrap' }}>{when}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
