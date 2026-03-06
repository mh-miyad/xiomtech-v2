import { blogPosts } from "@/data/blogs";
import { db } from "@/database/db_index";
import { blogs, products } from "@/database/schema";
import { desc, eq } from "drizzle-orm";
import type { MetadataRoute } from "next";

const BASE_URL = "https://xiomtech.net";

/**
 * Revalidate the sitemap every hour so new blog posts
 * appear without a full redeploy.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  /* ────────────────────────────────────────────
   * 1. Core / Marketing pages
   * ──────────────────────────────────────────── */
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: { en: BASE_URL },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  /* ────────────────────────────────────────────
   * 2. Product / Landing pages
   * ──────────────────────────────────────────── */
  const dbProducts = await db
    .select({ slug: products.slug })
    .from(products)
    .where(eq(products.status, "published"));

  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-pos-software-in-bangladesh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...dbProducts.map((p) => ({
      url: `${BASE_URL}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  /* ────────────────────────────────────────────
   * 3. Legal pages
   * ──────────────────────────────────────────── */
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ────────────────────────────────────────────
   * 4. Country-specific solution pages
   * ──────────────────────────────────────────── */
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

  /* ────────────────────────────────────────────
   * 5. Dynamic blog posts  (DB + static fallback)
   *    → includes updatedAt for accurate lastModified
   *    → includes featuredImage for Google image indexing
   * ──────────────────────────────────────────── */
  let dbBlogs: {
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    featuredImage: string | null;
  }[] = [];

  try {
    dbBlogs = await db
      .select({
        slug: blogs.slug,
        createdAt: blogs.createdAt,
        updatedAt: blogs.updatedAt,
        featuredImage: blogs.featuredImage,
      })
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
      lastModified: new Date(post.updatedAt ?? post.createdAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      ...(post.featuredImage && {
        images: [post.featuredImage],
      }),
    })),
    // Static hardcoded posts (only if not already in DB)
    ...blogPosts
      .filter((p) => !dbSlugs.has(p.slug))
      .map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        ...(post.image && {
          images: [post.image],
        }),
      })),
  ];

  /* ────────────────────────────────────────────
   * Merge all — ordered by priority for readability
   * ──────────────────────────────────────────── */
  return [
    ...corePages,
    ...productPages,
    ...countryPages,
    ...blogPages,
    ...legalPages,
  ];
}

