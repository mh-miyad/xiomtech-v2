import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  featuredImageAlt: varchar("featured_image_alt", { length: 255 }),
  category: varchar("category", { length: 100 }),

  // SEO Fields
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),

  // Author Info
  authorName: varchar("author_name", { length: 100 }).default("Mh Miyad"),
  authorAvatar: text("author_avatar").default(
    "https://media.licdn.com/dms/image/v2/D4D03AQG4OejgXcL5bQ/profile-displayphoto-scale_100_100/B4DZxDEagOHwAc-/0/1770651767820?e=1774483200&v=beta&t=Z86Do_O-fJHOE6kC3EcR27m0IWfvFikuID7hkyfM6hE",
  ),

  readTime: varchar("read_time", { length: 50 }).default("5 min read"),

  // Post status
  status: varchar("status", { length: 20 }).default("published").notNull(),

  // The Tiptap HTML content
  content: text("content").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ── Products Table ── */
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  tagline: varchar("tagline", { length: 500 }),
  excerpt: text("excerpt"),

  // Images & Media
  heroImage: text("hero_image"),
  logoImage: text("logo_image"),
  videoUrl: text("video_url"),

  // Rich content (Tiptap HTML)
  description: text("description"),

  // JSON stored as text
  features: text("features"), // JSON array: [{icon, title, description}]
  highlights: text("highlights"), // JSON array: [{title, description, image?}]

  // Categorization
  category: varchar("category", { length: 100 }),

  // CTA
  ctaText: varchar("cta_text", { length: 100 }).default("Get Started"),
  ctaLink: text("cta_link"),

  // SEO
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),

  // Ordering & Status
  sortOrder: integer("sort_order").default(0),
  status: varchar("status", { length: 20 }).default("published").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
