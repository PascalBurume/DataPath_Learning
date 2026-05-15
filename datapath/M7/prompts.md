# M7 — Gemma 4n Prompt Library
> Module 7: Exploratory Data Analysis

---

## Template 1 — EDA-SUGGEST (structured)
```
EDA-SUGGEST: I am starting EDA on [housing_prices.csv / titanic_clean.csv].
Columns: [paste df.columns.tolist()]
Target variable: [price / Survived]
Walk me through the 9-step EDA checklist, telling me which step is most critical for this specific dataset and why.
```

## Template 2 — SCAFFOLD correlation analysis
```
SCAFFOLD: I need to run both Pearson and Spearman correlation analysis on housing_prices.csv and plot both heatmaps side by side.
Include: the correlation calls, a side-by-side heatmap, and a code comment explaining when I should use Spearman instead of Pearson.
```

## Template 3 — EXPLAIN feature engineering during EDA
```
EXPLAIN: Why should I engineer features during EDA rather than as a separate step?
My level: [Beginner / Developer]
Dataset: housing_prices.csv
Show me 3 derived features I could create and how to immediately check if they improve correlation with the target.
```

## Template 4 — REVIEW my EDA checklist completion
```
REVIEW: [paste the checklist markdown with your checkboxes]
Tell me: which steps am I missing? Which step do you think I'm underinvesting in based on what I've shared?
```

## Template 5 — EXPLAIN VIF
```
EXPLAIN: Variance Inflation Factor (VIF)
My level: [Beginner / Developer]
Context: I have a housing dataset with sqft_living and sqft_above as features. They seem related.
Show me: how to compute VIF, what the thresholds mean, and what to do when VIF is too high.
```

## Template 6 — SCAFFOLD pair plot
```
SCAFFOLD: I want to create a pair plot for the top 5 features correlated with price in housing_prices.csv.
Include: correlation filter to select top 5, seaborn pairplot with hue on a categorical variable, and formatting for readability.
```

---

## Template 7 — EDA-HYPOTHESIZE (generate testable hypotheses)
```
EDA-HYPOTHESIZE: I am starting EDA on a new dataset.
Dataset description: [describe the columns, domain, and any known context]
My question: [what I'm trying to understand]
Generate 5 specific, testable hypotheses I should investigate.
For each hypothesis, tell me: (a) what to plot, (b) what statistic to compute, (c) what a "yes" result would look like.
Flag which hypotheses require domain knowledge to validate (things you can't answer from the data alone).
```
**Use for:** Getting a structured EDA plan before you start writing code

**Example:**
```
EDA-HYPOTHESIZE:
Dataset: titanic_clean.csv — passenger survival, demographics, ticket class
My question: What factors were most associated with survival?
Generate 5 testable hypotheses.
```
