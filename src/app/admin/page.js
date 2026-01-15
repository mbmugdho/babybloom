// src/app/admin/page.js

import Container from '@/components/layout/Container'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import Category from '@/models/Category'
import User from '@/models/User'
import Link from 'next/link'
import { Package, Layers, Users, Star, PlusCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Dashboard | BabyBloom',
  description:
    'Admin dashboard for BabyBloom – manage products, categories, and curated baby essentials for families in Bangladesh.',
}

async function getAdminStats() {
  await connectDB()

  const [productCount, categoryCount, userCount, bestSellerCount] =
    await Promise.all([
      Product.countDocuments({}),
      Category.countDocuments({ isActive: true }),
      User.countDocuments({}),
      Product.countDocuments({ isBestSeller: true }),
    ])

  return {
    productCount,
    categoryCount,
    userCount,
    bestSellerCount,
  }
}

export default async function AdminDashboardPage() {
  const stats = await getAdminStats()

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
          "
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-1">
                  Admin dashboard
                </p>
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700">
                  BabyBloom overview
                </h1>
                <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                  Get a quick snapshot of your curated baby products, categories
                  and user activity. Use the shortcuts to manage your catalog.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/add-product"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    px-4 py-2
                    text-xs sm:text-sm font-semibold
                    text-white
                    bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                    shadow-soft
                    hover:from-primary-500 hover:to-accent-500
                    transition
                  "
                >
                  <PlusCircle size={16} />
                  Add new product
                </Link>
                <Link
                  href="/products"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    px-4 py-2
                    text-xs sm:text-sm font-semibold
                    border border-neutral-200
                    bg-white/80
                    text-neutral-600
                    shadow-soft
                    hover:bg-neutral-50
                    transition
                  "
                >
                  View store
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-white/80 shadow-soft backdrop-blur-md p-4">
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-primary-100/50 blur-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-2">
                    <Package size={18} />
                  </div>
                  <p className="text-xs text-neutral-400">Total products</p>
                  <p className="font-poppins text-xl font-semibold text-neutral-700">
                    {stats.productCount}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-secondary-100 bg-white/80 shadow-soft backdrop-blur-md p-4">
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-secondary-100/50 blur-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary-50 text-secondary-600 mb-2">
                    <Layers size={18} />
                  </div>
                  <p className="text-xs text-neutral-400">Active categories</p>
                  <p className="font-poppins text-xl font-semibold text-neutral-700">
                    {stats.categoryCount}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-accent-100 bg-white/80 shadow-soft backdrop-blur-md p-4">
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-accent-100/50 blur-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-700 mb-2">
                    <Users size={18} />
                  </div>
                  <p className="text-xs text-neutral-400">Registered users</p>
                  <p className="font-poppins text-xl font-semibold text-neutral-700">
                    {stats.userCount}
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-white/80 shadow-soft backdrop-blur-md p-4">
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-primary-100/50 blur-2xl" />
                <div className="relative z-10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600 mb-2">
                    <Star size={18} />
                  </div>
                  <p className="text-xs text-neutral-400">Best sellers</p>
                  <p className="font-poppins text-xl font-semibold text-neutral-700">
                    {stats.bestSellerCount}
                  </p>
                </div>
              </div>
            </div>

            {/* Later you can add sections for recent orders, quick edit, etc. */}
          </div>
        </div>
      </Container>
    </section>
  )
}
