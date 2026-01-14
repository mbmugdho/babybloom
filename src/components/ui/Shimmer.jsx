export function Shimmer({ className = '' }) {
  return <div className={`shimmer rounded-lg ${className}`} />
}

export function ShimmerText({ lines = 1 }) {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={`shimmer h-4 rounded ${
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

export function ShimmerImage({ className = '' }) {
  return <div className={`shimmer aspect-square rounded-xl ${className}`} />
}

export function ShimmerProductCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft">
      {/* Image */}
      <div className="shimmer aspect-square" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Badge */}
        <div className="shimmer h-5 w-16 rounded-full" />

        {/* Title */}
        <div className="shimmer h-5 w-full rounded" />
        <div className="shimmer h-5 w-3/4 rounded" />

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="shimmer h-4 w-24 rounded" />
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="shimmer h-6 w-20 rounded" />
          <div className="shimmer h-10 w-28 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function ShimmerCategoryCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft">
      <div className="shimmer aspect-[4/3]" />
      <div className="p-4 space-y-2">
        <div className="shimmer h-5 w-3/4 rounded" />
        <div className="shimmer h-4 w-full rounded" />
      </div>
    </div>
  )
}

const ShimmerComponents = {
  Base: Shimmer,
  Text: ShimmerText,
  Image: ShimmerImage,
  ProductCard: ShimmerProductCard,
  CategoryCard: ShimmerCategoryCard,
}

export default ShimmerComponents
