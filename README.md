# MediReport Guide

A Bengali-first, premium B2B landing page for diagnostic laboratory partnerships in Bangladesh.

## Local setup

1. Copy `.env.example` to `.env.local` and add Supabase credentials.
2. Run `pnpm install` then `pnpm dev`.

The lead form saves to a `partner_leads` table when Supabase is configured; it remains usable as a no-op before configuration.
