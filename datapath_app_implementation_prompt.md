# DataPath — App Implementation Prompt (v2)
> A single master prompt covering the full system: architecture, lesson library, AI tutor, and assessment.
> **v2 changes:** added M10 (ML Bridge) and M11 (Time Series); deepened M4–M8 with book-cited content; chapter+page anchors on every lesson; two new prompt templates; expanded `[AI-OFF]` set, oral checkpoints, and misconceptions to match.

---

## HOW TO USE THIS PROMPT

This is a **context-loading prompt**. Paste it at the start of any new session where you want an AI (Claude, Gemini, GPT-4, or Gemma via Open WebUI) to understand and work on the DataPath project. It encodes everything: the architecture, all 11 modules, the full lesson library with book anchors, the Gemma tutor system, and the assessment design.

**Three use modes:**
1. **Feature development** — paste this prompt, then describe what you want to build or change
2. **Content generation** — paste this prompt, then ask for new instructor notes, quiz questions, or prompts
3. **Debugging / QA** — paste this prompt, then share a file and ask for review

---

## SECTION 1 — PROJECT IDENTITY

You are working on **DataPath**, an **11-module beginner-to-intermediate Data Science course platform** built for offline/local use. M1–M9 form the required core (stats → pandas → EDA → viz → capstone). **M10 (ML Bridge)** and **M11 (Time Series Foundations)** are optional extensions for learners who want to bridge into modelling or temporal data — they are **not** prerequisites for the M9 capstone.

The platform's core differentiator is an embedded **Gemma 4n AI assistant** that runs 100% locally via **Ollama** (`http://localhost:11434`) — no cloud, no internet required.

### Tech stack

| Layer | Technology |
|-------|-----------|
| AI model | Gemma 4n via Ollama (`http://localhost:11434`) |
| Notebooks | JupyterLab 4 |
| Python env | Conda (`ds-gemma-course`) |
| Core libs | pandas · numpy · scipy · statsmodels · scikit-learn (Pipeline / ColumnTransformer / model_selection — used heavily from M10) · matplotlib · seaborn |
| Validation | pandera · ydata-profiling |
| Interactive viz | plotly |
| Persistence | joblib (M10 model save/reload) |
| Optional UI | Open WebUI (Docker) — browser chat for students |
| Design target | DataPath web app |

### Absolute constraints (never violate these)

- All AI runs **locally via Ollama** — never suggest cloud AI services
- All code must run in the `ds-gemma-course` conda environment
- No internet-dependent libraries or API keys
- JupyterLab 4 is the notebook environment

---

## SECTION 2 — FOLDER STRUCTURE

```
datapath/
├── INTEGRATION_GUIDE.md
├── ds_course_lessons.md          ← full lesson library (anchored to McKinney 3e + Géron 3e)
├── AI_SYSTEM/
│   └── gemma_system_prompt.md    ← load into Ollama Modelfile or Open WebUI
├── M1/
│   ├── instructor.md             ← 90-min lesson plan
│   ├── lab.ipynb                 ← student Jupyter notebook
│   ├── prompts.md                ← 8 curated Gemma 4n prompt templates
│   └── quiz.md                   ← 8–10 knowledge check questions
├── M2/ … M9/                     ← required core
└── M10/, M11/                    ← optional extensions (same 4-file anatomy)
```

### Per-module anatomy (4 files each)

| File | Purpose | Who uses it |
|------|---------|------------|
| `instructor.md` | 90-min lesson plan with timings, concept explanations, lesson IDs, and new code cells | Instructor |
| `lab.ipynb` | Student notebook; some cells marked `[AI-OFF]` | Student |
| `prompts.md` | 8 structured Gemma 4n templates for that module | Student (copy-paste into Gemma) |
| `quiz.md` | 8–10 questions, some marked `[AI-OFF]` | Student + grader |

---

## SECTION 3 — THE 11 MODULES

| # | Title | Dataset(s) | Oral checkpoint | Required? |
|---|-------|-----------|----------------|-----------|
| M1 | Orientation & Intro to DS | sales_monthly.csv | No | Core |
| M2 | CRISP-DM, Jupyter, pandas basics | world_population.csv | No | Core |
| M3 | Descriptive Statistics | students_scores.csv | **Yes — end of M3** | Core |
| M4 | Inferential Statistics / CLT | students_scores.csv | No | Core |
| M5 | Hypothesis Testing & P-values | students_scores.csv | No | Core |
| M6 | pandas (cleaning, groupby, merge) | titanic_clean.csv, ecommerce_orders.csv | **Yes — end of M6** | Core |
| M7 | Exploratory Data Analysis | titanic_clean.csv, housing_prices.csv | No | Core |
| M8 | Data Visualisation | air_quality_daily.csv, housing_prices.csv | No | Core |
| M9 | Final Project & Oral Defense | student's choice | **Yes — full defense** | Core |
| M10 | ML Bridge (Pipelines, CV, Tuning) | housing_prices.csv | **Yes — end of M10** | Optional extension |
| M11 | Time Series Foundations | air_quality_daily.csv, sales_monthly.csv | No | Optional extension |

> **Note:** M10 and M11 are designed as drop-in extensions. A learner can skip directly from M9 to graduation, or take one or both extensions to broaden into modelling / temporal analysis. M10's oral checkpoint focuses on data leakage and pipeline integrity; it does *not* duplicate the M9 defense.

---

## SECTION 4 — THE LESSON LIBRARY

All content is organized around lesson IDs (`L[module].[number]`). Every instructor.md, quiz.md, prompts.md, and the Gemma system prompt reference these IDs so everything stays aligned.

### Source tags & anchor format

- `[McKinney ChN p.X–Y]` — *Python for Data Analysis* (3rd ed., 2022)
- `[Géron ChN p.X–Y]` — *Hands-On Machine Learning* (3rd ed., 2022)
- `[Expert]` — professional data science standard, no single book anchor

> ⚠️ **Page anchors are approximate (±5 pages)** against the 3rd-edition O'Reilly paginations. Chapter anchors are exact. The Gemma tutor must echo the anchor when citing a lesson, but should fall back to the chapter-only form if the page is unverifiable.

### Full lesson index

**M1 — Orientation**
- L1.1 Data science = actionable knowledge from data, not just running code `[McKinney Ch1 p.1–10]`
- L1.2 Understand the ML landscape before writing code `[Géron Ch1 p.3–35]`
- L1.3 The 6-stage data-to-insight pipeline `[Expert]`
- L1.4 Reproducibility from day one (seeds, environment files) `[Expert]`
- L1.5 Correlation vs causation — anchor this distinction in M1 `[Expert]`
- L1.6 Responsible AI & data ethics primer `[Expert]`

**M2 — Tools & Methodology**
- L2.1 Jupyter as literate programming: magic commands, introspection `[McKinney Ch2 p.20–55]`
- L2.2 CRISP-DM as a living cycle, not a waterfall `[Géron Ch2 p.36–45]`
- L2.3 Python data structures (dict → DataFrame) `[McKinney Ch3 p.65–95]`
- L2.4 Virtual environments & dependency management (conda/pip) `[Expert]`
- L2.5 Git for notebooks + nbstripout `[Expert]`

**M3 — Descriptive Statistics**
- L3.1 `describe()` is a starting point, not a conclusion `[McKinney Ch5 p.140–160]`
- L3.2 Mean vs median depends on distribution shape, not convention `[McKinney Ch5 p.160–170]`
- L3.3 Outlier detection is a business decision before a statistical one `[Géron Ch2 p.55–65]`
- L3.4 Anscombe's Quartet — always plot before computing statistics `[Expert]` ⚠️ `[AI-OFF]`
- L3.5 Five-number summary and box plot interpretation `[Expert]`
- L3.6 Coefficient of Variation for cross-column comparison `[Expert]`

**M4 — Inferential Statistics**
- L4.1 Stratified sampling for skewed populations `[Géron Ch2 p.55–65]`
- L4.2 Bootstrap CI — no distributional assumptions required `[McKinney Ch12 p.420–430]`
- L4.3 CLT simulation — students must see it, not just hear it `[Expert]` ⚠️ `[AI-OFF]`
- L4.4 Correct CI interpretation — the "100 experiments" mental model `[Expert]` ⚠️ `[AI-OFF]` (written cell)
- L4.5 Standard Error vs Standard Deviation `[Expert]`
- L4.6 Power analysis before data collection `[Expert]`
- L4.7 Train/test/validation split — why, when, and `train_test_split(stratify=)` `[Géron Ch2 p.75–80]` *(NEW: bridges to M10)*

**M5 — Hypothesis Testing**
- L5.1 p-value = P(data|H0), NOT P(H0|data) `[Expert]`
- L5.2 Check assumptions before any parametric test `[Géron Ch4 p.130–145]`
- L5.3 Statistical significance ≠ practical significance — always compute Cohen's d `[Expert]` ⚠️ `[AI-OFF]`
- L5.4 Multiple comparisons: Bonferroni + Benjamini-Hochberg `[Expert]`
- L5.5 Paired vs independent t-test — when to use which `[Expert]`
- L5.6 Failing to reject H0 ≠ proving H0 is true `[Expert]`
- L5.7 Assumption testing in code: Shapiro-Wilk, Levene, Anderson-Darling `[Géron Ch4 p.130–145 + scipy.stats]` ⚠️ `[AI-OFF]` *(NEW)*

**M6 — pandas (cleaning, groupby, merge)**
- L6.1 Missing data: locate, quantify, choose, justify — never just `dropna()` `[McKinney Ch7 p.215–230]`
- L6.2 `groupby()` mastery: agg / transform / filter `[McKinney Ch10 p.290–325]`
- L6.3 Safe merging: join types, `validate=`, row-count audits `[McKinney Ch8 p.255–275]`
- L6.4 Build data transformation pipelines, not one-off scripts `[Géron Ch2 p.85–100]`
- L6.5 dtype memory optimisation — cast columns to appropriate types `[McKinney Ch7 p.240–250]`
- L6.6 `.pipe()` for readable, composable transformation chains `[McKinney Ch7 p.235–240]`
- L6.7 pandera schema validation as a first-class step `[Expert]`
- L6.8 Categorical dtype for memory + speed (`.astype('category')`, ordered categoricals) `[McKinney Ch7 p.245–260]` *(NEW)*
- L6.9 `SimpleImputer`, `KNNImputer`, iterative imputation — when each is appropriate `[Géron Ch2 p.72–78]` *(NEW)*

**M7 — EDA**
- L7.1 EDA is hypothesis-generating, not box-ticking `[Géron Ch2 p.50–55]`
- L7.2 Correlation: Pearson (linear) vs Spearman (monotonic) `[McKinney Ch5 p.175–180]`
- L7.3 Feature engineering happens during EDA, not after `[Géron Ch2 p.65–72]`
- L7.4 The 9-step EDA checklist — structured protocol `[Expert]`
- L7.5 ydata-profiling for rapid automated EDA `[Expert]`
- L7.6 VIF multicollinearity detection `[Expert]` ⚠️ `[AI-OFF]`
- L7.7 Bivariate / multivariate visual EDA: pair plots, correlation heatmaps, ECDFs `[McKinney Ch9 p.310–335]` *(NEW)*

**M8 — Data Visualisation**
- L8.1 Matplotlib figure/axes object model — master this before shortcuts `[McKinney Ch9 p.270–290]`
- L8.2 Seaborn as a statistical visualisation library (hue/size/style) `[McKinney Ch9 p.310–325]`
- L8.3 Geographical data needs geographical visualisation `[Géron Ch2 p.60–65]`
- L8.4 Chart selection = communication decision, not preference `[Expert]`
- L8.5 CVD-safe colour palettes — never red-green as primary contrast `[Expert]`
- L8.6 Data-ink ratio — eliminate chart junk `[Expert]`
- L8.7 Plotly Express for interactive visualisation `[Expert]`
- L8.8 Matplotlib advanced: ticks, legends, annotations, `tight_layout`, high-res export `[McKinney Ch9 p.290–310]` *(NEW)*

**M9 — Final Project**
- L9.1 Frame the problem before touching the data `[Géron Ch2 p.40–55]`
- L9.2 Build a baseline model before any sophisticated analysis `[Géron Ch2 p.95–105]`
- L9.3 Present data stories, not data dumps `[McKinney Ch13 p.470–500]`
- L9.4 Reproducibility is the final deliverable, not the notebook `[Expert]`
- L9.5 Pyramid Principle for data storytelling `[Expert]`
- L9.6 Limitations section is required, not optional `[Expert]` ⚠️ `[AI-OFF]`
- L9.7 Peer review as part of the assessment `[Expert]`
- L9.8 Portfolio mindset — every project is a public artifact `[Expert]`

**M10 — ML Bridge** *(NEW — optional extension)*
- L10.1 End-to-end ML project framing: success metric, baseline, loss function `[Géron Ch2 p.40–55]`
- L10.2 Stratified train/test split revisited (income-bucket pattern) `[Géron Ch2 p.55–65]`
- L10.3 Feature scaling: StandardScaler vs MinMaxScaler vs RobustScaler — always **fit on train only** `[Géron Ch2 p.83–88]`
- L10.4 `Pipeline` and `ColumnTransformer` — parallel numeric + categorical paths, leakage prevention `[Géron Ch2 p.85–95]` ⚠️ `[AI-OFF]` (assembly cell)
- L10.5 Custom transformers via `FunctionTransformer` and `BaseEstimator` / `TransformerMixin` `[Géron Ch2 p.90–95]`
- L10.6 Cross-validation with `cross_val_score` and `KFold` (stratified for classification) `[Géron Ch2 p.95–100]`
- L10.7 Hyperparameter tuning: `GridSearchCV` and `RandomizedSearchCV` — pitfalls of overfitting the validation set `[Géron Ch2 p.100–110]`
- L10.8 Model persistence with `joblib`; reload-and-predict reproducibility `[Géron Ch2 p.110–115]`

**M11 — Time Series Foundations** *(NEW — optional extension)*
- L11.1 Datetime types, `pd.to_datetime`, parsing pitfalls `[McKinney Ch11 p.350–360]`
- L11.2 DatetimeIndex, slicing by date strings, partial-string indexing `[McKinney Ch11 p.360–370]`
- L11.3 Resampling: upsample / downsample, `asfreq` vs `resample` `[McKinney Ch11 p.380–395]`
- L11.4 Rolling windows + expanding windows for trend smoothing `[McKinney Ch11 p.395–410]`
- L11.5 Time-zone handling and DST traps `[McKinney Ch11 p.370–380]` ⚠️ `[AI-OFF]`
- L11.6 Time-aware train/test split — never random shuffle a time series `[Expert + Géron Ch15 reference]`

---

## SECTION 5 — AI INTEGRATION DESIGN

### Four constraint mechanisms

| Mechanism | How it works |
|-----------|-------------|
| Prompt library | Students use 8 approved templates per module — not free-form chat |
| `[AI-OFF]` cells | Certain notebook cells prohibit AI use; graded separately |
| Mandatory disclosure | Every submission requires `AI_USE.md` listing all prompts used, outputs accepted/rejected |
| Oral checkpoints | End of M3, M6, M10, M9 — students explain work verbally to verify authentic understanding |

### The 8 student prompt templates (used in every module's prompts.md)

```
EXPLAIN: [concept]
My level: [Beginner / Developer]
Context: [module + dataset]
What I already know: [...]
What's confusing me: [...]
```

```
DEBUG-HINT: [error message]
Context: [what you were trying to do]
Give me a directional hint only — not the full fix.
```

```
SCAFFOLD: [task description]
Dataset: [name]
Give me a code skeleton with blanks I should fill in myself.
```

```
EDA-SUGGEST: [dataset description / column list]
My goal: [what you want to understand]
Suggest [N] specific steps, with rationale for each.
```

```
REVIEW: [paste your code or notebook section]
Check: [specific things to evaluate]
```

```
MISCONCEPTION-CHECK: [statement you believe is true]
Lesson context: [module + lesson ID]
Is this correct? If not, give me the right understanding.
```

```
PIPELINE-DESIGN: [feature list + target column + task type]   ← M10
Dataset: [name]
Produce a Pipeline / ColumnTransformer skeleton with named steps.
Mark which steps must be fit on TRAIN ONLY to avoid leakage.
Do not fill in hyperparameters — leave placeholders.
```

```
TIME-WINDOW: [series description + frequency + business question]   ← M11
Propose: (a) resample frequency, (b) rolling window size,
(c) whether to use mean / median / sum, with rationale.
Flag any time-zone or DST consideration that applies.
```

### `[AI-OFF]` cells — full list

| Cell | Module | Lesson ID | Task |
|------|--------|-----------|------|
| Anscombe's Quartet demo | M3 | L3.4 | Compute stats for all 4 datasets; explain the contradiction in a markdown cell |
| CV interpretation | M3 | L3.6 | Manually compute CV for 3 columns; interpret which is most variable |
| CLT simulation loop | M4 | L4.3 | Write the bootstrap sampling loop; plot the convergence |
| CI written interpretation | M4 | L4.4 | Write in plain English what the CI means — no formulas, no forbidden phrase |
| Cohen's d function | M5 | L5.3 | Write the function from scratch; interpret the magnitude |
| Multiple comparisons | M5 | L5.4 | Apply Bonferroni; restate which results survive |
| Assumption tests | M5 | L5.7 | Run Shapiro-Wilk + Levene; interpret p-values manually before choosing the test |
| VIF analysis | M7 | L7.6 | Compute VIF for housing features; flag and explain problematic ones |
| EDA narrative | M7 | L7.1 | 200-word prose story — no bullets, no code |
| Limitations section | M9 | L9.6 | 4-category limitations — data, method, confounders, generalisability |
| Pipeline assembly | M10 | L10.4 | Hand-assemble the `ColumnTransformer`; annotate which steps fit on TRAIN ONLY |
| Time-zone reasoning | M11 | L11.5 | Manually convert a timestamp across DST boundary; explain the off-by-one hour |

### Gemma 4n system prompt (condensed)

Load the full version from `AI_SYSTEM/gemma_system_prompt.md`. Key rules:
1. Always identify the lesson ID **and echo its anchor** (e.g. `[Géron Ch2 p.85–95]`) before answering
2. Respond at the student's declared level (Beginner = analogy first; Developer = full code)
3. Always flag these 7 misconceptions when the lesson is relevant:
   - L4.4: CI ≠ "95% chance parameter is inside"
   - L5.1: p-value ≠ P(H0 is true)
   - L5.6: p > 0.05 ≠ proof of no effect
   - L5.3: statistical significance ≠ practical significance
   - L3.2: mean is not always the right measure of centre
   - L10.4: scaling/imputing **before** train/test split leaks the test set — always wrap in a Pipeline
   - L11.6: random `train_test_split` on a time series is invalid — split chronologically
4. `[AI-OFF]` cells: refuse to help; say "attempt it yourself first"
5. End every response with: `📚 Lesson: [ID] [anchor] | Next to study: [next lesson]`
6. Always remind students to log in `AI_USE.md`

---

## SECTION 6 — ASSESSMENT SYSTEM

### Lab notebooks — 20 pts each

| Criterion | Points |
|-----------|--------|
| Correctness | 6 |
| [AI-OFF] compliance | 5 |
| Code quality | 3 |
| Interpretation (markdown cells) | 4 |
| AI_USE.md disclosure | 2 |

### Capstone project (M9) — 40 pts

| Criterion | Points | Key requirement |
|-----------|--------|----------------|
| Problem framing | 5 | Approved brief; CRISP-DM phases documented |
| Data preparation | 8 | Justified missingness decisions; schema validated |
| EDA | 8 | 9-step checklist; feature engineering; VIF |
| Visualisations | 7 | CVD-safe palettes; bar axes start at zero |
| Insights & storytelling | 7 | Pyramid Principle; genuine limitations section |
| Reproducibility | 5 | Notebook runs top-to-bottom; environment.yml; seeds fixed |

### Capstone bonus rubric — when M10 / M11 content is used (+5 pts max, on top of 40)

| Criterion | Points | Triggered when |
|-----------|--------|----------------|
| Pipeline integrity | +3 | Project uses any preprocessing → modelling step. Awarded only if all transformers are wrapped in `Pipeline`/`ColumnTransformer` and fit on TRAIN ONLY |
| Time-aware validation | +2 | Project involves time-indexed data. Awarded only if the train/test split is chronological (no random shuffle) |

### Oral checkpoint questions (by module)

**End of M3**
- "Show me your Anscombe output. Why are the summary statistics identical but the plots different?"
- "Point to a column where the mean is a bad measure of centre. How do you know?"

**End of M6**
- "Walk me through your `.pipe()` chain. What does each function do?"
- "You ran a merge and got 1,400 rows from 800. What happened?"

**End of M10**
- "Show me your `Pipeline`. Where would data leakage occur if you removed it?"
- "Your `GridSearchCV` picked these hyperparameters. How do you know they aren't overfit to the validation set?"

**End of M9 (full defense — 15 min)**
- "State your question and key finding in one sentence each."
- "What is your baseline model? Does your analysis beat it?"
- "What are the three main limitations of your analysis?"
- "What would you do differently with 3 more months and twice the data?"
- "Show me your AI_USE.md. Walk me through your most significant AI interaction."
- *(if M11 used)* "Why can't you use a random train/test split on this dataset?"

---

## SECTION 7 — CRITICAL MISCONCEPTIONS TO ALWAYS CORRECT

These are the highest-priority conceptual errors. Correct them immediately whenever they appear in student work, questions, or quiz answers:

| ID | Misconception | Correct statement |
|----|--------------|------------------|
| L4.4 | "95% CI means 95% chance the true value is inside" | If we repeated the experiment 100×, ~95 of the resulting CIs would contain the true parameter |
| L5.1 | "p-value = probability H0 is true" | p = P(data this extreme given H0 is true) — not the reverse |
| L5.6 | "p > 0.05 proves no effect" | Absence of evidence ≠ evidence of absence |
| L5.3 | "p < 0.05 means the result is important" | Always compute Cohen's d — large n makes trivial effects significant |
| L3.4 | "Summary statistics tell you everything about a dataset" | Anscombe's Quartet: four datasets with identical stats, completely different shapes |
| L6.1 | "`dropna()` is safe" | Dropping rows assumes MCAR; this is rarely true |
| L6.3 | "Merge validates itself" | Silent row explosion happens without `validate=` |
| L8.4 | "Bar chart y-axis can start anywhere" | Bar charts must always start at zero |
| L10.3 | "Scaling before splitting is fine" | Fitting the scaler on the full dataset leaks test-set statistics into training — always fit on TRAIN ONLY (or wrap in a Pipeline) |
| L10.7 | "More hyperparameter trials = better model" | Excessive grid search overfits the validation set; use nested CV or hold out a final test set |
| L11.6 | "Random `train_test_split` works for time series" | Time series must be split chronologically (`TimeSeriesSplit` or manual cut by date), otherwise the model trains on the future |

---

## SECTION 8 — IMPLEMENTATION TASK FORMAT

When asking for new content or changes, use this format after pasting this prompt:

```
TASK TYPE: [one of: new-file / update-file / add-lesson / add-quiz-questions / add-prompts / debug / review / explain]

MODULE: [M1–M11, or ALL]
FILE: [instructor.md / lab.ipynb / prompts.md / quiz.md / AI_SYSTEM/gemma_system_prompt.md / other]
LESSON IDs INVOLVED: [e.g. L5.3, L7.6, L10.4]
STUDENT LEVEL: [Beginner / Developer / Both]
DATASET IN USE: [the module's dataset]

DESCRIPTION:
[Describe exactly what you want created or changed. Be specific.]

CONSTRAINTS:
[Any constraints beyond the defaults above. e.g. "keep under 90 minutes", "no scipy imports", "must use titanic_clean.csv"]
```

---

## SECTION 9 — EXAMPLE IMPLEMENTATION REQUESTS

### Example A — Add a new quiz question
```
TASK TYPE: add-quiz-questions
MODULE: M5
FILE: quiz.md
LESSON IDs INVOLVED: L5.4
STUDENT LEVEL: Both
DATASET IN USE: students_scores.csv

DESCRIPTION:
Add 2 new questions testing the multiple comparisons problem.
One for beginners (conceptual), one for developers (code-based).

CONSTRAINTS:
Questions must reference a realistic scenario from students_scores.csv.
Developer question must require the multipletests() function from statsmodels.
```

### Example B — Update the Gemma system prompt
```
TASK TYPE: update-file
MODULE: ALL
FILE: AI_SYSTEM/gemma_system_prompt.md
LESSON IDs INVOLVED: L5.4, L7.6
STUDENT LEVEL: Both

DESCRIPTION:
Add L5.4 (multiple comparisons) and L7.6 (VIF) to the list of
misconceptions the tutor should flag proactively.
Also add a new prompt template for "COMPARE:" where students compare
two methods (e.g. Bonferroni vs BH, Pearson vs Spearman).
```

### Example C — Create a new lab notebook cell
```
TASK TYPE: add-lesson
MODULE: M5
FILE: lab.ipynb
LESSON IDs INVOLVED: L5.4
STUDENT LEVEL: Developer
DATASET IN USE: students_scores.csv

DESCRIPTION:
Add a new [AI-OFF] cell where students apply both Bonferroni and BH
correction to 5 group comparisons. The cell must include: the raw
p-value loop, both multipletests() calls, and a results DataFrame.
The [AI-OFF] part is the interpretation markdown cell only — the code
scaffold is provided.
```

### Example D — Build an M10 pipeline lab cell
```
TASK TYPE: add-lesson
MODULE: M10
FILE: lab.ipynb
LESSON IDs INVOLVED: L10.3, L10.4
STUDENT LEVEL: Developer
DATASET IN USE: housing_prices.csv

DESCRIPTION:
Add an [AI-OFF] cell where students hand-assemble a ColumnTransformer:
 - numeric pipeline: SimpleImputer(median) → StandardScaler
 - categorical pipeline: SimpleImputer(most_frequent) → OneHotEncoder(handle_unknown='ignore')
Followed by a Pipeline that wraps the ColumnTransformer + a placeholder
estimator. Include a markdown cell where the student must annotate which
steps would leak data if fit on the full dataset before splitting.

CONSTRAINTS:
Reference Géron Ch2 p.85–95 in the cell header. Do NOT include
hyperparameters or fit the model — assembly + leakage reasoning only.
```

---

## SECTION 10 — OUTPUT STANDARDS

All generated files must meet these standards:

**Markdown files (instructor.md, prompts.md, quiz.md)**
- Use lesson IDs **with full book anchor** consistently: `**L5.3 — Effect size** \`[Expert]\`` or `**L10.4 — Pipelines** \`[Géron Ch2 p.85–95]\``
- Mark AI-OFF cells with: `⚠️ [AI-OFF]`
- Include a `[McKinney ChN p.X–Y]`, `[Géron ChN p.X–Y]`, or `[Expert]` source tag on every lesson — chapter is mandatory, page range is preferred (mark `approx.` if uncertain)
- The Gemma tutor must echo the anchor in its closing line so students can find the source
- Code blocks use triple backticks with `python` or `bash` language tag

**Code cells (in lab.ipynb descriptions)**
- Always include `import numpy as np; np.random.seed(42)` where randomness is involved
- Use only libraries in the conda environment: pandas, numpy, scipy, statsmodels, scikit-learn, matplotlib, seaborn, plotly, pandera, ydata-profiling, joblib
- For M10 cells: every preprocessing step must live inside a `Pipeline` or `ColumnTransformer`; never call `.fit()` on a transformer outside one
- For M11 cells: never call `train_test_split` with `shuffle=True` on a time-indexed DataFrame
- Add comments explaining the "why", not just the "what"
- [AI-OFF] cells must have the `# [AI-OFF]` comment as the first line

**Quiz questions**
- Mark AI-OFF questions clearly at the start: `**[AI-OFF]**`
- Reference lesson IDs at the end of each question: `*(Lesson L5.3 — McKinney Ch5 p.160)*`
- Include both conceptual and applied questions per module
- Final question should always be oral-defense preparation

**Prompts (prompts.md)**
- Each template must have: template code block, "Use for:" note, and one filled example
- Use `[Beginner / Developer]` placeholder where level is relevant
- M10 modules must include the `PIPELINE-DESIGN:` template; M11 modules must include the `TIME-WINDOW:` template
- Always include the disclosure reminder at the bottom of the file
