import type { Metadata } from "next";
import { blogPosts } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SimplePage } from "@/components/marketing/simple-page";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <SimplePage title="ScrollZero Blog" subtitle="Insights on attention, behavior design, and healthier technology use.">
      <div className="grid gap-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
          </Card>
        ))}
      </div>
    </SimplePage>
  );
}
