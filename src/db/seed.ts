import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { productsTable } from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle({ client: pool });

const seedProducts: (typeof productsTable.$inferInsert)[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Coca-Cola Classic",
    brand: "Coca-Cola",
    category: "Газированные напитки",
    volume: 0.5,
    status: "active",
    stock: 124,
    purchasePrice: 65,
    salePrice: 89,
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    name: "Coca-Cola Zero",
    brand: "Coca-Cola",
    category: "Газированные напитки",
    volume: 0.5,
    status: "active",
    stock: 86,
    purchasePrice: 65,
    salePrice: 89,
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    name: "Red Bull Energy Drink",
    brand: "Red Bull",
    category: "Энергетики",
    volume: 0.25,
    status: "active",
    stock: 48,
    purchasePrice: 115,
    salePrice: 159,
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    name: "Lipton Lemon",
    brand: "Lipton",
    category: "Холодный чай",
    volume: 0.5,
    status: "active",
    stock: 73,
    purchasePrice: 58,
    salePrice: 82,
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    name: "Lipton Green Tea",
    brand: "Lipton",
    category: "Холодный чай",
    volume: 0.5,
    status: "inactive",
    stock: 0,
    purchasePrice: 58,
    salePrice: 82,
  },
  {
    id: "00000000-0000-4000-8000-000000000006",
    name: "BonAqua",
    brand: "BonAqua",
    category: "Вода",
    volume: 0.5,
    status: "active",
    stock: 215,
    purchasePrice: 32,
    salePrice: 49,
  },
  {
    id: "00000000-0000-4000-8000-000000000007",
    name: "Rich Orange",
    brand: "Rich",
    category: "Соки",
    volume: 1,
    status: "active",
    stock: 64,
    purchasePrice: 105,
    salePrice: 149,
  },
  {
    id: "00000000-0000-4000-8000-000000000008",
    name: "Rich Apple",
    brand: "Rich",
    category: "Соки",
    volume: 1,
    status: "active",
    stock: 51,
    purchasePrice: 105,
    salePrice: 149,
  },
  {
    id: "00000000-0000-4000-8000-000000000009",
    name: "Burn Original",
    brand: "Burn",
    category: "Энергетики",
    volume: 0.449,
    status: "active",
    stock: 39,
    purchasePrice: 92,
    salePrice: 129,
  },
  {
    id: "00000000-0000-4000-8000-000000000010",
    name: "Sprite",
    brand: "Sprite",
    category: "Газированные напитки",
    volume: 0.5,
    status: "inactive",
    stock: 12,
    purchasePrice: 62,
    salePrice: 85,
  },
];

async function seed() {
  const insertedProducts = await db
    .insert(productsTable)
    .values(seedProducts)
    .onConflictDoNothing()
    .returning({ id: productsTable.id });

  console.log(`Seed complete: ${insertedProducts.length} products inserted.`);
}

seed()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
