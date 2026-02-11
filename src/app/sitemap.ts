import type { MetadataRoute } from "next";

const BASE_URL = "https://xiomtech.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ── Core pages ── */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add new pages here as the site grows:
    // { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  return staticPages;
}
