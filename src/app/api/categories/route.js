import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Category from '@/models/Category'

// GET - Fetch All Categories
export async function GET() {
  try {
    await connectDB()

    const categories = await Category.find({ isActive: true }).sort({
      categoryId: 1,
    })

    return NextResponse.json({
      success: true,
      count: categories.length,
      data: categories,
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch categories',
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
// POST - Create New Category
// ═══════════════════════════════════════════════════════════════════
export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()

    // Generate slug from name if not provided
    if (!body.slug) {
      body.slug = body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }

    const category = await Category.create(body)

    return NextResponse.json(
      {
        success: true,
        message: 'Category created successfully',
        data: category,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create category',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
