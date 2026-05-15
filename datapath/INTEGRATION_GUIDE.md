# DataPath — Lesson Library Integration Guide
> What changed, why, and how to apply it

---

## What Was Added

This update integrates a curated lesson library (54 lessons + 27 expert additions) derived from:
- *Python for Data Analysis* — Wes McKinney (3rd ed., 2022)
- *Hands-On Machine Learning* — Aurélien Géron (3rd ed., 2022)
- Expert additions (professional data science standards)

Every updated file references lesson IDs (`L1.1` → `L9.8`) so instructors, students, and the AI tutor all speak the same language.

---

## Files Updated or Created

```
datapath/
├── INTEGRATION_GUIDE.md              ← this file (NEW)
├── ds_course_lessons.md              ← full lesson library reference (NEW)
├── AI_SYSTEM/
│   └── gemma_system_prompt.md        ← Gemma 4n tutor system prompt (NEW)
├── M1/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M2/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M3/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M4/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M5/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M6/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M7/  instructor.md · prompts.md · quiz.md   (UPDATED)
├── M8/  instructor.md · prompts.md · quiz.md   (UPDATED)
└── M9/  instructor.md · prompts.md · quiz.md   (UPDATED)
```

---

## How to Load the System Prompt into Ollama

### Option A — Open WebUI (recommended)
1. Open WebUI → Settings → System Prompt
2. Paste the contents of `AI_SYSTEM/gemma_system_prompt.md`
3. Set model to `gemma4n` (or your Ollama model name)
4. Save as the default system prompt for the course workspace

### Option B — Ollama Modelfile
```bash
# Create a custom modelfile
cat AI_SYSTEM/gemma_system_prompt.md > /tmp/datapath_system.txt

cat > Modelfile <<EOF
FROM gemma4n
SYSTEM """
$(cat /tmp/datapath_system.txt)
"""
EOF

ollama create datapath-tutor -f Modelfile
ollama run datapath-tutor
```

### Option C — API call (if building custom UI)
```python
import requests

SYSTEM_PROMPT = open("AI_SYSTEM/gemma_system_prompt.md").read()

def ask_tutor(user_message, history=[]):
    payload = {
        "model": "gemma4n",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            *history,
            {"role": "user", "content": user_message}
        ],
        "stream": False
    }
    r = requests.post("http://localhost:11434/api/chat", json=payload)
    return r.json()["message"]["content"]
```

---

## Key New Concepts Per Module

| Module | Top additions from lesson library |
|--------|----------------------------------|
| M1 | Reproducibility from day 1 (L1.4), correlation ≠ causation anchor (L1.5) |
| M2 | Virtual environments (L2.4), Git for notebooks + `nbstripout` (L2.5) |
| M3 | Anscombe's Quartet [AI-OFF] demo (L3.4), Coefficient of Variation (L3.6) |
| M4 | CLT simulation [AI-OFF] (L4.3), correct CI interpretation (L4.4), power analysis (L4.6) |
| M5 | Effect size / Cohen's d [AI-OFF] (L5.3), multiple comparisons (L5.4), p-value definition (L5.1) |
| M6 | `.pipe()` pipeline pattern (L6.6), dtype memory optimisation (L6.5), `pandera` validation (L6.7) |
| M7 | Structured EDA checklist (L7.4), VIF multicollinearity (L7.6), EDA story narrative (L7.1) |
| M8 | Colour accessibility / CVD (L8.5), data-ink ratio (L8.6), Plotly interactive charts (L8.7) |
| M9 | Pyramid Principle for storytelling (L9.5), required limitations section (L9.6), portfolio structure (L9.8) |

---

## New [AI-OFF] Cells Added to Lab Notebooks

These cells require student's own thinking — no AI assistance permitted.
Add them to the relevant `.ipynb` at the positions indicated:

| Cell | Module | Lesson | Task |
|------|--------|--------|------|
| Anscombe demo | M3 | L3.4 | Compute stats for all 4 datasets; explain why plots matter |
| CV calculation | M3 | L3.6 | Manually compute CV for 3 columns; interpret which is most variable |
| CLT simulation | M4 | L4.3 | Write the bootstrap loop; plot the sampling distribution |
| CI interpretation | M4 | L4.4 | Write in plain English what the CI means (no formulas) |
| Effect size | M5 | L5.3 | Compute Cohen's d; interpret magnitude using benchmarks |
| Multiple comparisons | M5 | L5.4 | Apply Bonferroni correction; restate which results survive |
| VIF analysis | M7 | L7.6 | Compute VIF for housing_prices.csv features; flag problematic ones |
| EDA story | M7 | L7.1 | Write a 200-word narrative of findings (no code, no bullets) |
| Limitations section | M9 | L9.6 | Write 3 genuine limitations of your capstone analysis |

---

## Oral Checkpoint Updates

### End of M3 (existing)
Add these questions:
- "Show me your Anscombe's Quartet output. Why are four datasets with the same mean and correlation completely different?"
- "When would you use the median instead of the mean? Give me an example from `students_scores.csv`."

### End of M6 (existing)
Add these questions:
- "Walk me through your `.pipe()` chain. What does each step do?"
- "You have a DataFrame with 5 million rows. How would you reduce its memory footprint without losing data?"

### End of M9 (existing)
Add these questions:
- "What is the baseline model for your project, and does your model beat it?"
- "What are the three main limitations of your analysis?"
- "If I gave you 3 more months and twice the data, what would you do differently?"

---

## Assessment Updates

### Updated scoring rubric for M9 Capstone (40 pts)

| Criterion | Points | New requirement |
|-----------|--------|----------------|
| Problem framing | 5 | Must include explicit CRISP-DM phase mapping |
| Data preparation | 8 | Must document missingness decisions + validate with schema |
| EDA | 8 | Must follow structured checklist (L7.4); include correlation + VIF |
| Visualisations | 7 | Must include accessible colour palette + axis zero-start on bars |
| Insights & storytelling | 7 | Must use Pyramid Principle; limitations section required |
| Reproducibility | 5 | NEW — notebook runs top-to-bottom; environment file present; seeds fixed |

---

## Quick Reference — Lesson ID System

Lessons are cited as `L[module].[number]` throughout all files.

- `[McKinney]` — *Python for Data Analysis* (pandas book)
- `[Géron]` — *Hands-On Machine Learning*
- `[Expert]` — expert addition (professional standard)
- `[AI-OFF]` — cell where AI assistance is prohibited
