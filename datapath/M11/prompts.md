# M11 — Gemma 4n Prompt Library
> Module 11: Time Series Foundations | Datasets: air_quality_daily.csv, sales_monthly.csv

---

## Template 1 — EXPLAIN datetime parsing
```
EXPLAIN: How do I safely parse the date column in [air_quality_daily.csv / sales_monthly.csv]?
My level: [Beginner / Developer]
A sample row of the date column: [paste 3 examples]
Show me the explicit `read_csv(parse_dates=..., date_format=...)` form, and tell me what would go wrong if I trusted pandas to infer the format.
```

## Template 2 — SCAFFOLD DatetimeIndex slicing
```
SCAFFOLD: I have a DataFrame indexed by daily dates spanning 2020–2024.
Show me 4 partial-string indexing examples:
 1. all of one year
 2. one month
 3. a custom date range
 4. an off-by-one trap (inclusive end vs exclusive end)
Leave the actual values as TODO so I fill them in for my dataset.
```

## Template 3 — TIME-WINDOW (design a time-series windowing strategy)
```
TIME-WINDOW:
Series description: [describe the time series: what it measures, frequency, and date range]
Frequency: [daily / weekly / monthly / hourly]
Business question: [what you want to forecast or analyse]
Known patterns: [any known seasonality, trends, or anomalies]
Propose:
  (a) The best resample frequency for this analysis (with rationale)
  (b) The right rolling window size (with rationale)
  (c) Whether to use mean / median / sum aggregation (with rationale)
  (d) How to split train/test WITHOUT look-ahead bias (specify the cutoff date logic)
  (e) Any time-zone or DST considerations to flag
```
**Use for:** Planning a time-series analysis before writing any code

**Example:**
```
TIME-WINDOW:
Series description: daily air quality index (PM2.5) for 2019-2024
Frequency: daily
Business question: identify seasonal patterns and forecast next month's average
Known patterns: suspected higher pollution in winter months
```

## Template 4 — DEBUG-HINT resample error
```
DEBUG-HINT: [paste the full traceback]
Context: I called .resample('M') and got this error / unexpected result.
Give me a directional hint only. Do NOT give me the full fix.
```

## Template 5 — REVIEW window choices
```
REVIEW: [paste your rolling-window code]
Check:
 - Is `min_periods=` set explicitly?
 - Does the window size match the seasonality of the data?
 - Are early NaN values handled before they propagate into downstream calculations?
Suggest 3 specific improvements.
```

## Template 6 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [statement you believe is true]
Lesson context: M11, [L11.3 / L11.6]
Is this correct? If not, give me the right understanding and the textbook anchor.
```

## Template 7 — SCAFFOLD chronological split
```
SCAFFOLD: I want to do a chronological train/test split on a time-indexed DataFrame.
Target column: [name]
Cutoff date: [YYYY-MM-DD] — or "TODO: I'll choose"
Show me both:
 (a) a manual cut by date
 (b) a TimeSeriesSplit cross-validation loop
Add a comment block explaining why `train_test_split(..., shuffle=True)` is forbidden here.
```

## Template 8 — EXPLAIN look-ahead bias
```
EXPLAIN: What is look-ahead bias and how does it sneak into time series code?
My level: [Beginner / Developer]
Give me 3 concrete examples of look-ahead bias from a sales-forecasting workflow,
and one heuristic I can use to audit my own code for it.
```

---

> **Disclosure reminder:** every interaction above must be logged in `AI_USE.md`. Note the prompt used, what Gemma returned, and what you accepted, edited, or rejected — and why.
