"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogEditor from "@/components/common/Blogeditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  type AdminBlogPost,
  getAdminPostById,
  saveAdminPost,
  slugify,
} from "@/lib/blog-store";

const CATEGORIES = [
  "SaaS",
  "Engineering",
  "AI & ML",
  "Development",
  "Design",
  "Industry",
  "Other",
];

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
  content: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<AdminBlogPost | null>(null);
  const [form, setForm] = useState<FormState | null>(null);

  useEffect(() => {
    const existing = getAdminPostById(id);
    if (!existing) {
      router.push("/admin/blog");
      return;
    }
    setPost(existing);
    setForm({
      title: existing.title,
      slug: existing.slug,
      excerpt: existing.excerpt,
      featuredImage: existing.image,
      featuredImageAlt: existing.featuredImageAlt || "",
      category: existing.category,
      metaTitle: existing.metaTitle || "",
      metaDescription: existing.metaDescription || "",
      metaKeywords: existing.metaKeywords || "",
      authorName: existing.author.name,
      authorAvatar: existing.author.avatar,
      readTime: existing.readTime,
      content: existing.content || "",
    });
  }, [id, router]);

  if (!form || !post) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => (f ? { ...f, [field]: value } : f));
  };

  const handleTitleChange = (val: string) => {
    setForm((f) =>
      f
        ? {
            ...f,
            title: val,
            slug: slugify(val),
            metaTitle: f.metaTitle || val,
          }
        : f,
    );
  };

  const savePost = (status: "draft" | "published") => {
    if (!form.title.trim()) return;

    const now = new Date();
    const updated: AdminBlogPost = {
      ...post,
      title: form.title,
      slug: form.slug || slugify(form.title),
      excerpt: form.excerpt,
      image: form.featuredImage,
      category: form.category || "Other",
      date: post.date,
      readTime: form.readTime || "5 min read",
      author: {
        name: form.authorName || "Admin",
        avatar: form.authorAvatar,
      },
      content: form.content,
      status,
      metaTitle: form.metaTitle || form.title,
      metaDescription: form.metaDescription || form.excerpt,
      metaKeywords: form.metaKeywords,
      featuredImageAlt: form.featuredImageAlt,
      updatedAt: now.toISOString(),
    };

    saveAdminPost(updated);
    router.push("/admin/blog");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold font-(family-name:--font-syne) tracking-tight">
          Edit Post
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => savePost("draft")}>
            Save as Draft
          </Button>
          <Button onClick={() => savePost("published")}>
            Update & Publish
          </Button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>Edit your blog post content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter post title..."
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <Input
                    id="slug"
                    placeholder="post-url-slug"
                    value={form.slug}
                    onChange={(e) => update("slug", e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Description</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief description of the post..."
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Content</Label>
                <BlogEditor
                  initialContent={form.content}
                  onChange={(html) => update("content", html)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right - Settings */}
        <div className="space-y-6">
          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="featured-image">Image URL</Label>
                <Input
                  id="featured-image"
                  placeholder="https://example.com/image.jpg"
                  value={form.featuredImage}
                  onChange={(e) => update("featuredImage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image-alt">Alt Text</Label>
                <Input
                  id="image-alt"
                  placeholder="Describe the image for accessibility..."
                  value={form.featuredImageAlt}
                  onChange={(e) => update("featuredImageAlt", e.target.value)}
                />
              </div>
              {form.featuredImage && (
                <div className="rounded-md border border-border overflow-hidden">
                  <img
                    src={form.featuredImage}
                    alt={form.featuredImageAlt || "Preview"}
                    className="w-full object-cover aspect-video"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Post Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => update("category", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author-name">Author Name</Label>
                <Input
                  id="author-name"
                  value={form.authorName}
                  onChange={(e) => update("authorName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author-avatar">Author Avatar URL</Label>
                <Input
                  id="author-avatar"
                  placeholder="https://example.com/avatar.jpg"
                  value={form.authorAvatar}
                  onChange={(e) => update("authorAvatar", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="read-time">Read Time</Label>
                <Input
                  id="read-time"
                  placeholder="5 min read"
                  value={form.readTime}
                  onChange={(e) => update("readTime", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>
                Search engine optimization settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  placeholder="SEO title (defaults to post title)"
                  value={form.metaTitle}
                  onChange={(e) => update("metaTitle", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaTitle.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-desc">Meta Description</Label>
                <Textarea
                  id="meta-desc"
                  placeholder="Brief SEO description..."
                  value={form.metaDescription}
                  onChange={(e) => update("metaDescription", e.target.value)}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaDescription.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-keywords">Meta Keywords</Label>
                <Input
                  id="meta-keywords"
                  placeholder="keyword1, keyword2, keyword3"
                  value={form.metaKeywords}
                  onChange={(e) => update("metaKeywords", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
