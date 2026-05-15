'use client';

import { useMemo, useState } from 'react';

type Props = {
  lessonId: string;
  moduleId: string;
  /** When true, AI assistance is disabled for this lab. */
  aiOff?: boolean;
};

/**
 * In-browser Jupyter notebook lab powered by JupyterLite + Pyodide.
 * Runs entirely client-side; notebook state is persisted in the browser only.
 */
export function LessonLab({ lessonId, moduleId, aiOff }: Props) {
  const [reloadKey, setReloadKey] = useState(0);
  const [available, setAvailable] = useState<boolean | null>(null);

  // Notebook resolution: prefer per-lesson override, fall back to per-module.
  // The JupyterLite content tree mirrors `datapath/`, so paths are like `M1/lab.ipynb`.
  const notebookPath = `${moduleId}/lab.ipynb`;

  const liteUrl = useMemo(
    () =>
      `/jupyterlite/lab/index.html?path=${encodeURIComponent(notebookPath)}&reset=${reloadKey}`,
    [notebookPath, reloadKey],
  );

  const downloadUrl = `/api/lessons/${lessonId}/notebook`;
  const openInNewTab = `/jupyterlite/lab/index.html?path=${encodeURIComponent(notebookPath)}`;

  function resetNotebook() {
    if (typeof window === 'undefined') return;
    if (!confirm('Reset the notebook? Your in-browser edits and outputs will be cleared.')) return;
    try {
      // JupyterLite stores contents under IndexedDB + localStorage. We clear
      // localStorage keys for this notebook path; IndexedDB persists in iframe.
      Object.keys(localStorage)
        .filter((k) => k.includes(notebookPath))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
    setReloadKey((k) => k + 1);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {aiOff && (
        <div
          className="sk-aioff-band"
          style={{
            padding: '10px 14px',
            border: '1.5px solid var(--aioff)',
            background: 'var(--aioff-tint)',
            color: 'var(--aioff)',
            borderRadius: 6,
            fontSize: 13,
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <span>🔒</span>
          <span>
            <strong>AI-OFF lab.</strong> Work through this notebook yourself first.
            The Gemma tutor is locked for this section.
          </span>
        </div>
      )}

      <div
        className="sk-box shadow"
        style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <strong style={{ fontSize: 15 }}>
            Lab · {lessonId}
          </strong>
          <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
            runs in your browser
          </span>
          <div style={{ flex: 1 }} />
          <a className="sk-btn sm" href={downloadUrl} download={`${moduleId}_${lessonId}_lab.ipynb`}>
            ↓ Download .ipynb
          </a>
          <a className="sk-btn sm" href={openInNewTab} target="_blank" rel="noreferrer">
            ↗ Open in new tab
          </a>
          <button className="sk-btn sm" onClick={resetNotebook} type="button">
            ↻ Reset notebook
          </button>
        </div>

        <div
          className="sk-tiny"
          style={{
            color: 'var(--ink-3)',
            background: 'var(--paper-2)',
            padding: '6px 10px',
            borderRadius: 4,
            border: '1px dashed var(--rule-soft)',
          }}
        >
          ✦ This notebook runs <strong>fully in your browser</strong> via Pyodide.
          Your work is saved here only — use ↓ Download to keep a copy.
        </div>

        <iframe
          key={reloadKey}
          src={liteUrl}
          title={`JupyterLite — ${lessonId}`}
          onLoad={(e) => {
            // Detect whether JupyterLite is actually built (vs. 404 placeholder).
            try {
              const doc = (e.currentTarget as HTMLIFrameElement).contentDocument;
              if (doc && /404|not found/i.test(doc.title)) setAvailable(false);
              else setAvailable(true);
            } catch {
              // Cross-origin or loaded — assume available.
              setAvailable(true);
            }
          }}
          style={{
            width: '100%',
            height: 640,
            border: '1.25px solid var(--ink)',
            borderRadius: 6,
            background: 'white',
          }}
        />

        {available === false && (
          <div
            className="sk-tiny"
            style={{
              padding: 10,
              border: '1.5px solid var(--warn)',
              background: '#fff5e6',
              borderRadius: 4,
              color: 'var(--warn)',
            }}
          >
            ⚠ JupyterLite isn't built yet. Run{' '}
            <code style={{ fontFamily: 'Cutive Mono, monospace' }}>
              pnpm jupyterlite:build
            </code>{' '}
            from the repo root, or use ↓ Download to open the notebook locally.
          </div>
        )}
      </div>
    </div>
  );
}
