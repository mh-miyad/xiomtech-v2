import ArticleSchema from "@/components/schema/ArticleSchema";
import ContactCTA from "@/components/section/ContactCTA";
import FAQSection from "@/components/section/FAQSection";
import { db } from "@/database/db_index";
import { blogs as blogsTable } from "@/database/schema";
import { blogPosts, type BlogPost } from "@/data/blogs";
import { eq } from "drizzle-orm";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function getPost(slug: string): Promise<BlogPost | null> {
  // 1. Try static posts first
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) return staticPost;

  // 2. Try DB
  try {
    const [row] = await db
      .select()
      .from(blogsTable)
      .where(eq(blogsTable.slug, slug))
      .limit(1);

    if (!row) return null;

    return {
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt ?? "",
      image: row.featuredImage ?? "",
      category: row.category ?? "Other",
      date: new Date(row.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: row.readTime ?? "5 min read",
      author: {
        name: row.authorName ?? "XiomTech",
        avatar: row.authorAvatar ?? "https://i.pravatar.cc/40?img=11",
      },
      content: row.content,
    };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.image && { images: [{ url: post.image, width: 800, height: 500 }] }),
      type: "article",
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

/* Simple markdown-like content renderer */
function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mt-12 mb-4"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }

    if (block.startsWith("**") && block.includes("** — ")) {
      const parts = block.split("\n").filter(Boolean);
      return (
        <div key={i} className="space-y-3 my-6">
          {parts.map((line, j) => {
            const match = line.match(/^\*\*(.+?)\*\*\s*—\s*(.+)$/);
            if (match) {
              return (
                <div key={j}>
                  <span className="font-semibold text-gray-900">
                    {match[1]}
                  </span>
                  <span className="text-gray-600"> — {match[2]}</span>
                </div>
              );
            }
            return (
              <p key={j} className="text-gray-600 leading-relaxed">
                {line}
              </p>
            );
          })}
        </div>
      );
    }

    return (
      <p key={i} className="text-gray-600 leading-[1.85] mb-4">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const isHtml = post.content.trim().startsWith("<");
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <main>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        author={{ name: post.author.name }}
      />

      {/* Dark Hero Header */}
      <section className="relative bg-gray-950 pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8 lg:px-16 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950 to-transparent" />

        <div className="relative max-w-360 mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="size-3.5 text-gray-600" />
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="size-3.5 text-gray-600" />
            <span className="text-white font-medium truncate max-w-75">
              {post.title}
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {post.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span className="text-[11px] sm:text-sm text-gray-400">
              {post.readTime}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span className="text-[11px] sm:text-sm text-gray-400">
              {post.date}
            </span>
          </div>

          <h1 className="text-base sm:text-xl md:text-3xl  font-bold text-white font-(family-name:--font-syne) leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={44}
              height={44}
              className="rounded-full"
              unoptimized
            />
            <div>
              <p className="text-sm font-semibold text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-400">Author</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      {post.image && (
        <div className="max-w-360 mt-10 mx-auto px-5 md:px-8 lg:px-16 -mt-1 mb-12 md:mb-16">
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content + Sidebar */}
      <div className="max-w-360  mx-auto px-5 md:px-8 lg:px-16 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="text-base md:text-lg max-w-none">
              {isHtml ? (
                <div
                  className="prose prose-gray max-w-none prose-headings:font-[family-name:var(--font-syne)] prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-[1.85] prose-p:mb-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                renderContent(post.content)
              )}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {[post.category, "XiomTech", "Technology", "Digital"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-gray-50 text-xs font-medium text-gray-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Share
              </span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>
          </article>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-[340px] xl:w-[380px] shrink-0">
            {/* Author Card */}
            <div className="bg-gray-50 p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Founder & CTO, XiomTech
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Building enterprise software that scales across borders.
                Passionate about clean architecture and great UX.
              </p>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                Related Articles
              </h3>
              <div className="space-y-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-4"
                  >
                    <div className="relative w-24 h-16 shrink-0 overflow-hidden bg-gray-100">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                        {r.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors mt-0.5">
                        {r.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        {r.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-8 bg-gray-900 p-6 text-white">
              <h3 className="font-bold text-base font-[family-name:var(--font-syne)] mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                Get the latest insights on engineering, design, and product
                development delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 text-sm text-white placeholder:text-white/30 px-4 py-2.5 outline-none focus:bg-white/15 transition-colors"
                />
                <button
                  type="button"
                  className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-blue-500 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />
      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
}
