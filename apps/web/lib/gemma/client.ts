// Browser helper for streaming Gemma chat responses from /api/gemma/chat.
//
// The server emits a two-phase envelope:
//   <think>…short reasoning…</think>
//   <answer>…rich-markdown answer…</answer>
// As tokens stream in we route them onto two channels (think vs answer) using
// a small character-by-character tag parser so partial tags never leak into
// either channel.

export interface ChatMessage { role: "user" | "assistant"; content: string }

type Channel = "pre" | "think" | "between" | "answer" | "post";

interface SplitterState {
  channel: Channel;
  buf: string; // characters that might be the start of a tag
}

const OPEN_THINK = "<think>";
const CLOSE_THINK = "</think>";
const OPEN_ANSWER = "<answer>";
const CLOSE_ANSWER = "</answer>";

function transitionFor(channel: Channel): { tag: string; next: Channel } | null {
  switch (channel) {
    case "pre": return { tag: OPEN_THINK, next: "think" };
    case "think": return { tag: CLOSE_THINK, next: "between" };
    case "between": return { tag: OPEN_ANSWER, next: "answer" };
    case "answer": return { tag: CLOSE_ANSWER, next: "post" };
    default: return null;
  }
}

/** Stream a token through the splitter, emitting onThink / onAnswer for the
 * portions that fall inside the corresponding tags. Buffers partial tag
 * matches so e.g. "<thi" never gets emitted as text. */
function pushToken(
  state: SplitterState,
  token: string,
  emit: { think: (s: string) => void; answer: (s: string) => void },
) {
  for (const ch of token) {
    state.buf += ch;
    while (state.buf.length > 0) {
      const t = transitionFor(state.channel);
      if (t) {
        // Try to consume as much of buf as possible.
        if (state.buf.startsWith(t.tag)) {
          state.buf = state.buf.slice(t.tag.length);
          state.channel = t.next;
          continue;
        }
        // Could buf still grow into the tag? If so, hold and wait.
        if (t.tag.startsWith(state.buf)) break;
      }
      // Flush the leading char of buf to the active channel.
      const head = state.buf[0];
      state.buf = state.buf.slice(1);
      if (state.channel === "think") emit.think(head);
      else if (state.channel === "answer") emit.answer(head);
      // pre/between/post: silently drop (whitespace between tags).
    }
  }
}

/** Flush any held characters at end-of-stream. If the model omitted the
 * envelope entirely, treat the whole stream as the answer. */
function flushSplitter(
  state: SplitterState,
  emit: { think: (s: string) => void; answer: (s: string) => void },
  rawAccumulated: string,
) {
  if (state.channel === "pre" && rawAccumulated.length > 0) {
    // Model didn't emit the envelope at all — fall back to treating raw
    // accumulated text as the answer so we never silently drop output.
    const stripped = rawAccumulated
      .replace(/<\/?think>/g, "")
      .replace(/<\/?answer>/g, "");
    emit.answer(stripped);
    return;
  }
  if (state.buf) {
    if (state.channel === "think") emit.think(state.buf);
    else if (state.channel === "answer") emit.answer(state.buf);
    state.buf = "";
  }
}

export async function streamGemmaChat(opts: {
  prompt: string;
  history?: ChatMessage[];
  moduleId?: string;
  lessonId?: string;
  context?: string;
  /** Receives raw tokens (back-compat — full text including tags). */
  onToken?: (t: string) => void;
  /** Receives only tokens inside <think>…</think>. */
  onThinkToken?: (t: string) => void;
  /** Receives only tokens inside <answer>…</answer>. */
  onAnswerToken?: (t: string) => void;
  onDone?: (info: { fallback?: boolean; thinkText: string; answerText: string }) => void;
  signal?: AbortSignal;
}): Promise<{ thinkText: string; answerText: string; rawText: string; fallback: boolean }> {
  const r = await fetch("/api/gemma/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: opts.prompt,
      history: opts.history,
      moduleId: opts.moduleId,
      lessonId: opts.lessonId,
      context: opts.context,
    }),
    signal: opts.signal,
  });
  if (!r.ok || !r.body) throw new Error(`gemma chat ${r.status}`);

  const reader = r.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let raw = "";
  let thinkText = "";
  let answerText = "";
  let fallback = false;
  const state: SplitterState = { channel: "pre", buf: "" };
  const emit = {
    think: (s: string) => { thinkText += s; opts.onThinkToken?.(s); },
    answer: (s: string) => { answerText += s; opts.onAnswerToken?.(s); },
  };

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split("\n");
    buf = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const j = JSON.parse(line);
        if (j.token) {
          raw += j.token;
          opts.onToken?.(j.token);
          pushToken(state, j.token, emit);
        }
        if (j.done) {
          fallback = !!j.fallback;
        }
      } catch { /* skip non-JSON keep-alives */ }
    }
  }

  flushSplitter(state, emit, raw);
  opts.onDone?.({ fallback, thinkText, answerText });
  return { thinkText, answerText, rawText: raw, fallback };
}
