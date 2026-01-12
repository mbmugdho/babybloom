'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  User,
  Search,
  Baby,
  ChevronDown,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
]

const categories = [
  { name: 'Diapers & Wipes', href: '/categories/diapers-wipes' },
  { name: 'Skincare & Bath', href: '/categories/skincare-bath' },
  { name: 'Feeding & Nursing', href: '/categories/feeding-nursing' },
  { name: 'Baby Clothing', href: '/categories/baby-clothing' },
  { name: 'Toys & Learning', href: '/categories/toys-learning' },
  { name: 'Health & Safety', href: '/categories/health-safety' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Baby className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </motion.div>
              <div>
                <span className="font-poppins text-xl md:text-2xl font-bold text-primary-500">
                  Baby
                </span>
                <span className="font-poppins text-xl md:text-2xl font-bold text-secondary-400">
                  Bloom
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary-500'
                        : 'text-neutral-500 group-hover:text-primary-500'
                    }`}
                  >
                    {link.name}
                  </span>
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full"
                    />
                  )}
                </Link>
              ))}

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-500 hover:text-primary-500 transition-colors">
                  Shop
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isCategoryOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden"
                    >
                      <div className="py-2">
                        {categories.map((category, index) => (
                          <motion.div
                            key={category.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={category.href}
                              className="block px-4 py-2.5 text-sm text-neutral-500 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                            >
                              {category.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-neutral-500 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-colors"
              >
                <Search size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-neutral-500 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-colors relative"
              >
                <Heart size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-secondary-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-neutral-500 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-colors relative"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </motion.button>

              <div className="w-px h-6 bg-neutral-200 mx-2" />

              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary-400 hover:bg-primary-500 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <User size={18} />
                  <span>Login</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2 text-neutral-500 hover:text-primary-500 relative"
              >
                <ShoppingBag size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-neutral-500"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                  <span className="font-poppins text-lg font-bold text-primary-500">
                    Menu
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-primary-500"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-6 py-3 text-base font-medium transition-colors ${
                          pathname === link.href
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-neutral-500 hover:text-primary-500 hover:bg-primary-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="px-6 py-3">
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                      Categories
                    </p>
                  </div>

                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.1 }}
                    >
                      <Link
                        href={category.href}
                        className="block px-6 py-2.5 text-sm text-neutral-500 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                      >
                        {category.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-neutral-100 space-y-3">
                  <Link href="/login" className="block">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-full transition-all"
                    >
                      <User size={18} />
                      Login / Register
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
