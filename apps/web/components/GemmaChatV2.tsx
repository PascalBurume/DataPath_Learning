'use client';

import { useEffect, useRef, useState } from 'react';
import { useSWRConfig } from 'swr';
import { streamGemmaChat, type ChatMessage } from '@/lib/gemma/client';
import { ThinkingBlock } from '@datapath/ui/src/primitives/ThinkingBlock';
import { MarkdownView } from '@datapath/ui/src/primitives/MarkdownView';

type Lang = 'en' | 'fr' | 'sw';
const LANGS: { code: Lang; label: string; title: string }[] = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'fr', label: 'FR', title: 'Français' },
  { code: 'sw', label: 'SW', title: 'Kiswahili' },
];

const AI_OFF_COPY: Record<Lang, {
  trigger: string;
  title: string;
  body: string;
  categoriesLabel: string;
  categories: string[];
  footer: string;
}> = {
  en: {
    trigger: 'Why?',
    title: 'Why is AI off here?',
    body: 'This cell is assessed on your own reasoning. The tutor refuses help so the skill you are building stays yours. Attempt it, then come back to Gemma for the concepts after.',
    categoriesLabel: 'AI-OFF covers:',
    categories: [
      'Statistical reasoning (CI, p-value, Cohen’s d)',
      'Causal judgment & EDA narrative',
      'Pipeline assembly (data-leakage risk)',
      'Time-zone & chronological-split reasoning',
      'Privacy architecture & agent verification',
    ],
    footer: 'Privacy is architectural: no data leaves your device.',
  },
  fr: {
    trigger: 'Pourquoi ?',
    title: 'Pourquoi l’IA est-elle désactivée ici ?',
    body: 'Cette cellule évalue votre propre raisonnement. Le tuteur refuse de vous aider pour que la compétence travaillée reste la vôtre. Essayez d’abord, puis revenez à Gemma pour discuter des concepts.',
    categoriesLabel: 'AI-OFF concerne :',
    categories: [
      'Raisonnement statistique (IC, p-valeur, d de Cohen)',
      'Jugement causal et narration EDA',
      'Assemblage de pipelines (risque de fuite)',
      'Fuseaux horaires et découpages chronologiques',
      'Architecture de la vie privée et vérification d’agent',
    ],
    footer: 'La vie privée est architecturale : aucune donnée ne quitte votre appareil.',
  },
  sw: {
    trigger: 'Kwa nini?',
    title: 'Kwa nini AI imezimwa hapa?',
    body: 'Seli hii inapimwa kwa fikra zako mwenyewe. Mwalimu wa AI anakataa kusaidia ili ujuzi unaojenga ubaki wako. Jaribu kwanza, kisha rudi kwa Gemma kwa maelezo ya dhana.',
    categoriesLabel: 'AI-OFF inafunika:',
    categories: [
      'Hoja za takwimu (CI, p-value, Cohen’s d)',
      'Uamuzi wa sababu na simulizi ya EDA',
      'Kuunganisha mabomba (hatari ya kuvuja kwa data)',
      'Saa za kanda na ugawaji wa wakati',
      'Usanifu wa faragha na uhakiki wa wakala',
    ],
    footer: 'Faragha ni ya kimuundo: hakuna data inayoondoka kwenye kifaa chako.',
  },
};

const STORAGE_KEY = 'datapath_tutor_lang';

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem(STORAGE_KEY) as Lang) ?? 'en';
  });
  function setLang(l: Lang) {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }
  return [lang, setLang];
}

type Props = {
  /** Optional system context (e.g. current lesson summary). */
  context?: string;
  /** When true, this is an AI-OFF section. The chat blocks sending. */
  aiOff?: boolean;
  /** Lesson ref e.g. "L3.4" — logged with each prompt for disclosure. */
  lessonRef?: string;
  /** Module id to log against for the disclosure ledger. */
  moduleId?: string;
};

interface AssistantMsg {
  role: 'assistant';
  think: string;
  answer: string;
  state: 'streaming' | 'done';
  startedAt: number;
  finishedAt?: number;
}
interface UserMsg {
  role: 'user';
  content: string;
}
type Msg = UserMsg | AssistantMsg;

/**
 * Claude-style chat over the local Gemma backend.
 * Renders a collapsible "Thinking…" pill above each assistant message and
 * the final answer through `MarkdownView` (rich markdown + syntax highlighting
 * + copy buttons + math + tables).
 */
export function GemmaChatV2({ context, aiOff, lessonRef, moduleId }: Props) {
  const { mutate } = useSWRConfig();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useLang();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streaming]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    if (aiOff) {
      setError('This section is marked AI-OFF. Try it yourself first.');
      return;
    }
    setError(null);
    setInput('');
    const userMsg: UserMsg = { role: 'user', content: text };
    const assistantMsg: AssistantMsg = {
      role: 'assistant',
      think: '',
      answer: '',
      state: 'streaming',
      startedAt: Date.now(),
    };
    setMessages((m) => [...m, userMsg, assistantMsg]);
    setStreaming(true);

    // History sent to the model: only role + content (use answer text for assistant turns).
    const history: ChatMessage[] = messages
      .filter((m): m is UserMsg | AssistantMsg => true)
      .map((m) =>
        m.role === 'user'
          ? { role: 'user', content: m.content }
          : { role: 'assistant', content: m.answer },
      );

    try {
      const result = await streamGemmaChat({
        prompt: text,
        history,
        context,
        lang,
        onThinkToken: (t) => {
          setMessages((arr) => {
            const copy = [...arr];
            const last = copy[copy.length - 1] as AssistantMsg;
            copy[copy.length - 1] = { ...last, think: last.think + t };
            return copy;
          });
        },
        onAnswerToken: (t) => {
          setMessages((arr) => {
            const copy = [...arr];
            const last = copy[copy.length - 1] as AssistantMsg;
            copy[copy.length - 1] = { ...last, answer: last.answer + t };
            return copy;
          });
        },
      });

      // Mark done.
      setMessages((arr) => {
        const copy = [...arr];
        const last = copy[copy.length - 1] as AssistantMsg;
        copy[copy.length - 1] = { ...last, state: 'done', finishedAt: Date.now() };
        return copy;
      });

      // Persist to PromptLog (best-effort) and refresh dashboard counts.
      try {
        await fetch('/api/prompts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: text,
            response: result.answerText,
            reasoning: result.thinkText,
            moduleId,
            lessonId: lessonRef,
          }),
        });
        mutate('/api/dashboard');
      } catch { /* ignore */ }
    } catch (e: any) {
      setError(e?.message ?? 'Gemma request failed');
      setMessages((arr) => {
        const copy = [...arr];
        const last = copy[copy.length - 1] as AssistantMsg;
        copy[copy.length - 1] = { ...last, state: 'done', finishedAt: Date.now() };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div
      className="sk-box"
      style={{
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        // Tall fixed shape; long replies scroll inside the messages area
        // instead of stretching the surrounding column. Caps at 86vh so the
        // chat never exceeds the viewport on smaller laptops.
        height: 'min(86vh, 820px)',
        minHeight: 520,
        minWidth: 0,
        // Prevent any descendant (long code paste, big markdown table, etc.)
        // from forcing this container — and the parent grid column — wider.
        overflow: 'hidden',
        flex: '0 0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            background: aiOff ? 'var(--ink-3)' : 'var(--good)',
            border: '1px solid var(--ink)',
          }}
        />
        <strong>Gemma · {aiOff ? 'OFF for this section' : 'local tutor'}</strong>
        {aiOff && <AiOffInfo lang={lang} />}
        <span className="sk-tiny" style={{ color: 'var(--ink-4)', marginLeft: 4 }}>
          reasoning · best-effort
        </span>
        <div
          style={{
            display: 'flex',
            gap: 2,
            marginLeft: 8,
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
              disabled={streaming}
              style={{
                fontSize: 11,
                fontWeight: lang === code ? 700 : 400,
                padding: '2px 7px',
                border: 'none',
                borderRadius: 4,
                cursor: streaming ? 'not-allowed' : 'pointer',
                background: lang === code ? 'var(--ink)' : 'transparent',
                color: lang === code ? 'var(--paper, #fff)' : 'var(--ink-3)',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {lessonRef && (
          <span className="sk-tiny" style={{ marginLeft: 'auto' }}>
            {/* lessonRef is a DB id like "m3-l1" — display it as "L3.1" */}
            logged · {lessonRef.replace(/^m(\d+)-/, 'M$1/').replace(/-/g, '.')}
          </span>
        )}
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingRight: 4,
        }}
      >
        {messages.length === 0 && (
          <div className="sk-tiny" style={{ color: 'var(--ink-3)' }}>
            Ask anything about this lesson. Tip: paste your code & error, or ask "explain X like I'm new".
          </div>
        )}
        {messages.map((m, i) =>
          m.role === 'user' ? (
            <div
              key={i}
              style={{
                background: 'var(--amber-tint)',
                border: '1.25px solid var(--rule)',
                borderRadius: 8,
                padding: '8px 10px',
                fontSize: 14,
                alignSelf: 'flex-end',
                maxWidth: '100%',
                whiteSpace: 'pre-wrap',
                // Critical: break long pasted tokens (URLs, code without
                // spaces) so the bubble never widens its column.
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
              }}
            >
              <div className="sk-tiny" style={{ marginBottom: 2 }}>you</div>
              {m.content}
            </div>
          ) : (
            <AssistantBubble key={i} msg={m} />
          ),
        )}
        <div ref={endRef} />
      </div>

      {error && <div className="sk-chip warn">{error}</div>}

      <div style={{ display: 'flex', gap: 6 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder={aiOff ? 'AI-OFF section — try it yourself' : 'Ask Gemma…'}
          disabled={streaming || aiOff}
          style={{
            flex: 1,
            padding: '10px 12px',
            border: '1.25px solid var(--ink)',
            borderRadius: 6,
            fontFamily: 'inherit',
            background: aiOff ? '#f0eee8' : 'white',
          }}
        />
        <button
          className="sk-btn primary"
          onClick={send}
          disabled={streaming || aiOff || !input.trim()}
        >
          {streaming ? '…' : 'send'}
        </button>
      </div>
    </div>
  );
}

function AiOffInfo({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const copy = AI_OFF_COPY[lang];

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      style={{ position: 'relative', display: 'inline-flex' }}
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setOpen(true); }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setOpen(false); }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        style={{
          fontSize: 11,
          fontWeight: 600,
          padding: '1px 7px',
          marginLeft: 4,
          border: '1px solid var(--rule)',
          borderRadius: 999,
          background: 'var(--paper-2, #f5f2eb)',
          color: 'var(--ink-3)',
          cursor: 'help',
          lineHeight: 1.4,
        }}
      >
        {copy.trigger}
      </button>
      {open && (
        <div
          role="dialog"
          aria-label={copy.title}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            zIndex: 20,
            width: 320,
            background: 'var(--paper, #fffdf6)',
            border: '1.25px solid var(--ink)',
            borderRadius: 8,
            padding: '10px 12px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
            fontSize: 12.5,
            lineHeight: 1.45,
            color: 'var(--ink)',
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{copy.title}</div>
          <div style={{ marginBottom: 8 }}>{copy.body}</div>
          <div style={{ fontWeight: 600, fontSize: 11.5, marginBottom: 4 }}>
            {copy.categoriesLabel}
          </div>
          <ul style={{ margin: 0, paddingLeft: 16, marginBottom: 8 }}>
            {copy.categories.map((c) => (
              <li key={c} style={{ marginBottom: 2 }}>{c}</li>
            ))}
          </ul>
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)', fontStyle: 'italic' }}>
            {copy.footer}
          </div>
        </div>
      )}
    </div>
  );
}

function AssistantBubble({ msg }: { msg: AssistantMsg }) {
  const elapsed = (msg.finishedAt ?? Date.now()) - msg.startedAt;
  const showThinking = msg.think.length > 0 || msg.state === 'streaming';
  return (
    <div
      style={{
        background: 'var(--paper-2, #faf7f0)',
        border: '1.25px solid var(--rule)',
        borderRadius: 8,
        padding: '8px 10px',
        alignSelf: 'flex-start',
        maxWidth: '100%',
        width: '100%',
        minWidth: 0,
        // Long lines / code blocks / URLs in the markdown answer must wrap so
        // the chat panel keeps its fixed width.
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
      }}
    >
      <div className="sk-tiny" style={{ marginBottom: 4 }}>gemma</div>
      {showThinking && (
        <ThinkingBlock state={msg.state} elapsedMs={elapsed}>
          {msg.think.trim()}
        </ThinkingBlock>
      )}
      {msg.answer ? (
        <MarkdownView compact>{msg.answer}</MarkdownView>
      ) : msg.state === 'streaming' ? (
        <div style={{ color: 'var(--ink-4)', fontSize: 13, marginTop: 4 }}>…</div>
      ) : null}
    </div>
  );
}
