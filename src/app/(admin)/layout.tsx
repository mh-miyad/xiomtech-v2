"use client";

import { type ReactNode } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminNavbar />
        <main className="flex flex-col gap-4 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashLayout;
