# M3 — Gemma 4n Prompt Library
> Module 3: Descriptive Statistics

---

## Template 1 — EXPLAIN a stat concept
```
EXPLAIN: [concept: skewness / kurtosis / IQR / five-number summary / coefficient of variation]
My level: [Beginner / Developer]
Dataset context: students_scores.csv
Show me how to compute it and what the output means.
```

## Template 2 — SCAFFOLD outlier analysis
```
SCAFFOLD: I need to detect outliers in students_scores.csv
Method: [IQR rule / z-score / visual]
Give me a code skeleton where I fill in: the threshold values, the filter condition, and the business interpretation markdown cell.
```

## Template 3 — REVIEW my describe() extension
```
REVIEW: [paste your code that goes beyond describe()]
Check: Am I computing skewness and kurtosis? Am I plotting the distribution?
What important descriptive check am I missing?
```

## Template 4 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [one of the following statements]
- "I can rely on the mean and standard deviation to fully describe my dataset."
- "If two datasets have the same correlation, they have the same relationship."
- "I should always remove outliers before analysis."
Lesson context: M3 — Descriptive Statistics
```

## Template 5 — EDA-SUGGEST for students_scores.csv
```
EDA-SUGGEST: I just loaded students_scores.csv for the first time.
Columns include: [list what you see after df.columns]
My goal: understand the distribution and quality of student performance data
Suggest 4 specific descriptive statistics checks I should run, and why each matters.
```

## Template 6 — EXPLAIN distribution shape
```
EXPLAIN: How do I interpret skewness and kurtosis values?
My level: [Beginner / Developer]
My data: df['exam_score'].skew() = [paste your value]
Tell me: what does this number mean in plain English, and which measure of centre should I use?
```
