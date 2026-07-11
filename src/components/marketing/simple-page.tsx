import type { ReactNode } from "react";

export function SimplePage({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <section className="mx-auto w-[min(96%,72rem)] px-2 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">ScrollZero</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      <div className="mt-10">{children}</div>
    </section>
  );
}
