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
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
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
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          data-product-card
          className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
            {product.heroImage ? (
              <Image
                src={product.heroImage}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : product.logoImage ? (
              <div className="flex items-center justify-center h-full">
                <Image
                  src={product.logoImage}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold font-(family-name:--font-syne)">
                    {product.title.charAt(0)}
                  </span>
                </div>
              </div>
            )}

            {/* Category badge */}
            {product.category && (
              <span className="absolute top-3 right-3 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full">
                {product.category}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              {product.logoImage && (
                <Image
                  src={product.logoImage}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 rounded-lg object-contain"
                />
              )}
              <h3 className="text-lg font-bold text-gray-900 font-(family-name:--font-syne) group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
            </div>

            {product.tagline && (
              <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                {product.tagline}
              </p>
            )}

            {product.excerpt && (
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {product.excerpt}
              </p>
            )}

            <div className="mt-4 flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
      ))}
    </div>
  );
}
