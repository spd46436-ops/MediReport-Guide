# MediReport Guide

A Bengali-first, premium B2B landing page for diagnostic laboratory partnerships in west bengal.

## Local setup

1. Copy `.env.example` to `.env.local` and add Supabase credentials.
2. Run `pnpm install` then `pnpm dev`.

Run `supabase/migrations/202607310001_create_partner_leads.sql` in your Supabase project before enabling lead capture. The service-role key is used only by the server-side route and must never be exposed as a `NEXT_PUBLIC_` variable.
