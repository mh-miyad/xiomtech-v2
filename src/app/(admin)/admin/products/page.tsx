"use client";

import ProductTable from "@/components/admin/ProductTable";
import { useProducts } from "@/hooks/use-products";

export default function ProductListPage() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center py-20">
        <p className="text-muted-foreground">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ProductTable initialData={data ?? []} />
    </div>
  );
}
