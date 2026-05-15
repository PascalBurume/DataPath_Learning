'use client';

import { useEffect, useRef, useState } from "react";
import { streamGemmaChat, type ChatMessage } from "@/lib/gemma/client";

type Props = {
  /** Optional context system prompt appended to the global one (e.g., current lesson). */
  context?: string;
  /** When true, this is an AI-OFF section. The chat blocks sending. */
  aiOff?: boolean;
  /** Lesson ref e.g. "L3.4" — logged with each prompt for disclosure. */
  lessonRef?: string;
  /** Module id to log against for the disclosure ledger. */
  moduleId?: string;
};

export function GemmaChat({ context, aiOff, lessonRef, moduleId }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    if (aiOff) {
      setError("This section is marked AI-OFF. Try it yourself first.");
      return;
    }
    setError(null);
    setInput("");
    const userMsg: ChatMessage = { role: "user", content: text };
    const newHistory = [...messages, userMsg];
    setMessages([...newHistory, { role: "assistant", content: "" }]);
    setStreaming(true);

    let acc = "";
    try {
      await streamGemmaChat({
        prompt: text,
        history: messages,
        context,
        onToken: (t) => {
          acc += t;
          setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = { role: "assistant", content: acc };
            return copy;
          });
        },
        onDone: async () => {
          // Persist to PromptLog for disclosure ledger.
          try {
            await fetch("/api/prompts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                prompt: text,
                response: acc,
                moduleId,
                lessonId: lessonRef,
              }),
            });
          } catch {/* ignore */}
        },
      });
    } catch (e: any) {
      setError(e?.message ?? "Gemma request failed");
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="sk-box" style={{ padding: 12, display: "flex", flexDirection: "column", gap: 10, minHeight: 280 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 11, background: aiOff ? "var(--ink-3)" : "var(--good)", border: "1px solid var(--ink)" }} />
        <strong>Gemma · {aiOff ? "OFF for this section" : "local tutor"}</strong>
        {lessonRef && <span className="sk-tiny" style={{ marginLeft: "auto" }}>logged to {lessonRef}</span>}
      </div>

      <div style={{ flex: 1, overflowY: "auto", maxHeight: 320, display: "flex", flexDirection: "column", gap: 8, paddingRight: 4 }}>
        {messages.length === 0 && (
          <div className="sk-tiny" style={{ color: "var(--ink-3)" }}>
            Ask anything about this lesson. Tip: paste your code & error, or ask "explain X like I'm new".
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{
            background: m.role === "user" ? "var(--amber-tint)" : "var(--paper-2, #faf7f0)",
            border: "1.25px solid var(--rule)",
            borderRadius: 8,
            padding: "8px 10px",
            whiteSpace: "pre-wrap",
            fontSize: 14,
            alignSelf: m.role === "user" ? "flex-end" : "flex-start",
            maxWidth: "92%",
          }}>
            <div className="sk-tiny" style={{ marginBottom: 2 }}>{m.role === "user" ? "you" : "gemma"}</div>
            {m.content || <span style={{ color: "var(--ink-3)" }}>…</span>}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {error && <div className="sk-chip warn">{error}</div>}

      <div style={{ display: "flex", gap: 6 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder={aiOff ? "AI-OFF section — try it yourself" : "Ask Gemma…"}
          disabled={streaming || aiOff}
          style={{ flex: 1, padding: "8px 10px", border: "1.25px solid var(--ink)", borderRadius: 6, fontFamily: "inherit", background: aiOff ? "#f0eee8" : "white" }}
        />
        <button className="sk-btn primary" onClick={send} disabled={streaming || aiOff || !input.trim()}>
          {streaming ? "…" : "send"}
        </button>
      </div>
    </div>
  );
}
