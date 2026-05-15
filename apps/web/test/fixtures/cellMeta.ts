export interface CellMeta {
  cellId: string;
  aiOff: boolean;
  locked: boolean;
  expects?: string;
  hintsAllowed: number;
}

export const MOCK_CELL_META: CellMeta[] = [
  { cellId: 'lab-m3-cell1', aiOff: false, locked: false, hintsAllowed: 3 },
  { cellId: 'lab-m3-cell2', aiOff: false, locked: false, hintsAllowed: 3 },
  { cellId: 'lab-m3-cell3', aiOff: false, locked: false, hintsAllowed: 3 },
  {
    cellId: 'lab-m3-cell4',
    aiOff: true,
    locked: true,
    expects: 'q1: float, q3: float, iqr: float',
    hintsAllowed: 0,
  },
];
