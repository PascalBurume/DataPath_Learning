# M4 — Gemma 4n Prompt Library
> Module 4: Inferential Statistics

---

## Template 1 — EXPLAIN a sampling concept
```
EXPLAIN: [concept: Central Limit Theorem / Standard Error / confidence interval / bootstrap / stratified sampling / power analysis]
My level: [Beginner / Developer]
Dataset context: students_scores.csv
```

## Template 2 — MISCONCEPTION-CHECK (CI interpretation)
```
MISCONCEPTION-CHECK: "A 95% confidence interval means there is a 95% probability that the true mean is inside the interval."
Lesson: L4.4
Tell me whether this is correct and give me the exact correct statement.
```

## Template 3 — SCAFFOLD bootstrap CI
```
SCAFFOLD: I need to compute a bootstrap confidence interval for the median of exam_score.
Statistic: median (not mean)
Iterations: 10,000
Seed: 42
Give me a skeleton where I fill in: the resampling line, the statistic computation, and the percentile calculation.
```

## Template 4 — EXPLAIN power analysis
```
EXPLAIN: statistical power analysis
My level: [Beginner / Developer]
Context: I want to know how many students I need in each group to detect a meaningful difference in exam scores between two teaching methods.
Show me: the statsmodels code, what each parameter means, and how to interpret the result.
```

## Template 5 — REVIEW my CLT simulation
```
REVIEW: [paste your CLT simulation code]
Check: Is the random seed set? Am I using replace=True? Does the plot clearly show the convergence to normality?
```

## Template 6 — SCAFFOLD stratified split
```
SCAFFOLD: I need to split students_scores.csv into train/test sets, stratified by grade band.
Grade bands: Fail (0–40), Pass (40–60), Merit (60–75), Distinction (75–90), High Distinction (90–100)
Give me a code skeleton using sklearn's StratifiedShuffleSplit with the strata verification step included.
```
