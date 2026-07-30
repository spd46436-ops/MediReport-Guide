"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="grid min-h-screen place-items-center bg-mist px-5 text-center"><div><p className="font-bold tracking-[.2em] text-mint">SOMETHING WENT WRONG</p><h1 className="mt-3 text-4xl font-bold text-ink">আবার চেষ্টা করুন</h1><p className="mt-4 max-w-md text-slate-700">একটি অস্থায়ী সমস্যা হয়েছে। অনুগ্রহ করে পেজটি আবার চেষ্টা করুন।</p><button onClick={reset} className="mt-7 rounded-full bg-ink px-6 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">আবার চেষ্টা করুন</button></div></main>;
}
