import { Product } from "@/types/product";
import StatusBadge from "./StatusBadge";

export default function ProductRow({ product }: { product: Product }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50">
      <td className="px-4 py-4 text-sm font-medium">{product.name}</td>
      <td className="px-4 py-4 text-sm">{product.brand}</td>
      <td className="px-4 py-4 text-sm">{product.category}</td>
      <td className="px-4 py-4 text-sm">{product.volume} л</td>
      <td className="px-4 py-4 text-sm">
        <StatusBadge status={product.status} />
      </td>
      <td className="px-4 py-4 text-sm">{product.stock}</td>
      <td className="px-4 py-4 text-sm">{product.purchasePrice} ₽</td>
      <td className="px-4 py-4 text-sm ">{product.salePrice} ₽</td>
    </tr>
  );
}
