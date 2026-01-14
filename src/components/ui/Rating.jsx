import { Star } from 'lucide-react'

export default function Rating({ value = 0, count = 0, showCount = true }) {
  const fullStars = Math.floor(value)
  const hasHalf = value % 1 >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < fullStars
                ? 'text-rating fill-rating'
                : i === fullStars && hasHalf
                ? 'text-rating fill-rating/50'
                : 'text-neutral-200 fill-neutral-200'
            }
          />
        ))}
      </div>
      <span className="text-sm font-medium text-neutral-500">{value}</span>
      {showCount && count > 0 && (
        <span className="text-sm text-neutral-400">({count})</span>
      )}
    </div>
  )
}
