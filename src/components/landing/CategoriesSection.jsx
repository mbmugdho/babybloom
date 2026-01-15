'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
            <div className="h-10 bg-neutral-200 rounded-lg w-64 mx-auto mb-4 shimmer" />
            <div className="h-6 bg-neutral-200 rounded-lg w-96 mx-auto shimmer" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="aspect-square bg-neutral-200 rounded-xl mb-4 shimmer" />
                <div className="h-6 bg-neutral-200 rounded w-3/4 mb-2 shimmer" />
                <div className="h-4 bg-neutral-200 rounded w-full shimmer" />
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
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 mb-3">
              Everything, neatly organized
            </h2>
            <p className="text-neutral-400 text-sm md:text-base ">
              Explore gentle must-haves across diapers, skincare, feeding, toys,
              clothing and more—curated for every stage of your baby's journey.
            </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.categoryId}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <Link href={`/categories/${category.slug}`}>
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
                {/* Placeholder Image with Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package 
                    size={80} 
                    className="text-primary-300 opacity-30"
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Actual Image (will show when path is updated) */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />

                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-primary-500">
                    {category.productCount || 0} Products
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-neutral-500 mb-2 group-hover:text-primary-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* View Button */}
                <div className="flex items-center gap-2 text-primary-500 font-medium">
                  <span>View Products</span>
                  <ArrowRight 
                    size={18} 
                    className="group-hover:translate-x-2 transition-transform duration-300" 
                  />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
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
            className="inline-flex items-center gap-2 bg-primary-400 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Categories
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}