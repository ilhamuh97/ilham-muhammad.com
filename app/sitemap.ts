import type { MetadataRoute } from "next";
import { siteMetadata } from "@/data/site";
import { getProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${siteMetadata.siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
