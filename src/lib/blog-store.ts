import { type BlogPost, blogPosts } from "@/data/blogs";

export interface AdminBlogPost extends BlogPost {
  id: string;
  status: "draft" | "published";
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  featuredImageAlt: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "xiomtech_admin_posts";

function seedFromDefaults(): AdminBlogPost[] {
  const now = new Date().toISOString();
  return blogPosts.map((post, i) => ({
    ...post,
    id: `seed-${i}-${Date.now()}`,
    status: "published" as const,
    metaTitle: post.title,
    metaDescription: post.excerpt,
    metaKeywords: post.category.toLowerCase(),
    featuredImageAlt: post.title,
    createdAt: now,
    updatedAt: now,
  }));
}

export function getAdminPosts(): AdminBlogPost[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = seedFromDefaults();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
  return JSON.parse(raw) as AdminBlogPost[];
}

export function saveAdminPost(post: AdminBlogPost): void {
  const posts = getAdminPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.unshift(post);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deleteAdminPost(id: string): void {
  const posts = getAdminPosts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function getAdminPostById(id: string): AdminBlogPost | undefined {
  return getAdminPosts().find((p) => p.id === id);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
