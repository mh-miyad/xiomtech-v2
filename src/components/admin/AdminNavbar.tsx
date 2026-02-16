"use client";

import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

function getPageTitle(pathname: string): string {
  if (pathname === "/admin") return "Dashboard";
  if (pathname === "/admin/blog") return "All Posts";
  if (pathname === "/admin/blog/create") return "Create Post";
  if (pathname.startsWith("/admin/blog/edit")) return "Edit Post";
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
