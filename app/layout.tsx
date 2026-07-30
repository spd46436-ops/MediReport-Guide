import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://medireport-guide.vercel.app"),
  title: { default: "MediReport Guide | Lab partnership, made clearer", template: "%s | MediReport Guide" },
  description: "A premium B2B partnership platform for diagnostic labs across Bangladesh.",
  keywords: ["diagnostic lab", "lab partnership", "Bangladesh healthcare", "medical reports"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "MediReport Guide", description: "Better lab partnerships, clearer patient journeys.", type: "website", locale: "bn_BD" },
  twitter: { card: "summary_large_image", title: "MediReport Guide", description: "Better lab partnerships, clearer patient journeys." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
