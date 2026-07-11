import Link from "next/link";
import { BriefcaseBusiness, Globe, MessageCircle } from "lucide-react";

const links = [
  { href: "https://github.com", label: "GitHub", icon: Globe },
  { href: "https://twitter.com", label: "Twitter", icon: MessageCircle },
  { href: "https://linkedin.com", label: "LinkedIn", icon: BriefcaseBusiness },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-200/70 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex w-[min(96%,72rem)] flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} ScrollZero. Reclaim Your Attention.</p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" target="_blank" rel="noreferrer">
              <link.icon className="size-4" />
            </a>
          ))}
          <Link href="/privacy-policy" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Privacy</Link>
          <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
