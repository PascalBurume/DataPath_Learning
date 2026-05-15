export interface ModuleSection {
  id: string;
  type: 'lecture' | 'lab' | 'quiz' | 'checkpoint';
  title: string;
  duration: string;
  done: boolean;
  aiOff?: boolean;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  pct: number;
  done: boolean;
  locked: boolean;
  aiUse: number;
  unlockDate?: string;
  sections: ModuleSection[];
  approvedPrompts: string[];
  datasets: string[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    title: 'Course Orientation',
    subtitle: 'Tools, workflow, and how honest AI use works here',
    pct: 100, done: true, locked: false, aiUse: 3,
    sections: [
      { id: 'm1-l1',   type: 'lecture',     title: '1.1 · Welcome to DataPath',  duration: '15 min', done: true },
      { id: 'm1-lab1', type: 'lab',          title: 'Lab 1.1 · Python + Jupyter setup', duration: '20 min', done: true },
      { id: 'm1-q1',   type: 'quiz',         title: 'Quiz 1 · course rules',      duration: '5 min',  done: true },
    ],
    approvedPrompts: ['explain the CRISP-DM phase', 'give me a counterexample'],
    datasets: ['sales_monthly.csv'],
  },
  {
    id: 2,
    title: 'Tools & CRISP-DM',
    subtitle: 'CRISP-DM phases, Jupyter setup, and pandas fundamentals',
    pct: 100, done: true, locked: false, aiUse: 7,
    sections: [
      { id: 'm2-l1',   type: 'lecture',     title: '2.1 · CRISP-DM phases',       duration: '20 min', done: true },
      { id: 'm2-l2',   type: 'lecture',     title: '2.2 · Pandas fundamentals',    duration: '25 min', done: true },
      { id: 'm2-lab1', type: 'lab',          title: 'Lab 2.1 · data loading',       duration: '30 min', done: true },
      { id: 'm2-q1',   type: 'quiz',         title: 'Quiz 2 · tools',               duration: '10 min', done: true },
      { id: 'm2-cp1',  type: 'checkpoint',   title: 'Oral checkpoint 1',            duration: '15 min', done: true },
    ],
    approvedPrompts: ['rephrase this CRISP-DM phase', 'give a real dataset example'],
    datasets: ['world_population.csv'],
  },
  {
    id: 3,
    title: 'Descriptive Statistics',
    subtitle: 'Measures of center, spread, and shape — honestly',
    pct: 64, done: false, locked: false, aiUse: 12,
    sections: [
      { id: 'm3-l1',   type: 'lecture',     title: '3.1 · Center & spread',       duration: '22 min', done: true },
      { id: 'm3-lab1', type: 'lab',          title: 'Lab 3.1 · mean vs median',    duration: '30 min', done: true },
      { id: 'm3-l2',   type: 'lecture',     title: '3.2 · Shape & outliers',       duration: '18 min', done: true },
      { id: 'm3-lab2', type: 'lab',          title: 'Lab 3.2 · descriptive measures', duration: '35 min', done: false, aiOff: true },
      { id: 'm3-q1',   type: 'quiz',         title: 'Quiz 3 · descriptive stats',  duration: '20 min', done: false, aiOff: true },
      { id: 'm3-cp1',  type: 'checkpoint',   title: 'Oral checkpoint 2',            duration: '15 min', done: false },
    ],
    approvedPrompts: ['rephrase in my words', 'give me a counterexample', 'where does this break', 'explain quartiles simply'],
    datasets: ['students_scores.csv'],
  },
  {
    id: 4,
    title: 'Inferential Statistics',
    subtitle: 'Central Limit Theorem, confidence intervals, and sampling distributions',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Mar 18',
    sections: [],
    approvedPrompts: [],
    datasets: ['students_scores.csv'],
  },
  {
    id: 5,
    title: 'Hypothesis Testing & P-values',
    subtitle: 'p-values, effect size (Cohen\'s d), and multiple comparisons — done right',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Mar 25',
    sections: [],
    approvedPrompts: [],
    datasets: ['students_scores.csv'],
  },
  {
    id: 6,
    title: 'pandas (cleaning, groupby, merge)',
    subtitle: 'Handling messy data — missing values, groupby mastery, and safe merging',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 1',
    sections: [],
    approvedPrompts: [],
    datasets: ['titanic_clean.csv', 'ecommerce_orders.csv'],
  },
  {
    id: 7,
    title: 'Exploratory Data Analysis',
    subtitle: 'Correlation, feature engineering, VIF, and building data intuition',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 8',
    sections: [],
    approvedPrompts: [],
    datasets: ['titanic_clean.csv', 'housing_prices.csv'],
  },
  {
    id: 8,
    title: 'Data Visualisation',
    subtitle: 'Matplotlib, Seaborn, chart selection, and colour accessibility',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 15',
    sections: [],
    approvedPrompts: [],
    datasets: ['air_quality_daily.csv', 'housing_prices.csv'],
  },
  {
    id: 9,
    title: 'Final Project & Oral Defense',
    subtitle: 'End-to-end CRISP-DM on a dataset you choose — full disclosure required',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 22',
    sections: [],
    approvedPrompts: [],
    datasets: ['student\'s choice'],
  },
  {
    id: 10,
    title: 'ML Bridge',
    subtitle: 'Pipelines, cross-validation, and hyperparameter tuning without leakage',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 6',
    sections: [],
    approvedPrompts: [],
    datasets: ['housing_prices.csv'],
  },
  {
    id: 11,
    title: 'Time Series Foundations',
    subtitle: 'DatetimeIndex, resampling, rolling windows, and chronological splits',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 13',
    sections: [],
    approvedPrompts: [],
    datasets: ['air_quality_daily.csv', 'sales_monthly.csv'],
  },
];
