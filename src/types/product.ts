export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  volume: number;
  status: "active" | "inactive";
  stock: number;
  purchasePrice: number;
  salePrice: number;
};
