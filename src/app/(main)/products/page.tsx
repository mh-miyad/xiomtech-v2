import PageHeader from "@/components/common/PageHeader";
import ProductListClient from "@/components/features/product/ProductListClient";
import { db } from "@/database/db_index";
import { products } from "@/database/schema";
import { asc, eq } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products | XiomTech — Enterprise Software Ecosystem",
  description:
    "Discover XiomTech's product suite — XiomPOS, XiomHR, XiomAccounts, XiomEdu, XiomCare & more. Enterprise-grade SaaS platforms built for global businesses.",
  openGraph: {
    title: "Our Products | XiomTech",
    description:
      "Enterprise-grade SaaS products built for global businesses. POS, HRM, Accounting, Education, Healthcare — all powered by XiomOS.",
    url: "https://xiomtech.net/products",
    siteName: "XiomTech",
    type: "website",
    images: [
      {
        url: "https://xiomtech.net/logo.webp",
        width: 512,
        height: 512,
        alt: "XiomTech Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | XiomTech",
    description:
      "Enterprise-grade SaaS products built for global businesses.",
    images: ["https://xiomtech.net/logo.webp"],
    creator: "@xiomtech",
  },
  alternates: {
    canonical: "/products",
  },
};

export const revalidate = 3600;

async function getProducts() {
  return db
    .select()
    .from(products)
    .where(eq(products.status, "published"))
    .orderBy(asc(products.sortOrder));
}

export default async function ProductsPage() {
  const allProducts = await getProducts();

  return (
    <main>
      <PageHeader
        title="Our Products"
        description="Enterprise-grade SaaS platforms designed to automate, scale, and transform your business operations."
        breadcrumbs={[{ label: "Products" }]}
      />

      {/* Product Grid */}
      <section className="bg-gray-50 py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {allProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Products coming soon. Stay tuned!
              </p>
            </div>
          ) : (
            <ProductListClient products={allProducts} />
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-(family-name:--font-syne) mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Can&apos;t find what you need? We build tailored enterprise software
            for your specific business requirements.
          </p>
          <Link
            href="https://wa.me/8801822830775?text=Hello%20XiomTech%2C%20I%20need%20a%20custom%20software%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
