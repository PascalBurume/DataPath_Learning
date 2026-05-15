# M5 — Gemma 4n Prompt Library
> Module 5: Hypothesis Testing & P-Values

---

## Template 1 — MISCONCEPTION-CHECK (p-value)
```
MISCONCEPTION-CHECK: [choose one]
- "A p-value of 0.03 means there is a 97% chance our hypothesis is correct."
- "p > 0.05 proves that there is no difference between groups."
- "Statistical significance means practical importance."
Lesson: M5 — Hypothesis Testing
```

## Template 2 — SCAFFOLD assumption checking
```
SCAFFOLD: Before running a two-sample t-test on students_scores.csv
Groups: class A vs class B on exam_score
Include: Shapiro-Wilk normality check, Levene's variance check, and a decision branch for which t-test variant to use.
My level: [Beginner / Developer]
```

## Template 3 — EXPLAIN effect size
```
EXPLAIN: Cohen's d effect size
My level: [Beginner / Developer]
Context: I ran a t-test comparing class A and class B exam scores. p=0.002, n=500 per group.
Show me: the formula, how to compute it in Python, and the interpretation benchmarks.
```

## Template 4 — SCAFFOLD multiple comparisons
```
SCAFFOLD: I need to compare exam scores across 5 class groups and correct for multiple comparisons.
Method: Bonferroni AND Benjamini-Hochberg
Show me: the loop for raw p-values, the multipletests call, and a results DataFrame.
```

## Template 5 — EXPLAIN paired vs independent
```
EXPLAIN: When should I use a paired t-test vs an independent t-test?
My level: [Beginner / Developer]
My scenario: I have before and after test scores for the same 30 students.
Which test is correct? What goes wrong if I use the wrong one?
```

## Template 6 — EDA-SUGGEST before hypothesis testing
```
EDA-SUGGEST: I want to run hypothesis tests on students_scores.csv
Planned tests: compare exam scores between groups (class, gender, study_hours_group)
Suggest: 3 EDA steps I should complete before running any test, and why each matters.
```
