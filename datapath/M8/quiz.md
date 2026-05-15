# M8 — Knowledge Check
> Module 8: Data Visualisation

---

**Q1.** What is the difference between `fig, ax = plt.subplots()` and `plt.plot()`? When does using the axes object model matter, and when is the shortcut acceptable?

**Q2.** Match each analytical question to the correct chart type:
- "How are PM2.5 values distributed across all days?"
- "Which city has the highest average PM2.5?"
- "Is there a relationship between temperature and PM2.5?"
- "How has PM2.5 changed over the past year?"
- "What proportion of days exceed WHO air quality limits?"

**Q3.** A colleague shares a bar chart where the y-axis starts at 95, making one city look 5× worse than another. The actual difference is 3%. Explain what's wrong and write the one-line code fix.
*(Lesson L8.4)*

**Q4.** Why should you never use a red-green colour contrast as your primary visual distinction? What percentage of the population is affected, and what palette should you use instead?
*(Lesson L8.5)*

**Q5.** Look at the following chart description and identify 3 examples of chart junk: "A 3D bar chart with drop shadows, a decorative border, horizontal and vertical gridlines in bright colours, a legend placed inside the chart area, and a gradient background."
*(Lesson L8.6)*

**Q6.** Write the matplotlib code to produce a line chart of monthly average PM2.5 from `air_quality_daily.csv` that: (a) removes top and right spines, (b) uses a 7-day rolling average, (c) uses a CVD-safe colour, (d) saves to `outputs/pm25_trend.png` at 150 DPI.

**Q7.** What does Plotly Express add over matplotlib/seaborn for a student presenting results to a non-technical audience? Name 2 specific interactive features.
*(Lesson L8.7)*

**Q8.** A student produces a pair plot of 15 features. The result is a 15×15 grid of 225 scatter plots. What is the problem with this approach and how would you fix it?

---
*Answer key available from instructor after submission.*
