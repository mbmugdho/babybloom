'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, TrendingUp, Heart, Leaf } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Families',
    color: 'primary',
    gradient: 'from-primary-400 to-primary-600',
  },
  {
    icon: Award,
    value: '72',
    label: 'Premium Products',
    color: 'secondary',
    gradient: 'from-secondary-400 to-secondary-600',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Satisfaction Rate',
    color: 'accent',
    gradient: 'from-accent-400 to-accent-600',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Safe & Tested',
    color: 'primary',
    gradient: 'from-primary-500 to-primary-700',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'All products are rigorously tested and certified safe for your precious little ones.',
    color: 'primary',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-500',
    borderColor: 'border-primary-200',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description:
      'We prioritize sustainable materials and environmentally responsible packaging.',
    color: 'accent',
    bgColor: 'bg-accent-50',
    iconColor: 'text-accent-600',
    borderColor: 'border-accent-200',
  },
  {
    icon: Heart,
    title: 'Parent Approved',
    description:
      'Trusted by thousands of parents who choose quality and care for their babies.',
    color: 'secondary',
    bgColor: 'bg-secondary-50',
    iconColor: 'text-secondary-500',
    borderColor: 'border-secondary-200',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      "Carefully curated products from trusted brands that prioritize your baby's wellbeing.",
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

export default function WhyChooseUsSection() {
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
            Why BabyBloom
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Why Parents Choose Us
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We're committed to providing the best for your baby with safe,
            quality products
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-soft backdrop-blur-md p-6 text-center group"
              >
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-100/30 blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Value */}
                  <div className="font-poppins text-3xl md:text-4xl font-bold text-neutral-600 mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl
                  border ${benefit.borderColor}
                  bg-white/70
                  shadow-soft
                  backdrop-blur-md
                  p-6
                  transition-all duration-300
                  hover:shadow-card-hover
                `}
              >
                {/* Decorative Glow */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${benefit.bgColor} opacity-50 blur-2xl group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="relative z-10 flex gap-4">
                  {/* Icon */}
                  <div
                    className={`
                    flex-shrink-0
                    w-12 h-12
                    rounded-xl
                    ${benefit.bgColor}
                    border-2 ${benefit.borderColor}
                    flex items-center justify-center
                    shadow-soft
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-300
                  `}
                  >
                    <Icon
                      className={benefit.iconColor}
                      size={22}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-neutral-600 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary-200 bg-primary-50/50 shadow-soft backdrop-blur-md">
            <Shield className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-700">
              Certified Safe • Trusted by 50,000+ Families • 98% Satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
