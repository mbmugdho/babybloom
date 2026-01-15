'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

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

export default function CategoryCard({ category, index = 0 }) {
  const preset = colorPresets[index % colorPresets.length]
  const imageSrc = category.image || '/images/categories/placeholder.jpg'

  return (
    <motion.article
      whileHover={{
        y: -6,
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
          pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full
          ${preset.glow1} opacity-60 blur-2xl
          group-hover:scale-125 transition-transform duration-500
        `}
      />
      <div
        className={`
          pointer-events-none absolute -left-14 -bottom-12 h-24 w-32 rounded-full
          ${preset.glow2} opacity-60 blur-2xl
          group-hover:scale-125 transition-transform duration-500
        `}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Image */}
        <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden mb-3 border border-white/70 shadow-soft bg-neutral-50">
          <Image
            src={imageSrc}
            alt={category.name || 'Category'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/20 via-transparent to-transparent" />
        </div>

        {/* Chip / count */}
        <div
          className={`
            inline-flex items-center gap-2
            rounded-full
            px-3 py-1
            text-[11px] font-semibold
            ${preset.badgeBg}
            ${preset.badgeBorder}
            ${preset.badgeText}
            border
            shadow-soft
            mb-2
          `}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          <span>
            {category.productCount
              ? `${category.productCount} products`
              : 'Curated selection'}
          </span>
        </div>

        {/* Name + description */}
        <h3 className="font-poppins text-base md:text-lg font-semibold text-neutral-600 mb-1">
          {category.name}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 mb-3 flex-1">
          {category.description ||
            `Thoughtfully chosen ${
              category.name?.toLowerCase().replace('&', 'and') || 'baby'
            } essentials.`}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <Link
            href={`/categories/${category.slug}`}
            className="
              inline-flex items-center gap-1.5
              text-xs md:text-sm font-semibold text-primary-600
              rounded-full
              px-3 py-1.5
              bg-primary-50
              border border-primary-200
              shadow-soft
              group-hover:bg-primary-100
              group-hover:border-primary-300
              transition-colors
            "
          >
            View products
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
