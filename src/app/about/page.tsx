import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/simple-page";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <SimplePage title="About ScrollZero" subtitle="We believe attention is the most important asset of the modern era.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Mission</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Help people reduce doomscrolling, short-form video addiction, and unhealthy phone habits through calm, intelligent design.</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Brand Promise</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Premium quality, trust, calmness, and science-backed habit systems for digital wellbeing.</p>
        </Card>
      </div>
    </SimplePage>
  );
}
