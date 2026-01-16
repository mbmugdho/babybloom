'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function CategoriesSection() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setCategories(data.data)
      } else {
        setError(data.message || 'Failed to load categories')
      }
    } catch (err) {
      setError(`Error: ${err.message}`)
      console.error('Error fetching categories:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-4 bg-neutral-200 rounded-full w-40 mx-auto mb-3 shimmer" />
            <div className="h-7 bg-neutral-200 rounded-full w-64 mx-auto mb-2 shimmer" />
            <div className="h-4 bg-neutral-200 rounded-full w-80 mx-auto shimmer" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="
                  relative overflow-hidden
                  rounded-2xl
                  border border-neutral-200/80
                  bg-white/80
                  shadow-soft
                  backdrop-blur-md
                  p-4
                "
              >
                <div className="h-32 w-full rounded-xl bg-neutral-100 shimmer mb-3" />
                <div className="h-4 bg-neutral-100 rounded-full w-3/4 mb-2 shimmer" />
                <div className="h-3 bg-neutral-100 rounded-full w-full shimmer mb-1" />
                <div className="h-3 bg-neutral-100 rounded-full w-2/3 shimmer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center text-neutral-400">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-10 md:pt-15">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 md:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            Shop by category
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 ">
            Everything, neatly organized
          </h2>
          <p className="text-neutral-400 text-sm md:text-base ">
            Explore gentle must-haves across diapers, skincare, feeding, toys,
            clothing and more — curated for every stage of your baby's
            journey.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.article
              key={category.categoryId || category.slug || index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="
                group
                relative overflow-hidden
                rounded-2xl
                border border-primary-100/80
                bg-white/80
                shadow-soft
                backdrop-blur-md
                p-4 md:p-5
                flex flex-col
                transition-all duration-300
              "
            >
              <Link href={`/categories/${category.slug}`}>
                {/* Decorative glows */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/45 blur-2xl group-hover:scale-125 transition-transform duration-500" />
                <div className="pointer-events-none absolute -left-14 -bottom-12 h-24 w-32 rounded-full bg-accent-100/45 blur-2xl group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Image / icon area */}
                  <div
                    className="
                      relative w-full h-36 sm:h-40
                      rounded-xl overflow-hidden
                      bg-gradient-to-br from-primary-50 via-white to-secondary-50
                      border border-white/80
                      shadow-soft
                      mb-4
                    "
                  >
                    {category.image ? (
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Package
                          size={72}
                          className="text-primary-300 opacity-40"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}

                    {/* Product count badge */}
                    <div
                      className="
                        absolute top-3 right-3
                        rounded-full
                        bg-white/90
                        border border-neutral-200/80
                        px-3 py-1
                        text-[11px] font-semibold
                        text-primary-600
                        shadow-soft
                      "
                    >
                      {(category.productCount || 0) > 0 ? (
                        <>
                          {category.productCount}{' '}
                          {category.productCount === 1 ? 'item' : 'items'}
                        </>
                      ) : (
                        'Curated selection'
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="
                      font-poppins text-lg md:text-xl font-semibold
                      text-neutral-600 mb-1.5
                      group-hover:text-primary-600
                      transition-colors
                    "
                  >
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 flex-1 line-clamp-2">
                    {category.description ||
                      `Thoughtfully chosen ${
                        category.name?.toLowerCase().replace('&', 'and') ||
                        'baby'
                      } essentials.`}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-1 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary-600">
                      <span>View products</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/categories"
            className="
              inline-flex items-center gap-2
              bg-primary-400 hover:bg-primary-500
              text-white
              px-8 py-3.5
              rounded-full
              text-sm font-semibold
              shadow-soft hover:shadow-card-hover
              transition-all duration-300
            "
          >
            View all categories
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
