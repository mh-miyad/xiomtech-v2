import { blogPosts } from "@/data/blogs";
import { db } from "@/database/db_index";
import { blogs } from "@/database/schema";
import { desc, eq } from "drizzle-orm";
import type { MetadataRoute } from "next";

const BASE_URL = "https://xiomtech.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  /* ── Dynamic blog pages (DB + static fallback) ── */
  let dbBlogs: { slug: string; createdAt: Date }[] = [];
  try {
    dbBlogs = await db
      .select({ slug: blogs.slug, createdAt: blogs.createdAt })
      .from(blogs)
      .where(eq(blogs.status, "published"))
      .orderBy(desc(blogs.createdAt));
  } catch (error) {
    console.error("Sitemap: failed to fetch blogs from DB", error);
  }

  // DB slugs take priority — deduplicate static posts
  const dbSlugs = new Set(dbBlogs.map((b) => b.slug));

  const blogPages: MetadataRoute.Sitemap = [
    // Dynamic posts from the database
    ...dbBlogs.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Static hardcoded posts (only if not already in DB)
    ...blogPosts
      .filter((p) => !dbSlugs.has(p.slug))
      .map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];

  return [...staticPages, ...countryPages, ...blogPages];
}
