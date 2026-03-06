import PageHeader from "@/components/common/PageHeader";
import ProductDetailClient from "@/components/features/product/ProductDetailClient";

import { db } from "@/database/db_index";
import { products } from "@/database/schema";
import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

async function getProduct(slug: string) {
  const [product] = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug));
  return product ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return { title: "Product Not Found | XiomTech" };
  }

  const title = product.metaTitle || `${product.title} | XiomTech`;
  const description =
    product.metaDescription || product.excerpt || product.tagline || "";
  const image =
    product.heroImage || product.logoImage || "https://xiomtech.net/logo.webp";

  return {
    title,
    description,
    keywords: product.metaKeywords || undefined,
    openGraph: {
      title,
      description,
      url: `https://xiomtech.net/products/${slug}`,
      siteName: "XiomTech",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@xiomtech",
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export const revalidate = 3600;

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // Parse JSON fields
  let features: { icon: string; title: string; description: string }[] = [];
  let highlights: { title: string; description: string; image?: string }[] = [];
  let faqs: { question: string; answer: string }[] = [];

  try { features  = product.features  ? JSON.parse(product.features)  : []; } catch { features  = []; }
  try { highlights = product.highlights ? JSON.parse(product.highlights) : []; } catch { highlights = []; }
  try { faqs       = (product as any).faqs ? JSON.parse((product as any).faqs) : []; } catch { faqs = []; }

  // Get related products (up to 3 others)
  let related: typeof product[] = [];
  if (product.category) {
    related = await db
      .select()
      .from(products)
      .where(eq(products.status, "published"))
      .limit(4);
    related = related.filter((p) => p.id !== product.id).slice(0, 3);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://xiomtech.net/products/${slug}`,
    description: product.metaDescription || product.excerpt || product.tagline,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "XiomTech",
    },
    image: product.heroImage || product.logoImage,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHeader
        title={product.title}
        description={product.tagline || undefined}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      <ProductDetailClient
        product={{
          ...product,
          parsedFeatures: features,
          parsedHighlights: highlights,
          parsedFaqs: faqs,
        }}
        relatedProducts={related}
      />
    </main>
  );
}
