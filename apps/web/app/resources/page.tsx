'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function ResourcesPage() {
  const { data } = useSWR<any>('/api/modules', fetcher);
  const mods: any[] = data?.modules ?? [];

  // Build dataset → modules map
  const datasetMap = new Map<string, string[]>();
  for (const m of mods) for (const d of m.datasets ?? []) {
    if (!datasetMap.has(d)) datasetMap.set(d, []);
    datasetMap.get(d)!.push(m.id);
  }
  const datasets = Array.from(datasetMap.entries()).sort();

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar title="Resources" crumbs="Datasets, prompt library, references"
            right={<span className="sk-chip">{datasets.length} datasets</span>} />

          <div style={{ padding: '18px 26px', overflow: 'auto', flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18, alignContent: 'start' }}>
            <div className="sk-box shadow" style={{ padding: 14 }}>
              <h3 className="sk-h3" style={{ margin: 0 }}>Datasets used in the curriculum</h3>
              <hr className="sk-divider" />
              {datasets.length === 0 && <div className="sk-tiny">Loading…</div>}
              <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', color: 'var(--ink-3)' }}>
                    <th style={{ padding: '6px 4px' }}>file</th>
                    <th style={{ padding: '6px 4px' }}>used by</th>
                  </tr>
                </thead>
                <tbody>
                  {datasets.map(([file, modIds]) => (
                    <tr key={file} style={{ borderTop: '1px dashed var(--rule)' }}>
                      <td className="sk-mono" style={{ padding: '6px 4px' }}>📊 {file}</td>
                      <td style={{ padding: '6px 4px' }}>
                        {modIds.map((id) => (
                          <Link key={id} href={`/module/${id}`} style={{ marginRight: 6 }}>
                            <span className="sk-chip xs">{id}</span>
                          </Link>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sk-box dashed" style={{ padding: 14, background: 'var(--amber-tint)' }}>
              <h3 className="sk-h3" style={{ margin: 0 }}>Quick links</h3>
              <hr className="sk-divider" />
              <ul className="sk-tiny" style={{ paddingLeft: 16, marginTop: 4, lineHeight: 1.7 }}>
                <li><Link href="/modules">All modules</Link></li>
                <li><Link href="/progress">Your progress</Link></li>
                <li><Link href="/disclosure">AI-USE disclosure</Link></li>
                <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noreferrer">pandas docs ↗</a></li>
                <li><a href="https://scikit-learn.org/stable/" target="_blank" rel="noreferrer">scikit-learn ↗</a></li>
                <li><a href="https://matplotlib.org/" target="_blank" rel="noreferrer">matplotlib ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
