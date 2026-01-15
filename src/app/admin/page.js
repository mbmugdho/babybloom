// src/app/admin/page.js

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
      .select('isBestSeller isFeatured isNewArrival categorySlug')
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

  const productsPerCategory = categories.map((cat) => ({
    name: cat.name,
    slug: cat.slug,
    count:
      typeof cat.productCount === 'number'
        ? cat.productCount
        : products.filter((p) => p.categorySlug === cat.slug).length,
  }))

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
    },
    productsPerCategory,
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
