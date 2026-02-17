import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

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
  authorName: varchar("author_name", { length: 100 }).default("Miyad Hasan"),
  authorAvatar: text("author_avatar").default(
    "https://i.pravatar.cc/40?img=11",
  ),

  readTime: varchar("read_time", { length: 50 }).default("5 min read"),

  // Post status
  status: varchar("status", { length: 20 }).default("published").notNull(),

  // The Tiptap HTML content
  content: text("content").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
