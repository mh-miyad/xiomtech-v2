"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  title: string;
  slug: string;
  tagline: string | null;
  excerpt: string | null;
  logoImage: string | null;
  heroImage: string | null;
  category: string | null;
}

const PRODUCT_ACCENT: Record<
  string,
  { from: string; to: string; badge: string }
> = {
  xiompos: { from: "#2563eb", to: "#1d4ed8", badge: "#dbeafe" },
  xiomhrm: { from: "#7c3aed", to: "#5b21b6", badge: "#ede9fe" },
  xiomcare: { from: "#0d9488", to: "#0f766e", badge: "#ccfbf1" },
  xiomedu: { from: "#d97706", to: "#b45309", badge: "#fef3c7" },
  xiomaccount: { from: "#059669", to: "#047857", badge: "#d1fae5" },
  xiomtickets: { from: "#e11d48", to: "#be123c", badge: "#ffe4e6" },
  xiomcommerce: { from: "#0284c7", to: "#0369a1", badge: "#e0f2fe" },
};

const DEFAULT_ACCENT = { from: "#2563eb", to: "#1e40af", badge: "#dbeafe" };

export default function ProductListClient({
  products,
}: {
  products: Product[];
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-product-card]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => {
        const accent = PRODUCT_ACCENT[product.slug] ?? DEFAULT_ACCENT;

        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            data-product-card
            className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-2xl transition-all duration-300"
          >
            {/* ── Logo banner ── */}
            <div
              className="relative flex flex-col items-center justify-center py-10 px-6 gap-4"
              // style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
            >
              {/* subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {product.logoImage ? (
                <div className="relative z-10 size-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center p-3 ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={product.logoImage}
                    alt={`${product.title} logo`}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative z-10 size-20 rounded-2xl bg-white/20 flex items-center justify-center ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                  <span
                    className={`text-black text-3xl font-bold font-(family-name:--font-syne)`}
                  >
                    {product.title.charAt(0)}
                  </span>
                </div>
              )}

              <span
                className="relative z-10 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "#000",
                }}
              >
                {product.category ?? "Product"}
              </span>
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              <h3 className="text-xl font-bold text-gray-900 font-(family-name:--font-syne) group-hover:text-blue-600 transition-colors leading-tight">
                {product.title}
              </h3>

              {product.tagline && (
                <p className="text-sm font-medium text-gray-500 leading-snug">
                  {product.tagline}
                </p>
              )}

              {product.excerpt && (
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                  {product.excerpt}
                </p>
              )}

              <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                <span>Explore Product</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
