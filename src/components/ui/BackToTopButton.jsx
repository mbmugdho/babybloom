'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Back to top"
          className="
            fixed
            bottom-5 right-4
            sm:bottom-6 sm:right-6
            z-40
            inline-flex items-center justify-center
            h-10 w-10 sm:h-11 sm:w-11
            rounded-full
            bg-primary-400
            text-white
            shadow-soft
            border border-primary-100
            hover:bg-primary-500
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary-500
            focus-visible:ring-offset-2
            focus-visible:ring-offset-white
            transition
          "
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
