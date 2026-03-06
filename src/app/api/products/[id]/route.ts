import { db } from "@/database/db_index";
import { products } from "@/database/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

interface Context {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(id)));

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("GET /api/products/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request, context: Context) {
  try {
    const { id } = await context.params;
    const data = await request.json();

    const [updated] = await db
      .update(products)
      .set({
        title: data.title,
        slug: data.slug,
        tagline: data.tagline,
        excerpt: data.excerpt,
        heroImage: data.heroImage,
        logoImage: data.logoImage,
        videoUrl: data.videoUrl,
        description: data.description,
        features: data.features ? JSON.stringify(data.features) : null,
        highlights: data.highlights ? JSON.stringify(data.highlights) : null,
        category: data.category,
        ctaText: data.ctaText,
        ctaLink: data.ctaLink,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        sortOrder: data.sortOrder ?? 0,
        status: data.status,
        updatedAt: new Date(),
      })
      .where(eq(products.id, Number(id)))
      .returning();

    if (!updated) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("PUT /api/products/[id] error:", error);
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Slug already exists." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, context: Context) {
  try {
    const { id } = await context.params;
    await db.delete(products).where(eq(products.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/products/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 },
    );
  }
}
