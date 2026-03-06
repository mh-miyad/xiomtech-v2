import { db } from "@/database/db_index";
import { products } from "@/database/schema";
import { asc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allProducts = await db
      .select()
      .from(products)
      .where(eq(products.status, "published"))
      .orderBy(asc(products.sortOrder));
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const [created] = await db
      .insert(products)
      .values({
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
        status: data.status || "published",
      })
      .returning();

    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/products error:", error);
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Slug already exists. Try a different title." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}
