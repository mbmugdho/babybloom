// src/app/products/page.js

import Container from '@/components/layout/Container'
import ProductGrid from '@/components/products/ProductGrid'
import ProductFilters from '@/components/products/ProductFilters'
import ProductPagination from '@/components/products/ProductPagination'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import Category from '@/models/Category'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 12

async function getProducts({ category, sort, page }) {
  await connectDB()

  const query = {}
  if (category) {
    query.categorySlug = category
  }

  let sortOption = { createdAt: -1 } // default: latest
  if (sort === 'price-asc') {
    sortOption = { price: 1 }
  } else if (sort === 'price-desc') {
    sortOption = { price: -1 }
  }

  const total = await Product.countDocuments(query)
  const currentPage = Math.max(1, Number(page) || 1)

  const docs = await Product.find(query)
    .sort(sortOption)
    .skip((currentPage - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean()

  const products = docs.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString?.() || null,
    updatedAt: doc.updatedAt?.toISOString?.() || null,
  }))

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  return { products, total, totalPages, currentPage }
}

async function getCategoryFilters() {
  await connectDB()

  const docs = await Category.find({ isActive: true })
    .sort({ categoryId: 1 })
    .lean()

  return docs.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
  }))
}

// helper to normalize searchParams values (string | string[] | undefined)
function getParam(value, fallback = '') {
  if (Array.isArray(value)) return value[0] ?? fallback
  return value ?? fallback
}

export default async function ProductsPage({ searchParams: searchParamsPromise }) {
  // NEW: unwrap async searchParams
  const searchParams = await searchParamsPromise

  const category = getParam(searchParams?.category, '')
  const sort = getParam(searchParams?.sort, 'latest')
  const page = getParam(searchParams?.page, '1')

  let products = []
  let total = 0
  let totalPages = 1
  let currentPage = 1
  let categories = []
  let error = null

  try {
    const [productResult, categoryResult] = await Promise.all([
      getProducts({ category, sort, page }),
      getCategoryFilters(),
    ])

    products = productResult.products
    total = productResult.total
    totalPages = productResult.totalPages
    currentPage = productResult.currentPage
    categories = categoryResult
  } catch (e) {
    console.error(e)
    error = e.message || 'Unable to load products right now.'
  }

  const filterParams = { category, sort }

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            All baby essentials
          </p>
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-600 mb-3">
            Discover gentle products for every moment
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl">
            Browse our full collection of curated baby products—from diapers and
            skincare to feeding, clothing, toys, and safety essentials.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-secondary-200 bg-secondary-50/80 px-4 py-3 text-sm text-secondary-800 shadow-soft backdrop-blur-md">
            {error}
          </div>
        )}

        {/* Filters */}
        {!error && (
          <ProductFilters
            categories={categories}
            total={total}
            initialCategory={category}
            initialSort={sort}
          />
        )}

        {/* Grid */}
        {!error && <ProductGrid products={products} />}

        {/* Pagination */}
        {!error && (
          <ProductPagination
            page={currentPage}
            totalPages={totalPages}
            searchParams={filterParams}
          />
        )}
      </Container>
    </section>
  )
}