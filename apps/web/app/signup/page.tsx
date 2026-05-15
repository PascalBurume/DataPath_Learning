'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cohortCode, setCohortCode] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setLoading(true);
    const r = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, cohortCode: cohortCode || undefined }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(typeof j.error === "string" ? j.error : "Could not create account");
      setLoading(false); return;
    }
    await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <div className="sk-paper" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <form onSubmit={submit} className="sk-box shadow" style={{ width: 380, padding: 22 }}>
        <div style={{ fontFamily: "Caveat", fontWeight: 700, fontSize: 36, marginBottom: 4 }}>Join DataPath</div>
        <div className="sk-tiny" style={{ marginBottom: 16 }}>Create an account in your cohort.</div>

        {[
          { l: "Name", v: name, set: setName, t: "text" },
          { l: "Email", v: email, set: setEmail, t: "email" },
          { l: "Password (min 8)", v: password, set: setPassword, t: "password" },
          { l: "Cohort code", v: cohortCode, set: setCohortCode, t: "text" },
        ].map(({ l, v, set, t }) => (
          <div key={l} style={{ marginBottom: 10 }}>
            <label className="sk-label" style={{ display: "block", marginBottom: 4 }}>{l}</label>
            <input value={v} onChange={(e) => set(e.target.value)} type={t} required={l !== "Cohort code"}
              minLength={l.startsWith("Password") ? 8 : undefined}
              style={{ width: "100%", padding: "8px 10px", border: "1.25px solid var(--ink)", borderRadius: 6, fontFamily: "inherit" }} />
          </div>
        ))}

        {err && <div className="sk-chip warn" style={{ marginBottom: 10 }}>{err}</div>}

        <button className="sk-btn primary" type="submit" disabled={loading} style={{ width: "100%" }}>
          {loading ? "creating…" : "create account →"}
        </button>

        <div className="sk-tiny" style={{ marginTop: 14, textAlign: "center" }}>
          Have an account? <Link href="/signin" style={{ color: "var(--amber)" }}>Sign in</Link>
        </div>
      </form>
    </div>
  );
}
