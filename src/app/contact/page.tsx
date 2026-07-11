import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/simple-page";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <SimplePage title="Contact ScrollZero" subtitle="Reach out for early access, partnerships, and product updates.">
      <form className="grid max-w-2xl gap-4 rounded-3xl border border-zinc-200/70 bg-white/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
        <input className="h-11 rounded-xl border border-zinc-300 bg-transparent px-3 dark:border-zinc-700" placeholder="Full name" />
        <input className="h-11 rounded-xl border border-zinc-300 bg-transparent px-3 dark:border-zinc-700" placeholder="Email" type="email" />
        <textarea className="min-h-28 rounded-xl border border-zinc-300 bg-transparent p-3 dark:border-zinc-700" placeholder="How can we help?" />
        <Button type="submit" size="lg">Send message</Button>
      </form>
    </SimplePage>
  );
}
