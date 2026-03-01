import { db } from "@/database/db_index";
import { blogs as blogsTable } from "@/database/schema";
import { blogPosts, type BlogPost } from "@/data/blogs";
import { desc, eq } from "drizzle-orm";
import BlogSection from "./BlogSection";

export default async function BlogSectionServer() {
  let dbPosts: BlogPost[] = [];

  try {
    const rows = await db
      .select()
      .from(blogsTable)
      .where(eq(blogsTable.status, "published"))
      .orderBy(desc(blogsTable.createdAt))
      .limit(10);

    dbPosts = rows.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt ?? "",
      image: p.featuredImage ?? "",
      category: p.category ?? "Other",
      date: new Date(p.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: p.readTime ?? "5 min read",
      author: {
        name: p.authorName ?? "XiomTech",
        avatar: p.authorAvatar ?? "https://i.pravatar.cc/40?img=11",
      },
      content: p.content,
    }));
  } catch {
    // fallback to static only if DB fails
  }

  const allPosts = [...dbPosts, ...blogPosts];

  return <BlogSection posts={allPosts} />;
}
