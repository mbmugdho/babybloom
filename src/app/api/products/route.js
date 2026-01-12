import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

// ═══════════════════════════════════════════════════════════════════
// GET - Fetch All Products
// ═══════════════════════════════════════════════════════════════════
export async function GET(request) {
  try {
    await connectDB()

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const bestSeller = searchParams.get('bestSeller')
    const newArrival = searchParams.get('newArrival')
    const limit = searchParams.get('limit')
    const category = searchParams.get('category')

    // Build query
    let query = {}

    if (featured === 'true') {
      query.isFeatured = true
    }

    if (bestSeller === 'true') {
      query.isBestSeller = true
    }

    if (newArrival === 'true') {
      query.isNewArrival = true
    }

    if (category) {
      query.categorySlug = category
    }

    // Execute query
    let productsQuery = Product.find(query).sort({ createdAt: -1 })

    // Apply limit if specified
    if (limit) {
      productsQuery = productsQuery.limit(parseInt(limit))
    }

    const products = await productsQuery

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch products',
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
// POST - Create New Product
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

    // Generate productId if not provided
    if (!body.productId) {
      const count = await Product.countDocuments()
      body.productId = `bp-${String(count + 1).padStart(3, '0')}`
    }

    const product = await Product.create(body)

    return NextResponse.json(
      {
        success: true,
        message: 'Product created successfully',
        data: product,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating product:', error)

    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: 'Product with this name or ID already exists',
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create product',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
