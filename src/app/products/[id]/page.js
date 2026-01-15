// src/app/products/[id]/page.js

import Container from '@/components/layout/Container'
import ProductDetails from '@/components/products/ProductDetails'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import { notFound } from 'next/navigation'

async function getProduct(id) {
  if (!id || typeof id !== 'string') return null

  await connectDB()

  // Try productId, then slug, then ObjectId
  let product = await Product.findOne({ productId: id })

  if (!product) {
    product = await Product.findOne({ slug: id })
  }

  if (!product && /^[0-9a-fA-F]{24}$/.test(id)) {
    product = await Product.findById(id)
  }

  if (!product) return null

  // Make serializable
  return JSON.parse(JSON.stringify(product))
}

export default async function ProductPage({ params: paramsPromise }) {
  // Next 16: params is a Promise
  const params = await paramsPromise
  const id = params?.id

  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <section className="py-10 md:py-14">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </section>
  )
}