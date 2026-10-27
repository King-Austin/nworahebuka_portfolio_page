import type { MetadataRoute } from "next";
import { publishedBlogPosts, publishedProjects, publishedRecognitions, publishedStudioProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/work", "/recognition", "/blog", "/about", "/resume", "/resume/ats"];
  const studioRoute = publishedStudioProjects.length ? ["/studio"] : [];
  return [
    ...staticRoutes.map((path) => ({ url: `${site.origin}${path}`, lastModified: now, changeFrequency: path === "" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : .7 })),
    ...studioRoute.map((path) => ({ url: `${site.origin}${path}`, lastModified: now, changeFrequency: "yearly" as const, priority: .5 })),
    ...publishedProjects.map((item) => ({ url: `${site.origin}/work/${item.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: .7 })),
    ...publishedRecognitions.map((item) => ({ url: `${site.origin}/recognition/${item.slug}`, lastModified: new Date(item.date.length === 4 ? `${item.date}-01-01` : item.date.length === 7 ? `${item.date}-01` : item.date), changeFrequency: "yearly" as const, priority: .6 })),
    ...publishedBlogPosts.map((item) => ({ url: `${site.origin}/blog/${item.slug}`, lastModified: new Date(item.publishedAt), changeFrequency: "monthly" as const, priority: .65 })),
    ...publishedStudioProjects.map((item) => ({ url: `${site.origin}/studio/${item.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: .5 })),
  ];
}
