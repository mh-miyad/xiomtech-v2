import { blogPosts } from "@/data/blogs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Insights on Engineering, Design & Digital Products",
  description:
    "Read the latest articles from XiomTech on SaaS development, AI, enterprise UX, and building products that scale across borders.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="pt-28 pb-20 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
            Insights & Articles
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            Thoughts on engineering, design, and building products that scale
            across borders.
          </p>
        </div>

        {/* Featured Post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-16 md:mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[11px] text-gray-400">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-snug group-hover:text-blue-600 transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={featured.author.avatar}
                  alt={featured.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                  unoptimized
                />
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="font-medium text-gray-600">
                    {featured.author.name}
                  </span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-12 md:mb-16" />

        {/* Grid: 1 col mobile, 2 col md, 3 col lg, 4 col xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[11px] text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={24}
                  height={24}
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
