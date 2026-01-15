import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-8 text-center text-sm text-neutral-400 shadow-soft backdrop-blur-md">
        No products found. Please check back soon.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
      {products.map((product, index) => (
        <ProductCard
          key={product._id || product.slug || product.productId || index}
          product={product}
          index={index}
        />
      ))}
    </div>
  )
}
