import type { Product } from "@/types/product";
import ProductRow from "./ProductRow";

const columns = [
  "Название",
  "Бренд",
  "Категория",
  "Объём",
  "Статус",
  "Остаток",
  "Закупка",
  "Продажа",
];

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table className="w-full text-left">
      <thead className="bg-muted/50">
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="px-4 py-3 text-sm font-medium text-muted-foreground"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}
