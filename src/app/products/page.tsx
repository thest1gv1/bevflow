import ProductTable from "@/components/ui/products/ProductTable";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="p-8 min-h-screen bg-muted/30">
      <input
        type="text"
        placeholder="Поиск товаров..."
        className="h-10 w-80 rounded-md border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
      />
      <ProductTable products={products} />
    </main>
  );
}
