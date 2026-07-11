import type { Metadata } from "next";
import { SimplePage } from "@/components/marketing/simple-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <SimplePage title="Privacy Policy" subtitle="ScrollZero is designed with privacy as a core product principle.">
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>We collect only data required to provide attention insights, habit coaching, and performance analytics.</p>
        <p>Your personal data is protected through secure processing and strict access controls. We do not sell data to advertisers.</p>
        <p>You can request data export or deletion at any time by contacting privacy@scrollzero.app.</p>
      </div>
    </SimplePage>
  );
}
