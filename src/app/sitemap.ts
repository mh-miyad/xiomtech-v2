import type { MetadataRoute } from "next";

const BASE_URL = "https://www.xiomtech.net";

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
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-pos-software-in-bangladesh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  /* ── Dynamic country solution pages ── */
  const countries = [
    "bangladesh",
    "uae",
    "saudi-arabia",
    "qatar",
    "indonesia",
    "turkey",
    "egypt",
    "nigeria",
    "oman",
  ];

  const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${BASE_URL}/solutions/${country}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Dynamic blog pages ── */
  // Ensure you import blogPosts from your data source
  const blogPages: MetadataRoute.Sitemap =
    require("@/data/blogs").blogPosts.map((post: any) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...countryPages, ...blogPages];
}
