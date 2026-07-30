"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

const benefits = [
  ["01", "এক জায়গায় অপারেশন", "রিপোর্টিং, রেফারাল ও পার্টনার আপডেট—একটি পরিষ্কার, সুরক্ষিত কর্মপ্রবাহে।"],
  ["02", "বিশ্বাসযোগ্য অভিজ্ঞতা", "আপনার ল্যাবের মান ও সেবার গল্পকে প্রতিটি ক্লিনিকের কাছে সঠিকভাবে পৌঁছে দিন।"],
  ["03", "বৃদ্ধির স্পষ্ট ছবি", "দৃশ্যমান পারফরম্যান্স ইনসাইট দিয়ে অংশীদারিত্বকে এগিয়ে নিন আত্মবিশ্বাসের সাথে।"],
];

export default function Home() {
  const [email, setEmail] = useState(""); const [status, setStatus] = useState("");
  async function join(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const client = supabase();
    if (client) await client.from("partner_leads").insert({ email });
    setStatus("ধন্যবাদ — আমাদের পার্টনারশিপ টিম শীঘ্রই যোগাযোগ করবে।"); setEmail("");
  }
  return <main className="overflow-hidden bg-mist">
    <section className="grid-bg min-h-screen px-5 pb-16 pt-5 md:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
        <a href="#top" className="flex items-center gap-3 font-bold text-ink"><span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-xl text-white">+</span><span>MediReport <i className="font-normal text-mint">Guide</i></span></a>
        <a href="#partner" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-mint">Partner with us</a>
      </nav>
      <div id="top" className="mx-auto grid max-w-6xl items-center gap-12 pb-10 pt-20 md:grid-cols-[1.05fr_.95fr] md:pt-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <p className="mb-5 text-sm font-bold tracking-[.22em] text-mint">FORWARD-THINKING LABS</p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.04] tracking-tight text-ink md:text-7xl">Better lab partnerships.<br/><span className="text-mint">Clearer</span> patient journeys.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">মেডিরিপোর্ট গাইড হলো বাংলাদেশে ডায়াগনস্টিক ল্যাবের জন্য একটি premium B2B partnership platform—যেখানে প্রতিটি সংযোগ হয়ে ওঠে আরও সহজ, নির্ভরযোগ্য ও ফলপ্রসূ।</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#partner" className="rounded-full bg-mint px-7 py-4 font-bold text-white shadow-lg shadow-mint/25">Become a lab partner →</a><a href="#how" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-ink">কীভাবে কাজ করে</a></div>
          <p className="mt-8 text-sm text-slate-500">Built for diagnostic excellence · Designed for trust</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-mint/15 blur-3xl"/><div className="relative rounded-[2.5rem] bg-ink p-6 shadow-lift">
            <div className="rounded-[2rem] bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-bold tracking-widest text-mint">PARTNER PULSE</p><h2 className="mt-1 text-2xl font-bold">Today at a glance</h2></div><span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-mint">Live</span></div>
            <div className="mt-7 rounded-2xl bg-mist p-5"><p className="text-sm text-slate-500">Referral confidence</p><p className="mt-1 text-4xl font-bold">96<span className="text-mint">%</span></p><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-[96%] rounded-full bg-mint"/></div></div>
            <div className="mt-4 grid grid-cols-2 gap-4"><div className="rounded-2xl border p-4"><p className="text-xs text-slate-500">Active partners</p><p className="mt-2 text-2xl font-bold">48</p></div><div className="rounded-2xl border p-4"><p className="text-xs text-slate-500">Response time</p><p className="mt-2 text-2xl font-bold">2.4h</p></div></div></div>
          </div>
        </motion.div>
      </div>
    </section>
    <section id="how" className="bg-white px-5 py-24 md:px-10"><div className="mx-auto max-w-6xl"><p className="font-bold tracking-[.2em] text-mint">WHY MEDIREPORT GUIDE</p><div className="mt-5 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><h2 className="text-4xl font-bold leading-tight md:text-5xl">Your lab deserves a partnership model as precise as your work.</h2><p className="text-lg leading-8 text-slate-600">We pair considered technology with human support, so your team can focus on care while every relationship becomes easier to manage.</p></div><div className="mt-16 grid gap-5 md:grid-cols-3">{benefits.map(([number, title, body]) => <article key={number} className="rounded-3xl border border-slate-100 p-7 transition hover:-translate-y-1 hover:shadow-lift"><p className="font-bold text-mint">{number}</p><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}</div></div></section>
    <section id="partner" className="px-5 py-20 md:px-10"><div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-ink px-7 py-12 text-white md:grid-cols-2 md:px-14 md:py-16"><div><p className="font-bold tracking-[.2em] text-mint">LET’S GROW TOGETHER</p><h2 className="mt-5 text-4xl font-bold leading-tight">Ready to make every report go further?</h2><p className="mt-5 max-w-md leading-7 text-slate-300">Join a thoughtful network of laboratories building the next standard of diagnostic care.</p></div><form onSubmit={join} className="self-end"><label className="sr-only" htmlFor="email">Work email</label><div className="flex flex-col gap-3 sm:flex-row"><input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="আপনার work email" className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-mint"/><button className="rounded-full bg-mint px-6 py-4 font-bold">Request a call</button></div>{status && <p className="mt-4 text-sm text-mint" role="status">{status}</p>}</form></div></section>
    <footer className="px-5 pb-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} MediReport Guide · Better partnerships for better care.</footer>
  </main>;
}
