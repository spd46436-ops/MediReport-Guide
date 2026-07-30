"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true); setMessage("");
    const form = event.currentTarget;
    const response = await fetch("/api/partner-leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, company: new FormData(form).get("company") }) }).catch(() => null);
    setSending(false);
    if (response?.ok) { setEmail(""); form.reset(); setMessage("ধন্যবাদ — আমাদের পার্টনারশিপ টিম শীঘ্রই যোগাযোগ করবে।"); }
    else setMessage("দুঃখিত, অনুরোধটি পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।");
  }

  return <form onSubmit={submit} className="self-end" noValidate>
    <label className="sr-only" htmlFor="email">Work email</label>
    <input className="sr-only" tabIndex={-1} autoComplete="off" name="company" aria-hidden="true" />
    <div className="flex flex-col gap-3 sm:flex-row"><input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="আপনার work email" className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-mint"/><button type="submit" disabled={sending} className="rounded-full bg-mint px-6 py-4 font-bold transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint disabled:cursor-not-allowed disabled:opacity-60">{sending ? "Sending…" : "Request a call"}</button></div>
    <p className="mt-4 min-h-5 text-sm text-mint" role="status" aria-live="polite">{message}</p>
  </form>;
}
