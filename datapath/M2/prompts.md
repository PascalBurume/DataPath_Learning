# M2 — Gemma 4n Prompt Library
> Module 2: Tools & Methodology

---

## Template 1 — EXPLAIN a Jupyter feature
```
EXPLAIN: [magic command or Jupyter feature, e.g. %timeit / tab completion / ?]
My level: [Beginner / Developer]
Show me: a practical example using world_population.csv or pandas DataFrames
```

## Template 2 — CRISP-DM phase clarification
```
EXPLAIN: CRISP-DM [phase name: business understanding / data understanding / data preparation / modeling / evaluation / deployment]
My level: Beginner
Dataset: world_population.csv
What specific question or task am I doing in this phase?
```

## Template 3 — SCAFFOLD a pipeline structure
```
SCAFFOLD: I need to document my CRISP-DM phases for world_population.csv
Create a markdown template with 6 sections (one per phase) and 2–3 bullet point prompts in each section that I should fill in myself.
```

## Template 4 — REVIEW my environment setup
```
REVIEW: [paste your environment.yml or pip freeze output]
Check: Is this environment reproducible? What critical packages are missing for the DataPath curriculum?
```

## Template 5 — EXPLAIN a Python data structure concept
```
EXPLAIN: [list / dict / tuple / set] and how it relates to pandas DataFrames
My level: [Beginner / Developer]
Show a concrete example where understanding this data structure helps with pandas operations.
```

## Template 6 — DEBUG-HINT for environment issues
```
DEBUG-HINT: [paste your error message]
Context: I am setting up the ds-gemma-course conda environment
JupyterLab version: 4
OS: [Windows / macOS / Linux]
Give me a directional hint, not the full fix.
```

---

## Template 7 — CODE-EXPLAIN (understand your own code)
```
CODE-EXPLAIN: [paste your code cell here]
Context: M2 — [brief description of what the code is supposed to do]
My level: [Beginner / Developer]
Explain each line in plain English. Point out anything that could break on a different dataset.
```
**Use for:** Understanding code you wrote but aren't sure about — builds code literacy

**Example:**
```
CODE-EXPLAIN:
df = pd.read_csv('world_population.csv')
df = df.dropna(subset=['population_2020'])
df['growth_rate'] = (df['population_2020'] - df['population_2010']) / df['population_2010']

Context: M2 — I'm computing population growth rate for EDA
My level: Beginner
```

---

## Template 8 — PAIR-PROGRAM (code skeleton for data loading)
```
PAIR-PROGRAM: I need to write code to [describe the data loading or inspection task].
Dataset: world_population.csv
Give me a skeleton with [YOUR CODE HERE] blanks. Do NOT fill in the logic — I will do that.
My level: [Beginner / Developer]
```
**Use for:** Getting a code structure without having the solution handed to you

**Example:**
```
PAIR-PROGRAM: I need to load world_population.csv, check for missing values in each column, and create a summary table showing missingness percentage by column.
Dataset: world_population.csv
Give me a skeleton with blanks.
My level: Beginner
```
