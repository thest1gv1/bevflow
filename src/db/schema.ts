import {
  integer,
  numeric,
  pgEnum,
  pgTable,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const productStatusEnum = pgEnum("product_status", [
  "active",
  "inactive",
]);

export const productsTable = pgTable("products", {
  id: uuid().defaultRandom().primaryKey(),

  name: varchar({ length: 255 }).notNull(),

  brand: varchar({ length: 255 }).notNull(),

  category: varchar({ length: 255 }).notNull(),

  volume: numeric({
    precision: 6,
    scale: 3,
    mode: "number",
  }).notNull(),

  status: productStatusEnum().default("active").notNull(),

  stock: integer().default(0).notNull(),

  purchasePrice: numeric("purchase_price", {
    precision: 10,
    scale: 2,
    mode: "number",
  }).notNull(),

  salePrice: numeric("sale_price", {
    precision: 10,
    scale: 2,
    mode: "number",
  }).notNull(),
});
