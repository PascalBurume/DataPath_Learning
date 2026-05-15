# M12 — Gemma 4n Prompt Library
> Module 12: Local LLM Mastery for Data Scientists

Copy a template, fill in the brackets, and paste into the Gemma chat.
Always log your use in `AI_USE.md`.

---

## Template 1 — OLLAMA-VERIFY
```
OLLAMA-VERIFY: [paste output of `ollama list` or `/api/tags`]
Goal: confirm that my local setup is correct and that the model I need is available.
Please check:
1. whether Ollama looks healthy,
2. whether the expected model is present,
3. what command or API call I should run next.
Keep the answer concise and actionable.
```
**Use for:** setup checks, model-availability checks, first-run troubleshooting

**Example:**
```
OLLAMA-VERIFY: NAME            ID              SIZE      MODIFIED
 gemma4n:latest  abc123def456    5.4 GB    2 hours ago
 llama3.2:latest 789ghi012jkl    4.1 GB    1 day ago
```

---

## Template 2 — OLLAMA-MODEL-SELECT
```
OLLAMA-MODEL-SELECT: [task description]
Hardware: [CPU-only / GPU available / unknown]
Need for strict output: [low / medium / high]
Need for reasoning depth: [low / medium / high]
Please recommend one of: gemma4n, llama3.2, qwen2.5, phi4.
Explain the trade-off in 3 bullet points.
```
**Use for:** choosing the right local model before starting a DS task

**Example:**
```
OLLAMA-MODEL-SELECT: I need a local model to return valid JSON rows for synthetic ecommerce orders.
Hardware: GPU available
Need for strict output: high
Need for reasoning depth: medium
```

---

## Template 3 — PROMPT-PATTERN
```
PROMPT-PATTERN: [DS task]
My goal: choose the best prompt pattern for this task.
Please pick ONE of these patterns and justify it:
- structured output
- chain-of-thought for statistics
- self-consistency
Then give me a ready-to-use prompt template for the chosen pattern.
```
**Use for:** matching a DS task to the right prompt design before you query the model

**Example:**
```
PROMPT-PATTERN: I want to check whether my interpretation of a confidence interval is statistically correct.
My goal: choose the best prompt pattern for this task.
```

---

## Template 4 — SYNTHETIC-DATA
```
SYNTHETIC-DATA: [schema description]
Rows needed: [number]
Constraints: [ranges, categories, missing-value rules]
Output format: valid JSON array only
Important: remind me how to validate the synthetic data before I use it.
Do not add explanation before or after the JSON.
```
**Use for:** schema-controlled synthetic tabular data generation for testing or augmentation

**Example:**
```
SYNTHETIC-DATA: Ecommerce order table with columns order_id:int, customer_age:int,
product_category:str, order_value:float, returned:bool
Rows needed: 50
Constraints: age 18-75, order_value 5.00-500.00, product_category in [electronics, books, home, beauty]
Output format: valid JSON array only
```

---

## Template 5 — RAG-DESIGN
```
RAG-DESIGN: [data source + query type]
My files: [list your notebook(s), CSV(s), or notes]
Question type: [lookup / explanation / compare / summarise]
Please propose:
1. document-loading strategy,
2. chunking strategy,
3. embedding model,
4. retrieval top-k,
5. one way I should evaluate retrieval quality.
Keep it local and offline-first.
```
**Use for:** planning a local RAG system over your own notebooks, CSVs, and notes

**Example:**
```
RAG-DESIGN: My data source is 4 Jupyter notebooks and 2 CSV files from my capstone.
My files: churn_eda.ipynb, ab_test_notes.ipynb, customer_features.csv, experiment_log.csv
Question type: explanation
```

---

## Template 6 — PRIVACY-AUDIT
```
PRIVACY-AUDIT: [describe your DS workflow]
Please identify:
1. where sensitive data could leak into prompts,
2. where retrieved chunks could expose private information,
3. what should be redacted,
4. what belongs in AI_USE.md.
Do not complete any [AI-OFF] exercise for me; only audit the workflow risks.
```
**Use for:** finding privacy and disclosure risks in a local AI workflow before you ship it

**Example:**
```
PRIVACY-AUDIT: I load a CSV of customer complaints, retrieve relevant notebook notes,
and ask Gemma to draft a summary chart narrative for my project report.
```

---

## Template 7 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [statement you believe is true]
Lesson context: M12 — Local LLM Mastery for Data Scientists
Please tell me whether the statement is correct.
If it is wrong, rewrite it in one sentence and tell me what I should verify manually.
```
**Use for:** checking LLM-specific misconceptions before you rely on a generated result

**Example:**
```
MISCONCEPTION-CHECK: If my RAG system retrieved the top 3 chunks, the answer is probably correct.
Lesson context: M12 — Local LLM Mastery for Data Scientists
```

---

## Disclosure reminder
After each Gemma session, add an entry to `AI_USE.md`:
```markdown
## M12 — [date]
- Template used: [template number and name]
- Prompt sent: [exact text]
- Response summary: [1–2 sentences]
- What I accepted: [what you kept]
- What I changed or rejected: [what you modified]
```
