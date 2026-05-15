interface CodeCellProps {
  n?: number;
  code: string;
  output?: string;
  locked?: boolean;
  lang?: string;
  ai?: boolean;
}

export function CodeCell({ n = 1, code, output, locked, lang = 'py', ai = false }: CodeCellProps) {
  return (
    <div style={{ border: '1.25px solid var(--ink)', borderRadius: 6, marginBottom: 8, background: 'var(--paper)', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px', borderBottom: '1px dashed var(--rule)', fontSize: 11, color: 'var(--ink-3)' }}>
        <span className="sk-mono">In [{n}]:</span>
        <span className="sk-tiny" style={{ background: 'var(--paper-2)', padding: '0 6px', borderRadius: 6, border: '1px solid var(--rule)' }}>{lang}</span>
        {locked && <span className="sk-chip aioff" style={{ marginLeft: 'auto' }}>⊘ AI-OFF</span>}
        {ai && !locked && <span className="sk-chip ai" style={{ marginLeft: 'auto' }}>✦ AI helped</span>}
        {!locked && !ai && <span className="sk-chip" style={{ marginLeft: 'auto' }}>▶ run</span>}
      </div>
      <pre className="sk-mono" style={{ margin: 0, padding: '8px 10px', whiteSpace: 'pre-wrap', background: locked ? 'var(--aioff-tint)' : 'var(--paper)', borderRadius: locked ? '0 0 6px 6px' : 0 }}>
        {code}
      </pre>
      {output && (
        <pre className="sk-mono" style={{ margin: 0, padding: '6px 10px', borderTop: '1px dashed var(--rule)', color: 'var(--ink-3)', fontSize: 12 }}>
          {output}
        </pre>
      )}
    </div>
  );
}
