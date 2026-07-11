import type { Metadata } from "next";
import { pricing } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SimplePage } from "@/components/marketing/simple-page";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <SimplePage title="Transparent Pricing" subtitle="Choose the plan that fits your attention goals.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {pricing.map((plan) => (
          <Card key={plan.name}>
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-bold">{plan.price}</p>
            <p className="text-sm text-zinc-500">{plan.cadence}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              {plan.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SimplePage>
  );
}
