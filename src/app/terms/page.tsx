import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/simple-page";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <SimplePage title="Terms of Service" subtitle="These terms govern your use of ScrollZero services.">
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>By using ScrollZero, you agree to responsible use of all app features and acknowledge that outcomes vary by user behavior.</p>
        <p>Subscription plans renew automatically unless cancelled before the next billing period.</p>
        <p>For legal and billing support, contact legal@scrollzero.app.</p>
      </div>
    </SimplePage>
  );
}
