import Container from '@/components/layout/Container'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import Category from '@/models/Category'
import User from '@/models/User'
import AdminDashboardClient from './AdminDashboardClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Dashboard | BabyBloom',
  description:
    'Admin dashboard for BabyBloom – manage products, categories, and curated baby essentials for families in Bangladesh.',
}

async function getDashboardData() {
  await connectDB()

  const [products, categories, userRoleAgg] = await Promise.all([
    Product.find({})
      .select(
        'isBestSeller isFeatured isNewArrival categorySlug price originalPrice discount stockQuantity'
      )
      .lean(),
    Category.find({ isActive: true })
      .select('name slug categoryId productCount')
      .sort({ categoryId: 1 })
      .lean(),
    User.aggregate([{ $group: { _id: '$role', count: { $sum: 1 } } }]),
  ])

  const productCount = products.length
  const categoryCount = categories.length
  const userCount = userRoleAgg.reduce((sum, r) => sum + (r.count || 0), 0)
  const bestSellerCount = products.filter((p) => p.isBestSeller).length
  const featuredCount = products.filter((p) => p.isFeatured).length
  const newArrivalCount = products.filter((p) => p.isNewArrival).length

  // Potential revenue & discount
  let potentialGross = 0
  let potentialNet = 0
  let potentialDiscountValue = 0
  let totalDiscountPercent = 0
  let discountCount = 0

  products.forEach((p) => {
    const price = p.price || 0
    const original = p.originalPrice || price
    const qty = p.stockQuantity || 0

    const gross = original * qty
    const net = price * qty
    const discountVal = Math.max(0, gross - net)

    potentialGross += gross
    potentialNet += net
    potentialDiscountValue += discountVal

    if (p.discount) {
      totalDiscountPercent += p.discount
      discountCount += 1
    }
  })

  const avgDiscount =
    discountCount > 0 ? totalDiscountPercent / discountCount : 0

  const productsPerCategory = categories.map((cat) => ({
    name: cat.name,
    slug: cat.slug,
    count:
      typeof cat.productCount === 'number'
        ? cat.productCount
        : products.filter((p) => p.categorySlug === cat.slug).length,
  }))

  const topCategories = [...productsPerCategory]
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)

  const flagDistribution = [
    { name: 'Best sellers', value: bestSellerCount },
    { name: 'Featured', value: featuredCount },
    { name: 'New arrivals', value: newArrivalCount },
  ]

  const roleDistribution = userRoleAgg.map((r) => ({
    name: r._id === 'admin' ? 'Admin' : 'User',
    value: r.count,
  }))

  return {
    stats: {
      productCount,
      categoryCount,
      userCount,
      bestSellerCount,
      featuredCount,
      newArrivalCount,
      potentialGross,
      potentialNet,
      potentialDiscountValue,
      avgDiscount,
    },
    productsPerCategoryTop: topCategories,
    productsPerCategoryAll: productsPerCategory,
    flagDistribution,
    roleDistribution,
  }
}

export default async function AdminDashboardPage() {
  const data = await getDashboardData()

  return (
    <section className="py-10 md:py-14">
      <Container>
        <AdminDashboardClient data={data} />
      </Container>
    </section>
  )
}
