"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
interface Faq {
  question: string;
  answer: string;
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
  parsedFaqs: Faq[];
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

// ── FAQ Accordion item ──────────────────────────────────────────────────────
function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" },
      );
    } else {
      gsap.to(bodyRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${open ? "border-blue-200 bg-blue-50/40" : "border-gray-200 bg-white"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="flex-none size-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="font-semibold text-gray-900 font-(family-name:--font-syne) text-base leading-snug">
            {faq.question}
          </span>
        </span>
        <span
          className={`flex-none size-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? "bg-blue-600 border-blue-600 rotate-45" : "border-gray-300"}`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-white" : "text-gray-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="px-6 pb-5 pl-16 text-gray-600 leading-relaxed text-sm md:text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: RelatedProduct[];
}) {
  const mainRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      );
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
          scrollTrigger: { trigger: "[data-features-grid]", start: "top 85%" },
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
      {/* ═══ HERO IMAGE ═══ */}
      {product.heroImage && (
        <section className="relative mt-12 z-10 px-6 mb-5" data-reveal>
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl max-h-[500px] overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={product.heroImage}
                alt={`${product.title} screenshot`}
                width={1200}
                height={475}
                className="w-full object-cover max-h-[450px]"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* ═══ LOGO + INTRO BANNER (shown when no heroImage) ═══ */}
      {!product.heroImage && product.logoImage && (
        <section className="pb-12 pt-5 px-6" data-reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
            <div className="size-24 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center p-4 shadow-md">
              <Image
                src={product.logoImage}
                alt={product.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            {product.excerpt && (
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {product.excerpt}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ═══ VIDEO ═══ */}
      {embedUrl && (
        <section className="py-16 md:py-24 px-6" data-reveal>
          <div className="max-w-7xl mx-auto">
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
          <div className="max-w-7xl mx-auto">
            {product.logoImage && (
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src={product.logoImage}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 object-contain rounded-xl"
                />
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-(family-name:--font-syne) prose-headings:tracking-tight
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-gray-900
                prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </section>
      )}

      {/* ═══ FEATURES ═══ */}
      {product.parsedFeatures.length > 0 && (
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                Core Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-(family-name:--font-syne)">
                Everything You Need in One Platform
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Built for real-world business operations — not just a feature
                checklist.
              </p>
            </div>

            <div
              data-features-grid
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {product.parsedFeatures.map((feature, i) => (
                <div
                  key={i}
                  data-feature-card
                  className="group p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-2xl group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 font-(family-name:--font-syne)">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14" data-reveal>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                Why {product.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-(family-name:--font-syne)">
                The Difference That Matters
              </h2>
            </div>
            <div className="space-y-16">
              {product.parsedHighlights.map((highlight, i) => (
                <div
                  key={i}
                  data-reveal
                  className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
                >
                  {highlight.image && (
                    <div className="md:w-1/2">
                      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
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
                  <div
                    className={
                      highlight.image
                        ? "md:w-1/2"
                        : "w-full max-w-2xl mx-auto text-center"
                    }
                  >
                    <div className="size-10 rounded-xl bg-blue-600 flex items-center justify-center mb-4 text-white font-bold text-sm font-(family-name:--font-syne)">
                      {String(i + 1).padStart(2, "0")}
                    </div>
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
          </div>
        </section>
      )}

      {/* ═══ FAQ ═══ */}
      {product.parsedFaqs.length > 0 && (
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-[0.15em] mb-2">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-(family-name:--font-syne)">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-500">
                Still have questions?{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Talk to our team
                </Link>
              </p>
            </div>

            <div className="space-y-3" data-reveal>
              {product.parsedFaqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      {/* ═══ RELATED PRODUCTS ═══ */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-(family-name:--font-syne)">
                Explore More Products
              </h2>
              <p className="text-gray-500 mt-2">
                Our full suite of enterprise software solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.slug}`}
                  data-reveal
                  className="group p-5 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {rp.logoImage && (
                      <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center p-1.5 flex-none">
                        <Image
                          src={rp.logoImage}
                          alt=""
                          width={32}
                          height={32}
                          className="size-7 object-contain"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 font-(family-name:--font-syne) group-hover:text-blue-600 transition-colors">
                      {rp.title}
                    </h3>
                  </div>
                  {rp.excerpt && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {rp.excerpt}
                    </p>
                  )}
                  <div className="mt-3 text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
