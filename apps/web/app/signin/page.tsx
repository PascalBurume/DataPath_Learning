'use client';

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="sk-paper" style={{ minHeight: "100vh" }} />}>
      <SignInPageContent />
    </Suspense>
  );
}

function SignInPageContent() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setLoading(true);
    const r = await signIn("credentials", { email, password, redirect: false, callbackUrl });
    setLoading(false);
    if (r?.error) setErr("Invalid email or password");
    else router.push(callbackUrl);
  }

  return (
    <div className="sk-paper" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <form onSubmit={submit} className="sk-box shadow" style={{ width: 380, padding: 22 }}>
        <div style={{ fontFamily: "Caveat", fontWeight: 700, fontSize: 40, lineHeight: 1, marginBottom: 6 }}>DataPath</div>
        <div className="sk-tiny" style={{ marginBottom: 18 }}>Sign in to your local cohort.</div>

        <label className="sk-label" style={{ display: "block", marginBottom: 4 }}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
          style={{ width: "100%", padding: "8px 10px", border: "1.25px solid var(--ink)", borderRadius: 6, fontFamily: "inherit", marginBottom: 10 }} />

        <label className="sk-label" style={{ display: "block", marginBottom: 4 }}>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required
          style={{ width: "100%", padding: "8px 10px", border: "1.25px solid var(--ink)", borderRadius: 6, fontFamily: "inherit", marginBottom: 14 }} />

        {err && <div className="sk-chip warn" style={{ marginBottom: 10 }}>{err}</div>}

        <button className="sk-btn primary" type="submit" disabled={loading} style={{ width: "100%" }}>
          {loading ? "signing in…" : "sign in →"}
        </button>

        <div className="sk-tiny" style={{ marginTop: 14, textAlign: "center" }}>
          New here? <Link href="/signup" style={{ color: "var(--amber)" }}>Create an account</Link>
        </div>
      </form>
    </div>
  );
}
