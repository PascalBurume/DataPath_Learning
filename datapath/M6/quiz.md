# M6 — Knowledge Check
> Module 6: Data Analysis with Python

---

**Q1.** The `Cabin` column in `titanic_clean.csv` is 77% missing. Propose a handling strategy, state the missingness mechanism you are assuming, and justify why simply dropping these rows would be a mistake.
*(Lesson L6.1)*

**Q2.** What is the difference between `groupby().agg()` and `groupby().transform()`? Give a use case where you would need transform rather than agg, and why.
*(Lesson L6.2)*

**Q3.** You merge two DataFrames: left has 500 rows, right has 200 rows, result has 1,800 rows. You used `how='left'`. What likely caused this, and how do you add a single parameter to `pd.merge()` that would have raised an error before the problem occurred?
*(Lesson L6.3)*

**Q4.** Refactor this code into a `.pipe()` chain:
```python
df = df.rename(columns=str.lower)
df = df.drop_duplicates()
df['order_value'] = df['order_value'].clip(lower=df['order_value'].quantile(0.01), 
                                            upper=df['order_value'].quantile(0.99))
```
*(Lesson L6.6)*

**Q5.** A DataFrame has 2 million rows. `df.info()` shows that `customer_id` is `object` dtype (a string like "CUST_001"), `status` is `object` with 4 unique values, and `quantity` is `int64`. Which optimisations would you apply and in what order?
*(Lesson L6.5)*

**Q6.** Write the `pandera` schema to validate that: `Fare` is non-negative, `Survived` is 0 or 1, `Pclass` is 1, 2, or 3, and `Age` is between 0 and 120 (but nullable).
*(Lesson L6.7)*

**Q7.** What is the difference between `df.fillna(df['Age'].median())` and `df.groupby('Pclass')['Age'].transform(lambda x: x.fillna(x.median()))`? Which is more statistically appropriate for the Titanic dataset, and why?

**Q8.** Write a groupby expression that computes, for each `category` in `ecommerce_orders.csv`: total revenue, number of orders, number of unique customers, and average order value — all in one call.

**Q9.** You run `df.dropna()` and your DataFrame shrinks from 1,000 to 300 rows. You report analysis on the remaining 300 rows. What assumption are you implicitly making, and when does this assumption fail?

**Q10.** [Oral checkpoint prep] Write a 3-sentence explanation of your full data cleaning pipeline for `titanic_clean.csv` as if you were defending it in the oral checkpoint. Include: what you cleaned, why, and how you could verify the cleaning was correct.

---
*Answers to Q10 will be evaluated in the oral checkpoint.*
