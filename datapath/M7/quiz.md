# M7 — Knowledge Check
> Module 7: Exploratory Data Analysis

---

**Q1.** List the 9 steps of the structured EDA checklist in order. For each step, write one sentence explaining what you learn from it.
*(Lesson L7.4)*

**Q2.** [AI-OFF] Open `housing_prices.csv` and compute both Pearson and Spearman correlations with `price`. Find one feature where Pearson and Spearman give notably different values. Explain in 2 sentences why they differ.
*(Lesson L7.2)*

**Q3.** You compute sqft_living has r=0.71 with price, and sqft_above has r=0.61 with price. You also see their VIF values are 8.4 and 7.9 respectively. What does this VIF result mean for a linear regression model, and what are your options?
*(Lesson L7.6)*

**Q4.** [AI-OFF] Write your 200-word EDA narrative for `housing_prices.csv`. No code, no bullet points — prose only. It must answer: (a) the most important pattern, (b) what surprised you, (c) which feature you'd focus on and why.
*(Lesson L7.1)*

**Q5.** What is the difference between a correlation heatmap and a pair plot? When would you use each?

**Q6.** You create a new feature `price_per_sqft = price / sqft_living`. Its correlation with `price` is 0.12 — lower than `sqft_living` (0.71). Does this mean the feature is useless? Explain.

**Q7.** A student says: "I finished EDA and moved on to modeling. Now I'm back in EDA." Explain why returning to EDA during modeling is a sign of a good process, not a mistake.

**Q8.** Compute VIF for 3 features in `housing_prices.csv` that you suspect are correlated. Paste your output and interpret it.

---
*Q2 and Q4 are [AI-OFF] — based on your own notebook work.*
