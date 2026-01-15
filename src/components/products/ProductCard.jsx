'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ChevronRight } from 'lucide-react'

const colorPresets = [
  {
    // primary
    border: 'border-primary-200',
    glow1: 'bg-primary-100',
    glow2: 'bg-accent-100',
    badgeBg: 'bg-primary-50',
    badgeBorder: 'border-primary-200',
    badgeText: 'text-primary-700',
  },
  {
    // secondary
    border: 'border-secondary-200',
    glow1: 'bg-secondary-100',
    glow2: 'bg-accent-100',
    badgeBg: 'bg-secondary-50',
    badgeBorder: 'border-secondary-200',
    badgeText: 'text-secondary-700',
  },
  {
    // accent
    border: 'border-accent-200',
    glow1: 'bg-accent-100',
    glow2: 'bg-primary-100',
    badgeBg: 'bg-accent-50',
    badgeBorder: 'border-accent-200',
    badgeText: 'text-accent-700',
  },
]

function formatPriceBDT(amount) {
  if (typeof amount !== 'number') return ''
  return `৳${amount.toLocaleString('en-BD')}`
}

export default function ProductCard({ product, index = 0 }) {
  const preset = colorPresets[index % colorPresets.length]

  const href = `/products/${product.slug || product.productId || product._id}`
  const imageSrc = product.image || '/images/products/placeholder.jpg'

  const rating = typeof product.rating === 'number' ? product.rating : 0
  const reviews = product.reviewsCount || 0

  const badgeLabel = product.isBestSeller
    ? 'Best seller'
    : product.isNewArrival
    ? 'New arrival'
    : product.isFeatured
    ? 'Featured pick'
    : null

  return (
    <motion.article
      whileHover={{
        y: -7,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className={`
        group relative overflow-hidden
        rounded-2xl
        border ${preset.border}
        bg-white/70
        shadow-soft
        backdrop-blur-md
        p-4 md:p-5
        flex flex-col
        transition-all duration-300
      `}
    >
      {/* Decorative glows */}
      <div
        className={`
          pointer-events-none absolute -right-10 -top-10
          h-24 w-24 rounded-full
          ${preset.glow1} opacity-60 blur-2xl
          group-hover:scale-125 transition-transform duration-500
        `}
      />
      <div
        className={`
          pointer-events-none absolute -left-14 -bottom-12
          h-24 w-32 rounded-full
          ${preset.glow2} opacity-60 blur-2xl
          group-hover:scale-125 transition-transform duration-500
        `}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Badges row */}
        <div className="flex items-center justify-between mb-2">
          {badgeLabel ? (
            <span
              className={`
                inline-flex items-center gap-1
                rounded-full
                px-2.5 py-1
                text-[11px] font-semibold
                ${preset.badgeBg}
                ${preset.badgeBorder}
                ${preset.badgeText}
                border
                shadow-soft
              `}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {badgeLabel}
            </span>
          ) : (
            <span />
          )}

          {product.discount ? (
            <span className="rounded-full bg-secondary-100/90 px-2 py-0.5 text-[11px] font-semibold text-secondary-800 border border-secondary-200 shadow-soft">
              -{product.discount}%
            </span>
          ) : null}
        </div>

        {/* Image */}
        <div
          className="
    relative w-full
    h-40 sm:h-44 md:h-48
    rounded-xl overflow-hidden
    mb-3
    border border-white/70
    shadow-soft
    bg-neutral-50
  "
        >
          <Image
            src={imageSrc}
            alt={product.name || 'Product'}
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-neutral-900/35 flex items-center justify-center">
              <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-neutral-600 shadow-soft">
                Out of stock
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="font-poppins text-sm md:text-base font-semibold text-neutral-600 mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Price + meta */}
        <div className="flex items-end justify-between mb-3">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-base md:text-lg font-semibold text-primary-600">
                {formatPriceBDT(product.price)}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-xs text-neutral-400 line-through">
                    {formatPriceBDT(product.originalPrice)}
                  </span>
                )}
            </div>
            {product.ageRange && (
              <p className="text-[11px] text-neutral-400 mt-0.5">
                For ages {product.ageRange}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Star size={14} className="text-accent-500 fill-accent-500" />
            <span className="text-xs font-semibold text-neutral-600">
              {rating ? rating.toFixed(1) : '4.5'}
            </span>
            {reviews > 0 && (
              <span className="text-[11px] text-neutral-400">({reviews})</span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <Link
            href={href}
            className="
              inline-flex items-center justify-center gap-1.5
              w-full
              rounded-full
              bg-primary-500
              px-3 py-2
              text-xs md:text-sm font-semibold text-white
              shadow-soft
              hover:bg-primary-600
              transition-colors
            "
          >
            View details
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
