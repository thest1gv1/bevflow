import { db } from "@/db";
import { productsTable } from "@/db/schema";
import ProductsClient from "./ProductsClient";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  console.time("products query");
  const products = await db.select().from(productsTable);
  console.timeEnd("products query");

  return <ProductsClient initialProducts={products} />;
}
