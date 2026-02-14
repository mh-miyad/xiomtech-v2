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
    {
      url: `${BASE_URL}/best-pos-software-in-bangladesh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
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

  return [...staticPages, ...countryPages];
}
