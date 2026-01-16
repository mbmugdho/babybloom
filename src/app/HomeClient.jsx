'use client'

import { motion } from 'framer-motion'

import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import ShopByAgeSection from '@/components/landing/ShopByAgeSection'
import CategoriesSection from '@/components/landing/CategoriesSection'
import BestSellersSection from '@/components/landing/BestSellersSection'
import NewArrivalsSection from '@/components/landing/NewArrivalsSection'
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import StoreStatsStrip from '@/components/landing/StoreStatsStrip'
import FaqSection from '@/components/landing/FaqSection'
import NewsletterSection from '@/components/landing/NewsletterSection'
import BackToTopButton from '@/components/ui/BackToTopButton'

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function HomeClient() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <FeaturesSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ShopByAgeSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <CategoriesSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <BestSellersSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <NewArrivalsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <WhyChooseUsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <TestimonialsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <StoreStatsStrip />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <FaqSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <NewsletterSection />
        </motion.div>
      </motion.div>

      <BackToTopButton />
    </>
  )
}
