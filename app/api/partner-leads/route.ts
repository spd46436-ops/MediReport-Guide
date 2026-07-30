import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (body?.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const supabase = createSupabaseAdmin();
  if (!supabase) return NextResponse.json({ error: "Lead capture is not configured" }, { status: 503 });
  const { error } = await supabase.from("partner_leads").upsert({ email }, { onConflict: "email", ignoreDuplicates: true });
  if (error) return NextResponse.json({ error: "Unable to save your request" }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
