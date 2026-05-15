interface AIOffBannerProps {
  intensity?: 'subtle' | 'medium' | 'strong';
  text?: string;
}

export function AIOffBanner({
  intensity = 'medium',
  text = 'AI is off here — this section tests your independent thinking.',
}: AIOffBannerProps) {
  if (intensity === 'subtle') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', border: '1px dashed var(--aioff)', borderRadius: 6, color: 'var(--aioff)', background: 'var(--aioff-tint)', fontSize: 12 }}>
        <span>⊘</span><span>{text}</span>
      </div>
    );
  }

  if (intensity === 'strong') {
    return (
      <div className="sk-aioff-band" style={{ padding: '10px 14px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 28, border: '1.5px solid var(--aioff)', display: 'grid', placeItems: 'center', background: 'var(--paper)', color: 'var(--aioff)' }}>⊘</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>AI-OFF zone · Gemma is waiting on the other side.</div>
          <div className="sk-tiny" style={{ color: 'var(--aioff)' }}>{text}</div>
        </div>
        <span className="sk-chip aioff">cell 4 · locked</span>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', border: '1.5px solid var(--aioff)', borderRadius: 8, background: 'var(--aioff-tint)', color: 'var(--aioff)' }}>
      <span style={{ fontSize: 16 }}>⊘</span>
      <span style={{ fontSize: 13, fontWeight: 600 }}>{text}</span>
    </div>
  );
}
