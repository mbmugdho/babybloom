# BabyBloom – Baby Products E‑Commerce (Bangladesh)

A full‑stack e‑commerce application for curated baby products, built with **Next.js App Router**, **MongoDB**, and a custom pastel/glassmorphism UI. Designed as a portfolio‑grade project and a realistic store experience for parents in Bangladesh.

**Live demo:** https://babybloom-ltd.vercel.app/

---

## ✨ Features

### 🏠 Landing Page

Multi‑section marketing page:

- Hero carousel (Swiper) with CTA
- Key value props (Free shipping, Safety, Quality, Support)
- Shop by **Category** cards
- **Best Sellers** (from real data, `isBestSeller`)
- **New Arrivals** (from real data, `isNewArrival`)
- “Shop by age / need” chips (links into `/products` with query params)
- “Why choose us” trust section
- Coverflow **Testimonials** carousel (Swiper coverflow)
- Newsletter signup (dummy form with success feedback)
- FAQ accordion (expandable questions)
- Micro “Store Stats” strip (72+ products, 6 categories, 4.8★, etc.)
- Fully responsive and consistent with the BabyBloom brand palette

---

### 🛍 Product & Category Experience

#### Product Listing (`/products`)

- Grid of all products with **pagination** (`PAGE_SIZE=12`)
- Filters:
  - By category (`?category=category-slug`)
  - Sort:
    - Latest (default)
    - Price low → high (`?sort=price-asc`)
    - Price high → low (`?sort=price-desc`)
- Uses MongoDB directly on server components for performance & SSR

#### Product Details (`/products/[id-or-slug]`)

- Full product page:
  - Hero image (no cropping, `object-contain`)
  - Gallery thumbnails
  - Price / original price / discount
  - Stock and age range badges
  - Rating & reviews count
  - Short & long description
  - Features list
  - How to use (steps)
  - Safety information
  - Ingredients / materials chips
  - Tags
- CTA buttons:
  - “Go back”
  - “Add to cart” (local cart, then redirect to `/cart`)

> Product can be loaded by `productId`, `slug`, or Mongo `_id` via the API and server logic.

#### Categories (`/categories` + `/categories/[slug]`)

- `/categories`:
  - Grid of active categories with images
  - Glassmorphism cards and badges
- `/categories/[slug]`:
  - Category hero (name, description, product count)
  - All products in that category using the same product card design

---

### 🛒 Cart & Checkout

#### Cart (`/cart`)

- Local cart (stored in `localStorage` under `babybloom_cart`)
- Add from product page; cart displays:
  - Product name, brand, image
  - Line total (price × quantity)
  - Quantity controls (**+ / −**)
  - Remove item
  - Clear cart
  - “Continue shopping” button
- “Proceed to checkout” button → `/checkout`
- Empty state with CTA back to `/products`

**Cart lifecycle:**

- Cleared on **Confirm order**
- Cleared on **Logout**
- Cleared on **page refresh / tab close** (via `beforeunload` hook)  
  → For portfolio/demo purposes, cart items are not persisted across sessions.

#### Checkout (`/checkout`)

- **Protected route** (requires login)
- Delivery form:
  - Full name
  - Phone
  - Address
  - City
  - Postal code (optional)
  - Notes (optional)
- Order summary (items and totals)
- “Confirm order”:
  - Validates required fields
  - Simulates placing an order (no DB persisted orders in this version)
  - Shows a toast “Order confirmed”
  - Clears cart
  - Redirects to `/products`

---

### 🔐 Authentication & Authorization

- JWT‑based auth using `HTTP‑only` cookie (`auth_token`)
- Backend:
  - `/api/auth`:
    - `POST` – login
    - `GET` – check auth / current user
    - `DELETE` – logout
  - `/api/register` – user registration (role=`user`)
- Frontend:
  - `AuthContext` + `useAuth` hook
  - Login page (`/login`) with:
    - Email/password form
    - Redirect logic with `callback` parameter (e.g., `/checkout`)
    - Demo admin button that fills admin credentials
  - Register page (`/register`) to create normal users
- Logged‑in navbar:
  - Shows greeting + Logout
  - Hides Cart for admins

#### Admin Detection

- Admins are determined by:
  - `role` field in user document **AND/OR**
  - Email present in `ADMIN_EMAILS` environment variable
- `/api/auth` normalizes `role` using `ADMIN_EMAILS` on login/check:
  - If email in `ADMIN_EMAILS` → `role: 'admin'`

#### Protected Routes (middleware)

`middleware.js` uses `jose` to verify the JWT on:

- `/checkout/*` – must be logged in (user or admin)
- `/add-product/*` – must be admin
- `/admin/*` – must be admin

Non‑admin or unauthenticated users are redirected to `/login?callback=...` or `/`.

---

### 🧑‍💻 Admin Dashboard & Add Product

#### Admin Dashboard (`/admin`) – “Cockpit”

- Admin‑only (protected by middleware + admin role/email)
- Overview:

  - Total products
  - Active categories
  - Registered users
  - Best sellers count

- Revenue cockpit (computed from products):

  - Potential gross (original price × stock)
  - Potential net (current price × stock)
  - Discount value
  - Average discount %
  - Stacked horizontal bar chart (Recharts) for net vs discount

- Top categories chart:
  - Bar chart of **top 4** categories by product count
- Product flags:
  - Pie chart of Best sellers / Featured / New arrivals
- User roles:
  - Pie chart of Admins vs Users
- Shortcuts:
  - “Add new product” → `/add-product`
  - “View store” → `/products`

#### Add Product (`/add-product`)

- Admin‑only route
- Form fields matching Product schema:

  - Name, brand
  - Price, original price, discount (auto‑calculate if omitted)
  - Category selection (`categoryId` + `categorySlug`)
  - Age range
  - Main image URL + additional images
  - Short & long description
  - Features (one per line)
  - How to use (one per line)
  - Safety Info
  - Ingredients (comma‑separated)
  - Tags (comma‑separated)
  - Flags:
    - `isFeatured`
    - `isBestSeller`
    - `isNewArrival`

- “Back to dashboard” button
- On submit:
  - Sends `POST /api/products`
  - Shows toast on success
  - Redirects to `/admin`

---

### 📄 Static & Support Pages

- `/about` – about BabyBloom concept
- `/contact` – contact form with **EmailJS** integration
- `/privacy` – privacy policy (template content)
- `/terms` – terms of service (template content)

Contact form sends an email via EmailJS using:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Custom EmailJS template provided in HTML (BabyBloom‑styled).

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router, latest 15/16)
- **Language:** JavaScript (ESNext)
- **Styling:** Tailwind CSS (+ a bit of DaisyUI utilities), custom glassmorphism theme
- **DB:** MongoDB Atlas
- **ORM:** Mongoose
- **Auth:** JWT (`jsonwebtoken` on server, `jose` in middleware)
- **State:** React Context (`AuthContext`), localStorage for cart
- **Animations:** Framer Motion
- **Carousels:** Swiper.js (hero + testimonials coverflow)
- **Charts:** Recharts (admin dashboard)
- **Email:** EmailJS (`@emailjs/browser`)
- **Deployment:** Vercel (manual CLI deploy)

---

## 🗄 Data Model & API

### Models (`/models`)

- `Product`:
  - `productId`, `name`, `slug`, `brand`
  - `price`, `originalPrice`, `discount`
  - `category`, `categorySlug`, `ageRange`
  - `rating`, `reviewsCount`
  - `inStock`, `stockQuantity`
  - `image`, `images`
  - `shortDescription`, `longDescription`
  - `features`, `howToUse`, `safetyInfo`, `ingredients`, `tags`
  - `isFeatured`, `isBestSeller`, `isNewArrival`
- `Category`:
  - `categoryId`, `name`, `slug`, `description`, `image`, `productCount`, `isActive`
- `User`:
  - `name`, `email`, `password` (hashed), `role` (`user` | `admin`), `isActive`

### API Routes (`/app/api`)

- **Products**
  - `GET /api/products`
    - Query:
      - `featured=true`
      - `bestSeller=true`
      - `newArrival=true`
      - `category=category-slug`
      - `limit=n`
  - `POST /api/products` – create product (admin use)
  - `GET /api/products/[id]` – get single product by `productId` / `slug` / `_id`
  - `PUT /api/products/[id]` – update
  - `DELETE /api/products/[id]` – delete

- **Categories**
  - `GET /api/categories` – all active categories
  - `POST /api/categories` – create category
  - `GET /api/categories/[slug]` – category + products

- **Auth**
  - `POST /api/auth` – login, sets `auth_token` cookie
  - `GET /api/auth` – current user
  - `DELETE /api/auth` – logout

- **Register**
  - `POST /api/register` – create new user (role=`user`)

- **Seed**
  - `GET /api/seed` – seed categories, products, admin user (for initial setup/demo)

---

## 🧪 Admin Demo Credentials

To explore the admin side:

- **Email:** `admin@babybloom.com`
- **Password:** `BabyBloom@2024`

Admin login behavior:

- Automatically redirected to `/admin` after login (unless there is a `callback` query).
- Sees Dashboard link in navbar and can access `/add-product`.

---

## 🚀 Getting Started (Local Development)

### 1. Clone & install

```bash
git clone https://github.com/your-username/babybloom.git
cd babybloom
npm install
---

