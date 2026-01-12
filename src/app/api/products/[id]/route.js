import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

// ═══════════════════════════════════════════════════════════════════
// GET - Fetch Single Product by ID or Slug
// ═══════════════════════════════════════════════════════════════════
export async function GET(request, { params }) {
  try {
    await connectDB()

    const { id } = await params

    // Try to find by productId first, then by slug, then by MongoDB _id
    let product = await Product.findOne({ productId: id })

    if (!product) {
      product = await Product.findOne({ slug: id })
    }

    if (!product) {
      // Try MongoDB ObjectId
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        product = await Product.findById(id)
      }
    }

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: 'Product not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: product,
    })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch product',
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
// PUT - Update Product
// ═══════════════════════════════════════════════════════════════════
export async function PUT(request, { params }) {
  try {
    await connectDB()

    const { id } = await params
    const body = await request.json()

    // Find and update product
    let product = await Product.findOne({ productId: id })

    if (!product) {
      product = await Product.findOne({ slug: id })
    }

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: 'Product not found',
        },
        { status: 404 }
      )
    }

    // Update product
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    )

    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    })
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update product',
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
// DELETE - Delete Product
// ═══════════════════════════════════════════════════════════════════
export async function DELETE(request, { params }) {
  try {
    await connectDB()

    const { id } = await params

    let product = await Product.findOne({ productId: id })

    if (!product) {
      product = await Product.findOne({ slug: id })
    }

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: 'Product not found',
        },
        { status: 404 }
      )
    }

    await Product.findByIdAndDelete(product._id)

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete product',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
