"use server";
import { eq } from "drizzle-orm";

import { db } from "@/database/db_index";
import { blogs } from "@/database/schema";
import { revalidatePath } from "next/cache";

export async function createBlogPostAction(data: any) {
  try {
    // 1. Insert into Drizzle
    await db.insert(blogs).values({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      featuredImage: data.image,
      featuredImageAlt: data.featuredImageAlt,
      category: data.category,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      metaKeywords: data.metaKeywords,
      authorName: data.author.name,
      authorAvatar: data.author.avatar,
      readTime: data.readTime,
      content: data.content,
      // status: data.status, // Add this to your schema if you want to track drafts
    });

    // 2. Clear the cache so the new post appears on the frontend
    revalidatePath("/blog");
    revalidatePath("/admin/blog");

    return { success: true, message: "Blog published successfully!" };
  } catch (error: any) {
    console.error("Database Error:", error);
    // Handle unique constraint error for slugs
    if (error.code === "23505") {
      return {
        success: false,
        error: "Slug already exists. Try a different title.",
      };
    }
    return { success: false, error: "Something went wrong." };
  }
}

export async function deleteBlogPostAction(id: number) {
  try {
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/admin/blog");
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
