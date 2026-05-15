'use client';

import { useEffect, useState } from 'react';
import { MarkdownView } from '@datapath/ui/src/primitives/MarkdownView';

// Keep Slide type for any code that still imports it
export type Slide = {
  title: string;
  body: string;
  code?: string;
  aiOff?: boolean;
};

// Legacy shim — renders a single slide (used by nothing new)
export function LessonSlide({ slide }: { slide: Slide; index?: number; total?: number }) {
  return <LessonPage body={slide.body + (slide.code ? '\n\n```python\n' + slide.code + '\n```' : '')} aiOff={!!slide.aiOff} />;
}

// Extract #### headings from body for TOC
function extractHeadings(body: string): { id: string; text: string }[] {
  const re = /^####\s+(.+)$/gm;
  const out: { id: string; text: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) {
    const text = m[1].replace(/[*_`]+/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    out.push({ id, text });
  }
  return out;
}

type LessonPageProps = {
  body: string;
  aiOff?: boolean;
};

export function LessonPage({ body, aiOff }: LessonPageProps) {
  const headings = extractHeadings(body);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const els = document.querySelectorAll('h4[data-lesson-heading]');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveId((visible[0].target as HTMLElement).id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [body]);

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, maxWidth: 800 }}>
        {aiOff && (
          <div
            style={{
              background: '#fff8e1',
              border: '1.5px solid #f59e0b',
              borderRadius: 8,
              padding: '10px 16px',
              marginBottom: 20,
              fontSize: 14,
              display: 'flex',
              gap: 8,
              alignItems: 'flex-start',
            }}
          >
            <span>⚠️</span>
            <span><strong>AI-OFF section.</strong> Work through this lesson without the AI tutor first. After submitting your own answer, you may ask Gemma to review your reasoning.</span>
          </div>
        )}
        <div className="lesson-body">
          <MarkdownView mermaid>{body}</MarkdownView>
        </div>
      </div>

      {/* TOC sidebar — only if ≥3 headings */}
      {headings.length >= 3 && (
        <div
          style={{
            width: 220,
            flexShrink: 0,
            position: 'sticky',
            top: 80,
            alignSelf: 'flex-start',
            borderLeft: '2px solid var(--rule)',
            paddingLeft: 16,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', marginBottom: 10 }}>
            In this lesson
          </div>
          <nav>
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                style={{
                  display: 'block',
                  fontSize: 13,
                  lineHeight: 1.5,
                  padding: '3px 0',
                  color: activeId === h.id ? 'var(--ink, #2c2416)' : 'var(--ink-3, #8a7f6e)',
                  fontWeight: activeId === h.id ? 700 : 400,
                  textDecoration: 'none',
                  borderLeft: activeId === h.id ? '2px solid var(--amber, #c8a84b)' : '2px solid transparent',
                  paddingLeft: activeId === h.id ? 8 : 6,
                  marginLeft: -18,
                  transition: 'all 0.15s',
                }}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
