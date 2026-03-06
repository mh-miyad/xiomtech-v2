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
import { useProduct, useUpdateProduct } from "@/hooks/use-products";
import { Plus, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: product, isLoading } = useProduct(id);
  const updateProduct = useUpdateProduct();

  const [form, setForm] = useState<FormState | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    if (!product) return;
    setForm({
      title: product.title ?? "",
      slug: product.slug ?? "",
      tagline: product.tagline ?? "",
      excerpt: product.excerpt ?? "",
      heroImage: product.heroImage ?? "",
      logoImage: product.logoImage ?? "",
      videoUrl: product.videoUrl ?? "",
      description: product.description ?? "",
      category: product.category ?? "",
      ctaText: product.ctaText ?? "Get Started",
      ctaLink: product.ctaLink ?? "",
      metaTitle: product.metaTitle ?? "",
      metaDescription: product.metaDescription ?? "",
      metaKeywords: product.metaKeywords ?? "",
      sortOrder: product.sortOrder ?? 0,
    });

    try {
      setFeatures(product.features ? JSON.parse(product.features) : []);
    } catch {
      setFeatures([]);
    }
    try {
      setHighlights(product.highlights ? JSON.parse(product.highlights) : []);
    } catch {
      setHighlights([]);
    }
  }, [product]);

  if (isLoading || !form) {
    return (
      <div className="p-6 flex items-center justify-center py-20">
        <p className="text-muted-foreground">Loading product...</p>
      </div>
    );
  }

  const update = (field: keyof FormState, value: string | number) => {
    setForm((f) => (f ? { ...f, [field]: value } : f));
  };

  /* ── Features CRUD ── */
  const addFeature = () =>
    setFeatures((f) => [...f, { icon: "⚡", title: "", description: "" }]);
  const updateFeature = (i: number, field: keyof Feature, value: string) =>
    setFeatures((f) =>
      f.map((ft, idx) => (idx === i ? { ...ft, [field]: value } : ft)),
    );
  const removeFeature = (i: number) =>
    setFeatures((f) => f.filter((_, idx) => idx !== i));

  /* ── Highlights CRUD ── */
  const addHighlight = () =>
    setHighlights((h) => [...h, { title: "", description: "", image: "" }]);
  const updateHighlight = (i: number, field: keyof Highlight, value: string) =>
    setHighlights((h) =>
      h.map((hl, idx) => (idx === i ? { ...hl, [field]: value } : hl)),
    );
  const removeHighlight = (i: number) =>
    setHighlights((h) => h.filter((_, idx) => idx !== i));

  const saveProduct = (status: "draft" | "published") => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    updateProduct.mutate(
      {
        id: Number(id),
        ...form,
        metaTitle: form.metaTitle || form.title,
        metaDescription: form.metaDescription || form.excerpt,
        features: features.length > 0 ? features : undefined,
        highlights: highlights.length > 0 ? highlights : undefined,
        status,
      },
      {
        onSuccess: () => {
          toast.success("Product updated!");
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
          Edit Product
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => saveProduct("draft")}>
            Save Draft
          </Button>
          <Button onClick={() => saveProduct("published")}>Update</Button>
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
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Product Name</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
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
                  value={form.tagline}
                  onChange={(e) => update("tagline", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Short Description</Label>
                <Textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) => update("excerpt", e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Full Description</Label>
                <BlogEditor
                  initialContent={form.description}
                  onChange={(html) => update("description", html)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Features</CardTitle>
                <Button variant="outline" size="sm" onClick={addFeature}>
                  <Plus className="mr-1 h-4 w-4" /> Add
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No features
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
                      value={f.icon}
                      onChange={(e) => updateFeature(i, "icon", e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Title</Label>
                    <Input
                      value={f.title}
                      onChange={(e) =>
                        updateFeature(i, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Description</Label>
                    <Input
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
                <CardTitle>Highlights</CardTitle>
                <Button variant="outline" size="sm" onClick={addHighlight}>
                  <Plus className="mr-1 h-4 w-4" /> Add
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {highlights.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No highlights
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
                    placeholder="Title"
                    value={h.title}
                    onChange={(e) =>
                      updateHighlight(i, "title", e.target.value)
                    }
                  />
                  <Textarea
                    placeholder="Description"
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
          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Product Logo URL</Label>
                <Input
                  value={form.logoImage}
                  onChange={(e) => update("logoImage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Hero Image URL</Label>
                <Input
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
                <Label>Video URL</Label>
                <Input
                  value={form.videoUrl}
                  onChange={(e) => update("videoUrl", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

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
                <Label>Sort Order</Label>
                <Input
                  type="number"
                  value={form.sortOrder}
                  onChange={(e) =>
                    update("sortOrder", parseInt(e.target.value) || 0)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Text</Label>
                <Input
                  value={form.ctaText}
                  onChange={(e) => update("ctaText", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Link</Label>
                <Input
                  value={form.ctaLink}
                  onChange={(e) => update("ctaLink", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
              <CardDescription>Search engine optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Meta Title</Label>
                <Input
                  value={form.metaTitle}
                  onChange={(e) => update("metaTitle", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaTitle.length}/60
                </p>
              </div>
              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Textarea
                  value={form.metaDescription}
                  onChange={(e) => update("metaDescription", e.target.value)}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {form.metaDescription.length}/160
                </p>
              </div>
              <div className="space-y-2">
                <Label>Keywords</Label>
                <Input
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
