# M11 — Knowledge Check
> Module 11: Time Series Foundations | Datasets: air_quality_daily.csv, sales_monthly.csv

---

**Q1.** A teammate writes `pd.read_csv('air_quality_daily.csv', parse_dates=['date'])` and ships it. What's the risk? Rewrite the call defensively.
*(Lesson L11.1 — McKinney Ch11 p.350–360)*

**Q2.** Given a DataFrame indexed by daily dates from 2020-01-01 to 2024-12-31, write the partial-string slice that returns just March–May 2023.
*(Lesson L11.2 — McKinney Ch11 p.360–370)*

**Q3.** You have daily PM2.5 readings and you want a monthly summary. Write the resample call. Explain in one sentence why you chose your aggregation function (mean/median/max/sum).
*(Lesson L11.3 — McKinney Ch11 p.380–395)*

**Q4.** You have monthly sales totals and a stakeholder wants daily values for a dashboard. Show two valid upsampling strategies and state which one you'd defend, and why.
*(Lesson L11.3 — McKinney Ch11 p.380–395)*

**Q5.** Compute a 30-day rolling average of `pm25`. Why is `min_periods=30` (not the default) the right choice for a published metric? When might `min_periods=20` be acceptable?
*(Lesson L11.4 — McKinney Ch11 p.395–410)*

**Q6.** **[AI-OFF]** A timestamp `2024-03-10 02:30` in `America/New_York` triggers an exception when you `tz_localize`. Explain in 3–5 sentences (in your own words, no AI): what happened, why, and how you would design your data ingestion to avoid this class of error in production.
*(Lesson L11.5 — McKinney Ch11 p.370–380)*

**Q7.** Your colleague writes `train, test = train_test_split(df, test_size=0.2, random_state=42)` on a sales time series. What is wrong with this line? Show two correct alternatives.
*(Lesson L11.6 — Expert + Géron Ch15)*

**Q8.** Define look-ahead bias in one sentence. Give one concrete example from a feature you might engineer on `sales_monthly.csv` (e.g., a 3-month moving average) and how to compute it without leaking the future.
*(Lesson L11.6 — Expert)*

**Q9.** A `TimeSeriesSplit(n_splits=5)` produces 5 train/test folds. Sketch the train/test indices for each fold (just describe the shape — train always before test, test sets non-overlapping forward).
*(Lesson L11.6 — sklearn docs)*

**Q10.** Oral-defense prep: in 2 sentences, explain to a non-technical stakeholder why you cannot evaluate a time-series model with a random split, and what you used instead.
