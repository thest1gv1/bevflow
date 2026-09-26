# BevFlow

BevFlow is a learning and portfolio B2B beverage distribution management platform.

## Tech Stack

- Next.js 16
- React
- TypeScript
- App Router
- Tailwind CSS v4
- shadcn/ui
- PostgreSQL (planned)
- Drizzle ORM (planned)

## Project Goals

The project is built primarily to practice:

- React fundamentals
- Next.js
- TypeScript
- state management
- rendering behavior
- CRUD
- working with databases
- performance measurement and optimization
- Server and Client Components

Do not overengineer the project.

Build functionality incrementally.

## Development Approach

For the initial implementation:

- Prefer simple and understandable React code.
- Client Components and `useState` are acceptable while learning React behavior.
- Do not prematurely optimize components.
- Do not add `memo`, `useMemo`, or `useCallback` without a measured reason.
- Do not convert everything to Server Components prematurely.

A later optimization phase will measure rendering and performance first, then refactor appropriate parts to Server Components.

## Architecture

Use the following responsibilities:

### `app/`

Routing, pages, and layouts.

### `components/ui/`

Generic reusable UI primitives, primarily shadcn/ui components.

Do not place domain-specific components here.

### `components/products/`

Product-specific UI components such as:

- ProductTable
- ProductRow
- ProductSearch
- StatusBadge

### `features/`

Business logic organized by domain when the application becomes large enough to require it.

Do not create feature abstractions prematurely.

### `db/`

Future database layer:

- Drizzle configuration
- schemas
- migrations
- PostgreSQL access

## Products Module

The current primary module is Products.

Product fields currently include:

- id
- name
- brand
- category
- volume
- status
- stock
- purchasePrice
- salePrice

Product status:

- `active`
- `inactive`

`status` and `stock` represent different concepts.

For example:

- `status: "active"` and `stock: 0` means the product is enabled but currently out of stock.
- Do not automatically derive `status` from `stock`.

## Planned Modules

The B2B application may eventually contain:

- Dashboard
- Products
- Inventory
- Suppliers
- Purchases
- Customers
- Orders
- Analytics

Do not implement these modules unless explicitly requested.

## Data Architecture

Mock data is acceptable during the initial React learning phase.

Later the intended data flow is:

UI → Next.js server layer → Drizzle → PostgreSQL

For large datasets, do not load the entire dataset into the browser.

Filtering, sorting, searching, and pagination should eventually be handled by the server/database where appropriate.

## Server/Client Strategy

Initially, some pages may intentionally be Client Components to practice React.

Later, after functionality is complete and performance is measured, appropriate pages should be refactored toward:

ProductsPage (Server Component)
→ server-side data fetching
→ ProductsClient (Client Component)
→ interactive components

Keep client boundaries as small as practical during that later optimization phase.

## UI

Use a clean B2B/SaaS visual style:

- restrained colors
- light page background
- clear typography
- subtle borders
- reasonable whitespace
- minimal shadows
- shadcn/ui primitives where appropriate

Avoid unnecessary visual complexity.

## Working Rules

When implementing a requested change:

1. Inspect the existing implementation first.
2. Preserve the existing architecture and conventions.
3. Make the smallest reasonable change.
4. Do not implement future roadmap items unless requested.
5. Do not install additional libraries unless necessary and explicitly approved.
6. Do not rewrite working code solely for stylistic reasons.
7. Prefer code that is easy to understand while the project is in the learning phase.
8. Explain significant architectural changes before making them.