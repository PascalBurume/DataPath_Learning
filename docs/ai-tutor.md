# AI Tutor — reasoning protocol

## What students see

Each Gemma reply renders in two stacked blocks:

1. **Thinking pill** — collapsible, headed "Thinking…" while streaming and
   "Thought for {N}s" once done. Body shows a short first-person planning
   trace in a muted italic monospace.
2. **Answer block** — rich markdown via `MarkdownView`: syntax-highlighted
   code with copy buttons, GFM tables, KaTeX math, blockquotes.

This mirrors the Claude UI's reasoning surface.

## How it works

Gemma 3/4 (running locally via Ollama) does **not** expose a native reasoning
trace. We emulate one by instructing the model in the system prompt to wrap
its reply in two tags:

```
<think>
Two to four short sentences in the first person about how I'll teach this.
</think>
<answer>
The final teaching answer in GitHub-flavored markdown.
</answer>
```

The browser-side stream parser in [`apps/web/lib/gemma/client.ts`](../apps/web/lib/gemma/client.ts)
walks tokens character-by-character and routes each character to either the
`onThinkToken` or `onAnswerToken` channel based on which tag the cursor is
inside. Partial tags (e.g. `<thi`) are buffered so they never leak into either
channel as visible text.

## Honesty

This is **emulated** reasoning, not a privileged thought channel — the model
is free to write anything inside `<think>`, and there is no guarantee it
reflects the model's actual computation. The chat header therefore shows the
caveat **"reasoning · best-effort"** so students aren't misled.

## Fallback behaviour

If Ollama is unreachable, the server still emits a `<think>…</think><answer>…</answer>`
envelope (with a friendly "Gemma is offline" message inside `<answer>`) so the
client renderer behaves identically. If the model omits the envelope entirely,
the parser falls back to treating the whole stream as the answer — the
thinking pill simply doesn't appear.

## Disclosure ledger

Both the prompt and the final answer are POSTed to `/api/prompts` after each
turn. The `<think>` content is included on the request body as `reasoning` so
it is captured by the disclosure ledger if the server stores it.

## Files

- `apps/web/app/api/gemma/chat/route.ts` — system prompt + envelope
- `apps/web/lib/gemma/client.ts` — two-channel stream parser
- `apps/web/components/GemmaChatV2.tsx` — chat UI
- `packages/ui/src/primitives/ThinkingBlock.tsx` — collapsible reasoning pill
- `packages/ui/src/primitives/MarkdownView.tsx` — rich-markdown answer renderer
