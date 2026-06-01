import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: "Official site for the Janx Striper Tournament — length-only striped bass competition.",
  metadataBase: new URL("https://janxstripertournament.com"),
  openGraph: {
    title: siteConfig.title,
    description: "Length-only striped bass tournament in York, Maine.",
    type: "website",
    url: "https://janxstripertournament.com"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: "Length-only striped bass tournament in York, Maine."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skiplink" href="#content">Skip to content</a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
