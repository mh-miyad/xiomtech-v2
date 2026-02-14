import ContactCTA from "@/components/section/ContactCTA";
import FAQSection from "@/components/section/FAQSection";
import { blogPosts } from "@/data/blogs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 500 }],
      type: "article",
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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <main>
      {/* Hero header */}
      <div className="pt-28 pb-10 px-5 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 12H5m0 0l7 7m-7-7l7-7"
            />
          </svg>
          Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] sm:text-base font-semibold text-blue-600 uppercase tracking-wider">
            {post.category}
          </span>
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="text-[11px] sm:text-base text-gray-400">
            {post.readTime}
          </span>
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="text-[11px] sm:text-base text-gray-400">
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight max-w-[1440px] ">
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
            <p className="text-sm font-semibold text-gray-900">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-400">Author</p>
          </div>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="max-w-[1440px]  mx-auto px-5 md:px-8 lg:px-16 mb-12 md:mb-16">
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

      {/* Content + Sidebar */}
      <div className="max-w-[1440px]  mx-auto px-5 md:px-8 lg:px-16 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="text-base md:text-lg max-w-none">
              {renderContent(post.content)}
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
