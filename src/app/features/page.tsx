import type { Metadata } from "next";
import { features } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SimplePage } from "@/components/marketing/simple-page";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <SimplePage title="Powerful Features" subtitle="Everything ScrollZero needs to transform your relationship with short-form content.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <Card key={item.title}>
            <item.icon className="size-5 text-[#2DD4BF]" />
            <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
          </Card>
        ))}
      </div>
    </SimplePage>
  );
}
