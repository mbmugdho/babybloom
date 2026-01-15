import Container from '@/components/layout/Container'
import CategoryGrid from '@/components/categories/CategoryGrid'
import connectDB from '@/lib/mongodb'
import Category from '@/models/Category'

export const metadata = {
  title: 'Shop by Category | BabyBloom',
  description:
    'Explore baby essentials by category – Diapers & Wipes, Skincare & Bath, Feeding & Nursing, Baby Clothing, Toys & Learning, and Health & Safety.',
}

export const dynamic = 'force-dynamic'

async function getCategories() {
  await connectDB()

  const docs = await Category.find({ isActive: true })
    .sort({ categoryId: 1 })
    .lean()

  return docs.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }))
}

export default async function CategoriesPage() {
  let categories = []
  let error = null

  try {
    categories = await getCategories()
  } catch (e) {
    console.error(e)
    error = e.message || 'Unable to load categories right now.'
  }

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            Shop by category
          </p>
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-600 mb-3">
            Explore gentle essentials by category
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl">
            From diapers and skincare to feeding, clothing, toys, and safety—
            discover curated collections for every part of your baby&apos;s day.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-secondary-200 bg-secondary-50/80 px-4 py-3 text-sm text-secondary-800 shadow-soft backdrop-blur-md">
            {error}
          </div>
        )}

        {/* Grid */}
        {!error && <CategoryGrid categories={categories} />}
      </Container>
    </section>
  )
}
