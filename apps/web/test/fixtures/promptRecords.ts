export interface PromptRecord {
  id: string;
  cellId: string;
  prompt: string;
  response: string;
  decision: 'accepted' | 'edited' | 'rejected' | null;
  verification: 'textbook' | 'slide' | 'peer' | 'test' | null;
  confidence: 'high' | 'medium' | 'low';
  ts: string;
}

export const MOCK_PROMPT_RECORDS: PromptRecord[] = [
  {
    id: 'pr-001',
    cellId: 'lecture-m3-slide4',
    prompt: 'explain quartiles like I am new',
    response: 'A quartile divides your sorted data into four equal parts…',
    decision: 'accepted',
    verification: 'textbook',
    confidence: 'high',
    ts: '2026-03-14T10:42:00Z',
  },
  {
    id: 'pr-002',
    cellId: 'lab-m3-cell3',
    prompt: 'why divide by n-1 in std-dev',
    response: "Using n-1 gives an unbiased estimate of the population variance (Bessel's correction).",
    decision: 'accepted',
    verification: 'slide',
    confidence: 'medium',
    ts: '2026-03-14T10:51:00Z',
  },
  {
    id: 'pr-003',
    cellId: 'lab-m3-cell3',
    prompt: 'give me 2 worked examples for IQR',
    response: 'Example 1: [2,4,6,8,10] — Q1=4, Q3=8, IQR=4…',
    decision: 'edited',
    verification: 'test',
    confidence: 'high',
    ts: '2026-03-14T11:14:00Z',
  },
  {
    id: 'pr-004',
    cellId: 'lab-m3-cell5',
    prompt: 'is mtcars skewed?',
    response: 'The mpg column shows right-skew with a few high-consumption outliers…',
    decision: 'rejected',
    verification: null,
    confidence: 'low',
    ts: '2026-03-14T11:33:00Z',
  },
];
