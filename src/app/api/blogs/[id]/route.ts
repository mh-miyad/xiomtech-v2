import { db } from "@/database/db_index";
import { blogs } from "@/database/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

interface Context {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const [post] = await db
      .select()
      .from(blogs)
      .where(eq(blogs.id, Number(id)));

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const data = await request.json();

    const [updated] = await db
      .update(blogs)
      .set({
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
        status: data.status,
        updatedAt: new Date(),
      })
      .where(eq(blogs.id, Number(id)))
      .returning();

    if (!updated) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("PUT /api/blogs/[id] error:", error);
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Slug already exists." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, context: Context) {
  try {
    const { id } = await context.params;
    await db.delete(blogs).where(eq(blogs.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
