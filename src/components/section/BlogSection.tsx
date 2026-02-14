"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { blogPosts } from "@/data/blogs";

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-blog-header] > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-blog-header]",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-blog-slider]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-blog-slider]",
            start: "top 90%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Header */}
      <div
        data-blog-header
        className="px-5 md:px-8 lg:px-16 mb-12 md:mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
            Insights & Articles
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
            From Our Blog
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-lg leading-relaxed">
            Thoughts on engineering, design, and building products that scale
            across borders.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors shrink-0"
        >
          View all articles
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Swiper Slider */}
      <div data-blog-slider className="pl-5 md:pl-8 lg:pl-16">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.15}
          freeMode={{ enabled: true, sticky: false }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={600}
          breakpoints={{
            480: { slidesPerView: 1.4, spaceBetween: 20 },
            640: { slidesPerView: 1.8, spaceBetween: 24 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 2.8, spaceBetween: 28 },
            1280: { slidesPerView: 3.3, spaceBetween: 32 },
          }}
          className="!overflow-visible"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="pt-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[11px] text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="rounded-full"
                      unoptimized
                    />
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="font-medium text-gray-600">
                        {post.author.name}
                      </span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
