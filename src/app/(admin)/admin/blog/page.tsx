import BlogTable from "@/components/admin/BlogTable";
import { db } from "@/database/db_index";
import { blogs } from "@/database/schema";
import { desc } from "drizzle-orm";
// We will create this next

export default async function BlogListPage() {
  // 1. Fetch data on the server
  const allBlogs = await db.select().from(blogs).orderBy(desc(blogs.createdAt));

  // 2. Pass it to the Client Component
  return (
    <div className="p-6">
      <BlogTable initialData={allBlogs} />
    </div>
  );
}
