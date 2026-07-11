import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: {
    default: "ScrollZero | Reclaim Your Attention",
    template: "%s | ScrollZero",
  },
  description:
    "ScrollZero helps reduce doomscrolling and short-form addiction with intelligent insights, habit building, and focus tools.",
  metadataBase: new URL("https://scrollzero.app"),
  openGraph: {
    title: "ScrollZero | Reclaim Your Attention",
    description:
      "Reduce doomscrolling with AI-powered insights, focus sessions, and habit tools built for digital wellbeing.",
    url: "https://scrollzero.app",
    siteName: "ScrollZero",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScrollZero | Reclaim Your Attention",
    description:
      "A premium digital wellbeing app for reducing doomscrolling and rebuilding attention.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-[#09090B] dark:text-zinc-100">
        <ThemeProvider>
          <SiteHeader />
          <main className="mx-auto w-full">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
