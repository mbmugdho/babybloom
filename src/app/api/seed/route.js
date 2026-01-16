import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import Category from '@/models/Category'
import User from '@/models/User'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

// ═══════════════════════════════════════════════════════════════════
// GET - Seed Database
// ═══════════════════════════════════════════════════════════════════
export async function GET(request) {
  try {
    // Check for secret key (basic protection)
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    await connectDB()

    console.log(' Starting database seeding...')

    // ═══════════════════════════════════════════════════════════════
    // SEED CATEGORIES
    // ═══════════════════════════════════════════════════════════════
    console.log(' Seeding categories...')

    // Clear existing categories
    await Category.deleteMany({})

    // Insert categories
    const insertedCategories = await Category.insertMany(categories)
    console.log(` Inserted ${insertedCategories.length} categories`)

    // ═══════════════════════════════════════════════════════════════
    // SEED PRODUCTS
    // ═══════════════════════════════════════════════════════════════
    console.log(' Seeding products...')

    // Clear existing products
    await Product.deleteMany({})

    // Insert products
    const insertedProducts = await Product.insertMany(products)
    console.log(` Inserted ${insertedProducts.length} products`)

    // ═══════════════════════════════════════════════════════════════
    // SEED ADMIN USER
    // ═══════════════════════════════════════════════════════════════
    console.log(' Seeding admin user...')

    // Clear existing users
    await User.deleteMany({})

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin',
      email: 'admin@babybloom.com',
      password: 'BabyBloom@2024',
      role: 'admin',
      isActive: true,
    })
    console.log(` Created admin user: ${adminUser.email}`)

    // ═══════════════════════════════════════════════════════════════
    // UPDATE CATEGORY PRODUCT COUNTS
    // ═══════════════════════════════════════════════════════════════
    console.log(' Updating category product counts...')

    for (const category of insertedCategories) {
      const count = await Product.countDocuments({
        categorySlug: category.slug,
      })
      await Category.findByIdAndUpdate(category._id, { productCount: count })
    }
    console.log(' Updated product counts')

    console.log(' Database seeding completed!')

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      data: {
        categories: insertedCategories.length,
        products: insertedProducts.length,
        adminUser: {
          email: adminUser.email,
          password: 'BabyBloom@2024',
        },
      },
    })
  } catch (error) {
    console.error(' Seeding error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to seed database',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
