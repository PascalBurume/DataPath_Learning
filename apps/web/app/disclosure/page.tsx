'use client';

import React, { Suspense, useEffect, useState, useCallback } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useSearchParams } from 'next/navigation';
import { NavSidebar } from '@/components/NavSidebar';
import { SketchTopbar } from '@datapath/ui/src/primitives/SketchTopbar';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

type Decision = 'accept' | 'edit' | 'reject' | 'nepskin' | null;

export default function DisclosurePage() {
  return (
    <Suspense fallback={<div className="sk-paper" style={{ minHeight: '100vh' }} />}>
      <DisclosurePageContent />
    </Suspense>
  );
}

function DisclosurePageContent() {
  const sp = useSearchParams();
  const initialModule = sp.get('module') ?? '';
  const initialStep = (sp.get('step') as 'cells' | 'disclosure' | 'reflection') ?? 'cells';

  const [moduleId, setModuleId] = useState(initialModule);
  const [step, setStep] = useState<'cells' | 'disclosure' | 'reflection'>(initialStep);
  const [reflection, setReflection] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [signed, setSigned] = useState(false);

  const { mutate } = useSWRConfig();
  const { data: mods } = useSWR<any>('/api/modules', fetcher);
  const { data: promptsData, mutate: refetchPrompts } = useSWR<any>(
    moduleId ? `/api/prompts?module=${moduleId}&limit=100` : null,
    fetcher,
    { refreshInterval: 5000 },
  );
  const { data: disc, mutate: refetchD } = useSWR<any>('/api/disclosure', fetcher);

  const allModules: any[] = mods?.modules ?? [];
  const prompts: any[] = promptsData?.prompts ?? [];
  const past: any[] = disc?.disclosures ?? [];

  useEffect(() => {
    if (!moduleId && allModules[0]?.id) setModuleId(allModules[0].id);
  }, [moduleId, allModules]);

  const currentDisclosure = past.find((d: any) => d.moduleId === moduleId) ?? null;

  useEffect(() => {
    if (currentDisclosure?.reflection) setReflection(currentDisclosure.reflection);
  }, [currentDisclosure?.id]);

  // Optimistically update a prompt's decision
  const setDecision = useCallback(async (id: string, decision: Decision) => {
    refetchPrompts((prev: any) => ({
      ...prev,
      prompts: prev?.prompts?.map((p: any) => p.id === id ? { ...p, decision } : p),
    }), { revalidate: false });
    await fetch(`/api/prompts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ decision }),
    });
    refetchPrompts();
  }, [refetchPrompts]);

  const setVerified = useCallback(async (id: string, verified: boolean) => {
    refetchPrompts((prev: any) => ({
      ...prev,
      prompts: prev?.prompts?.map((p: any) => p.id === id ? { ...p, verified } : p),
    }), { revalidate: false });
    await fetch(`/api/prompts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verified }),
    });
    refetchPrompts();
  }, [refetchPrompts]);

  // Build the richer Markdown form of the disclosure — used for the
  // "Download as AI_USE.md" button. The same data feeds the API submit, but
  // the file format is friendlier (frontmatter-style header, tables, reflection
  // as blockquote) so a learner can attach it to a portfolio or share with an
  // instructor without further formatting.
  function buildAiUseMd(): string {
    const lines: string[] = [];
    const visualized = prompts.filter((p) => p.decision === 'nepskin').length;
    lines.push(`# AI_USE.md — ${moduleId} · ${moduleTitle}`);
    lines.push('');
    lines.push(`- **Student:** sofia (cohort A)`);
    lines.push(`- **Date:** ${today}`);
    lines.push(`- **Items:** ${prompts.length} prompt${prompts.length === 1 ? '' : 's'}`);
    lines.push(`- **Model:** gemma4:e2b (local Ollama — runs on the learner's device)`);
    lines.push('');
    lines.push('## Summary');
    lines.push('');
    lines.push('| Decision | Count |');
    lines.push('|---|---|');
    lines.push(`| accepted | ${accepted} |`);
    lines.push(`| edited | ${edited} |`);
    lines.push(`| rejected | ${rejected} |`);
    lines.push(`| visualized | ${visualized} |`);
    lines.push(`| verified | ${verifiedCount} / ${prompts.length} |`);
    lines.push('');
    lines.push(`**Disclosure score:** ${score} / 5 — ${scoreLabel}`);
    lines.push('');
    lines.push('## Prompts');
    lines.push('');
    prompts.forEach((p, i) => {
      const n = String(i + 1).padStart(2, '0');
      const dec = p.decision ?? 'unset';
      const ver = p.verified ? 'verified' : 'needs verify';
      const text = p.prompt.replace(/\s+/g, ' ').slice(0, 80);
      const elided = p.prompt.length > 80 ? '…' : '';
      lines.push(`${n}. "${text}${elided}" — **${dec}** · ${ver}`);
    });
    lines.push('');
    if (reflection.trim()) {
      lines.push('## Reflection');
      lines.push('');
      lines.push(reflection.trim().split('\n').map((l) => `> ${l}`).join('\n'));
      lines.push('');
    }
    lines.push('---');
    lines.push('');
    lines.push(`_Generated by DataPath Learning. Local model: gemma4:e2b. No data left your device._`);
    return lines.join('\n');
  }

  function downloadAiUseMd() {
    if (prompts.length === 0) { setMsg('No prompts to export yet.'); return; }
    const md = buildAiUseMd();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI_USE_${moduleId}_${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMsg(`Downloaded AI_USE_${moduleId}.md ✓`);
  }

  async function submit() {
    if (!moduleId) { setMsg('Choose a module before submitting.'); return; }
    if (!reflection.trim()) { setMsg('Please write a reflection before submitting.'); return; }
    setSubmitting(true);
    const body = prompts
      .map((p, i) => `${String(i + 1).padStart(2, '0')} "${p.prompt.slice(0, 60)}" · ${p.decision ?? 'accept'} · ${p.verified ? 'verified' : 'needs verify'}`)
      .join('\n');
    const r = await fetch('/api/disclosure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moduleId,
        body,
        promptIds: prompts.map((p) => p.id),
        reflection,
      }),
    });
    setSubmitting(false);
    if (r.ok) {
      setMsg('Disclosure submitted ✓');
      refetchD();
      mutate('/api/dashboard');
      setSigned(true);
    } else {
      setMsg('Failed to submit.');
    }
  }

  // Finish line checklist
  const allDecisionsSet = prompts.length > 0 && prompts.every((p) => p.decision != null);
  const allVerified = prompts.length > 0 && prompts.every((p) => p.verified);
  const hasReflection = reflection.trim().length > 0;
  const finishItems = [
    { label: 'auto-fill prompts from session log', done: prompts.length > 0 },
    { label: 'mark accept / edit / reject', done: allDecisionsSet },
    { label: 'mark verified / needs verify', done: allVerified },
    { label: 'write reflection (2–4 sentences)', done: hasReflection },
    { label: 'sign', done: signed },
  ];

  // Summary counts
  const accepted = prompts.filter((p) => p.decision === 'accept').length;
  const edited = prompts.filter((p) => p.decision === 'edit').length;
  const rejected = prompts.filter((p) => p.decision === 'reject').length;
  const verifiedCount = prompts.filter((p) => p.verified).length;

  // Disclosure score: simple 5-point scale
  const score = Math.min(5, Math.round(
    (finishItems.filter((i) => i.done).length / finishItems.length) * 5,
  ));
  const scoreLabel = score >= 5 ? 'honest, specific, verified — well done.' : score >= 3 ? 'good start, keep going.' : 'fill in more to complete.';

  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toLowerCase().replace(',', ' ·');
  const moduleTitle = allModules.find((m) => m.id === moduleId)?.title ?? moduleId;

  return (
    <div className="sk-paper" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavSidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <SketchTopbar
            title="AI_USE.md · disclosure"
            crumbs={`lab ${moduleId} › submission step ${step === 'cells' ? '1' : step === 'disclosure' ? '2' : '3'} of 3`}
            right={
              <>
                {prompts.filter((p) => !p.decision).length > 0 && (
                  <span className="sk-chip warn">{prompts.filter((p) => !p.decision).length} prompts to disclose</span>
                )}
                <button className="sk-btn sm ghost" onClick={() => { setSubmitting(false); }}>save draft</button>
                <button
                  className="sk-btn sm ghost"
                  onClick={downloadAiUseMd}
                  disabled={prompts.length === 0}
                  title="Download this disclosure as AI_USE.md — attach to your portfolio or share with your instructor"
                >
                  ⤓ download .md
                </button>
                {step === 'reflection' && (
                  <button className="sk-btn primary" disabled={submitting} onClick={submit}>
                    {submitting ? 'submitting…' : 'finish & submit ›'}
                  </button>
                )}
              </>
            }
          />

          {/* Step tabs */}
          <div style={{
            borderBottom: '1.5px solid var(--rule)',
            padding: '10px 26px',
            background: 'var(--paper-2)',
            display: 'flex',
            gap: 0,
            alignItems: 'center',
          }}>
            {(['cells', 'disclosure', 'reflection'] as const).map((s, i) => {
              const labels = ['lab cells', 'disclosure', 'reflection'];
              const done = (s === 'cells' && prompts.length > 0) ||
                (s === 'disclosure' && allDecisionsSet) ||
                (s === 'reflection' && hasReflection);
              const active = step === s;
              return (
                <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && (
                    <div style={{ width: 40, borderTop: '1.5px dashed var(--rule)', margin: '0 4px' }} />
                  )}
                  <button
                    onClick={() => setStep(s)}
                    style={{
                      padding: '4px 14px',
                      border: '1.5px solid var(--rule)',
                      borderRadius: 20,
                      background: active ? 'var(--ink)' : done ? 'var(--good-tint)' : 'var(--paper)',
                      color: active ? 'var(--paper)' : done ? 'var(--good)' : 'var(--ink)',
                      fontFamily: 'inherit',
                      fontSize: 13,
                      fontWeight: active ? 700 : 400,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {done && !active && <span>✓</span>}
                    {!done && !active && <span style={{ color: 'var(--ink-3)' }}>{i + 1}</span>}
                    {labels[i]}
                  </button>
                </div>
              );
            })}

            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, alignItems: 'center' }}>
              <span className="sk-tiny" style={{ color: 'var(--ink-3)' }}>~2 min · part of learning here</span>
              <select
                value={moduleId}
                onChange={(e) => setModuleId(e.target.value)}
                style={{
                  padding: '3px 8px',
                  border: '1.25px solid var(--ink)',
                  borderRadius: 6,
                  fontFamily: 'inherit',
                  fontSize: 12,
                  background: 'var(--paper)',
                }}
              >
                {allModules.map((m) => (
                  <option key={m.id} value={m.id}>{m.id} · {m.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{
            padding: '18px 26px',
            overflow: 'auto',
            flex: 1,
            display: 'grid',
            gridTemplateColumns: step === 'reflection' ? '1fr 340px' : '1.3fr 300px',
            gap: 20,
            alignContent: 'start',
          }}>
            {/* LEFT: Receipt document */}
            <div>
              <div
                className="sk-box shadow"
                style={{
                  padding: '24px 28px',
                  fontFamily: 'Cutive Mono, JetBrains Mono, Courier New, monospace',
                  fontSize: 12,
                  lineHeight: 1.6,
                  background: 'var(--paper)',
                  maxWidth: 680,
                }}
              >
                {/* Receipt header */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <div style={{ fontWeight: 700, letterSpacing: '0.2em', fontSize: 15 }}>· DATAPATH ·</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em' }}>honest receipt of AI usage</div>
                </div>
                <div style={{ borderTop: '1.5px dashed var(--rule)', margin: '8px 0' }} />

                {/* Metadata */}
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', rowGap: 2, marginBottom: 14 }}>
                  <span style={{ color: 'var(--ink-3)' }}>STUDENT</span>
                  <span>sofia · cohort A</span>
                  <span style={{ color: 'var(--ink-3)' }}>LAB</span>
                  <span>{moduleId} · {moduleTitle}</span>
                  <span style={{ color: 'var(--ink-3)' }}>DATE</span>
                  <span>{today}</span>
                  <span style={{ color: 'var(--ink-3)' }}>ITEMS</span>
                  <span>{prompts.length} prompt{prompts.length !== 1 ? 's' : ''}</span>
                </div>
                <div style={{ borderTop: '1.5px dashed var(--rule)', margin: '8px 0' }} />

                {/* Prompts table */}
                {prompts.length === 0 ? (
                  <div style={{ color: 'var(--ink-3)', padding: '16px 0', textAlign: 'center' }}>
                    No prompts logged for {moduleId} yet.{' '}
                    {step === 'cells' && 'Go to the lecture and ask Gemma something.'}
                  </div>
                ) : (
                  <>
                    <div style={{ fontWeight: 700, letterSpacing: '0.08em', marginBottom: 6, color: 'var(--ink-3)' }}>
                      PROMPTS · QTY {prompts.length}
                    </div>
                    {step === 'cells' && (
                      <div
                        role="note"
                        style={{
                          fontSize: 11,
                          color: 'var(--ink-3)',
                          background: 'var(--amber-tint)',
                          border: '1px dashed var(--amber)',
                          borderRadius: 4,
                          padding: '6px 10px',
                          margin: '0 0 8px',
                          lineHeight: 1.45,
                        }}
                      >
                        <strong>Review-only here.</strong> Click the{' '}
                        <button
                          onClick={() => setStep('disclosure')}
                          style={{
                            fontFamily: 'inherit',
                            fontSize: 11,
                            padding: '0 6px',
                            border: '1px solid var(--amber)',
                            borderRadius: 10,
                            background: 'var(--paper)',
                            color: 'var(--amber)',
                            cursor: 'pointer',
                          }}
                        >
                          disclosure →
                        </button>{' '}
                        tab to mark <em>accept / edited / reject</em> on each prompt.
                        The <strong>verify</strong> column is interactive on this step too.
                      </div>
                    )}
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '1.25px dashed var(--rule)' }}>
                          <th style={{ width: 24, textAlign: 'left', padding: '4px 6px 4px 0', color: 'var(--ink-3)', fontSize: 10 }}>#</th>
                          <th style={{ textAlign: 'left', padding: '4px 6px', color: 'var(--ink-3)', fontSize: 10 }}>PROMPT</th>
                          <th style={{ width: 100, textAlign: 'center', padding: '4px 6px', color: 'var(--ink-3)', fontSize: 10 }}>DECISION</th>
                          <th style={{ width: 110, textAlign: 'center', padding: '4px 6px', color: 'var(--ink-3)', fontSize: 10 }}>VERIFY</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prompts.map((p, i) => (
                          <PromptRow
                            key={p.id}
                            index={i + 1}
                            prompt={p}
                            onDecision={(d) => setDecision(p.id, d)}
                            onVerify={(v) => setVerified(p.id, v)}
                            readOnly={step === 'cells'}
                          />
                        ))}
                      </tbody>
                    </table>

                    {/* Summary */}
                    <div style={{ borderTop: '1.5px dashed var(--rule)', marginTop: 12, paddingTop: 10 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 2 }}>
                        <span style={{ color: 'var(--ink-2)' }}>accepted .............</span>
                        <span style={{ fontWeight: 700 }}>{accepted}</span>
                        <span style={{ color: 'var(--ink-2)' }}>edited ................</span>
                        <span style={{ fontWeight: 700 }}>{edited}</span>
                        <span style={{ color: 'var(--ink-2)' }}>rejected ..............</span>
                        <span style={{ fontWeight: 700 }}>{rejected}</span>
                        <span style={{ color: 'var(--ink-2)' }}>verified ..............</span>
                        <span style={{ fontWeight: 700 }}>{verifiedCount} / {prompts.length}</span>
                      </div>
                    </div>
                    <div style={{ borderTop: '1.5px dashed var(--rule)', marginTop: 10, paddingTop: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: 'Caveat, cursive', fontSize: 20, color: 'var(--amber)' }}>
                          disclosure score · {score} / 5
                        </span>
                        <span style={{ fontSize: 11, color: 'var(--ink-4)', fontStyle: 'italic' }}>"honest receipt" metaphor ↗</span>
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{scoreLabel}</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT: Finish line + reflection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Finish line checklist */}
              <div className="sk-box" style={{ padding: 16 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>finish line</div>
                <div style={{ borderTop: '1.5px dashed var(--rule)', margin: '0 0 10px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {finishItems.map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        className={`sk-check${item.done ? ' on' : ''}`}
                        style={{ flexShrink: 0 }}
                      />
                      <span
                        className="sk-tiny"
                        style={{
                          textDecoration: item.done ? 'line-through' : 'none',
                          color: item.done ? 'var(--ink-3)' : 'var(--ink)',
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflection box */}
              <div
                className="sk-box dashed"
                style={{ padding: 14, background: step === 'reflection' ? 'var(--amber-tint)' : 'var(--paper)' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--amber)', textTransform: 'uppercase' }}>
                    REFLECTION
                  </span>
                  {!hasReflection && (
                    <span className="sk-chip xs warn">1 left</span>
                  )}
                </div>
                <div className="sk-tiny" style={{ marginBottom: 8 }}>
                  Where did Gemma <em>actually</em> help you think — and where did you say no?
                </div>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="> the n-1 question helped — but i could have gotten there from the slide. next time i'll re-read the slide first."
                  rows={4}
                  onClick={() => setStep('reflection')}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    fontFamily: 'Cutive Mono, Courier New, monospace',
                    fontSize: 11,
                    border: '1.25px solid var(--ink)',
                    borderRadius: 4,
                    background: 'transparent',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
                {msg && <div className="sk-chip warn" style={{ marginTop: 6 }}>{msg}</div>}
              </div>

              {/* Where this goes */}
              <div className="sk-box" style={{ padding: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>where this goes</div>
                <div style={{ borderTop: '1.5px dashed var(--rule)', margin: '0 0 10px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[
                    `→ saved to your audit log, one per module`,
                    `→ exportable as AI_USE.md (button below)`,
                    `→ shareable with your instructor`,
                    `→ feeds your disclosure score on the dashboard`,
                  ].map((line) => (
                    <div key={line} className="sk-tiny" style={{ color: 'var(--ink-2)' }}>{line}</div>
                  ))}
                </div>
                <button
                  onClick={downloadAiUseMd}
                  disabled={prompts.length === 0}
                  style={{
                    marginTop: 10,
                    padding: '6px 12px',
                    fontSize: 12,
                    fontFamily: 'inherit',
                    border: '1.25px solid var(--ink)',
                    borderRadius: 6,
                    background: prompts.length === 0 ? 'var(--paper-2)' : 'var(--paper)',
                    color: prompts.length === 0 ? 'var(--ink-4)' : 'var(--ink)',
                    cursor: prompts.length === 0 ? 'not-allowed' : 'pointer',
                    width: '100%',
                  }}
                >
                  ⤓ download AI_USE.md
                </button>
              </div>

              {/* Past disclosures */}
              {past.length > 0 && (
                <div className="sk-box" style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                    past disclosures{' '}
                    <span className="sk-chip xs" style={{ marginLeft: 4 }}>{past.length}</span>
                  </div>
                  <div style={{ borderTop: '1.5px dashed var(--rule)', margin: '0 0 8px' }} />
                  {past.map((d: any) => (
                    <details key={d.id} style={{ borderBottom: '1px dashed var(--rule)', padding: '5px 0' }}>
                      <summary style={{ cursor: 'pointer', fontSize: 12 }}>
                        <strong>{d.moduleId}</strong>{' '}
                        <span className="sk-tiny">{new Date(d.createdAt).toLocaleDateString()}</span>
                      </summary>
                      {d.reflection && (
                        <div style={{ fontSize: 11, fontStyle: 'italic', padding: '4px 8px', color: 'var(--ink-2)' }}>
                          {d.reflection}
                        </div>
                      )}
                    </details>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Prompt row with inline decision/verify pills ──────────────────────────────

type PromptRowProps = {
  index: number;
  prompt: { id: string; prompt: string; response: string; reasoning?: string | null; createdAt: string; lessonId?: string; decision: Decision; verified: boolean };
  onDecision: (d: Decision) => void;
  onVerify: (v: boolean) => void;
  /** When true only decision cycling is locked; verify is always interactive */
  readOnly: boolean;
};

const DECISIONS: { value: Decision; label: string; icon: string; color: string; bg: string; shadow: string }[] = [
  { value: 'accept',  label: 'accept',    icon: '✓', color: 'var(--good)',   bg: 'var(--good-tint)', shadow: 'var(--good)' },
  { value: 'edit',    label: 'edited',    icon: '✎', color: 'var(--ink-2)', bg: 'var(--paper-2)',   shadow: 'var(--ink-3)' },
  { value: 'reject',  label: 'reject',    icon: '✕', color: 'var(--warn)',   bg: '#f3dcc4',          shadow: 'var(--warn)' },
  { value: 'nepskin', label: 'visualize', icon: '◈', color: 'var(--amber)', bg: 'var(--amber-tint)', shadow: 'var(--amber)' },
];

// Shared pill button base style
function pillStyle(color: string, bg: string, shadow: string, interactive: boolean): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 11,
    padding: '2px 9px',
    border: `1.25px solid ${color}`,
    borderRadius: 12,
    background: bg,
    color,
    boxShadow: interactive ? `1px 1px 0 0 ${shadow}` : 'none',
    cursor: interactive ? 'pointer' : 'default',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap' as const,
    transition: 'box-shadow 0.1s',
  };
}

function PromptRow({ index, prompt, onDecision, onVerify, readOnly }: PromptRowProps) {
  const [expanded, setExpanded] = useState(false);
  const dec = prompt.decision;
  const decConfig = DECISIONS.find((d) => d.value === dec);
  // Visualization entries are auto-generated — decision is always fixed
  const isNepskin = dec === 'nepskin';
  const effectiveReadOnly = readOnly || isNepskin;

  return (
    <>
      <tr
        style={{
          borderBottom: '1px dashed var(--rule)',
          cursor: 'pointer',
          background: expanded ? 'var(--paper-2)' : 'transparent',
        }}
        onClick={() => setExpanded((e) => !e)}
      >
        {/* # */}
        <td style={{ padding: '8px 6px 8px 0', color: 'var(--ink-4)', verticalAlign: 'middle', fontSize: 11, lineHeight: 1 }}>
          {String(index).padStart(2, '0')}
        </td>

        {/* Prompt text */}
        <td style={{ padding: '8px 8px', verticalAlign: 'middle' }}>
          <div style={{ fontWeight: 500, fontSize: 12, lineHeight: 1.35 }}>
            "{prompt.prompt.slice(0, 64)}{prompt.prompt.length > 64 ? '…' : ''}"
          </div>
          <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 3, letterSpacing: '0.02em' }}>
            {prompt.lessonId ?? '—'} · {new Date(prompt.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </td>

        {/* DECISION — locked in step 1 (lab cells), always locked for visualizations */}
        <td style={{ padding: '8px 6px', textAlign: 'center', verticalAlign: 'middle' }} onClick={(e) => e.stopPropagation()}>
          {effectiveReadOnly ? (
            // Step 1: static pill — clear pending state if null
            dec == null ? (
              <span
                title={readOnly ? "Decision not set yet — go to the 'disclosure' tab to mark this prompt." : 'Decision not set'}
                aria-label="decision not set"
                style={{
                  fontSize: 10,
                  padding: '2px 8px',
                  border: '1.25px dashed var(--ink-4)',
                  borderRadius: 12,
                  color: 'var(--ink-4)',
                  background: 'transparent',
                  letterSpacing: '0.08em',
                }}
              >
                · · ·
              </span>
            ) : decConfig ? (
              <span
                aria-label={`decision: ${decConfig.label}`}
                title={isNepskin ? 'auto-tagged: visualization entry, locked' : `decision: ${decConfig.label}`}
                style={pillStyle(decConfig.color, decConfig.bg, decConfig.shadow, false)}
              >
                <span style={{ fontSize: 10 }} aria-hidden="true">{decConfig.icon}</span>
                {decConfig.label}
              </span>
            ) : (
              <span style={{ fontSize: 10, color: 'var(--ink-4)' }} aria-label={`decision: ${dec}`}>{dec}</span>
            )
          ) : (
            <DecisionCycler value={dec} onChange={onDecision} />
          )}
        </td>

        {/* VERIFY — always interactive regardless of step */}
        <td style={{ padding: '8px 6px', textAlign: 'center', verticalAlign: 'middle' }} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onVerify(!prompt.verified)}
            aria-pressed={prompt.verified}
            aria-label={prompt.verified
              ? "verified — click to mark as needs verify"
              : "needs verify — click to mark as verified after checking the AI's answer against the textbook or by running the code"
            }
            title={prompt.verified
              ? 'verified — click to unmark'
              : 'click after checking this answer against the textbook or by running the code'
            }
            style={pillStyle(
              prompt.verified ? 'var(--good)'  : 'var(--warn)',
              prompt.verified ? 'var(--good-tint)' : '#f3dcc4',
              prompt.verified ? 'var(--good)'  : 'var(--warn)',
              true,
            )}
          >
            <span style={{ fontSize: 10 }} aria-hidden="true">{prompt.verified ? '✓' : '⚠'}</span>
            {prompt.verified ? 'verified' : 'needs verify'}
          </button>
        </td>
      </tr>

      {/* Expanded response */}
      {expanded && (
        <tr style={{ background: 'var(--paper-2)' }}>
          <td style={{ padding: '0 0 8px', borderBottom: '1px dashed var(--rule)' }} />
          <td colSpan={3} style={{ padding: '4px 8px 10px', borderBottom: '1px dashed var(--rule)' }}>
            {prompt.reasoning ? (
              <div style={{
                fontSize: 10.5,
                fontStyle: 'italic',
                color: 'var(--ink-3)',
                whiteSpace: 'pre-wrap',
                maxHeight: 90,
                overflowY: 'auto',
                background: 'var(--paper)',
                border: '1px dashed var(--amber)',
                padding: '6px 10px',
                borderRadius: 4,
                lineHeight: 1.5,
                marginBottom: 6,
              }}>
                <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--amber)' }}>Gemma&rsquo;s reasoning&nbsp;·&nbsp;</span>
                {prompt.reasoning.slice(0, 400)}{prompt.reasoning.length > 400 ? '…' : ''}
              </div>
            ) : null}
            <div style={{
              fontSize: 11,
              color: 'var(--ink-2)',
              whiteSpace: 'pre-wrap',
              maxHeight: 130,
              overflowY: 'auto',
              background: 'var(--paper)',
              border: '1px dashed var(--rule-soft)',
              padding: '6px 10px',
              borderRadius: 4,
              lineHeight: 1.5,
            }}>
              {prompt.response.slice(0, 500)}{prompt.response.length > 500 ? '…' : ''}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function DecisionCycler({ value, onChange }: { value: Decision; onChange: (d: Decision) => void }) {
  // null → starts at accept on first click
  const currentIdx = value == null ? -1 : DECISIONS.findIndex((d) => d.value === value);
  const current = currentIdx >= 0 ? DECISIONS[currentIdx] : null;
  const next = () => {
    onChange(DECISIONS[(currentIdx + 1) % DECISIONS.length].value);
  };

  if (!current) {
    // Null / unset — show an inviting "tap to set" state
    return (
      <button
        onClick={next}
        title="tap to set: accept → edited → reject"
        aria-label="set decision (cycles through accept, edited, reject, visualize)"
        style={{
          fontSize: 10,
          padding: '2px 9px',
          border: '1.25px dashed var(--ink-3)',
          borderRadius: 12,
          background: 'transparent',
          color: 'var(--ink-3)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          letterSpacing: '0.06em',
          whiteSpace: 'nowrap',
        }}
      >
        tap to set
      </button>
    );
  }

  return (
    <button
      onClick={next}
      title="click to cycle: accept → edited → reject"
      aria-label={`decision: ${current.label}, click to change`}
      style={pillStyle(current.color, current.bg, current.shadow, true)}
    >
      <span style={{ fontSize: 10 }}>{current.icon}</span>
      {current.label}
    </button>
  );
}
