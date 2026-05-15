# M8 — Gemma 4n Prompt Library
> Module 8: Data Visualisation

---

## Template 1 — SCAFFOLD a multi-panel figure
```
SCAFFOLD: I need a 2×3 grid of histograms for all numeric columns in air_quality_daily.csv.
Include: figure/axes object model (not plt.plot shortcuts), constrained_layout, axis spine removal, and a save command.
My level: [Beginner / Developer]
```

## Template 2 — REVIEW my chart for data-ink issues
```
REVIEW: [describe or paste your matplotlib/seaborn code]
Check: Am I removing unnecessary spines? Are gridlines minimal? Is the y-axis starting at zero (if it's a bar chart)? Am I using a CVD-safe palette?
Suggest specific changes to improve the data-ink ratio.
```

## Template 3 — EXPLAIN chart type selection
```
EXPLAIN: Which chart type should I use for [your question]?
My question: [e.g. "How does PM2.5 vary by season?" / "Is there a relationship between temperature and pollution?"]
Dataset: air_quality_daily.csv or housing_prices.csv
Give me 2 options ranked by effectiveness, with a brief justification for each.
```

## Template 4 — SCAFFOLD colour accessibility
```
SCAFFOLD: I want to apply CVD-safe colours to all my matplotlib and seaborn charts in this notebook.
Include: rcParams settings at the top of the notebook, the seaborn palette, and the best cmap for sequential data.
My level: [Beginner / Developer]
```

## Template 5 — SCAFFOLD Plotly interactive chart
```
SCAFFOLD: I want to build an interactive time-series chart in Plotly Express.
Dataset: air_quality_daily.csv
Columns: date, city, PM2.5
Include: line chart with city as colour, hover data showing raw values, and a clean template.
```

## Template 6 — MISCONCEPTION-CHECK
```
MISCONCEPTION-CHECK: [choose one]
- "A pie chart is fine for showing the composition of 8 categories."
- "My bar chart y-axis starts at 80 to make the differences more visible — that's fine."
- "3D charts help the audience understand the data better."
Lesson: M8 — Data Visualisation
```

---

## Template 7 — CHART-NARRATE (write a chart narrative)
```
CHART-NARRATE: I have created a chart and need a professional narrative for my presentation.
Chart type: [bar / line / scatter / heatmap / etc.]
What I'm showing: [describe the data and the key comparison]
Key finding: [what the chart reveals — the most important pattern]
Audience: [who will see this]
Write a 2-sentence narrative: sentence 1 = what the chart shows, sentence 2 = what the audience should do or think next.
```
**Use for:** Writing clear, concise chart captions for presentations and reports

**Example:**
```
CHART-NARRATE:
Chart type: grouped bar chart
What I'm showing: survival rates by passenger class and gender on the Titanic
Key finding: women in first and second class had much higher survival rates than men in any class
Audience: general audience, non-technical
```

---

## Template 8 — ALT-TEXT (write accessible alt-text for a chart)
```
ALT-TEXT: I need to write accessible alt-text for a data visualisation.
Chart type: [type]
What it shows: [describe the axes, the data, and the main pattern]
Write alt-text that: (1) describes the chart type, (2) identifies the key trend or comparison, (3) states the key numerical finding where possible. Keep it under 150 characters.
```
**Use for:** Making your data visualisations accessible to screen reader users

**Example:**
```
ALT-TEXT:
Chart type: line chart
What it shows: monthly revenue 2022-2024, with a visible drop in Q2 2023 (-23%) followed by recovery
```
