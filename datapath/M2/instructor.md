# M2 — Instructor Guide: Tools & Methodology
> 90-minute lesson | Dataset: `world_population.csv` | Beginner focus

---

## Learning Objectives

By end of session, students can:
1. Use Jupyter magic commands for profiling, introspection, and timing
2. Apply the CRISP-DM framework to a real dataset — documenting which phase they are in
3. Use Python's core data structures (list, dict, tuple, set) with a data-science lens
4. Create and activate a conda virtual environment and export it
5. Make their first git commit and understand why version control matters for notebooks

---

## Lesson Outline

| Time | Activity | Notes |
|------|----------|-------|
| 0:00–0:10 | M1 recap + reproducibility check — did everyone fix seeds? | Quick show of hands |
| 0:10–0:25 | **L2.1** — Jupyter power features: magic commands, introspection | Live demo with `world_population.csv` |
| 0:25–0:40 | **L2.3** — Python data structures with a data lens | Dict → DataFrame analogy is key |
| 0:40–0:55 | **L2.2** — CRISP-DM walkthrough with `world_population.csv` | Students document each phase in a markdown cell |
| 0:55–1:10 | **L2.4** — Virtual environments: conda create, activate, export | Hands-on: everyone exports `environment.yml` |
| 1:10–1:25 | **L2.5** — Git for notebooks: init, add, commit, `nbstripout` | Students commit their first notebook |
| 1:25–1:30 | Preview M3 — what descriptive stats can and cannot tell you | |

---

## Key Concepts (with Lesson IDs)

### L2.1 — Jupyter as a literate programming environment `[McKinney Ch2 p.20–55]`
#### Why notebooks matter as analytical writing
A Jupyter notebook is not just a place where Python happens to run. It is a medium for showing how a question becomes a method, how a method becomes evidence, and how evidence becomes a conclusion. In that sense, a notebook behaves more like a lab notebook or a field report than a plain script. The reader should be able to move through it and feel the argument unfolding in a deliberate order rather than stumbling across isolated code fragments.

Literate programming gives the notebook a simple standard: every computational move should have an explanatory neighbor. A code cell that computes a summary should sit beside text that says what the summary is meant to reveal. A figure should not merely appear; it should be introduced, interpreted, and connected back to the question. When this pattern is followed consistently, the notebook becomes readable even months later, when the details of the original session are no longer fresh.

#### Designing cells around reader attention
Notebook structure works best when each cell does one recognizable job. A markdown cell can frame the next move, a code cell can execute it, and a short interpretation cell can explain what changed in your understanding. This rhythm reduces cognitive load because the reader never has to guess whether a giant cell is loading data, cleaning data, plotting, or silently redefining half the analysis.

A useful mental model is to treat cell boundaries as rhetorical boundaries. If one idea ends and another begins, split the work. That makes the notebook easier to debug, easier to rerun, and easier to discuss in class. It also creates a visible chain of reasoning that can be scanned quickly.

```text
Question
  ↓
Load data
  ↓
Check quality
  ↓
Transform
  ↓
Visualize
  ↓
Interpret
```

#### State, kernels, and reproducibility
The chief danger of notebooks is hidden state. A variable can survive in kernel memory long after the cell that created it has scrolled out of view, which means a notebook may appear correct even though it would fail on a clean machine. In effect, the notebook can start depending on an invisible state term, so the result is no longer just $y = f(x)$ but something closer to $y = f(x, s)$, where $s$ is leftover memory from earlier experimentation.

That is why execution order matters as much as code content. A reproducible notebook should run from top to bottom after a kernel restart with no manual patching in the middle. If randomness is involved, the seed should be declared. If a path is required, it should be defined explicitly. A trustworthy notebook is one that can be rerun as a sequence, not reconstructed from the author's memory.

#### Markdown, equations, and Jupyter power features
Markdown cells are where the notebook earns its place as a communication tool. They supply section headings, definitions, assumptions, links, and equations, all of which tell the reader how to interpret the outputs that follow. Even a simple quantity such as the sample mean becomes more understandable when the notebook states the idea in mathematical form, for example $\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$, before showing the computed value.

Jupyter also provides magic commands that make exploratory work more expressive, but they should be used with intention rather than decoration. Commands such as `%timeit`, `%who`, and `%%capture` are helpful because they expose performance, memory state, or output control without leaving the notebook. Their best use comes when the surrounding prose explains why timing, introspection, or output suppression matters at that point in the analysis.

#### Worked example: building a readable opening analysis
A strong opening section usually does three things in order: it declares the analytical aim, loads the dataset from a clear location, and performs a small set of diagnostic checks that justify the next step. The point is not to impress the reader with complexity; the point is to make the first page of the notebook honest and legible. If the data file is missing or the schema is different from what the text claims, the problem should be visible immediately.

The code below models that style. Each block is annotated so that a reader can see the narrative purpose of every line rather than inferring intent after the fact.

```python
from pathlib import Path
import pandas as pd

# Define the file location once so every later cell refers to the same source.
data_path = Path("data/world_population.csv")

# Load the dataset into a DataFrame; this is the main object the notebook will inspect.
df = pd.read_csv(data_path)

# Confirm the notebook is looking at the expected shape before any cleaning occurs.
print("rows, columns:", df.shape)

# Show column names early so later markdown can refer to real fields, not guessed names.
print("columns:", list(df.columns))

# Inspect a few records to verify that the table matches the written description.
print(df.head())

# Surface missing values now so data-quality concerns enter the narrative immediately.
print("missing values by column:")
print(df.isna().sum())

# Time a simple summary to demonstrate that Jupyter can mix analysis and profiling.
%timeit df.select_dtypes("number").mean(numeric_only=True)
```

What makes this example literate is not the presence of comments alone. The surrounding notebook text should say why shape, columns, preview rows, and missingness are the first questions worth answering. In other words, the code is evidence inside a written argument, not a detached performance of syntax.

#### Common mistakes that weaken notebook communication
A frequent mistake is to treat the notebook as a dumping ground for everything that happened during exploration. Cells get appended in the order they were tried, headings are added after the fact, and outputs remain even when they no longer match the current code. The result is a document that records activity without revealing reasoning. Readers can see motion, but they cannot see judgment.

Another common problem is oversized cells that combine loading, cleaning, plotting, and interpretation in one opaque block. That structure hides where an error was introduced and makes revision painful. Other warning signs include unexplained plots, hard-coded absolute paths, skipped execution numbers, and markdown that promises one question while the code answers another. Good notebooks are rarely created by adding more output; they are improved by making intention more visible.

#### Connections to the rest of the workflow
Notebook literacy connects directly to CRISP-DM because both ask the analyst to make process visible. When you label a section as business understanding, data understanding, or evaluation, you are using notebook structure to expose where you are in the project. The notebook becomes the place where methodological choices are documented, not merely the place where commands are run.

The same habits also support environment management and version control. A notebook that is cleanly structured is easier to rerun inside a fresh conda environment and easier to commit to git without confusion. In that sense, literate programming is not only about better explanation; it is also about making reproducibility, collaboration, and review materially easier.

#### Practice questions for notebook authors
To check whether you are writing a notebook or merely accumulating cells, pause and inspect the document from the perspective of a reader who has not watched you work. The goal of the following questions is to expose places where the analytical story is still implicit. Strong answers should point to specific cells, not vague intentions.

Write your responses in markdown before editing any code. That habit forces you to articulate what the notebook should communicate, which often reveals structural problems sooner than another round of execution would.

1. Which cell states the main question of the notebook, and could a new reader find it in under ten seconds?
2. If the kernel were restarted right now, would every later result still run successfully from the top? Why or why not?
3. Where does the notebook define a quantity mathematically, such as a mean, rate, or percentage, before computing it?
4. Which output cells are essential evidence, and which ones are merely leftovers from experimentation?
5. If you converted one large code cell into three smaller ones, what clearer narrative sequence would appear?

### L2.2 — CRISP-DM as a living document `[Géron Ch2 p.36–45]`
#### Why CRISP-DM should function as project memory
CRISP-DM is most useful when it is treated as a record of evolving judgment rather than a poster on the wall. The framework names six familiar phases, but its deeper value is that it preserves the reason each phase changed the direction of the work. A project rarely fails because people forgot the names of the stages; it fails because assumptions, constraints, and definitions changed without being written down.

Calling CRISP-DM a living document means the notebook should capture those changes as they happen. If the target variable is redefined, that belongs in the document. If the business question narrows from “understand population change” to “identify countries with unusually fast recent growth,” that refinement is not housekeeping; it is the project becoming more precise. The notebook should show that evolution so later choices never look arbitrary.

#### Reading the framework as a feedback cycle
The six phases—Business Understanding, Data Understanding, Data Preparation, Modelling, Evaluation, and Deployment—are often introduced in a neat sequence, but real work behaves more like a feedback system. Information discovered in a later phase can force a return to an earlier one. A disappointing evaluation score may reveal that the feature engineering was shallow, and a preparation problem may reveal that the original objective was too ambitious for the available data.

The diagram below captures that circular movement. The forward arrows show a common progression, while the backward arrows remind us that evidence can send the analyst upstream.

```mermaid
flowchart LR
    BU[Business Understanding] --> DU[Data Understanding]
    DU --> DP[Data Preparation]
    DP --> M[Modelling]
    M --> E[Evaluation]
    E --> D[Deployment]
    E --> BU
    M --> DP
    DP --> DU
    DU --> BU
```

When people remember only the left-to-right path, they often mistake revision for failure. In practice, those backward arrows are where much of the learning happens. A living CRISP-DM notebook therefore records not only what was done, but why the team doubled back.

#### Business understanding turns curiosity into criteria
Business Understanding is the phase where a broad topic is converted into a decision-oriented question. That shift is essential because a model or summary is only useful relative to a purpose. If the aim is to support policy planning, then the notebook should specify who will use the result, what action it should inform, and what kind of error would be costly. Without that framing, “good performance” remains undefined.

This is also the right place to introduce light mathematics. Suppose the class wants to flag countries with rapid recent growth. A reasonable signal might be a growth rate such as $g = \frac{p_{2022} - p_{2012}}{p_{2012}}$, where $p_t$ denotes population in year $t$. The formula does not solve the project, but it sharpens the question by making the target quantity explicit.

#### Data understanding and preparation reveal the true shape of the task
Once the question is clear, Data Understanding asks what the dataset can actually support. This phase includes row counts, column meanings, missingness, unit checks, suspicious values, and the grain of observation. A table that appears rich at first glance may turn out to be too coarse, too stale, or too inconsistent for the intended decision. Discovering that early is a success, not a setback.

Data Preparation then turns raw availability into analytical usability. Column names may be standardized, types repaired, duplicates removed, and derived features created. What matters is that these transformations remain accountable. If a column is dropped or a missing value is filled, the notebook should say why. Preparation choices are not neutral cleanup; they reshape the evidence base that later phases depend on.

#### Worked example: logging a population-growth project in the notebook
Imagine a notebook built around `world_population.csv`. Instead of scattering planning notes across memory and conversation, the analyst can represent the current project state explicitly, then compute a first candidate signal tied to the question. The structure below is simple on purpose: it shows how narrative, metadata, and analysis can live together in one document.

```python
import pandas as pd

# Load the shared dataset that the notebook refers to in markdown sections.
df = pd.read_csv("data/world_population.csv")

# Record each CRISP-DM phase as notebook-friendly project metadata.
phase_log = {
    "business_understanding": {
        "decision": "Identify countries with unusually fast recent population growth.",
        "user": "A policy student comparing demographic pressure across regions.",
        "success": "A ranked table that is easy to interpret and explain."
    },
    "data_understanding": {
        "checks": ["verify year columns", "inspect missing values", "confirm units"],
        "risk": "Some countries may have incomplete historical coverage."
    },
    "data_preparation": {
        "planned_steps": ["standardize column names", "cast numeric columns", "derive growth_rate"]
    }
}

# Compute a first-pass growth signal tied directly to the stated question.
df["growth_rate_2012_2022"] = (df["2022 Population"] - df["2012 Population"]) / df["2012 Population"]

# Review the countries with the largest estimated growth so evaluation can start early.
preview = df[["Country/Territory", "growth_rate_2012_2022"]].sort_values(
    by="growth_rate_2012_2022", ascending=False
).head(10)
print(preview)
print(phase_log)
```

The important feature of this example is not the dictionary syntax itself. It is the habit of making assumptions inspectable. If the business aim, data risks, or preparation plan changes tomorrow, the notebook has a natural place to record that change and explain the consequences.

#### Common mistakes when using CRISP-DM mechanically
One common mistake is to fill in the phase names after the analysis is already finished, as if CRISP-DM were only a formatting requirement. That produces tidy headings but empty process thinking. Another mistake is to assume that every project must end with modelling. Many useful notebook projects stop at understanding, preparation, or evaluation because those phases already answer the practical question.

Students also often confuse technical metrics with project success. A model with lower error may still be less useful if it is harder to explain, slower to maintain, or aimed at the wrong decision. Likewise, “deployment” should not be interpreted as any act of running code. In CRISP-DM, deployment means that a solution is ready to serve people or systems in a stable, justified way.

#### Connections across the module
CRISP-DM connects naturally to Jupyter notebooks because the framework needs visible documentation, and notebooks are designed to mix explanation with execution. It also depends on Python data structures, since dictionaries, lists, and tables are common ways to store phase notes, validation checks, and transformed data. The conceptual and technical layers reinforce each other.

Version control and environments matter here too. When a project changes direction, git history can show when the question shifted, and an environment file can ensure that the analyses supporting that shift remain runnable. A living CRISP-DM document is strongest when its narrative, code, dependencies, and revision history all tell the same story.

#### Practice questions for phase-aware analysis
Use the following prompts to inspect whether your notebook is actually documenting project movement or merely labeling sections after the fact. Each answer should refer to evidence in the notebook, such as a markdown explanation, a code cell, or a table that changed your understanding.

If possible, answer these questions before you build a model. Doing so usually improves the model because the objective, data constraints, and evaluation logic become clearer while the project is still easy to redirect.

1. What specific decision or comparison is your analysis supposed to support?
2. Which dataset limitations belong in Data Understanding rather than being discovered accidentally during modelling?
3. What derived quantity, such as a rate or ratio, best expresses the business question, and how would you define it mathematically?
4. Where in your notebook do you explain why a cleaning or feature-engineering step was necessary?
5. If your evaluation were disappointing, which earlier phase would you revisit first, and what evidence would justify that return?

### L2.3 — Python data structures with a data lens `[McKinney Ch3 p.65–95]`
#### Data structures are miniature models of the world
A Python data structure is not just a storage container; it is a claim about how information is organized. When you choose a list, you are saying order matters and change is expected. When you choose a dictionary, you are saying values should be reached by name. Those choices shape the kinds of questions that are easy to ask later, which is why data work improves when structure is selected deliberately instead of by habit.

Thinking this way brings programming closer to analysis. A table of country records, a set of unique regions, and a tuple that marks a `(country, year)` pair all reflect different relationships in the underlying data. The better the structure matches the relationship, the less awkward the later code becomes. Good analysts therefore treat container choice as part of reasoning, not merely part of syntax.

#### Lists and tuples both preserve order, but with different promises
Lists are ideal when a sequence is expected to grow, shrink, or change. If you are collecting row counts from several cleaning steps, appending country names, or storing columns selected for plotting, mutability is useful because the data structure can evolve alongside the analysis. Indexing also makes lists natural when position matters, so the element at index $i$ can be interpreted as the $i$-th item in a meaningful order.

Tuples preserve order too, but they communicate stability. A tuple such as `(country, year)` signals that the pair belongs together as a fixed key, not as a small list waiting to be edited. That makes tuples especially useful in grouping, dictionary keys, and coordinate-like records. In analytical code, the immutability of a tuple often serves as a quiet promise: this relationship should stay intact.

#### Dictionaries and sets make labels and uniqueness explicit
A dictionary maps keys to values, so it shines whenever names matter more than positions. A single observation from a dataset is often easiest to read as a dictionary because fields such as `country`, `population`, and `continent` carry their own labels. Formally, a dictionary behaves like a mapping $f: K \rightarrow V$, where each key in $K$ points to one associated value in $V$. That named access is why dictionaries sit naturally between raw JSON data and tabular analysis.

Sets answer a different question: membership without duplication. If the task is to find which regions appear in one source but not another, set logic is more honest than list logic. Operations such as union, intersection, and difference mirror familiar mathematical notation: $A \cup B$, $A \cap B$, and $A - B$. The main trade-off is that sets do not promise a meaningful order, so they are best used when uniqueness matters more than sequence.

#### Choose a structure by operation, not by habit
Many beginner frustrations come from asking a container to do a job it was not designed to do. Searching for a record by country name inside a long list may work, but it requires repeated scanning and quickly becomes clumsy. A dictionary keyed by country would make the same lookup direct. Likewise, repeatedly checking whether a value has already been seen is easier with a set than with a list, because the operation expresses the intent more clearly.

This can be framed in performance terms as well as readability terms. List membership often behaves like a linear search, while dictionary and set membership are usually treated as near-constant-time operations in everyday Python reasoning. The exact implementation details matter less than the habit of asking, “What operation will dominate this analysis?” When the structure fits the dominant operation, the code becomes both clearer and more scalable.

#### Worked example: shaping raw records into analytical objects
Suppose a small API response arrives as a collection of country records. A sensible workflow might store the observations as dictionaries inside a list, derive a set of unique continents for quick checking, and build tuple-based keys for compact summaries. This sequence mirrors the way analysts often move from raw semi-structured data toward more explicit tabular representations.

```python
import pandas as pd

records = [
    {"country": "Japan", "continent": "Asia", "population_m": 125.1},
    {"country": "Brazil", "continent": "South America", "population_m": 203.1},
    {"country": "Nigeria", "continent": "Africa", "population_m": 223.8},
    {"country": "Kenya", "continent": "Africa", "population_m": 55.1},
]

# Keep the raw observations as dictionaries because field names matter.
continents = {row["continent"] for row in records}

# Build tuple keys when the relationship should stay fixed and hashable.
pop_lookup = {
    (row["country"], row["continent"]): row["population_m"]
    for row in records
}

# Convert the record list into a DataFrame once table operations become more convenient.
df = pd.DataFrame(records)
continent_means = df.groupby("continent", as_index=False)["population_m"].mean()

print("unique continents:", continents)
print("lookup for Kenya:", pop_lookup[("Kenya", "Africa")])
print(continent_means)
```

Seen through a data lens, the example is not about showing off several container types in one place. It is about matching representation to purpose. The list preserves record order, the dictionaries preserve field labels, the set enforces uniqueness, the tuples stabilize compound keys, and the DataFrame takes over when column-wise analysis becomes the main task.

#### Common mistakes when learning containers for data work
A common mistake is to overuse lists simply because they are familiar. The code still runs, but it becomes full of positional assumptions such as “index 0 means country and index 1 means year,” which makes interpretation fragile. Another mistake is to treat sets as if they were ordered collections and then be surprised when printed output appears in an unexpected order.

Students also often blur mutability rules. A tuple cannot be edited in place, and a shallow copy of a list of dictionaries does not create brand-new nested objects. Type mixing can also become confusing when numeric and string values are stored inconsistently in the same structure. The safest habit is to ask what each container is promising about order, labels, uniqueness, and change before using it in analysis.

#### Connections to pandas and analytical thinking
Built-in Python containers are the conceptual bridge to higher-level tools such as pandas. A DataFrame can be understood more easily when you already see a row as dict-like, a column as sequence-like, and a group of categories as set-like. Many pandas methods simply scale up operations that are already present in smaller Python structures.

These choices also connect to notebook writing and CRISP-DM. A notebook that explains why a set was used for membership checks or why a dictionary was used for labeled records is showing analytical intent, not just code mechanics. Clear container choices make later cleaning, evaluation, and communication more convincing because the structure itself reflects the logic of the task.

#### Practice questions for selecting the right container
Use the following questions to test whether your container choices are intentional. The best answers usually include a short explanation of what operation you expect to perform most often, because that expectation often determines the right structure more reliably than vague preference does.

If you can answer these prompts without writing code first, you will usually write better code when you begin. The container then becomes the consequence of the question rather than an arbitrary starting point.

1. When does a list communicate the problem better than a tuple, and when does a tuple communicate stability better than a list?
2. What advantage does a dictionary provide over positional records when you revisit the code later?
3. Which analytical tasks are naturally expressed as set operations such as intersection or difference?
4. If country lookup is your most frequent operation, what structure would you build first and why?
5. How does understanding Python containers make a DataFrame feel less mysterious?

### L2.4 — Virtual environments and dependency management `[Expert]`
#### Isolation is part of analytical validity
A data project is not fully specified by its notebook alone. The results also depend on the Python version, the packages installed, the channels they came from, and sometimes the compiled libraries underneath them. That is why environment management is not just a convenience issue. If one student runs the notebook in environment $E_1$ and another runs it in environment $E_2$, then even identical code can yield different behavior because $E_1 \neq E_2$.

Virtual environments solve this by separating project dependencies from the global machine state. Instead of one shared installation slowly accumulating incompatible requirements, each project gets an isolated context with its own package set. In practice, that isolation reduces import surprises, protects older coursework from newer experiments, and makes collaboration far less dependent on luck.

#### How conda thinks about environments and channels
Conda manages environments as named collections of packages tied to a specific Python interpreter and installation prefix. When you activate an environment, you are not merely flipping a label; you are switching the shell into a different dependency universe. That distinction matters because imports, executable paths, and installed tools now resolve from the active environment rather than from the base installation.

Channels add another layer of meaning. They are the package sources conda consults when solving dependencies, and different channels may package libraries differently. In data science, teams often standardize on `conda-forge` or on a consistent combination of channels so that the solver is working from a predictable catalog. Mixing channels carelessly can create hard-to-diagnose conflicts, especially when compiled scientific packages are involved.

#### Environment specifications are contracts, not souvenirs
An `environment.yml` file is valuable because it turns a working local setup into a shareable contract. It states the environment name, the channels, and the dependencies required to recreate the project. Without that file, a collaborator is forced to infer the setup from import errors and scattered notes, which is inefficient and unreliable. Committing the file to version control tells future readers that the environment is part of the project itself.

Pinning strategy deserves explicit thought. A loose constraint such as `pandas>=2.2` leaves room for future variation, while an exact requirement such as `pandas=2.2.3` narrows the result to a more reproducible state. Neither choice is automatically perfect. The analytical question is how much variability the project can tolerate. In teaching, grading, and collaboration, tighter control is often worth the extra discipline.

#### Full conda command reference for course workflows
Students often remember only `conda create` and `conda activate`, but a healthy workflow includes inspection, export, update, and cleanup commands as well. The reference below collects the most useful commands in one place so the environment can be created, shared, checked, and repaired without guesswork.

```bash
# Create a new environment with a pinned Python version.
conda create -n ds-m2 python=3.11 -y

# List all environments and confirm which one is active.
conda env list

# Activate the project environment before installing or running anything.
conda activate ds-m2

# Inspect the active interpreter and package stack.
conda info
conda list

# Search for a package before installation if you are unsure of its exact name.
conda search pandas

# Install core scientific packages from the default configured channels.
conda install pandas numpy scipy scikit-learn matplotlib seaborn jupyterlab -y

# Install from a specific channel when your team standardizes on it.
conda install -c conda-forge plotly statsmodels -y

# Use pip inside the active environment only when a package is unavailable in conda.
python -m pip install nbstripout pandera

# Export a minimal shareable specification based on packages you asked for directly.
conda env export --from-history > environment.yml

# Export the fully resolved environment, including transitive dependencies.
conda env export > environment.full.yml

# Recreate an environment from a shared specification file.
conda env create -f environment.yml

# Update an existing environment and prune packages no longer requested.
conda env update -n ds-m2 -f environment.yml --prune

# Remove a package that no longer belongs in the project.
conda remove seaborn -y

# Clone a working environment before a risky experiment.
conda create -n ds-m2-copy --clone ds-m2 -y

# Deactivate the current environment when you are finished.
conda deactivate

# Remove the environment entirely if it is obsolete.
conda env remove -n ds-m2 -y
```

Two export commands appear because they answer different needs. `--from-history` is usually better for sharing a clean, human-maintained environment file, while the fully resolved export is useful when you need a closer snapshot of the exact local state. Knowing the difference helps prevent both under-specification and needless clutter.

#### Worked example: creating and sharing a classroom-ready environment
Imagine the class wants one dependable environment for notebooks, plotting, and introductory machine learning. The goal is not just to install packages locally, but to produce a reproducible artifact that someone else can recreate with minimal explanation. A concise `environment.yml` is often the best handoff because it keeps the important choices visible.

```yaml
name: ds-m2
channels:
  - conda-forge   # Use one primary channel to reduce solver surprises.
dependencies:
  - python=3.11   # Pin the interpreter so syntax and package wheels stay aligned.
  - pandas=2.2.3
  - numpy=1.26.4
  - matplotlib=3.8.4
  - seaborn=0.13.2
  - scikit-learn=1.4.2
  - jupyterlab=4.2.5
  - pip
  - pip:
      - nbstripout==0.7.1  # Notebook cleanup tool used before commits.
      - pandera==0.20.4    # Optional validation library for tabular data.
```

Once that file is committed, the workflow becomes teachable and repeatable: create the environment, activate it, open the notebook, and trust that classmates are working from the same dependency baseline. The environment file is therefore both technical configuration and instructional documentation.

#### Common mistakes in dependency management
One recurring mistake is to do all work in the `base` environment because it feels faster at first. Over time, that environment becomes a crowded mixture of unrelated packages, and debugging turns into archaeology. Another mistake is to install some packages with conda, others with pip, and still others globally, without keeping track of where each one came from. The project may work once, but it becomes very difficult to reproduce.

Students also often export bloated environments after weeks of experimentation, which can freeze dozens of accidental dependencies into the file. On the other extreme, some export nothing at all and assume the notebook alone is enough. A good rule is to keep the shared specification intentional, to activate the environment before every session, and to document any pip-only packages clearly.

#### Connections to reproducibility and collaboration
Environment management supports every other topic in the module. A well-written notebook is more convincing when it runs inside a documented environment. A CRISP-DM notebook is more trustworthy when the data preparation and evaluation steps can be rerun with the same library versions. Even basic Python container examples become less frustrating when everyone is importing from the same stack.

Version control completes the picture. Once `environment.yml` is tracked in git, changes to dependencies become visible and discussable. A project then has reproducible code, reproducible narrative, and reproducible infrastructure at a small scale. That combination is one of the clearest markers of mature analytical practice.

#### Practice questions for environment discipline
Use these prompts to test whether your environment habits are actually supporting reproducibility. Good answers usually name a concrete command, file, or failure mode rather than speaking in generalities, because environment problems are almost always operational rather than abstract.

Answer them as if you were writing instructions for a classmate who must run your notebook without your help. If the answer would still leave them guessing, the workflow is not documented well enough yet.

1. Why is an isolated environment more reliable than installing packages globally for course work?
2. What information belongs in `environment.yml`, and what problem does that file solve for a collaborator?
3. When would you export `--from-history` instead of a fully resolved environment file?
4. Why should `pip install` usually happen only after the correct conda environment is active?
5. If two students obtain different results from the same notebook, what environment details would you compare first?

### L2.5 — Version control for notebooks `[Expert]`
#### Git remembers text changes, while notebooks store execution history
Git is optimized for line-oriented text, which is why it feels natural with Python scripts and awkward with notebook files. A notebook is saved as JSON containing code cells, markdown cells, outputs, execution counts, and metadata. That means a small conceptual edit can produce a large textual diff, because git sees not only the changed code but also the surrounding structural noise.

This mismatch creates an important analytical ratio: the signal of meaningful change relative to the noise of generated output. You can think of it loosely as $\rho = \frac{\text{meaningful edits}}{\text{total changed lines}}$. Good notebook version control tries to increase $\rho$ by preserving source logic and explanation while reducing transient clutter. The goal is not to force notebooks into a script-only workflow; it is to manage the extra noise responsibly.

#### Designing a cleaner history for notebook projects
Notebook history improves when commits represent ideas rather than long sessions of accumulation. Clearing outputs before commit, splitting reusable code into `.py` files when appropriate, and committing after one coherent improvement all make the repository easier to read later. Instead of one massive checkpoint called “final version,” the project gains a series of understandable steps that can be reviewed, reverted, or compared.

A simple visual makes the point. Each commit should answer the question, “What changed in the analysis?” rather than “What happened to be on my screen?”

```text
a1e2f3  Start notebook and environment file
  |
b4c5d6  Add data-quality checks and explanatory markdown
  |
c7d8e9  Clear outputs and commit first visual summary
```

That sequence is valuable because each revision has a recognizable purpose. The repository becomes a reasoning trail, not just a storage bucket.

#### Repository hygiene starts with deciding what source control is for
Version control is best at tracking source artifacts that humans edit and review. In a notebook project, those artifacts usually include `.ipynb` files, small configuration files, environment definitions, and lightweight scripts. Generated data products, cache directories, local environment folders, and machine-specific files are different: they are often large, reproducible elsewhere, or irrelevant to project history.

A `.gitignore` file expresses that boundary. It tells git which files are noise for this repository so the commit history stays focused on intentional work. This is especially important in data science because one accidental add can sweep in megabytes of derived data or a whole virtual environment. Good repository hygiene is therefore a preventive habit, not a cleanup step after the damage is done.

#### Complete `.gitignore` template for notebook-centered repositories
The template below covers the most common clutter produced by Python, Jupyter, local environments, editors, and generated analytical artifacts. It is broad enough for a classroom notebook repository while still leaving source notebooks, scripts, and environment definitions visible to git.

```gitignore
# ---- Python bytecode and caches ----
__pycache__/
*.py[cod]
*.so
.pytest_cache/
.mypy_cache/
.ruff_cache/

# ---- Virtual environments and secrets ----
.env
.env.*
.venv/
venv/
env/
ENV/
conda-meta/

# ---- Jupyter notebook state ----
.ipynb_checkpoints/
*.nbconvert.ipynb

# ---- Local tooling ----
.vscode/
.idea/

# ---- Operating-system files ----
.DS_Store
Thumbs.db

# ---- Generated data artifacts ----
data/interim/
data/processed/
artifacts/
models/
reports/figures/

# ---- Common data-science binaries ----
*.parquet
*.feather
*.pkl
*.pickle
*.joblib
*.h5
*.sqlite

# ---- Logs ----
*.log
```

A template like this should still be read, not copied blindly. If the repository intentionally stores a small SQLite file or a curated set of generated figures, the ignore rules should be adjusted. The important principle is to decide deliberately which files belong to shared project history and which belong only to local execution.

#### Worked example: making a first clean notebook commit
A clean notebook commit starts before `git add`. First, make sure the notebook runs from top to bottom, then remove transient outputs so the saved file emphasizes code and markdown rather than stale results. After that, stage the notebook together with supporting files such as `environment.yml` and `.gitignore`, and write a commit message that describes the analytical step, not the emotion of the moment.

```bash
# Clear transient outputs so the notebook diff focuses on code and markdown.
jupyter nbconvert --ClearOutputPreprocessor.enabled=True --inplace analysis.ipynb

# Initialize the repository once for the project folder.
git init

# Stage the notebook and the reproducibility files together.
git add analysis.ipynb environment.yml .gitignore

# Create a commit whose message explains the new analytical milestone.
git commit -m "Add initial population analysis notebook"

# Inspect the commit contents before sharing them.
git --no-pager show --stat --oneline HEAD
```

This workflow is modest, but it solves several common problems at once. It reduces diff noise, captures the environment alongside the notebook, and creates a history entry that another person can interpret without replaying your entire session from memory.

#### Common mistakes that make notebook history painful
The most common mistake is committing notebooks with heavy output still attached, especially when those outputs contain large tables or plots that can be regenerated. Another mistake is waiting too long to commit, which turns many small analytical choices into one tangled revision. Large notebook commits are hard to review because they mix meaningful code changes with incidental reruns, reordered cells, and metadata drift.

Students also often forget to track the files that make the notebook reproducible, such as `environment.yml`, helper scripts, or the ignore rules themselves. Merge conflicts become more frequent when collaborators edit the same notebook without agreed routines for clearing outputs and making small commits. The remedy is not to avoid git; it is to adopt notebook-aware habits that keep history readable.

#### Connections to reproducibility, review, and collaboration
Version control completes the reproducibility story started by literate notebooks and conda environments. The notebook explains the reasoning, the environment file explains the dependencies, and git explains how the project changed over time. When these pieces line up, another reader can reconstruct not only the current result but also the path that led to it.

This also supports peer review and later deployment work. A collaborator can comment on a specific change, compare one analytical approach with another, or recover a previous state if a new idea fails. In short, git turns notebook work from a personal workspace into a shared, inspectable process.

#### Practice questions for notebook version control
Use the questions below to examine whether your repository history is serving explanation or merely storing files. Strong answers should mention concrete routines such as clearing output, staging supporting files, or choosing commit boundaries that reflect ideas.

Try answering them while looking at your own latest commit. The exercise is most helpful when it points to an immediate workflow improvement rather than a generic principle you already agree with.

1. Why do notebook files generate noisier diffs than plain `.py` files?
2. Which files in your project are source artifacts worth tracking, and which are generated artifacts worth ignoring?
3. What steps should happen before `git add` when you are preparing a notebook commit?
4. How does a clear commit history make collaboration easier when several people touch the same notebook?
5. Why is tracking `environment.yml` alongside notebooks an important part of version control rather than a separate concern?

---

## New Lessons Integrated

| ID | Lesson | Type |
|----|--------|------|
| L2.4 | Virtual environments & dependency management | Expert addition |
| L2.5 | Version control with Git + nbstripout | Expert addition |

---

## Common Misconceptions to Flag

- **"CRISP-DM is a checklist"** → It's a cycle. You will revisit earlier phases when later phases reveal problems.
- **"I'll set up Git at the end of the project"** → Version control must start at project creation. A notebook with no history is not version-controlled.
- **"conda and pip are the same thing"** → conda manages environments + packages (including non-Python); pip manages Python packages only. Use conda first, pip for anything conda can't find.

---

## AI Integration (M2)

**Allowed prompts:**
- `SCAFFOLD` — for Jupyter magic commands they haven't memorised
- `EXPLAIN` — for CRISP-DM phase clarification
- `REVIEW` — for checking their `environment.yml` is complete

**No [AI-OFF] cells in M2** — foundation concepts allow AI support.

---

## Assessment Notes

Before end of session, each student must show:
- [ ] `conda activate ds-gemma-course` working
- [ ] `environment.yml` exported and committed to git
- [ ] First `git log` showing at least one commit
- [ ] CRISP-DM markdown cell in their lab notebook
