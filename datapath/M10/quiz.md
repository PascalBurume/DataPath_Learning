# M10 — Knowledge Check
> Module 10: ML Bridge (Pipelines, CV, Tuning) | Dataset: housing_prices.csv

---

**Q1.** Define the four pieces of an ML framing (objective, metric, baseline, constraint) for your housing-price model. One sentence each.
*(Lesson L10.1 — Géron Ch2 p.40–55)*

**Q2.** Why bin `median_income` before stratifying the train/test split? What would go wrong if you tried to `stratify=median_house_value` directly?
*(Lesson L10.2 — Géron Ch2 p.55–65)*

**Q3.** You have three features: `median_income` (long right tail), `housing_median_age` (roughly uniform 1–52), and `total_rooms` (heavy outliers). Choose a scaler for each and justify in one sentence.
*(Lesson L10.3 — Géron Ch2 p.83–88)*

**Q4.** **[AI-OFF]** Hand-assemble a `ColumnTransformer` for `housing_prices.csv`:
- Numeric features: median_income, housing_median_age, total_rooms
- Categorical feature: ocean_proximity

Then write a markdown cell annotating *which steps* would leak data if you fit the transformer on the full dataset before splitting. List at least 2 leakage paths.
*(Lesson L10.4 — Géron Ch2 p.85–95)*

**Q5.** Write a `FunctionTransformer` that applies `np.log1p` to a numeric column. In one sentence: when is `FunctionTransformer` enough, and when do you need to subclass `BaseEstimator`/`TransformerMixin`?
*(Lesson L10.5 — Géron Ch2 p.90–95)*

**Q6.** Your `cross_val_score` returns `[-52000, -48000, -51000, -49000, -50000]`. What does the sign mean, what is the average RMSE, and what does the spread tell you about model stability?
*(Lesson L10.6 — Géron Ch2 p.95–100)*

**Q7.** You ran a `GridSearchCV` with 240 parameter combinations and 5-fold CV. Your best score is 0.5% better than the second-best. Is this a meaningful improvement? What is the risk you have run into?
*(Lesson L10.7 — Géron Ch2 p.100–110)*

**Q8.** Write the two-line code snippet that saves your best fitted pipeline with `joblib` and reloads it. Why is loading a fitted *pipeline* (not just the model object) the right granularity?
*(Lesson L10.8 — Géron Ch2 p.110–115)*

**Q9.** Oral-defense prep: in your own words (2 sentences), what is data leakage and where would it most likely sneak into a housing-price pipeline that did not use `ColumnTransformer`?
*(Lesson L10.4 — oral preview)*

**Q10.** Open your M10 [AI-OFF] cell. Describe what you wrote there in 2 sentences, then state the textbook anchor (`Géron Ch[n] p.[range]`) where you would send a peer to verify the concept.
