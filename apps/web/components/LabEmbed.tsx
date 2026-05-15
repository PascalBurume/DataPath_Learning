'use client';

import { useState } from "react";

type Props = {
  moduleId: string;
  notebook?: string;
};

export function LabEmbed({ moduleId, notebook }: Props) {
  const [mode, setMode] = useState<"jupyterlite" | "download">("jupyterlite");

  // JupyterLite is hosted from /jupyterlite/. If not built, falls back to download.
  const liteUrl = `/jupyterlite/lab/index.html`;
  const ipynbUrl = `/api/labs/${moduleId}/notebook`;

  return (
    <div className="sk-box shadow" style={{ padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <strong>Lab · {moduleId}</strong>
        <div style={{ flex: 1 }} />
        <a className="sk-btn" href={ipynbUrl} download={`${moduleId}_lab.ipynb`}>
          ↓ Download .ipynb
        </a>
        <button
          className="sk-btn"
          onClick={() => setMode((m) => (m === "jupyterlite" ? "download" : "jupyterlite"))}
        >
          {mode === "jupyterlite" ? "hide notebook" : "open notebook"}
        </button>
      </div>

      {mode === "jupyterlite" ? (
        <iframe
          src={liteUrl}
          title={`JupyterLite — ${moduleId}`}
          style={{ width: "100%", height: 620, border: "1.25px solid var(--ink)", borderRadius: 6, background: "white" }}
        />
      ) : (
        <div className="sk-tiny" style={{ padding: 16 }}>
          {notebook
            ? <>Download the notebook above and open it in <code>jupyter lab</code> or VS Code.</>
            : <>No notebook is bundled for this module yet. Use the prompt templates and dataset from the resources page.</>
          }
        </div>
      )}
    </div>
  );
}
