import type { Product } from "@/types/product";
import StatusBadge from "./StatusBadge";

export default function ProductRow({ product }: { product: Product }) {
  return (
    <tr className="border-b transition-colors last:border-b-0 hover:bg-muted/40">
      <td className="whitespace-nowrap py-3 pl-5 pr-4 text-sm font-medium">
        <span className="block truncate" title={product.name}>
          {product.name}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-muted-foreground">
        <span className="block truncate" title={product.brand}>
          {product.brand}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm">
        <span className="block truncate" title={product.category}>
          {product.category}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-3  text-sm tabular-nums">
        {product.volume} л
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm">
        <StatusBadge status={product.status} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium tabular-nums">
        {product.stock}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-muted-foreground tabular-nums">
        {product.purchasePrice} ₽
      </td>
      <td className="whitespace-nowrap py-3 pl-4 pr-5 text-sm font-medium tabular-nums">
        {product.salePrice} ₽
      </td>
    </tr>
  );
}
