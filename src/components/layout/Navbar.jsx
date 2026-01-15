'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  X,
  User,
  ShoppingBag,
  LogOut,
  LayoutDashboard,
} from 'lucide-react'
import { useState } from 'react'
import Container from './Container'
import { motion } from 'framer-motion'
import useAuth from '@/hooks/useAuth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const firstName = user?.name?.split(' ')[0] || 'User'
  const isAdmin = user?.role === 'admin'

  async function handleLogout() {
    await logout()
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="BabyBloom Logo"
            width={36}
            height={36}
          />
          <span className="font-poppins text-lg font-semibold text-primary-400">
            BabyBloom
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/products" className="hover:text-primary-400 transition">
            Products
          </Link>
          <Link
            href="/categories"
            className="hover:text-primary-400 transition"
          >
            Categories
          </Link>

          <Link
            href="/cart"
            className="hover:text-primary-400 flex items-center gap-1 transition"
          >
            <ShoppingBag size={16} />
            Cart
          </Link>

          {isAuthenticated ? (
            <>
              {isAdmin && (
                <>
                  <Link
                    href="/admin"
                    className="hover:text-primary-400 flex items-center gap-1 transition"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Link>
                  <Link
                    href="/add-product"
                    className="hover:text-primary-400 transition"
                  >
                    Add product
                  </Link>
                </>
              )}

              <span className="text-sm text-neutral-500">
                Hi, <span className="font-semibold">{firstName}</span>
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm text-neutral-500 hover:text-secondary-600 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-primary-400 flex items-center gap-1 transition"
              >
                <User size={16} /> Login
              </Link>
              <Link
                href="/register"
                className="hover:text-primary-400 transition"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile: Cart + Hamburger */}
        <div className="md:hidden relative flex items-center gap-2">
          {/* Cart icon (mobile) */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-primary-100
              bg-primary-50/80
              p-1.5
              text-primary-600
              shadow-soft
            "
          >
            <ShoppingBag size={18} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-sm p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="
                absolute right-0 top-16
                w-42
                bg-[#6A9C87]
                rounded-2xl
                shadow-lg
                p-2
                flex flex-col
                items-center
                gap-1.5
                z-50
              "
            >
              <Link
                href="/products"
                className="
                  text-center
                  p-4
                  bg-[#b5d7c7]
                  text-neutral-900
                  rounded-2xl
                  hover:bg-[#d9ebe2]
                  transition
                "
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/categories"
                className="
                  text-center
                  p-4
                  bg-[#b5d7c7]
                  text-neutral-900
                  rounded-2xl
                  hover:bg-[#d9ebe2]
                  transition
                "
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>

              <Link
                href="/cart"
                className="
                  text-center
                  p-4
                  bg-[#b5d7c7]
                  text-neutral-900
                  rounded-2xl
                  flex items-center justify-center gap-2
                  hover:bg-[#d9ebe2]
                  transition
                "
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag size={16} />
                Cart
              </Link>

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <>
                      <Link
                        href="/admin"
                        className="
                          text-center
                          p-4
                          bg-[#b5d7c7]
                          text-neutral-900
                          rounded-2xl
                          flex items-center justify-center gap-2
                          hover:bg-[#d9ebe2]
                          transition
                        "
                        onClick={() => setIsOpen(false)}
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </Link>
                      <Link
                        href="/add-product"
                        className="
                          text-center
                          p-4
                          bg-[#b5d7c7]
                          text-neutral-900
                          rounded-2xl
                          hover:bg-[#d9ebe2]
                          transition
                        "
                        onClick={() => setIsOpen(false)}
                      >
                        Add product
                      </Link>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      text-center
                      p-4
                      bg-[#b5d7c7]
                      text-neutral-900
                      rounded-2xl
                      flex items-center justify-center gap-2
                      hover:bg-[#d9ebe2]
                      transition
                    "
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="
                      text-center
                      p-4
                      bg-[#b5d7c7]
                      text-neutral-900
                      rounded-2xl
                      flex items-center justify-center gap-2
                      hover:bg-[#d9ebe2]
                      transition
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={16} />
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="
                      text-center
                      p-4
                      bg-[#b5d7c7]
                      text-neutral-900
                      rounded-2xl
                      hover:bg-[#d9ebe2]
                      transition
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  )
}
