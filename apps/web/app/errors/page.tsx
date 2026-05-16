'use client';

// Confusion Heatmap — shows ErrorLog entries for students (own) and instructors (all).
// Students see their own confusion reports + visualization-triggered entries.
// Instructors see everything, grouped and filterable.

import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { NavSidebar } from '@/components/NavSidebar';

type LogRow = {
  id: string;
  userId: string | null;
  moduleId: string | null;
  lessonId: string | null;
  word: string;
  message: string;
  source: string;
  context: string | null;
  createdAt: string;
};

const SOURCE_LABELS: Record<string, { label: string; icon: string; color: string }> = {
  nepskin:     { label: 'visualize', icon: '◈', color: 'var(--amber)' },
  self_report: { label: 'reported',  icon: '?', color: 'var(--ink-2)' },
};

function fmt(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function ErrorsPage() {
  const { data: session } = useSession();
  const [logs, setLogs] = useState<LogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterModule, setFilterModule] = useState('');
  const [filterSource, setFilterSource] = useState('');
  const [filterWord, setFilterWord] = useState('');

  const isInstructor = (session?.user as any)?.role === 'instructor' || (session?.user as any)?.role === 'admin';

  useEffect(() => {
    fetch('/api/error-log')
      .then(r => r.json())
      .then(d => { setLogs(d.logs ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const modules = useMemo(() => {
    const s = new Set<string>();
    logs.forEach(l => { if (l.moduleId) s.add(l.moduleId); });
    return Array.from(s).sort();
  }, [logs]);

  const filtered = useMemo(() => logs.filter(l => {
    if (filterModule && l.moduleId !== filterModule) return false;
    if (filterSource && l.source !== filterSource) return false;
    if (filterWord && !l.word.includes(filterWord.toLowerCase())) return false;
    return true;
  }), [logs, filterModule, filterSource, filterWord]);

  // Top terms (by frequency in filtered set)
  const topTerms = useMemo(() => {
    const counts: Record<string, number> = {};
    filtered.forEach(l => { counts[l.word] = (counts[l.word] ?? 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 15);
  }, [filtered]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--paper)' }}>
      <NavSidebar />
      <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: 'Caveat', fontSize: 26, fontWeight: 700, color: 'var(--ink)' }}>
            Confusion Heatmap
          </div>
          <div className="sk-tiny" style={{ color: 'var(--ink-3)', marginTop: 4 }}>
            {isInstructor
              ? 'All student confusion reports and visualization-triggered entries.'
              : 'Your confusion reports and visualizations.'}
            {' '}{logs.length} total entries.
          </div>
        </div>

        {/* Top terms summary */}
        {topTerms.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div className="sk-label" style={{ marginBottom: 10, color: 'var(--ink-2)' }}>Top confused terms</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {topTerms.map(([word, count]) => (
                <button
                  key={word}
                  onClick={() => setFilterWord(filterWord === word ? '' : word)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 20,
                    border: '1.5px solid var(--rule)',
                    background: filterWord === word ? 'var(--ink)' : 'var(--paper)',
                    color: filterWord === word ? 'var(--paper)' : 'var(--ink)',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  {word}
                  <span style={{
                    background: filterWord === word ? 'var(--paper)' : 'var(--ink)',
                    color: filterWord === word ? 'var(--ink)' : 'var(--paper)',
                    borderRadius: 10,
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '1px 5px',
                  }}>{count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
          <input
            placeholder="Search term…"
            value={filterWord}
            onChange={e => setFilterWord(e.target.value.toLowerCase())}
            style={{
              padding: '5px 10px', borderRadius: 6, border: '1.5px solid var(--rule)',
              background: 'var(--paper)', color: 'var(--ink)', fontSize: 13, width: 160,
              outline: 'none',
            }}
          />
          <select
            value={filterModule}
            onChange={e => setFilterModule(e.target.value)}
            style={{
              padding: '5px 10px', borderRadius: 6, border: '1.5px solid var(--rule)',
              background: 'var(--paper)', color: 'var(--ink)', fontSize: 13, cursor: 'pointer',
            }}
          >
            <option value="">All modules</option>
            {modules.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            value={filterSource}
            onChange={e => setFilterSource(e.target.value)}
            style={{
              padding: '5px 10px', borderRadius: 6, border: '1.5px solid var(--rule)',
              background: 'var(--paper)', color: 'var(--ink)', fontSize: 13, cursor: 'pointer',
            }}
          >
            <option value="">All sources</option>
            <option value="self_report">? self-reported</option>
            <option value="nepskin">◈ visualize</option>
          </select>
          {(filterModule || filterSource || filterWord) && (
            <button
              onClick={() => { setFilterModule(''); setFilterSource(''); setFilterWord(''); }}
              style={{
                padding: '5px 10px', borderRadius: 6, border: '1.5px solid var(--rule)',
                background: 'transparent', color: 'var(--ink-3)', fontSize: 12, cursor: 'pointer',
              }}
            >
              clear ✕
            </button>
          )}
        </div>

        {/* Table */}
        {loading ? (
          <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>Loading…</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', paddingTop: 60 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>?</div>
            <div className="sk-label" style={{ color: 'var(--ink-3)' }}>
              {logs.length === 0
                ? 'No confusion entries yet. Run the confusion reporter in a notebook or use ◈ Visualize on a lesson.'
                : 'No entries match the current filters.'}
            </div>
          </div>
        ) : (
          <div style={{ border: '1.5px solid var(--rule)', borderRadius: 8, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--paper-2, #f5f4f0)', borderBottom: '1.5px solid var(--rule)' }}>
                  <th style={th}>Term</th>
                  <th style={th}>Module</th>
                  <th style={th}>Source</th>
                  {isInstructor && <th style={th}>User</th>}
                  <th style={th}>Note</th>
                  <th style={{ ...th, textAlign: 'right' }}>When</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => {
                  const src = SOURCE_LABELS[row.source] ?? { label: row.source, icon: '·', color: 'var(--ink-3)' };
                  return (
                    <tr
                      key={row.id}
                      style={{
                        borderBottom: i < filtered.length - 1 ? '1px solid var(--rule)' : 'none',
                        background: i % 2 === 0 ? 'transparent' : 'var(--paper-2, #faf9f6)',
                      }}
                    >
                      <td style={{ ...td, fontWeight: 600 }}>{row.word}</td>
                      <td style={td}>
                        {row.moduleId
                          ? <span style={{ background: 'var(--amber-tint)', color: 'var(--amber)', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}>{row.moduleId}</span>
                          : <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </td>
                      <td style={td}>
                        <span style={{ color: src.color, fontWeight: 600, fontSize: 11 }}>
                          {src.icon} {src.label}
                        </span>
                      </td>
                      {isInstructor && (
                        <td style={{ ...td, color: 'var(--ink-3)', fontFamily: 'monospace', fontSize: 11 }}>
                          {row.userId?.slice(-6) ?? '—'}
                        </td>
                      )}
                      <td style={{ ...td, color: 'var(--ink-2)', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {row.message || row.context?.slice(0, 80) || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </td>
                      <td style={{ ...td, textAlign: 'right', color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
                        {fmt(row.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="sk-tiny" style={{ color: 'var(--ink-4)', marginTop: 10, textAlign: 'right' }}>
            {filtered.length} of {logs.length} entries
          </div>
        )}
      </div>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: '8px 12px',
  textAlign: 'left',
  fontWeight: 700,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--ink-3)',
};

const td: React.CSSProperties = {
  padding: '8px 12px',
  verticalAlign: 'middle',
};
