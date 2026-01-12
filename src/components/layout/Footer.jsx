'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Baby,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  ArrowRight,
  Send,
} from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'New Arrivals', href: '/products?filter=new' },
    { name: 'Best Sellers', href: '/products?filter=bestseller' },
    { name: 'On Sale', href: '/products?filter=sale' },
  ],
  categories: [
    { name: 'Diapers & Wipes', href: '/categories/diapers-wipes' },
    { name: 'Skincare & Bath', href: '/categories/skincare-bath' },
    { name: 'Feeding & Nursing', href: '/categories/feeding-nursing' },
    { name: 'Baby Clothing', href: '/categories/baby-clothing' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-neutral-500 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2">
                Join Our Family! 💕
              </h3>
              <p className="text-white/70">
                Get exclusive offers, parenting tips & new product alerts
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-72 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3.5 bg-primary-400 hover:bg-primary-300 text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-3 lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-poppins text-2xl font-bold text-white">
                  Baby
                </span>
                <span className="font-poppins text-2xl font-bold text-secondary-300">
                  Bloom
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Your trusted partner in parenthood. We provide premium, safe, and
              adorable products for your little ones.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@babybloom.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary-300 transition-colors group"
              >
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                hello@babybloom.com
              </a>
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-3 text-white/70 hover:text-primary-300 transition-colors group"
              >
                <Phone
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                +880 1234 567890
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <MapPin size={18} />
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} BabyBloom. Made with{' '}
              <Heart
                size={14}
                className="inline text-secondary-400 fill-secondary-400"
              />{' '}
              for little ones
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-primary-400 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-white/60">
              <Link
                href="/privacy"
                className="hover:text-primary-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary-300 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

