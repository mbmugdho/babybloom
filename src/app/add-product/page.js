import Container from '@/components/layout/Container'
import connectDB from '@/lib/mongodb'
import Category from '@/models/Category'
import AddProductForm from './AddProductForm'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Add Product | BabyBloom Admin',
  description:
    'Add a new curated baby product to the BabyBloom catalog. Admin-only access.',
}

async function getCategories() {
  await connectDB()

  const docs = await Category.find({ isActive: true })
    .sort({ categoryId: 1 })
    .lean()

  return docs.map((cat) => ({
    id: cat._id.toString(),
    categoryId: cat.categoryId,
    name: cat.name,
    slug: cat.slug,
  }))
}

export default async function AddProductPage() {
  const categories = await getCategories()

  return (
    <section className="py-10 md:py-14">
      <Container>
        <AddProductForm categories={categories} />
      </Container>
    </section>
  )
}
