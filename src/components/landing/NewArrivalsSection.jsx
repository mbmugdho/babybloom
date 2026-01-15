'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProductCard from '@/components/products/ProductCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function NewArrivalsSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchNewArrivals() {
      try {
        const res = await fetch('/api/products?newArrival=true&limit=4')
        if (!res.ok) throw new Error('Failed to load new arrivals')
        const json = await res.json()
        if (!json.success) {
          throw new Error(json.message || 'Failed to load new arrivals')
        }
        if (isMounted) {
          setProducts(Array.isArray(json.data) ? json.data : [])
          setError(null)
        }
      } catch (err) {
        console.error(err)
        if (isMounted) {
          setError('Unable to load new arrivals right now.')
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchNewArrivals()
    return () => {
      isMounted = false
    }
  }, [])

  const skeletonItems = new Array(4).fill(null)

  return (
    <section className="pt-10 md:pt-14">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 mb-8 md:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
            Fresh arrivals
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-neutral-600 mb-2">
                Just landed for little blooms
              </h2>
              <p className="text-sm md:text-base text-neutral-400 max-w-xl">
                Discover the newest additions to our curated collection – soft,
                gentle essentials recently added to the BabyBloom family.
              </p>
            </div>
            <Link
              href="/products?sort=latest"
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-neutral-200
                bg-white/80
                px-4 py-2
                text-xs md:text-sm font-semibold
                text-neutral-600
                shadow-soft
                hover:bg-neutral-50
                transition
              "
            >
              View all latest products
            </Link>
          </div>
        </motion.div>

        {error && !loading && (
          <div className="mb-6 rounded-2xl border border-secondary-200 bg-secondary-50/80 px-4 py-3 text-sm text-secondary-800 shadow-soft backdrop-blur-md">
            {error}
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7"
        >
          {loading
            ? skeletonItems.map((_, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-white/60
                    bg-white/70
                    shadow-soft
                    backdrop-blur-md
                    p-4 md:p-5
                  "
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/40 blur-2xl" />
                  <div className="pointer-events-none absolute -left-14 -bottom-12 h-24 w-32 rounded-full bg-accent-100/40 blur-2xl" />
                  <div className="relative z-10 space-y-3">
                    <div className="h-32 w-full rounded-xl bg-neutral-100 shimmer mb-3" />
                    <div className="h-4 w-40 rounded-full bg-neutral-100 shimmer" />
                    <div className="h-3 w-32 rounded-full bg-neutral-100 shimmer" />
                    <div className="h-3 w-24 rounded-full bg-neutral-100 shimmer" />
                    <div className="h-8 w-full rounded-full bg-neutral-100 shimmer mt-2" />
                  </div>
                </motion.div>
              ))
            : products.map((product, index) => (
                <motion.div
                  key={product._id || product.slug || index}
                  variants={itemVariants}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  )
}
