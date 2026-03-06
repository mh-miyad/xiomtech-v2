"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Highlight {
  title: string;
  description: string;
  image?: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  tagline: string | null;
  excerpt: string | null;
  heroImage: string | null;
  logoImage: string | null;
  videoUrl: string | null;
  description: string | null;
  category: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  parsedFeatures: Feature[];
  parsedHighlights: Highlight[];
}

interface RelatedProduct {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  logoImage: string | null;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]+)/,
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: RelatedProduct[];
}) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero items
      gsap.fromTo(
        "[data-hero-item]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      );

      // Sections reveal on scroll
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // Feature cards stagger
      gsap.fromTo(
        "[data-feature-card]",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-features-grid]",
            start: "top 85%",
          },
        },
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const embedUrl = product.videoUrl
    ? getYouTubeEmbedUrl(product.videoUrl)
    : null;

  return (
    <main ref={mainRef}>
      {/* ═══ HERO IMAGE (moved up slightly since header is in parent) ═══ */}

      {/* ═══ HERO IMAGE ═══ */}
      {product.heroImage && (
        <section className="relative -mt-12 z-10 px-6" data-reveal>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={product.heroImage}
                alt={`${product.title} screenshot`}
                width={1200}
                height={675}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* ═══ VIDEO ═══ */}
      {embedUrl && (
        <section className="py-16 md:py-24 px-6" data-reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-(family-name:--font-syne)">
                See It in Action
              </h2>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={embedUrl}
                title={`${product.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ═══ DESCRIPTION ═══ */}
      {product.description && (
        <section className="py-16 md:py-24 px-6 bg-gray-50" data-reveal>
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-gray max-w-none prose-headings:font-(family-name:--font-syne) prose-headings:tracking-tight prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </section>
      )}

      {/* ═══ FEATURES ═══ */}
      {product.parsedFeatures.length > 0 && (
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-(family-name:--font-syne)">
                What Makes {product.title} Special
              </h2>
            </div>

            <div
              data-features-grid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {product.parsedFeatures.map((feature, i) => (
                <div
                  key={i}
                  data-feature-card
                  className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-(family-name:--font-syne)">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ HIGHLIGHTS ═══ */}
      {product.parsedHighlights.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-16">
            {product.parsedHighlights.map((highlight, i) => (
              <div
                key={i}
                data-reveal
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
              >
                {highlight.image && (
                  <div className="md:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className={highlight.image ? "md:w-1/2" : "w-full"}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-(family-name:--font-syne)">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section
        data-dark-section
        className="relative bg-black py-20 md:py-28 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" data-reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-(family-name:--font-syne) mb-4">
            Ready to Get Started with {product.title}?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Schedule a demo or chat with our team to learn how {product.title}{" "}
            can transform your business.
          </p>
          {product.ctaLink && (
            <Link
              href={product.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              {product.ctaText || "Get Started"}
            </Link>
          )}
        </div>
      </section>

      {/* ═══ RELATED PRODUCTS ═══ */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-(family-name:--font-syne)">
                Explore More Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.slug}`}
                  data-reveal
                  className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {rp.logoImage && (
                      <Image
                        src={rp.logoImage}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-lg object-contain"
                      />
                    )}
                    <h3 className="text-lg font-bold text-gray-900 font-(family-name:--font-syne) group-hover:text-blue-600 transition-colors">
                      {rp.title}
                    </h3>
                  </div>
                  {rp.excerpt && (
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {rp.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
