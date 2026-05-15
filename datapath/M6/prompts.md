# M6 — Gemma 4n Prompt Library
> Module 6: Data Analysis with Python (pandas)

---

## Template 1 — SCAFFOLD missing data handling
```
SCAFFOLD: I need to handle missing data in titanic_clean.csv
Columns with missingness: [list from df.isnull().sum()]
For each column, give me a skeleton where I: (1) state the likely missingness mechanism (MCAR/MAR/MNAR), (2) choose a strategy, (3) implement it, (4) write a justification comment.
```

## Template 2 — EXPLAIN groupby() pattern
```
EXPLAIN: [groupby aggregate / groupby transform / groupby filter]
My level: [Beginner / Developer]
Dataset: ecommerce_orders.csv
Show a concrete example and explain the difference between transform and agg output shapes.
```

## Template 3 — DEBUG-HINT for merge issues
```
DEBUG-HINT: My merge changed the row count unexpectedly.
Before merge: [left rows] rows left, [right rows] rows right
After merge: [result rows] rows
Join type: [left/inner/outer]
Join key: [column name]
Give me a directional hint to diagnose what went wrong.
```

## Template 4 — SCAFFOLD a .pipe() pipeline
```
SCAFFOLD: I need to build a reusable cleaning pipeline for ecommerce_orders.csv
Steps to include: clean column names, remove duplicate order_ids, cap order_value outliers at 1st/99th percentile, add an order_month column from order_date.
Give me 4 function definitions and the final .pipe() chain skeleton.
```

## Template 5 — REVIEW my groupby code
```
REVIEW: [paste your groupby code]
Check: Am I using the most appropriate method (agg/transform/filter)?
Is my aggregation correctly named using the keyword argument syntax?
Am I missing any useful summary statistics?
```

## Template 6 — EXPLAIN dtype optimisation
```
EXPLAIN: How to reduce pandas DataFrame memory usage with dtype casting.
My level: [Beginner / Developer]
My DataFrame: [paste df.info() or df.dtypes output]
Which columns should I cast, to what type, and how much memory will I save?
```

---

## Template 7 — SYNTHETIC-DATA (generate a synthetic dataset)
```
SYNTHETIC-DATA: I need synthetic data for testing my pipeline.
Schema: {"column_name": dtype, ...}
Constraints: [list specific value ranges and rules]
Rows needed: [number]
Purpose: [testing / augmentation / privacy protection]
Return ONLY a JSON array with the exact schema. No explanation.
After I receive it, I will validate it with pandera.
```
**Use for:** Generating synthetic test data for your cleaning and wrangling pipelines

**Example:**
```
SYNTHETIC-DATA: I need customer survey responses for pipeline testing.
Schema: {"respondent_id": int, "age": int, "satisfaction": int, "would_recommend": bool}
Constraints: age 18-80, satisfaction 1-5, 30% would_recommend = True
Rows needed: 50
Purpose: testing my groupby aggregation pipeline
Return ONLY a JSON array. No explanation.
```

---

## Template 8 — AI-PAIR (pair-program a pandas transformation)
```
AI-PAIR: I need to write a pandas transformation and want a code skeleton.
Task: [describe what the transformation should do]
Dataset: [dataset name and relevant column names]
My level: [Beginner / Developer]
Give me a skeleton with blank sections marked [YOUR CODE HERE] — do NOT fill in the logic.
I will complete the skeleton myself.
```
**Use for:** Getting a code structure without having the AI solve the problem for you

**Example:**
```
AI-PAIR: I need to compute the monthly revenue per product category, then add a column showing each category's share of total monthly revenue.
Dataset: ecommerce_orders.csv — columns: order_date, product_category, order_value
My level: Developer
Give me a skeleton with blanks — I will fill in the groupby and transform logic myself.
```
