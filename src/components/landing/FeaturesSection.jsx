'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, Heart, Headphones } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description:
      'Free delivery on orders over $50. Fast and reliable shipping to your doorstep.',
    color: 'primary',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-500',
    borderColor: 'border-primary-200',
  },
  {
    icon: Shield,
    title: '100% Safe Products',
    description:
      'All products are tested and certified safe for your precious little ones.',
    color: 'secondary',
    bgColor: 'bg-secondary-50',
    iconColor: 'text-secondary-500',
    borderColor: 'border-secondary-200',
  },
  {
    icon: Heart,
    title: 'Premium Quality',
    description:
      'Carefully curated products from trusted brands that care about your baby.',
    color: 'accent',
    bgColor: 'bg-accent-50',
    iconColor: 'text-accent-600',
    borderColor: 'border-accent-200',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Our friendly customer service team is always here to help you anytime.',
    color: 'primary',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-500',
    borderColor: 'border-primary-200',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function FeaturesSection() {
  return (
    <section className="pt-10 md:pt-15 ">
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
            Why parents love BabyBloom
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Gentle essentials, thoughtfully curated
          </h2>
          <p className="text-neutral-400 text-lg  ">
            We handpick baby products with comfort, safety, and simplicity in
            mind—so you can shop with peace of mind.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  group relative
                  ${feature.bgColor}
                  border-2 ${feature.borderColor}
                  rounded-2xl p-6 md:p-8
                  hover:shadow-card-hover
                  transition-all duration-300
                  overflow-hidden
                `}
              >
                {/* Decorative Background Element */}
                <div
                  className={`
                  absolute -top-10 -right-10 w-32 h-32 
                  ${feature.bgColor} opacity-50 rounded-full blur-2xl
                  group-hover:scale-150 transition-transform duration-500
                `}
                />

                {/* Icon */}
                <div
                  className={`
                  relative z-10
                  w-14 h-14 rounded-xl
                  ${feature.bgColor}
                  border-2 ${feature.borderColor}
                  flex items-center justify-center
                  mb-5
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-300
                `}
                >
                  <Icon
                    className={`${feature.iconColor} w-7 h-7`}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-poppins text-xl font-semibold text-neutral-500 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl
                  border-2 border-transparent
                  group-hover:border-${feature.color}-300
                  transition-colors duration-300
                `}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
