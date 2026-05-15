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
    subtitle: 'DS pipeline, ML landscape, ethics, and your local AI workspace setup',
    pct: 100, done: true, locked: false, aiUse: 3,
    sections: [
      { id: 'm1-l1',   type: 'lecture',     title: '1.1 · Welcome to DataPath',         duration: '15 min', done: true },
      { id: 'm1-lab1', type: 'lab',          title: 'Lab 1.1 · Python + Jupyter setup',  duration: '20 min', done: true },
      { id: 'm1-l7',   type: 'lecture',     title: '1.7 · Your local AI workspace',      duration: '20 min', done: true },
      { id: 'm1-q1',   type: 'quiz',         title: 'Quiz 1 · course rules',             duration: '5 min',  done: true },
    ],
    approvedPrompts: ['EXPLAIN: [concept]', 'OLLAMA-VERIFY: [paste ollama list output]', 'FIRST-PROMPT: [concept you want explained]', 'MISCONCEPTION-CHECK: [statement]'],
    datasets: ['sales_monthly.csv'],
  },
  {
    id: 2,
    title: 'Tools & CRISP-DM',
    subtitle: 'CRISP-DM phases, Jupyter setup, pandas fundamentals, and AI-assisted coding',
    pct: 100, done: true, locked: false, aiUse: 7,
    sections: [
      { id: 'm2-l1',   type: 'lecture',     title: '2.1 · CRISP-DM phases',           duration: '20 min', done: true },
      { id: 'm2-l2',   type: 'lecture',     title: '2.2 · Pandas fundamentals',        duration: '25 min', done: true },
      { id: 'm2-lab1', type: 'lab',          title: 'Lab 2.1 · data loading',           duration: '30 min', done: true },
      { id: 'm2-q1',   type: 'quiz',         title: 'Quiz 2 · tools',                   duration: '10 min', done: true },
      { id: 'm2-cp1',  type: 'checkpoint',   title: 'Oral checkpoint 1',                duration: '15 min', done: true },
    ],
    approvedPrompts: ['CODE-EXPLAIN: [paste your code]', 'PAIR-PROGRAM: [task description]', 'rephrase this CRISP-DM phase', 'give a real dataset example'],
    datasets: ['world_population.csv'],
  },
  {
    id: 3,
    title: 'Descriptive Statistics',
    subtitle: 'Measures of center, spread, and shape — honestly, with AI concept checking',
    pct: 64, done: false, locked: false, aiUse: 12,
    sections: [
      { id: 'm3-l1',   type: 'lecture',     title: '3.1 · Center & spread',          duration: '22 min', done: true },
      { id: 'm3-lab1', type: 'lab',          title: 'Lab 3.1 · mean vs median',       duration: '30 min', done: true },
      { id: 'm3-l2',   type: 'lecture',     title: '3.2 · Shape & outliers',          duration: '18 min', done: true },
      { id: 'm3-lab2', type: 'lab',          title: 'Lab 3.2 · descriptive measures', duration: '35 min', done: false, aiOff: true },
      { id: 'm3-q1',   type: 'quiz',         title: 'Quiz 3 · descriptive stats',     duration: '20 min', done: false, aiOff: true },
      { id: 'm3-cp1',  type: 'checkpoint',   title: 'Oral checkpoint 2',              duration: '15 min', done: false },
    ],
    approvedPrompts: ['STATS-VERIFY: [paste your interpretation]', 'rephrase in my words', 'give me a counterexample', 'where does this break', 'explain quartiles simply'],
    datasets: ['students_scores.csv'],
  },
  {
    id: 4,
    title: 'Inferential Statistics',
    subtitle: 'Central Limit Theorem, confidence intervals, sampling distributions, and AI-verified CI wording',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Mar 18',
    sections: [],
    approvedPrompts: ['CI-REVIEW: [paste your CI interpretation]', 'EXPLAIN: [CLT / confidence interval / sampling distribution]'],
    datasets: ['students_scores.csv'],
  },
  {
    id: 5,
    title: 'Hypothesis Testing & P-values',
    subtitle: 'p-values, effect size (Cohen\'s d), multiple comparisons — AI sanity checks + AI-OFF reasoning',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Mar 25',
    sections: [],
    approvedPrompts: ['EFFECT-SIZE-CHECK: [paste your effect size calculation]', 'MISCONCEPTION-CHECK: [your p-value interpretation]'],
    datasets: ['students_scores.csv'],
  },
  {
    id: 6,
    title: 'Data Wrangling + Synthetic Data',
    subtitle: 'pandas mastery, missing values, AI-generated synthetic datasets, and AI-OFF pipeline build',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 1',
    sections: [],
    approvedPrompts: ['SYNTHETIC-DATA: [schema description]', 'AI-PAIR: [wrangling task]', 'DEBUG-HINT: [merge/groupby issue]'],
    datasets: ['titanic_clean.csv', 'ecommerce_orders.csv'],
  },
  {
    id: 7,
    title: 'Exploratory Data Analysis',
    subtitle: 'Correlation, feature engineering, VIF, AI hypothesis generation, and AI-OFF EDA narrative',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 8',
    sections: [],
    approvedPrompts: ['EDA-HYPOTHESIZE: [dataset description]', 'EDA-SUGGEST: [dataset description]'],
    datasets: ['titanic_clean.csv', 'housing_prices.csv'],
  },
  {
    id: 8,
    title: 'Data Visualisation + AI Storytelling',
    subtitle: 'Matplotlib, Seaborn, chart selection, accessibility, and AI-generated alt-text',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 15',
    sections: [],
    approvedPrompts: ['CHART-NARRATE: [describe your chart]', 'ALT-TEXT: [paste chart description]'],
    datasets: ['air_quality_daily.csv', 'housing_prices.csv'],
  },
  {
    id: 9,
    title: 'Capstone Project + AI-Augmented CRISP-DM',
    subtitle: 'End-to-end CRISP-DM with AI assistance at every stage — full disclosure + oral defense required',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'Apr 22',
    sections: [],
    approvedPrompts: ['CRISP-FRAME: [project question]', 'AI-DISCLOSURE: [stage + AI action]', 'ORAL-PREP: [project summary]'],
    datasets: ['student\'s choice'],
  },
  {
    id: 10,
    title: 'ML Bridge',
    subtitle: 'Pipelines, cross-validation, hyperparameter tuning, and AI pipeline skeleton generation',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 6',
    sections: [],
    approvedPrompts: ['PIPELINE-DESIGN: [features + target + task type]'],
    datasets: ['housing_prices.csv'],
  },
  {
    id: 11,
    title: 'Time Series Foundations',
    subtitle: 'DatetimeIndex, resampling, rolling windows, chronological splits, and AI seasonal pattern interpretation',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 13',
    sections: [],
    approvedPrompts: ['TIME-WINDOW: [series + frequency + business question]'],
    datasets: ['air_quality_daily.csv', 'sales_monthly.csv'],
  },
  {
    id: 12,
    title: 'Local LLM Mastery',
    subtitle: 'Ollama API, prompt engineering for DS, RAG over your own data, synthetic data at scale, privacy architecture',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 20',
    sections: [],
    approvedPrompts: ['OLLAMA-MODEL-SELECT: [task description]', 'RAG-DESIGN: [data source + query type]', 'PROMPT-PATTERN: [DS task]'],
    datasets: ['your_notebooks/', 'your_csvs/'],
  },
  {
    id: 13,
    title: 'Agentic DS Workflows',
    subtitle: 'ReAct agents, tool use, autonomous EDA pipelines, multi-step analysis, safety and verification',
    pct: 0, done: false, locked: true, aiUse: 0, unlockDate: 'May 27',
    sections: [],
    approvedPrompts: ['AGENT-DESIGN: [multi-step DS task]', 'TOOL-SPEC: [tool name + input/output]', 'AGENT-VERIFY: [agent output to check]'],
    datasets: ['housing_prices.csv', 'ecommerce_orders.csv'],
  },
];
