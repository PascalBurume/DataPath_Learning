# M12 — Knowledge Check
> Module 12: Local LLM Mastery for Data Scientists

Answer all questions in writing before checking answers with a peer or instructor.

---

**Q1.** You need a local model for a task that must return strict JSON describing 100 synthetic ecommerce rows. Which model would you try first out of `gemma4n`, `llama3.2`, `qwen2.5`, and `phi4`, and why?
*(Lesson L12.1)*

---

**Q2.** In an Ollama `POST /api/chat` request, what does `"stream": false` change about the response shape, and why is that often useful for JSON parsing?
*(Lesson L12.2)*

---

**Q3.** Give two validation steps you should perform after generating synthetic tabular data with a local model. One must be schema-focused and one must be distribution-focused.
*(Lesson L12.4)*

---

**Q4.** Name the four core components in the offline-first RAG pipeline taught in M12, in the correct order, starting from the learner's own materials.
*(Lesson L12.5)*

---

**Q5.** A student says, “If the retriever gave me the top 3 chunks, I can trust the final answer.” What is wrong with this statement?
*(Lesson L12.5)*

---

**Q6.** You want the model to check whether your confidence-interval interpretation is statistically correct. Which prompt pattern is best: structured output, chain-of-thought for stats, or self-consistency? Explain your choice in one sentence.
*(Lesson L12.3)*

---

**Q7.** In a privacy-preserving local AI architecture, why is “the model runs on my laptop” not a complete privacy argument? Give two leakage surfaces or trust concerns.
*(Lesson L12.7)*

---

**Q8.** A notebook contains one cell where the learner must classify a workflow as AI-assisted, AI-generated, or AI-independent, and another cell where the learner tests an Ollama REST call. Which one should be marked `[AI-OFF]`, and why?
*(Lessons L12.2 and L12.7)*
