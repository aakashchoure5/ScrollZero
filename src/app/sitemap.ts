import type { MetadataRoute } from "next";

const routes = ["", "/features", "/pricing", "/about", "/blog", "/contact", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return routes.map((route) => ({
    url: `https://scrollzero.app${route}`,
    lastModified: updated,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
