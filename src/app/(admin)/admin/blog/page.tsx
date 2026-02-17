"use client";

import BlogTable from "@/components/admin/BlogTable";
import { useBlogs } from "@/hooks/use-blogs";

export default function BlogListPage() {
  const { data, isLoading } = useBlogs();

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center py-20">
        <p className="text-muted-foreground">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <BlogTable initialData={data ?? []} />
    </div>
  );
}
