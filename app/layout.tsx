import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediReport Guide | Lab partnership, made clearer",
  description: "A premium B2B partnership platform for diagnostic labs across Bangladesh.",
  keywords: ["diagnostic lab", "lab partnership", "Bangladesh healthcare", "medical reports"],
  openGraph: { title: "MediReport Guide", description: "Better lab partnerships, clearer patient journeys.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
