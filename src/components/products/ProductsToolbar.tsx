import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import AddProductDialog from "@/components/products/AddProductDialog";
import { Search, X } from "lucide-react";
import type { Product } from "@/types/product";

export type StatusFilter = "all" | "active" | "inactive";

const sortItems = [
  { label: "По умолчанию", value: "default" },
  { label: "Название: А–Я", value: "nameAsc" },
  { label: "Название: Я–А", value: "nameDesc" },
  { label: "Остаток: сначала меньше", value: "stockAsc" },
  { label: "Остаток: сначала больше", value: "stockDesc" },
  { label: "Закупка: сначала дешевле", value: "purchasePriceAsc" },
  { label: "Закупка: сначала дороже", value: "purchasePriceDesc" },
  { label: "Продажа: сначала дешевле", value: "salePriceAsc" },
  { label: "Продажа: сначала дороже", value: "salePriceDesc" },
] as const;

export type SortOption = (typeof sortItems)[number]["value"];

const isSortOption = (value: string): value is SortOption =>
  sortItems.some((item) => item.value === value);

type ProductsToolbarProps = {
  search: string;
  statusFilter: StatusFilter;
  sortOption: SortOption;

  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: StatusFilter) => void;
  onSortOptionChange: (value: SortOption) => void;
  onAddProduct: (product: Product) => void;
};

export default function ProductsToolbar({
  search,
  statusFilter,
  sortOption,
  onSearchChange,
  onStatusFilterChange,
  onSortOptionChange,
  onAddProduct,
}: ProductsToolbarProps) {
  const handleStatusFilterChange = (values: string[]) => {
    const nextStatus = values[0];

    if (
      nextStatus === "all" ||
      nextStatus === "active" ||
      nextStatus === "inactive"
    ) {
      onStatusFilterChange(nextStatus);
    }
  };
  const handleSortOptionChange = (value: string | null) => {
    if (value !== null && isSortOption(value)) {
      onSortOptionChange(value);
    }
  };
  return (
    <>
      <div className="overflow-x-auto border-b p-4 sm:p-5">
        <ToggleGroup
          variant="outline"
          value={[statusFilter]}
          onValueChange={handleStatusFilterChange}
        >
          <ToggleGroupItem value="all" aria-label="Показать все товары">
            Все
          </ToggleGroupItem>
          <ToggleGroupItem value="active" aria-label="Показать активные товары">
            Активные
          </ToggleGroupItem>
          <ToggleGroupItem
            value="inactive"
            aria-label="Показать неактивные товары"
          >
            Неактивные
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-3 border-b p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <InputGroup className="w-full sm:max-w-sm">
            <InputGroupInput
              id="product-search"
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.currentTarget.value)}
              placeholder="Поиск товаров..."
            />

            <InputGroupAddon>
              <Search aria-hidden="true" />
            </InputGroupAddon>

            {search && (
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  type="button"
                  size="icon-xs"
                  aria-label="Очистить поиск"
                  onClick={() => onSearchChange("")}
                >
                  <X aria-hidden="true" />
                </InputGroupButton>
              </InputGroupAddon>
            )}
          </InputGroup>

          <Select
            value={sortOption}
            onValueChange={handleSortOptionChange}
            items={sortItems}
          >
            <SelectTrigger className="w-full text-base sm:w-60 md:text-sm">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>

            <SelectContent>
              {sortItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <AddProductDialog onAdd={onAddProduct} />
      </div>
    </>
  );
}
