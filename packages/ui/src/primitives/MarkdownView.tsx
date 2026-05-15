'use client';

import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  children: string;
  /** When true, render mermaid blocks as diagrams (lesson body). */
  mermaid?: boolean;
  /** Compact (smaller fonts, tighter spacing) — used inside chat bubbles. */
  compact?: boolean;
};

/**
 * Single source of truth for rendering markdown across DataPath surfaces
 * (lesson body, AI chat answer, prompts log). Wraps `react-markdown` with the
 * project's plugin set (gfm, math/katex) plus `react-syntax-highlighter` for
 * fenced code blocks and overrides the default elements with `.sk-*` styling.
 */
export function MarkdownView({ children, mermaid = false, compact = false }: Props) {
  const baseFont = compact ? 14 : 15;
  const lineHeight = compact ? 1.55 : 1.7;

  return (
    <div
      className="sk-markdown"
      style={{ fontSize: baseFont, lineHeight, color: 'var(--ink, #2c2416)' }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: (props: any) => {
            // react-markdown v9+ dropped the `inline` prop; detect fenced
            // blocks by the language-* className that GFM attaches.
            const { className, children: kids } = props;
            const match = /language-(\w+)/.exec(className ?? '');
            if (!match) {
              return (
                <code
                  style={{
                    background: 'var(--paper-2, #f5f0e8)',
                    border: '1px solid var(--rule)',
                    borderRadius: 3,
                    padding: '1px 5px',
                    fontFamily: 'Cutive Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '0.9em',
                  }}
                >
                  {kids}
                </code>
              );
            }
            const lang = match[1];
            const code = String(kids ?? '').replace(/\n$/, '');
            if (mermaid && lang === 'mermaid') {
              return <MermaidDiagram chart={code} />;
            }
            return <CodeBlock code={code} lang={lang} />;
          },
          // react-markdown wraps fenced code in <pre><code>; replace the outer
          // <pre> with a <div> so our CodeBlock can sit inside without
          // producing invalid <p><pre> nesting when the renderer is streaming.
          pre: ({ children }: any) => <div style={{ margin: 0 }}>{children}</div>,
          // For the same reason, render top-level paragraphs as <div> so any
          // fenced code that streams in as a transient inline node still
          // produces valid HTML during partial parses.
          p: ({ children }: any) => (
            <div style={{ margin: compact ? '0.4rem 0' : '0.75rem 0' }}>{children}</div>
          ),
          table: ({ children }: any) => (
            <div style={{ overflowX: 'auto', margin: '0.75rem 0' }}>
              <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: baseFont - 1 }}>
                {children}
              </table>
            </div>
          ),
          th: ({ children }: any) => (
            <th style={{ border: '1px solid var(--rule)', padding: '6px 12px', background: 'var(--paper-2)', textAlign: 'left' }}>{children}</th>
          ),
          td: ({ children }: any) => (
            <td style={{ border: '1px solid var(--rule)', padding: '6px 12px' }}>{children}</td>
          ),
          blockquote: ({ children }: any) => (
            <blockquote
              style={{
                borderLeft: '4px solid var(--amber, #c8a84b)',
                margin: '0.75rem 0',
                padding: '6px 14px',
                background: 'var(--amber-tint, #fdf6e3)',
                borderRadius: '0 6px 6px 0',
                fontStyle: 'italic',
              }}
            >
              {children}
            </blockquote>
          ),
          strong: ({ children }: any) => (
            <strong style={{ color: 'var(--ink, #2c2416)', fontWeight: 700 }}>{children}</strong>
          ),
          a: ({ children, href }: any) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noreferrer' : undefined}
              style={{ color: 'var(--amber, #c87f1c)', textDecoration: 'underline' }}
            >
              {children}
            </a>
          ),
          h4: ({ children, ...rest }: any) => {
            const text = String(children).replace(/[*_`]+/g, '').trim();
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h4
                id={id}
                data-lesson-heading={mermaid ? 'true' : undefined}
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontSize: compact ? 20 : 26,
                  fontWeight: 700,
                  margin: compact ? '1rem 0 0.4rem' : '2rem 0 0.75rem',
                  paddingTop: compact ? 0 : '0.5rem',
                  borderTop: compact ? 'none' : '1.5px solid var(--rule, #e0d8c8)',
                  scrollMarginTop: 80,
                }}
                {...rest}
              >
                {children}
              </h4>
            );
          },
          h5: ({ children }: any) => (
            <h5 style={{ fontFamily: 'inherit', fontSize: compact ? 12 : 14, fontWeight: 700, margin: '0.75rem 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-3)' }}>{children}</h5>
          ),
          ul: ({ children }: any) => (
            <ul style={{ margin: '0.4rem 0', paddingLeft: '1.4rem' }}>{children}</ul>
          ),
          ol: ({ children }: any) => (
            <ol style={{ margin: '0.4rem 0', paddingLeft: '1.4rem' }}>{children}</ol>
          ),
          li: ({ children }: any) => (
            <li style={{ margin: '0.15rem 0' }}>{children}</li>
          ),
          hr: () => (
            <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', margin: '1rem 0' }} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  }
  return (
    <div
      style={{
        position: 'relative',
        margin: '0.75rem 0',
        border: '1px solid var(--rule)',
        borderRadius: 6,
        background: '#fafaf6',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 10px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--paper-2, #efeadd)',
          fontSize: 11,
          fontFamily: 'Cutive Mono, monospace',
          color: 'var(--ink-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        <span>{lang}</span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          style={{
            background: 'transparent',
            border: '1px solid var(--rule)',
            borderRadius: 12,
            padding: '1px 8px',
            fontSize: 11,
            cursor: 'pointer',
            color: copied ? 'var(--good)' : 'var(--ink-3)',
            fontFamily: 'inherit',
          }}
        >
          {copied ? '✓ copied' : '⧉ copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={oneLight}
        customStyle={{
          margin: 0,
          padding: '12px 14px',
          background: '#fafaf6',
          fontSize: 13,
          lineHeight: 1.55,
          fontFamily: 'Cutive Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
        codeTagProps={{
          style: { fontFamily: 'inherit' },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    let cancelled = false;
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: 'neutral', fontFamily: 'inherit' });
      const id = 'mermaid-' + Math.random().toString(36).slice(2);
      mermaid.render(id, chart)
        .then(({ svg: rendered }) => { if (!cancelled) setSvg(rendered); })
        .catch((e) => { if (!cancelled) setError(String(e)); });
    });
    return () => { cancelled = true; };
  }, [chart]);
  if (error) return <pre style={{ color: 'red', fontSize: 12 }}>{error}</pre>;
  if (!svg) return <div style={{ padding: 16, color: 'var(--ink-3)', fontSize: 13 }}>Rendering diagram…</div>;
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: svg }} style={{ overflowX: 'auto', margin: '12px 0' }} />;
}
