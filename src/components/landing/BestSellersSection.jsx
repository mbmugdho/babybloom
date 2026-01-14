'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Color presets for  glows
const colorPresets = [
  {
    border: 'border-primary-200',
    badgeBg: 'bg-primary-50',
    badgeBorder: 'border-primary-200',
    badgeText: 'text-primary-700',
    glow1: 'bg-primary-100',
    glow2: 'bg-accent-100',
  },
  {
    border: 'border-secondary-200',
    badgeBg: 'bg-secondary-50',
    badgeBorder: 'border-secondary-200',
    badgeText: 'text-secondary-700',
    glow1: 'bg-secondary-100',
    glow2: 'bg-primary-100',
  },
  {
    border: 'border-accent-200',
    badgeBg: 'bg-accent-50',
    badgeBorder: 'border-accent-200',
    badgeText: 'text-accent-700',
    glow1: 'bg-accent-100',
    glow2: 'bg-secondary-100',
  },
]

export default function BestSellersSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBestSellers()
  }, [])

  const fetchBestSellers = async () => {
    try {
      const response = await fetch('/api/products')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        setProducts(data.data || [])
      } else {
        setError(data.message || 'Failed to load products')
      }
    } catch (err) {
      setError(`Error: ${err.message}`)
      console.error('Error fetching best sellers:', err)
    } finally {
      setLoading(false)
    }
  }

  const bestSellers = useMemo(() => {
    const filtered = products.filter(p => p.isBestSeller)
    
    // Sort by rating desc, then reviews desc
    filtered.sort((a, b) => {
      const ratingDiff = (b.rating || 0) - (a.rating || 0)
      if (ratingDiff !== 0) return ratingDiff
      return (b.reviewsCount || 0) - (a.reviewsCount || 0)
    })
    
    return filtered.slice(0, 8)
  }, [products])

  const formatPrice = (price) => {
    return `৳${price.toLocaleString()}`
  }

  if (loading) {
    return (
      <section className="py-10 md:py-15">
        <div className="container">
          <div className="text-center mb-7 md:mb-10">
            <div className="h-10 bg-neutral-200 rounded-lg w-64 mx-auto mb-4 shimmer" />
            <div className="h-6 bg-neutral-200 rounded-lg w-96 mx-auto shimmer" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-soft backdrop-blur-md p-5">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/40 blur-2xl" />
                <div className="absolute -left-12 -bottom-10 h-24 w-28 rounded-full bg-accent-100/40 blur-2xl" />
                <div className="relative z-10 space-y-3">
                  <div className="h-40 w-full rounded-xl bg-neutral-100 shimmer" />
                  <div className="h-4 w-3/4 rounded bg-neutral-100 shimmer" />
                  <div className="h-3 w-1/2 rounded bg-neutral-100 shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-10 md:py-15">
        <div className="container">
          <div className="text-center text-neutral-400">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (bestSellers.length === 0) {
    return null
  }

  return (
    <section className="py-10 md:py-15">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 md:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-2">
            Parent Favorites
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Best Sellers
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Our most loved products trusted by thousands of happy parents
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {bestSellers.map((product, idx) => {
            const preset = colorPresets[idx % colorPresets.length]
            const imageSrc = product.image || 'https://placehold.co/400x400/e8e8e8/999999?text=Product'

            return (
              <motion.article
                key={product._id || product.productId || idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl
                  border ${preset.border}
                  bg-white/70
                  shadow-soft
                  backdrop-blur-md
                  p-5
                  transition-all duration-300
                  hover:shadow-card-hover
                `}
              >
                {/* Decorative Glows */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full ${preset.glow1} opacity-50 blur-2xl group-hover:scale-125 transition-transform duration-500`} />
                <div className={`pointer-events-none absolute -left-14 -bottom-12 h-28 w-32 rounded-full ${preset.glow2} opacity-50 blur-2xl group-hover:scale-125 transition-transform duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badges Row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`
                      inline-flex items-center gap-1.5
                      rounded-full
                      px-3 py-1
                      text-xs font-semibold
                      ${preset.badgeBg}
                      ${preset.badgeBorder}
                      ${preset.badgeText}
                      border
                      shadow-soft
                    `}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      Best Seller
                    </span>

                    {product.discount > 0 && (
                      <span className="rounded-full bg-secondary-100/90 px-2.5 py-1 text-xs font-semibold text-secondary-800 border border-secondary-200 shadow-soft">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 border border-white/70 shadow-soft bg-neutral-50">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Brand */}
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    {product.brand}
                  </p>

                  {/* Product Name */}
                  <h3 className="font-poppins text-base font-semibold text-neutral-600 mb-2 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-accent-400 text-accent-400" />
                      <span className="text-sm font-semibold text-neutral-600">
                        {product.rating?.toFixed(1) || '4.5'}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400">
                      ({product.reviewsCount?.toLocaleString() || 0})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg font-bold text-primary-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-neutral-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Stock Warning */}
                  {product.stockQuantity < 10 && product.inStock && (
                    <p className="text-xs text-secondary-600 font-medium mb-3">
                      Only {product.stockQuantity} left in stock!
                    </p>
                  )}
                  {!product.inStock && (
                    <p className="text-xs text-red-600 font-medium mb-3">
                      Out of Stock
                    </p>
                  )}

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/products/${product._id || product.slug}`}
                      className="
                        inline-flex items-center justify-center gap-2
                        w-full
                        rounded-full
                        bg-primary-500
                        px-4 py-2.5
                        text-sm font-semibold text-white
                        shadow-soft
                        hover:bg-primary-600
                        transition-colors
                      "
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}