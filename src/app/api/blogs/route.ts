import { db } from "@/database/db_index";
import { blogs } from "@/database/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allBlogs = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));
    return NextResponse.json(allBlogs);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const [created] = await db
      .insert(blogs)
      .values({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        featuredImageAlt: data.featuredImageAlt,
        category: data.category,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        authorName: data.authorName,
        authorAvatar: data.authorAvatar,
        readTime: data.readTime,
        content: data.content,
        status: data.status || "published",
      })
      .returning();

    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/blogs error:", error);
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Slug already exists. Try a different title." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
