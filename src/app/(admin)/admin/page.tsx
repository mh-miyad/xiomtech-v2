"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, PenSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type AdminBlogPost, getAdminPosts } from "@/lib/blog-store";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);

  useEffect(() => {
    setPosts(getAdminPosts());
  }, []);

  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  const recentPosts = posts.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold font-(family-name:--font-syne) tracking-tight">
          Dashboard
        </h1>
        <Button asChild>
          <Link href="/admin/blog/create">
            <PenSquare className="mr-2 h-4 w-4" />
            Create Post
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{posts.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{published}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <PenSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{drafts}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
          <CardDescription>Your latest blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          {recentPosts.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No posts yet. Create your first post!
            </p>
          ) : (
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between rounded-md border border-border p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">
                      {post.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.date} &middot; {post.category}
                    </p>
                  </div>
                  <span
                    className={`ml-3 text-xs px-2 py-0.5 rounded-full ${
                      post.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
