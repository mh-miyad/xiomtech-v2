"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const BLOGS_KEY = ["blogs"];

// ─── Fetch all blogs ───
export function useBlogs() {
  return useQuery({
    queryKey: BLOGS_KEY,
    queryFn: async () => {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    },
  });
}

// ─── Fetch single blog by id ───
export function useBlog(id: string | number) {
  return useQuery({
    queryKey: [...BLOGS_KEY, String(id)],
    queryFn: async () => {
      const res = await fetch(`/api/blogs/${id}`);
      if (!res.ok) throw new Error("Post not found");
      return res.json();
    },
    enabled: !!id,
  });
}

// ─── Create blog ───
export function useCreateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create blog");
      }
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: BLOGS_KEY }),
  });
}

// ─── Update blog ───
export function useUpdateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      ...data
    }: Record<string, unknown> & { id: number | string }) => {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to update blog");
      }
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: BLOGS_KEY }),
  });
}

// ─── Delete blog ───
export function useDeleteBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: number | string) => {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete blog");
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: BLOGS_KEY }),
  });
}
