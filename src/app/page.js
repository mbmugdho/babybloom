'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="container min-h-screen">
      {/* Hero Section - Temporary */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-200 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Welcome to BabyBloom
            </motion.div>

            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-500 mb-6">
              Everything Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Little One
              </span>{' '}
              <br className="hidden sm:block" />
              Needs to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-500">
                Bloom
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Discover premium baby products designed with love. Safe,
              comfortable, and adorable essentials for your precious bundle of
              joy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Shop Now
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link href="/categories">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-neutral-200 hover:border-primary-300 text-neutral-500 font-semibold rounded-full transition-all"
                >
                  Browse Categories
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>100% Safe Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                🚚
              </div>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                ↩️
              </div>
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                ⭐
              </div>
              <span>5000+ Happy Parents</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-20 bg-white/50 text-center">
        <p className="text-neutral-400">
          🚧 More sections coming in Phase 5... 🚧
        </p>
      </section>
    </div>
  )
}
