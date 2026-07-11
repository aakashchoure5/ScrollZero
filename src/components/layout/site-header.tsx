"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain } from "lucide-react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(96%,72rem)] rounded-2xl border border-zinc-200/70 bg-white/80 px-4 py-3 shadow-lg shadow-zinc-900/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <nav className="flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <Brain className="size-5 text-[#2DD4BF]" /> ScrollZero
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                pathname === item.href && "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="default" className="hidden sm:inline-flex">
            <Link href="/contact">Get Early Access</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
