import type { Product } from "@/types/product";
import StatusBadge from "./StatusBadge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-lg border bg-background p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold">{product.name}</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {product.brand}
          </p>
        </div>

        <StatusBadge status={product.status} />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {product.category} · {product.volume} л
      </p>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-t pt-3">
        <div>
          <dt className="text-xs text-muted-foreground">Остаток</dt>
          <dd className="mt-1 text-sm font-medium tabular-nums">
            {product.stock}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Закупка</dt>
          <dd className="mt-1 text-sm tabular-nums">
            {product.purchasePrice} ₽
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Продажа</dt>
          <dd className="mt-1 text-sm font-medium tabular-nums">
            {product.salePrice} ₽
          </dd>
        </div>
      </dl>
    </article>
  );
}
