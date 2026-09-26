CREATE TYPE "public"."product_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"brand" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"volume" numeric(6, 3) NOT NULL,
	"status" "product_status" DEFAULT 'active' NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"purchase_price" numeric(10, 2) NOT NULL,
	"sale_price" numeric(10, 2) NOT NULL
);
