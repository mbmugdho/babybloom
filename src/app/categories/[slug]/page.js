import Container from '@/components/layout/Container'
import ProductGrid from '@/components/products/ProductGrid'
import connectDB from '@/lib/mongodb'
import Category from '@/models/Category'
import Product from '@/models/Product'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise
  const { slug } = params

  const result = await getCategoryAndProducts(slug)

  if (!result) {
    return {
      title: 'Category not found | BabyBloom',
      description:
        'This category does not exist. Browse all our curated baby product categories at BabyBloom.',
    }
  }

  const { category } = result

  return {
    title: `${category.name} | BabyBloom`,
    description:
      category.description ||
      `Discover ${category.name} products at BabyBloom – gentle, curated baby essentials for families in Bangladesh.`,
  }
}

export const dynamic = 'force-dynamic'

async function getCategoryAndProducts(slug) {
  if (!slug || typeof slug !== 'string') return null

  await connectDB()

  const categoryDoc = await Category.findOne({ slug, isActive: true }).lean()
  if (!categoryDoc) return null

  const productDocs = await Product.find({ categorySlug: slug })
    .sort({ createdAt: -1 })
    .lean()

  const category = {
    ...categoryDoc,
    _id: categoryDoc._id.toString(),
  }

  const products = productDocs.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString?.() || null,
    updatedAt: doc.updatedAt?.toISOString?.() || null,
  }))

  return { category, products }
}

export default async function CategoryPage({ params: paramsPromise }) {
  const params = await paramsPromise
  const slug = params?.slug

  const result = await getCategoryAndProducts(slug)

  if (!result) {
    notFound()
  }

  const { category, products } = result

  return (
    <section className="py-10 md:py-14">
      <Container>
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-neutral-200/80
            bg-white/80
            shadow-section
            backdrop-blur-md
            px-4 py-6
            sm:px-6 sm:py-7
            lg:px-8 lg:py-8
            mb-6 md:mb-8
          "
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-4">
            {/* Breadcrumb */}
            <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-1">
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Home
              </Link>
              <span className="text-neutral-300">/</span>
              <Link
                href="/categories"
                className="hover:text-primary-500 transition-colors"
              >
                Categories
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-500">{category.name}</span>
            </div>

            {/* Title / description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                {category.categoryId || 'Category'}
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
                {category.name}
              </h1>
              <p className="text-sm md:text-base text-neutral-400 max-w-2xl">
                {category.description ||
                  `Gentle ${
                    category.name?.toLowerCase() || 'baby'
                  } essentials curated for everyday comfort.`}
              </p>
            </div>

            {/* Small meta */}
            <div className="flex flex-wrap gap-2 text-[11px]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/80 border border-primary-100 px-3 py-1 text-primary-600 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>
                  {products.length} product{products.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-50/80 border border-neutral-200 px-3 py-1 text-neutral-500 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Curated by BabyBloom
              </div>
            </div>
          </div>
        </div>

        {/* Products in this category */}
        <ProductGrid products={products} />
      </Container>
    </section>
  )
}
