import { HomePage } from "@/components/marketing/home-page";

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ScrollZero",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "ScrollZero helps people reduce doomscrolling, short-form video addiction, and unhealthy phone habits.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomePage />
    </>
  );
}
