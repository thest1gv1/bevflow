"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { Product } from "@/types/product";
import { type SubmitEvent, useState } from "react";

type AddProductDialogProps = {
  onAdd: (product: Product) => void;
};

type ProductFormField =
  | "name"
  | "brand"
  | "category"
  | "volume"
  | "stock"
  | "purchasePrice"
  | "salePrice";

export default function AddProductDialog({ onAdd }: AddProductDialogProps) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    category: "",
    volume: "",
    stock: "",
    purchasePrice: "",
    salePrice: "",
  });

  const volume = Number(newProduct.volume);
  const stock = Number(newProduct.stock);
  const purchasePrice = Number(newProduct.purchasePrice);
  const salePrice = Number(newProduct.salePrice);

  const isProductFormValid =
    newProduct.name.trim() !== "" &&
    newProduct.brand.trim() !== "" &&
    newProduct.category.trim() !== "" &&
    newProduct.volume !== "" &&
    volume > 0 &&
    newProduct.stock !== "" &&
    Number.isInteger(stock) &&
    stock >= 0 &&
    newProduct.purchasePrice !== "" &&
    purchasePrice >= 0 &&
    newProduct.salePrice !== "" &&
    salePrice >= 0;

  const handleProductFieldChange = (field: ProductFormField, value: string) => {
    setNewProduct((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isProductFormValid) return;

    const createdProduct: Product = {
      id: crypto.randomUUID(),
      name: newProduct.name.trim(),
      brand: newProduct.brand.trim(),
      category: newProduct.category.trim(),
      volume,
      status: "active",
      stock,
      purchasePrice,
      salePrice,
    };

    onAdd(createdProduct);

    setNewProduct({
      name: "",
      brand: "",
      category: "",
      volume: "",
      stock: "",
      purchasePrice: "",
      salePrice: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button type="button" className="w-full md:w-auto">
            Добавить товар
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>Добавить товар</DialogTitle>
            <DialogDescription>
              Заполните данные нового товара. После сохранения он появится в
              каталоге.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-field-productName">
                Название
              </FieldLabel>
              <Input
                id="input-field-productName"
                type="text"
                value={newProduct.name}
                onChange={(event) =>
                  handleProductFieldChange("name", event.currentTarget.value)
                }
                placeholder="Введите название товара"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-productBrand">Бренд</FieldLabel>
              <Input
                id="input-field-productBrand"
                type="text"
                value={newProduct.brand}
                onChange={(event) =>
                  handleProductFieldChange("brand", event.currentTarget.value)
                }
                placeholder="Введите название бренда"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="input-field-productCategory">
                Категория
              </FieldLabel>
              <Input
                id="input-field-productCategory"
                type="text"
                value={newProduct.category}
                onChange={(event) =>
                  handleProductFieldChange(
                    "category",
                    event.currentTarget.value,
                  )
                }
                placeholder="Например, газированные напитки"
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="input-field-productVolume">
                  Объём, л
                </FieldLabel>
                <Input
                  id="input-field-productVolume"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  min="0.001"
                  step="0.001"
                  value={newProduct.volume}
                  onChange={(event) =>
                    handleProductFieldChange(
                      "volume",
                      event.currentTarget.value,
                    )
                  }
                  placeholder="0.5"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="input-field-productStock">
                  Остаток, шт.
                </FieldLabel>
                <Input
                  id="input-field-productStock"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  min="0"
                  step="1"
                  value={newProduct.stock}
                  onChange={(event) =>
                    handleProductFieldChange("stock", event.currentTarget.value)
                  }
                  placeholder="0"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="input-field-productPurchasePrice">
                  Закупочная цена, ₽
                </FieldLabel>
                <Input
                  id="input-field-productPurchasePrice"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  min="0"
                  step="0.01"
                  value={newProduct.purchasePrice}
                  onChange={(event) =>
                    handleProductFieldChange(
                      "purchasePrice",
                      event.currentTarget.value,
                    )
                  }
                  placeholder="0"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="input-field-productSalePrice">
                  Цена продажи, ₽
                </FieldLabel>
                <Input
                  id="input-field-productSalePrice"
                  type="number"
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  min="0"
                  step="0.01"
                  value={newProduct.salePrice}
                  onChange={(event) =>
                    handleProductFieldChange(
                      "salePrice",
                      event.currentTarget.value,
                    )
                  }
                  placeholder="0"
                />
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Отмена
                </Button>
              }
            />

            <Button
              type="submit"
              variant="default"
              disabled={!isProductFormValid}
            >
              Добавить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
