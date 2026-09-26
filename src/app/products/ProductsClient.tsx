"use client";

import ProductCard from "@/components/products/ProductCard";
import ProductTable from "@/components/products/ProductTable";

import { SearchX } from "lucide-react";
import { useState } from "react";

import type { Product } from "@/types/product";

import ProductsToolbar, {
  type SortOption,
  type StatusFilter,
} from "@/components/products/ProductsToolbar";

type ProductsClientProps = {
  initialProducts: Product[];
};

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
  const [productList, setProductList] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredProducts = productList.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.brand.toLowerCase().includes(normalizedSearch);

    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "nameAsc":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "nameDesc":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "stockAsc":
      sortedProducts.sort((a, b) => a.stock - b.stock);
      break;

    case "stockDesc":
      sortedProducts.sort((a, b) => b.stock - a.stock);
      break;

    case "purchasePriceAsc":
      sortedProducts.sort((a, b) => a.purchasePrice - b.purchasePrice);
      break;

    case "purchasePriceDesc":
      sortedProducts.sort((a, b) => b.purchasePrice - a.purchasePrice);
      break;

    case "salePriceAsc":
      sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
      break;

    case "salePriceDesc":
      sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
      break;

    default:
      break;
  }

  const handleAddProduct = (product: Product) => {
    setProductList((currentProducts) => [...currentProducts, product]);
  };

  return (
    <main className="min-h-screen bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Товары
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Управление ассортиментом, ценами и остатками
          </p>
        </header>

        <section
          aria-label="Каталог товаров"
          className="overflow-hidden rounded-xl border bg-card shadow-sm"
        >
          <ProductsToolbar
            search={search}
            statusFilter={statusFilter}
            sortOption={sortOption}
            onSearchChange={setSearch}
            onStatusFilterChange={setStatusFilter}
            onSortOptionChange={setSortOption}
            onAddProduct={handleAddProduct}
          />

          {sortedProducts.length > 0 ? (
            <>
              <div className="space-y-3 p-4 lg:hidden">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="hidden overflow-x-auto lg:block">
                <ProductTable products={sortedProducts} />
              </div>
            </>
          ) : (
            <div
              role="status"
              className="flex min-h-52 flex-col items-center justify-center px-4 py-12 text-center"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
                <SearchX
                  aria-hidden="true"
                  className="size-5 text-muted-foreground"
                />
              </div>

              <p className="text-sm font-medium">Товары не найдены</p>

              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбранный статус
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
