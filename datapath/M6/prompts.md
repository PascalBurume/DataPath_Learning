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
