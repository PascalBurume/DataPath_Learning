'use client';

// NepskinTrigger: wraps lesson content with text-selection-to-diagram capability.
// When the user selects 20–1200 chars inside .lesson-body and Nepskin is enabled
// (and the lesson isn't AI-OFF), a floating "◈ Visualize" button appears at the
// selection. Clicking it calls /api/nepskin/generate and renders the Mermaid
// diagram in a bottom-sheet panel via MarkdownView (reuses the existing pipeline).

import { useCallback, useEffect, useRef, useState } from 'react';
import { MarkdownView } from '@datapath/ui/src/primitives/MarkdownView';

type DiagramResult = {
  mermaidCode: string;
  explanation: string;
  fallback: boolean;
};

type TriggerPos = { x: number; y: number };

type Props = {
  children: React.ReactNode;
  enabled: boolean;
  aiOff: boolean;
  moduleId?: string;
  lessonId?: string;
};

export function NepskinTrigger({ children, enabled, aiOff, moduleId, lessonId }: Props) {
  const [triggerPos, setTriggerPos] = useState<TriggerPos | null>(null);
  const [selectedText, setSelectedText] = useState('');
  const [result, setResult] = useState<DiagramResult | null>(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectionEnd = useCallback(() => {
    if (!enabled || aiOff) {
      setTriggerPos(null);
      return;
    }
    const sel = window.getSelection();
    const text = sel?.toString().trim() ?? '';
    if (text.length < 20 || text.length > 1200) {
      setTriggerPos(null);
      return;
    }
    // Only show trigger when selection is within .lesson-body
    const range = sel?.getRangeAt(0);
    const container = containerRef.current;
    if (!range || !container) return;
    const lessonBody = container.querySelector('.lesson-body');
    if (!lessonBody?.contains(range.commonAncestorContainer)) {
      setTriggerPos(null);
      return;
    }
    const rect = range.getBoundingClientRect();
    setSelectedText(text);
    // viewport-relative coords for position: fixed
    setTriggerPos({ x: rect.left, y: rect.bottom });
  }, [enabled, aiOff]);

  // Dismiss trigger when clicking outside while trigger is visible
  const handleMouseDown = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (triggerPos && !target.closest('[data-nepskin-trigger]')) {
      setTriggerPos(null);
    }
  }, [triggerPos]);

  useEffect(() => {
    document.addEventListener('mouseup', handleSelectionEnd);
    document.addEventListener('touchend', handleSelectionEnd);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseup', handleSelectionEnd);
      document.removeEventListener('touchend', handleSelectionEnd);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleSelectionEnd, handleMouseDown]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setTriggerPos(null);
        setResult(null);
        setLoading(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  async function generate() {
    if (!selectedText) return;
    setTriggerPos(null);
    setLoading(true);
    setResult(null);
    try {
      const r = await fetch('/api/nepskin/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: selectedText, moduleId, lessonId }),
      });
      const data: DiagramResult = await r.json();
      setResult(data);
    } catch {
      setResult({ mermaidCode: '', explanation: 'Could not reach the server.', fallback: true });
    } finally {
      setLoading(false);
    }
  }

  const showPanel = loading || !!result;

  return (
    <div ref={containerRef}>
      {children}

      {/* Floating trigger button — position: fixed so it stays anchored to
          viewport coords regardless of scroll position inside the lesson panel */}
      {triggerPos && (
        <button
          data-nepskin-trigger="true"
          className="sk-btn sm primary"
          style={{
            position: 'fixed',
            top: triggerPos.y + 6,
            left: Math.min(triggerPos.x, (typeof window !== 'undefined' ? window.innerWidth : 800) - 160),
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            pointerEvents: 'auto',
          }}
          onClick={generate}
        >
          ◈ Visualize
        </button>
      )}

      {/* Bottom-sheet result panel */}
      {showPanel && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            maxHeight: '45vh',
            background: 'var(--paper)',
            borderTop: '1.5px solid var(--rule)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.10)',
            overflowY: 'auto',
            zIndex: 1001,
            padding: '14px 28px 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <strong style={{ fontSize: 13, letterSpacing: '0.02em' }}>
              ◈ Visualization
            </strong>
            <button
              className="sk-btn sm ghost"
              onClick={() => { setResult(null); setLoading(false); }}
            >
              ✕
            </button>
          </div>

          {loading && (
            <div className="sk-tiny" style={{ color: 'var(--ink-3)', padding: '8px 0' }}>
              Generating diagram…
            </div>
          )}

          {result && !result.fallback && result.mermaidCode && (
            <MarkdownView mermaid>
              {`\`\`\`mermaid\n${result.mermaidCode}\n\`\`\`\n\n${result.explanation}`}
            </MarkdownView>
          )}

          {result?.fallback && (
            <div style={{ fontSize: 13 }}>
              <MarkdownView compact>{result.explanation}</MarkdownView>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
