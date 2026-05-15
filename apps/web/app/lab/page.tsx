'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { LabEmbed } from '@/components/LabEmbed';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function LabPage() {
  return (
    <Suspense fallback={<div className="sk-paper" style={{ minHeight: '100vh' }} />}>
      <LabPageContent />
    </Suspense>
  );
}

function LabPageContent() {
  const sp = useSearchParams();
  const explicitModuleId = sp.get('module');
  const { data: modulesData } = useSWR<any>(explicitModuleId ? null : '/api/modules', fetcher);
  const moduleId = explicitModuleId ?? modulesData?.modules?.[0]?.id;
  const { data } = useSWR<any>(moduleId ? `/api/modules/${moduleId}` : null, fetcher);
  const m = data?.module;
  const datasets: string[] = m ? JSON.parse(m.datasetsJson) : [];
  const prompts: any[] = data?.prompts ?? [];

  if (!moduleId) return <div className="sk-paper" style={{ minHeight: '100vh' }} />;

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title={m ? `Lab · ${m.id} · ${m.title}` : 'Lab'}
            crumbs={`Modules › ${moduleId} › Lab`}
            right={<>
              <Link href={`/module/${moduleId}`}><button className="sk-btn sm">← module</button></Link>
              <Link href={`/disclosure?module=${moduleId}`}><button className="sk-btn sm">disclosure</button></Link>
            </>}
          />
          <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 18, alignContent: 'start' }}>
            <LabEmbed moduleId={moduleId} notebook={moduleId} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {datasets.length > 0 && (
                <div className="sk-box" style={{ padding: 12 }}>
                  <h3 className="sk-h3">Datasets</h3>
                  <hr className="sk-divider" />
                  {datasets.map((d) => (
                    <div key={d} className="sk-mono" style={{ fontSize: 12, padding: '3px 0', color: 'var(--ink-2)' }}>📊 {d}</div>
                  ))}
                </div>
              )}

              {prompts.length > 0 && (
                <div className="sk-box" style={{ padding: 12 }}>
                  <h3 className="sk-h3">Approved prompt templates</h3>
                  <hr className="sk-divider" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                    {prompts.map((p) => (
                      <details key={p.id}>
                        <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
                          <span style={{ color: 'var(--amber)' }}>✦ T{p.idx}</span> {p.title}
                        </summary>
                        <pre style={{ fontSize: 11, whiteSpace: 'pre-wrap', background: '#faf7f0', padding: 8, borderRadius: 4, marginTop: 4 }}>{p.body}</pre>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div className="sk-box dashed" style={{ padding: 12, background: 'var(--amber-tint)' }}>
                <h3 className="sk-h3" style={{ margin: 0 }}>Working with the lab</h3>
                <hr className="sk-divider" />
                <ol className="sk-tiny" style={{ paddingLeft: 18, margin: 0 }}>
                  <li>Open the notebook (above) or download the .ipynb.</li>
                  <li>Run cells, edit code, capture outputs.</li>
                  <li>Use Gemma in the lecture page; every prompt is logged.</li>
                  <li>Submit your AI-USE.md from the Disclosure page.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
