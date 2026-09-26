import type { Product } from "@/types/product";
import ProductRow from "./ProductRow";

const columns = [
  { label: "Название" },
  { label: "Бренд" },
  { label: "Категория" },
  { label: "Объём" },
  { label: "Статус" },
  { label: "Остаток" },
  { label: "Закупка" },
  { label: "Продажа" },
] as const;

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table className="w-full min-w-230 table-fixed text-left">
      <colgroup>
        <col className="w-[18%]" />
        <col className="w-[11%]" />
        <col className="w-[20%]" />
        <col className="w-[9%]" />
        <col className="w-[14%]" />
        <col className="w-[9%]" />
        <col className="w-[10%]" />
        <col className="w-[9%]" />
      </colgroup>
      <thead className="bg-muted/60">
        <tr>
          {columns.map((column) => (
            <th
              key={column.label}
              scope="col"
              className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground first:pl-5 last:pr-5 "
            >
              {column.label}
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
