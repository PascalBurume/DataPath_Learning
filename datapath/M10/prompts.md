# M10 — Gemma 4n Prompt Library
> Module 10: ML Bridge (Pipelines, CV, Tuning) | Dataset: housing_prices.csv

---

## Template 1 — EXPLAIN end-to-end framing
```
EXPLAIN: How do I frame an ML problem before writing code?
My level: [Beginner / Developer]
My dataset: housing_prices.csv
My goal: [predict X / classify Y]
Walk me through the four-question framing (objective, metric, baseline, constraint), and give me a fill-in template I can paste at the top of my notebook.
```

## Template 2 — SCAFFOLD stratified split
```
SCAFFOLD: I need to do a stratified train/test split on housing_prices.csv.
The target is median_house_value (continuous).
Show me the income-bucket pattern from Géron Ch2 p.55–65: bin median_income, stratify on the bins, then drop the bin column.
Leave the bin edges as TODO comments — I should justify them myself.
```

## Template 3 — PIPELINE-DESIGN
```
PIPELINE-DESIGN: housing_prices.csv
Numeric features: median_income, housing_median_age, total_rooms, total_bedrooms, population, households
Categorical features: ocean_proximity
Target: median_house_value (regression)

Produce a Pipeline / ColumnTransformer skeleton with named steps.
Mark every step that must be fit on TRAIN ONLY to avoid leakage.
Do not pick the final estimator's hyperparameters — leave placeholders.
```

## Template 4 — EXPLAIN scaler choice
```
EXPLAIN: How do I choose between StandardScaler, MinMaxScaler, and RobustScaler?
My level: [Beginner / Developer]
My features: [list them and note which have outliers or skew]
Give me a short decision rule + a one-line justification I can paste as a code comment.
```

## Template 5 — DEBUG-HINT pipeline error
```
DEBUG-HINT: [paste the full traceback]
Context: I called .fit() on my Pipeline and it raised this error.
Give me a directional hint only — likely cause and the next thing to check. Do NOT give me the full fix.
```

## Template 6 — REVIEW grid search setup
```
REVIEW: [paste your GridSearchCV code]
Check:
 - Is the grid small enough to avoid overfitting the validation folds?
 - Is the scoring metric explicit?
 - Is `refit=True` set if I plan to reuse `best_estimator_`?
 - Did I hold out a final test set that I have not touched?
Suggest 3 specific improvements.
```

## Template 7 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [statement you believe is true]
Lesson context: M10, [L10.3 / L10.4 / L10.7]
Is this correct? If not, give me the right understanding and the textbook anchor.
```

## Template 8 — SCAFFOLD persistence + reload test
```
SCAFFOLD: I want to save my best pipeline with joblib and verify it reloads correctly.
Show me a 4-cell skeleton:
 1. joblib.dump(best_estimator_, ...)
 2. start a fresh kernel (markdown instruction)
 3. joblib.load(...) and predict on a small test slice
 4. assert predictions match what I had before saving (within float tolerance)
```

---

> **Disclosure reminder:** every interaction above must be logged in `AI_USE.md`. Note the prompt used, what Gemma returned, and what you accepted, edited, or rejected — and why.
