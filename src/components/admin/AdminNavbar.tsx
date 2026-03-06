"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

function getPageTitle(pathname: string): string {
  if (pathname === "/admin") return "Dashboard";
  if (pathname === "/admin/blog") return "All Posts";
  if (pathname === "/admin/blog/create") return "Create Post";
  if (pathname.startsWith("/admin/blog/edit")) return "Edit Post";
  if (pathname === "/admin/products") return "All Products";
  if (pathname === "/admin/products/create") return "Create Product";
  if (pathname.startsWith("/admin/products/edit")) return "Edit Product";
  return "Admin";
}

function AdminNavbar() {
  const pathname = usePathname();

  return (
    <header className="flex h-14 shrink-0 items-center border-b border-border bg-background px-4 gap-3">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-5" />
      <span className="text-sm font-medium text-muted-foreground">
        {getPageTitle(pathname)}
      </span>
    </header>
  );
}

export default AdminNavbar;
