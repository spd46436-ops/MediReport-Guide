create table if not exists public.partner_leads (
  id bigint generated always as identity primary key,
  email text not null unique check (char_length(email) <= 254),
  created_at timestamptz not null default now()
);

alter table public.partner_leads enable row level security;
revoke all on public.partner_leads from anon, authenticated;
