'use client';

import { useEffect, useRef, useState } from 'react';
import { MarkdownView } from '@datapath/ui/src/primitives/MarkdownView';

type Lang = 'en' | 'fr' | 'sw';
const LANGS: { code: Lang; label: string; title: string }[] = [
  { code: 'en', label: 'EN', title: 'English (original)' },
  { code: 'fr', label: 'FR', title: 'Français' },
  { code: 'sw', label: 'SW', title: 'Kiswahili' },
];
const TRANSLATING_COPY: Record<Lang, string> = {
  en: '',
  fr: 'Gemma traduit cette leçon en français — exécution locale, aucune donnée ne quitte votre appareil…',
  sw: 'Gemma anatafsiri somo hili kwa Kiswahili — kinachoendeshwa kienyeji, hakuna data inayoondoka kwenye kifaa chako…',
};

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
  lessonId?: string;
};

export function LessonPage({ body, aiOff, lessonId }: LessonPageProps) {
  const [lang, setLang] = useState<Lang>('en');
  const [translated, setTranslated] = useState<Record<string, string>>({});
  const [translating, setTranslating] = useState<Lang | null>(null);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const displayBody = lang === 'en' ? body : (translated[lang] ?? '');
  const headings = extractHeadings(displayBody || body);
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
  }, [displayBody]);

  // When switching to a non-English language for the first time on this
  // lesson, stream the translation from the local Gemma proxy.
  useEffect(() => {
    if (lang === 'en') return;
    if (translated[lang]) return;
    if (!lessonId) {
      setTranslateError('Translation unavailable: missing lesson id.');
      return;
    }
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setTranslating(lang);
    setTranslateError(null);

    (async () => {
      try {
        const r = await fetch(`/api/lessons/${encodeURIComponent(lessonId)}/translate?lang=${lang}`, {
          method: 'POST',
          signal: ctrl.signal,
        });
        if (!r.ok || !r.body) throw new Error(`HTTP ${r.status}`);
        const reader = r.body.getReader();
        const decoder = new TextDecoder();
        let buf = '';
        let acc = '';
        let cachedHit = false;
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          const lines = buf.split('\n');
          buf = lines.pop() ?? '';
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const j = JSON.parse(line);
              if (j.token) {
                acc += j.token;
                setTranslated((t) => ({ ...t, [lang]: acc }));
              }
              if (j.error) throw new Error(j.error);
              if (j.done && j.cached) cachedHit = true;
            } catch (e: any) {
              if (e?.message && !line.includes('"token"')) throw e;
            }
          }
        }
        if (acc.trim().length === 0) throw new Error('empty translation');
        // Tag with cached marker so we can show "instant from cache" badge.
        if (cachedHit) setTranslated((t) => ({ ...t, [`${lang}:cached`]: '1' }));
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
        setTranslateError(err?.message ?? 'Translation failed');
      } finally {
        setTranslating((cur) => (cur === lang ? null : cur));
      }
    })();

    return () => ctrl.abort();
    // We intentionally exclude `translated` from deps: it changes on every
    // streamed token, and including it would abort the in-flight request
    // mid-stream. The early-return above still uses the latest closure value
    // because the effect re-runs whenever `lang` changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, lessonId]);

  const isTranslating = translating === lang && !translated[lang];

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, maxWidth: 800 }}>
        {lessonId && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 14,
              fontSize: 12,
              color: 'var(--ink-3)',
            }}
          >
            <span style={{ fontWeight: 600 }}>Language:</span>
            <div
              style={{
                display: 'flex',
                gap: 2,
                background: 'var(--paper-2, #f5f2eb)',
                border: '1px solid var(--rule)',
                borderRadius: 6,
                padding: 2,
              }}
            >
              {LANGS.map(({ code, label, title }) => (
                <button
                  key={code}
                  title={title}
                  onClick={() => setLang(code)}
                  disabled={!!translating && translating !== code}
                  style={{
                    fontSize: 11,
                    fontWeight: lang === code ? 700 : 400,
                    padding: '3px 9px',
                    border: 'none',
                    borderRadius: 4,
                    cursor: translating && translating !== code ? 'wait' : 'pointer',
                    background: lang === code ? 'var(--ink)' : 'transparent',
                    color: lang === code ? 'var(--paper, #fff)' : 'var(--ink-3)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            {lang !== 'en' && translated[`${lang}:cached`] && !isTranslating && (
              <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                cached · Gemma {lang.toUpperCase()}
              </span>
            )}
            {lang !== 'en' && !translated[`${lang}:cached`] && translated[lang] && !isTranslating && (
              <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                translated locally by Gemma · saved
              </span>
            )}
            {translateError && (
              <span className="sk-chip warn" style={{ marginLeft: 4 }}>
                {translateError}
              </span>
            )}
          </div>
        )}
        {isTranslating && (
          <div
            style={{
              background: 'var(--paper-2, #faf7f0)',
              border: '1.25px dashed var(--rule)',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 14,
              fontSize: 13,
              color: 'var(--ink-3)',
            }}
          >
            <span style={{ marginRight: 8 }}>⏳</span>
            {TRANSLATING_COPY[lang]}
          </div>
        )}
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
          <MarkdownView mermaid>{displayBody || body}</MarkdownView>
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
