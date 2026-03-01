import PageHeader from "@/components/common/PageHeader";
import { db } from "@/database/db_index";
import { blogs as blogsTable } from "@/database/schema";
import { blogPosts, type BlogPost } from "@/data/blogs";
import { desc, eq } from "drizzle-orm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Insights on Engineering, Design & Digital Products",
  description:
    "Read the latest articles from XiomTech on SaaS development, AI, enterprise UX, and building products that scale across borders.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  let dbPosts: BlogPost[] = [];

  try {
    const rows = await db
      .select()
      .from(blogsTable)
      .where(eq(blogsTable.status, "published"))
      .orderBy(desc(blogsTable.createdAt));

    dbPosts = rows.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt ?? "",
      image: p.featuredImage ?? "",
      category: p.category ?? "Other",
      date: new Date(p.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: p.readTime ?? "5 min read",
      author: {
        name: p.authorName ?? "XiomTech",
        avatar: p.authorAvatar ?? "https://i.pravatar.cc/40?img=11",
      },
      content: p.content,
    }));
  } catch {
    // fallback to static only if DB fails
  }

  // DB posts first (newest), then static hardcoded posts
  const allPosts = [...dbPosts, ...blogPosts];
  const featured = allPosts[0];
  const rest = allPosts.slice(1);

  return (
    <main>
      <PageHeader
        title="Blog & News"
        description="Thoughts on engineering, design, and building products that scale across borders."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div className="pt-14 md:pt-20 pb-20 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Featured Post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-16 md:mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              )}
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
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
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
      </div>
    </main>
  );
}
