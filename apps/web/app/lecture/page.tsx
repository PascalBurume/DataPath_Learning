'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';
import { LessonPage } from '@/components/LessonRenderer';
import { GemmaChatV2 } from '@/components/GemmaChatV2';
import { LessonLab } from '@/components/LessonLab';
import { NepskinTrigger } from '@/components/NepskinTrigger';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function LecturePage() {
  return (
    <Suspense fallback={<Shell><div style={{ padding: 24 }} className="sk-tiny">Loading lesson…</div></Shell>}>
      <LecturePageContent />
    </Suspense>
  );
}

function LecturePageContent() {
  const sp = useSearchParams();
  const explicitLessonId = sp.get('lesson');
  const { data: modulesData } = useSWR<any>(explicitLessonId ? null : '/api/modules', fetcher);
  const firstLessonId = modulesData?.modules?.flatMap((m: any) => m.lessons ?? [])[0]?.id;
  const lessonId = explicitLessonId ?? firstLessonId;

  const { data } = useSWR<any>(lessonId ? `/api/lessons/${lessonId}` : null, fetcher);
  const { data: userData } = useSWR<any>('/api/user', fetcher);
  const nepskinEnabled = userData?.user?.nepskinEnabled ?? true;
  const [chatOpen, setChatOpen] = useState(false);
  const [view, setView] = useState<'lesson' | 'lab'>('lesson');

  useEffect(() => {
    if (!chatOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setChatOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [chatOpen]);

  // Persist tab choice per lesson so a returning student lands where they left off.
  useEffect(() => {
    if (!lessonId || typeof window === 'undefined') return;
    const saved = localStorage.getItem(`datapath:lecture-view:${lessonId}`);
    if (saved === 'lab' || saved === 'lesson') setView(saved);
  }, [lessonId]);
  useEffect(() => {
    if (!lessonId || typeof window === 'undefined') return;
    localStorage.setItem(`datapath:lecture-view:${lessonId}`, view);
  }, [lessonId, view]);

  useEffect(() => {
    if (!data?.lesson) return;
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind: 'slide_view', moduleId: data.lesson.moduleId, lessonId: data.lesson.id }),
    }).catch(() => {});
  }, [data?.lesson?.id]);

  if (!data) return <Shell><div style={{ padding: 24 }} className="sk-tiny">Loading lesson…</div></Shell>;
  if (data.error) return <Shell><div style={{ padding: 24 }}>Lesson not found.</div></Shell>;

  const lesson = data.lesson;
  const body: string = lesson.body ?? data.slides?.map((s: any) => `#### ${s.title}\n\n${s.body}${s.code ? '\n\n```python\n' + s.code + '\n```' : ''}`).join('\n\n') ?? '';
  const prev = data.prev as { id: string; title: string } | null;
  const next = data.next as { id: string; title: string } | null;
  const aiOff = !!lesson.aiOff;

  // Build AI context from #### headings in the body
  const headingLines = body.match(/^####\s+.+$/gm) ?? [];
  const baseContext = `Lesson ${lesson.id} — ${lesson.title}\nModule ${lesson.moduleId}\nSections:\n${headingLines.slice(0, 6).join('\n')}`;
  const context = view === 'lab'
    ? `${baseContext}\nThe student is currently working in the in-browser lab notebook.`
    : baseContext;

  return (
    <Shell>
      <SketchTopbar
        title={`${lesson.id} · ${lesson.title}`}
        crumbs={`Modules › ${lesson.moduleId} › Lecture`}
        right={<>
          {prev && <Link href={`/lecture?lesson=${prev.id}`}><button className="sk-btn sm">‹ {prev.id}</button></Link>}
          {next && <Link href={`/lecture?lesson=${next.id}`}><button className="sk-btn sm primary">{next.id} ›</button></Link>}
          <Link href={`/module/${lesson.moduleId}`}><button className="sk-btn sm ghost">module</button></Link>
          <div style={{ display: 'inline-flex', border: '1.25px solid var(--ink)', borderRadius: 16, overflow: 'hidden', boxShadow: '1px 1px 0 0 var(--ink)' }}>
            <button
              className="sk-btn sm ghost"
              onClick={() => setView('lesson')}
              style={{
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none',
                padding: '4px 12px',
                background: view === 'lesson' ? 'var(--ink)' : 'transparent',
                color: view === 'lesson' ? 'var(--paper)' : 'var(--ink)',
              }}
            >
              📖 lesson
            </button>
            <button
              className="sk-btn sm ghost"
              onClick={() => setView('lab')}
              style={{
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none',
                padding: '4px 12px',
                background: view === 'lab' ? 'var(--ink)' : 'transparent',
                color: view === 'lab' ? 'var(--paper)' : 'var(--ink)',
              }}
            >
              🧪 lab
            </button>
          </div>
          <button
            className="sk-btn sm"
            onClick={() => setChatOpen((o) => !o)}
            style={{ background: chatOpen ? 'var(--amber-tint)' : undefined }}
          >
            {chatOpen ? '✕ close AI' : '💬 ask AI'}
          </button>
        </>}
      />

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* Main scrollable lesson content */}
        <div style={{ height: '100%', overflowY: 'auto', padding: '28px 40px 80px' }}>
          {/* Lesson header */}
          <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1.5px solid var(--rule)' }}>
            <div className="sk-tiny" style={{ color: 'var(--ink-3)', marginBottom: 6 }}>
              {lesson.moduleId} › {lesson.id} · {view === 'lab' ? 'Lab' : 'Lesson'}
            </div>
            <h1 style={{ fontFamily: 'Caveat, cursive', fontSize: 42, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
              {lesson.title}
            </h1>
          </div>

          {view === 'lesson' ? (
            <>
              <NepskinTrigger enabled={nepskinEnabled} aiOff={aiOff} moduleId={lesson.moduleId} lessonId={lesson.id}>
                <LessonPage body={body} aiOff={aiOff} />
              </NepskinTrigger>

              {/* Try the lab call-out */}
              <div
                style={{
                  marginTop: 32,
                  padding: 16,
                  border: '1.5px dashed var(--amber)',
                  background: 'var(--amber-tint)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>🧪</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ display: 'block', fontSize: 15 }}>Try the lab</strong>
                  <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
                    Apply this lesson in a notebook that runs in your browser. No setup needed.
                  </span>
                </div>
                <button className="sk-btn primary" onClick={() => setView('lab')}>
                  Open lab ↓
                </button>
              </div>
            </>
          ) : (
            <LessonLab lessonId={lesson.id} moduleId={lesson.moduleId} aiOff={aiOff} />
          )}

          {/* Bottom navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 48,
              paddingTop: 24,
              borderTop: '1.5px solid var(--rule)',
            }}
          >
            {prev
              ? <Link href={`/lecture?lesson=${prev.id}`}><button className="sk-btn">‹ {prev.id}: {prev.title}</button></Link>
              : <div />}
            {next
              ? <Link href={`/lecture?lesson=${next.id}`}><button className="sk-btn primary">{next.id}: {next.title} ›</button></Link>
              : <Link href={`/lab?module=${lesson.moduleId}`}><button className="sk-btn primary">Go to module lab →</button></Link>}
          </div>
        </div>

        {/* Collapsible AI Chat panel — absolute overlay so it doesn't squish the main content */}
        {chatOpen && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: 480,
              borderLeft: '1.5px solid var(--rule)',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--paper-2, #faf7f0)',
              overflow: 'hidden',
              zIndex: 10,
              boxShadow: '-4px 0 12px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: 14 }}>Gemma AI Tutor</strong>
              <button className="sk-btn sm ghost" onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 16 }}>
              <GemmaChatV2 context={context} aiOff={aiOff} lessonRef={lesson.id} moduleId={lesson.moduleId} />
              <div className="sk-box dashed" style={{ padding: 10, marginTop: 10, fontSize: 12, color: 'var(--ink-3)' }}>
                Every prompt is logged to your <Link href="/disclosure" style={{ color: 'inherit' }}>AI Disclosure</Link> page.
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>{children}</div>
      </div>
    </div>
  );
}
