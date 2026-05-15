import type { ReactNode } from 'react';
import { VerifiedChip } from './chips';

interface GemmaBubbleProps {
  children: ReactNode;
  role?: 'ai' | 'user' | 'system';
  verified?: boolean;
  footer?: ReactNode;
}

export function GemmaBubble({ children, role = 'ai', verified, footer }: GemmaBubbleProps) {
  const isAI = role === 'ai';
  const isUser = role === 'user';
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{
        position: 'relative',
        background: isAI ? 'var(--amber-tint)' : (isUser ? 'var(--paper)' : 'var(--paper-2)'),
        border: '1.25px solid ' + (isAI ? 'var(--amber)' : 'var(--ink)'),
        borderLeft: isAI ? '3px solid var(--amber)' : '1.25px solid var(--ink)',
        borderStyle: role === 'system' ? 'dashed' : 'solid',
        padding: '8px 10px',
        borderRadius: 6,
        fontSize: 13,
        color: 'var(--ink-2)',
        lineHeight: 1.4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color: isAI ? 'var(--amber)' : 'var(--ink-3)' }}>
            {isAI ? '✦ Gemma' : (isUser ? 'You' : 'system')}
          </span>
          {verified !== undefined && <VerifiedChip on={verified} />}
        </div>
        {children}
        {footer}
      </div>
    </div>
  );
}
