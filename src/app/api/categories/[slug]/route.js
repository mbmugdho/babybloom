import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Category from "@/models/Category";
import Product from "@/models/Product";

// ═══════════════════════════════════════════════════════════════════
// GET - Fetch Category Details and Products by Category Slug
// ═══════════════════════════════════════════════════════════════════
export async function GET(request, { params }) {
  try {
    await connectDB();

    const { slug } = await params;

    // Find category
    const category = await Category.findOne({ slug: slug });

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found",
        },
        { status: 404 }
      );
    }

    // Find products in this category
    const products = await Product.find({ categorySlug: slug }).sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: {
        category: category,
        products: products,
        productCount: products.length,
      },
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}