"use client";

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
import { useCreateProduct } from "@/hooks/use-products";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const CATEGORIES = [
  "POS",
  "Accounting",
  "HRM",
  "Education",
  "Healthcare",
  "Helpdesk",
  "ERP",
  "Custom Software",
];

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Highlight {
  title: string;
  description: string;
  image: string;
}

interface FormState {
  title: string;
  slug: string;
  tagline: string;
  excerpt: string;
  heroImage: string;
  logoImage: string;
  videoUrl: string;
  description: string;
  category: string;
  ctaText: string;
  ctaLink: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  sortOrder: number;
}

const initialForm: FormState = {
  title: "",
  slug: "",
  tagline: "",
  excerpt: "",
  heroImage: "",
  logoImage: "",
  videoUrl: "",
  description: "",
  category: "",
  ctaText: "Get Started",
  ctaLink: "",
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  sortOrder: 0,
};

export default function CreateProductPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const createProduct = useCreateProduct();

  const update = (field: keyof FormState, value: string | number) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleTitleChange = (val: string) => {
    setForm((f) => ({
      ...f,
      title: val,
      slug: slugify(val),
      metaTitle: f.metaTitle || val,
    }));
  };

  /* ── Features CRUD ── */
  const addFeature = () =>
    setFeatures((f) => [...f, { icon: "⚡", title: "", description: "" }]);

  const updateFeature = (i: number, field: keyof Feature, value: string) =>
    setFeatures((f) => f.map((ft, idx) => (idx === i ? { ...ft, [field]: value } : ft)));

  const removeFeature = (i: number) =>
    setFeatures((f) => f.filter((_, idx) => idx !== i));

  /* ── Highlights CRUD ── */
  const addHighlight = () =>
    setHighlights((h) => [...h, { title: "", description: "", image: "" }]);

  const updateHighlight = (i: number, field: keyof Highlight, value: string) =>
    setHighlights((h) => h.map((hl, idx) => (idx === i ? { ...hl, [field]: value } : hl)));

  const removeHighlight = (i: number) =>
    setHighlights((h) => h.filter((_, idx) => idx !== i));

  const saveProduct = (status: "draft" | "published") => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    createProduct.mutate(
      {
        ...form,
        slug: form.slug || slugify(form.title),
        metaTitle: form.metaTitle || form.title,
        metaDescription: form.metaDescription || form.excerpt,
        features: features.length > 0 ? features : undefined,
        highlights: highlights.length > 0 ? highlights : undefined,
        status,
      },
      {
        onSuccess: () => {
          toast.success("Product created successfully!");
          router.push("/admin/products");
        },
        onError: (err) => {
          toast.error(err.message);
        },
      },
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold font-(family-name:--font-syne) tracking-tight">
          Create Product
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => saveProduct("draft")}>
            Save Draft
          </Button>
          <Button onClick={() => saveProduct("published")}>Publish</Button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Info</CardTitle>
              <CardDescription>Product name and description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Product Name</Label>
                <Input
                  id="title"
                  placeholder="e.g. XiomPOS"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    /products/
                  </span>
                  <Input
                    id="slug"
                    placeholder="product-url-slug"
                    value={form.slug}
                    onChange={(e) => update("slug", e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  placeholder="One-line description"
                  value={form.tagline}
                  onChange={(e) => update("tagline", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Short Description</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief product description for listing cards..."
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Full Description</Label>
                <BlogEditor
                  onChange={(html) => update("description", html)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Features</CardTitle>
                  <CardDescription>
                    Key product features with icons
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addFeature}>
                  <Plus className="mr-1 h-4 w-4" /> Add Feature
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No features added yet
                </p>
              )}
              {features.map((f, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr_1fr_auto] gap-3 items-start"
                >
                  <div className="space-y-1">
                    <Label className="text-xs">Icon</Label>
                    <Input
                      placeholder="⚡"
                      value={f.icon}
                      onChange={(e) => updateFeature(i, "icon", e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Title</Label>
                    <Input
                      placeholder="Feature title"
                      value={f.title}
                      onChange={(e) =>
                        updateFeature(i, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Description</Label>
                    <Input
                      placeholder="Short description"
                      value={f.description}
                      onChange={(e) =>
                        updateFeature(i, "description", e.target.value)
                      }
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-5 text-destructive"
                    onClick={() => removeFeature(i)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Highlights</CardTitle>
                  <CardDescription>
                    Why use this product — key selling points
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addHighlight}>
                  <Plus className="mr-1 h-4 w-4" /> Add Highlight
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {highlights.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No highlights added yet
                </p>
              )}
              {highlights.map((h, i) => (
                <div key={i} className="space-y-3 p-4 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">
                      Highlight {i + 1}
                    </Label>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive h-7 w-7"
                      onClick={() => removeHighlight(i)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Highlight title"
                    value={h.title}
                    onChange={(e) =>
                      updateHighlight(i, "title", e.target.value)
                    }
                  />
                  <Textarea
                    placeholder="Why this matters..."
                    value={h.description}
                    onChange={(e) =>
                      updateHighlight(i, "description", e.target.value)
                    }
                    rows={2}
                  />
                  <Input
                    placeholder="Image URL (optional)"
                    value={h.image}
                    onChange={(e) =>
                      updateHighlight(i, "image", e.target.value)
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right — Settings */}
        <div className="space-y-6">
          {/* Images & Video */}
          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="logo-image">Product Logo URL</Label>
                <Input
                  id="logo-image"
                  placeholder="/xiom/xiompos.png"
                  value={form.logoImage}
                  onChange={(e) => update("logoImage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-image">Hero Image URL</Label>
                <Input
                  id="hero-image"
                  placeholder="https://..."
                  value={form.heroImage}
                  onChange={(e) => update("heroImage", e.target.value)}
                />
              </div>
              {form.heroImage && (
                <div className="rounded-md border overflow-hidden">
                  <img
                    src={form.heroImage}
                    alt="Hero preview"
                    className="w-full object-cover aspect-video"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="video-url">Video URL</Label>
                <Input
                  id="video-url"
                  placeholder="YouTube or Vimeo URL"
                  value={form.videoUrl}
                  onChange={(e) => update("videoUrl", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Supports YouTube & Vimeo embed URLs
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Product Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
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
                <Label htmlFor="sort-order">Sort Order</Label>
                <Input
                  id="sort-order"
                  type="number"
                  value={form.sortOrder}
                  onChange={(e) =>
                    update("sortOrder", parseInt(e.target.value) || 0)
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Lower numbers appear first
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta-text">CTA Button Text</Label>
                <Input
                  id="cta-text"
                  placeholder="Get Started"
                  value={form.ctaText}
                  onChange={(e) => update("ctaText", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta-link">CTA Link</Label>
                <Input
                  id="cta-link"
                  placeholder="https://wa.me/..."
                  value={form.ctaLink}
                  onChange={(e) => update("ctaLink", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>Search engine optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  placeholder="SEO title"
                  value={form.metaTitle}
                  onChange={(e) => update("metaTitle", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaTitle.length}/60
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-desc">Meta Description</Label>
                <Textarea
                  id="meta-desc"
                  placeholder="SEO description..."
                  value={form.metaDescription}
                  onChange={(e) => update("metaDescription", e.target.value)}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaDescription.length}/160
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-keywords">Keywords</Label>
                <Input
                  id="meta-keywords"
                  placeholder="keyword1, keyword2"
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
