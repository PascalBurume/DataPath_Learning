# M13 — Gemma 4n Prompt Library
> Module 13: Agentic DS Workflows

Copy a template, fill in the brackets, and paste into the Gemma chat.
Always log your use in `AI_USE.md`.

---

## Template 1 — AGENT-DESIGN
```
AGENT-DESIGN: [multi-step DS task]
My dataset(s): [name them]
Please sketch a ReAct-style agent plan with:
1. goal,
2. tool list,
3. tool signatures,
4. likely stop conditions,
5. where I should insert human verification checkpoints.
Keep it local and offline-first.
```
**Use for:** turning a multi-step DS task into a bounded agent design before coding

**Example:**
```
AGENT-DESIGN: Explore housing_prices.csv and report 3 grounded findings.
My dataset(s): housing_prices.csv
```

---

## Template 2 — TOOL-SPEC
```
TOOL-SPEC: [tool name + input/output]
Please help me design this as a safe DS agent tool.
Include:
- purpose,
- Python function signature,
- input validation,
- output schema,
- one likely failure mode.
```
**Use for:** designing a single tool with a clear contract before giving it to an agent

**Example:**
```
TOOL-SPEC: plot_histogram(path: str, column: str) -> dict
```

---

## Template 3 — AGENT-VERIFY
```
AGENT-VERIFY: [agent output]
Please help me verify this step by step.
Check:
1. whether each claim is grounded in the tool outputs,
2. whether any numbers need manual recomputation,
3. whether the final wording overstates the evidence.
Do not complete any [AI-OFF] work for me.
```
**Use for:** reviewing an agent trace or summary after the run is complete

**Example:**
```
AGENT-VERIFY: The agent says median_income correlates strongly with median_house_value
at 0.82 and therefore causes higher prices.
```

---

## Template 4 — REACT-DEBUG
```
REACT-DEBUG: [agent loop trace]
I need help debugging my ReAct loop.
Please identify:
- where the parser might fail,
- whether the tool choice is sensible,
- what stopping condition I should add,
- what one logging improvement would help most.
```
**Use for:** debugging parsing, looping, and tool-use issues in a local agent runtime

**Example:**
```
REACT-DEBUG: Thought: inspect missingness
Action: describe_dataframe
Action Input: {path: housing_prices.csv}
Observation: parser error near line 1 column 2
```

---

## Template 5 — AGENT-PLAN
```
AGENT-PLAN: [goal]
Before executing anything, plan the agent steps only.
Return:
1. likely first tool call,
2. second tool call,
3. what observation would trigger a branch,
4. what evidence should be required before Final Answer.
Do not execute the plan.
```
**Use for:** planning an agent's behavior before you let it call tools

**Example:**
```
AGENT-PLAN: Explore ecommerce_orders.csv and identify 2 possible return-related findings.
```

---

## Template 6 — RESPONSIBLE-USE
```
RESPONSIBLE-USE: [agentic workflow]
Please identify:
1. which steps can be agent-assisted,
2. which steps can be agent-generated but must be disclosed,
3. which steps should remain human-led,
4. what should be logged in AI_USE.md,
5. what approval checkpoint or hard stop I should add.
```
**Use for:** deciding where autonomy is acceptable and where human verification must stay in control

**Example:**
```
RESPONSIBLE-USE: A local agent loads housing_prices.csv, computes descriptive stats,
plots histograms, writes a 3-point EDA summary, and drafts recommendations for a stakeholder memo.
```

---

## Disclosure reminder
After each Gemma session, add an entry to `AI_USE.md`:
```markdown
## M13 — [date]
- Template used: [template number and name]
- Prompt sent: [exact text]
- Response summary: [1–2 sentences]
- What I accepted: [what you kept]
- What I changed or rejected: [what you modified]
```
