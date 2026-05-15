# M1 — Gemma 4n Prompt Library
> Curated templates for Module 1: Course Orientation & Intro to Data Science

Copy a template, fill in the brackets, and paste into the Gemma chat.
Always log your use in `AI_USE.md`.

---

## Template 1 — EXPLAIN a core concept
```
EXPLAIN: [concept name]
My level: [Beginner / Developer]
Context: I am in M1 of the DataPath course, just starting out.
What I already know: [1–2 sentences]
What's confusing me: [specific part]
```
**Use for:** ML landscape types, pipeline stages, ethics terms

**Example:**
```
EXPLAIN: supervised vs unsupervised learning
My level: Beginner
Context: M1 DataPath course
What I already know: I know what classification means roughly
What's confusing me: when would you ever NOT have labels?
```

---

## Template 2 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [statement you believe to be true]
Lesson context: M1 — Data Science overview
Please tell me if this is correct, and if not, what the right understanding is.
```
**Use for:** testing your own understanding before submitting anything

**Example:**
```
MISCONCEPTION-CHECK: Data science and machine learning are the same thing.
Lesson context: M1
```

---

## Template 3 — SCAFFOLD a notebook cell
```
SCAFFOLD: I need to load a CSV and do a first inspection
Dataset: sales_monthly.csv
Task: Print shape, dtypes, first 5 rows, and check for nulls
My level: [Beginner / Developer]
Give me a code skeleton with blanks I should fill in myself.
```

---

## Template 4 — EDA-SUGGEST (first look)
```
EDA-SUGGEST: I just loaded a new dataset for the first time.
Dataset description: [describe the columns you can see]
My goal: understand what questions this data can answer
Suggest 3 specific things I should look at first, and why.
```

---

## Template 5 — Ethics discussion prompt
```
EXPLAIN: [one of: algorithmic bias / data privacy / GDPR / objective specification]
My level: Beginner
Give me a concrete real-world example where getting this wrong caused harm.
Keep it to 3–4 sentences.
```

---

## Template 6 — Reproducibility check
```
REVIEW: [paste your notebook header / seed setup code]
Check: Does this setup make my notebook reproducible?
What am I missing?
```

---

## Disclosure reminder
After each Gemma session, add an entry to `AI_USE.md`:
```markdown
## M1 — [date]
- Template used: [template number and name]
- Prompt sent: [exact text]
- Response summary: [1–2 sentences]
- What I accepted: [what you kept]
- What I changed or rejected: [what you modified]
```
