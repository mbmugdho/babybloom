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
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const firstName = user?.name?.split(' ')[0] || 'User'
  const isAdmin = user?.role === 'admin'

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + '/')

  async function handleLogout() {
    await logout()
    setIsOpen(false)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
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
        <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
          <Link
            href="/products"
            className={`
              flex items-center gap-1
              px-3 py-1 rounded-full
              transition
              ${
                isActive('/products')
                  ? 'bg-primary-100 text-primary-700 shadow-soft'
                  : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
              }
            `}
          >
            Products
          </Link>

          <Link
            href="/categories"
            className={`
              flex items-center gap-1
              px-3 py-1 rounded-full
              transition
              ${
                isActive('/categories')
                  ? 'bg-primary-100 text-primary-700 shadow-soft'
                  : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
              }
            `}
          >
            Categories
          </Link>

          {!isAdmin && (
            <Link
              href="/cart"
              className={`
      flex items-center gap-1
      px-3 py-1 rounded-full
      transition
      ${
        isActive('/cart')
          ? 'bg-primary-100 text-primary-700 shadow-soft'
          : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
      }
    `}
            >
              <ShoppingBag size={16} />
              Cart
            </Link>
          )}

          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`
                    flex items-center gap-1
                    px-3 py-1 rounded-full
                    transition
                    ${
                      isActive('/admin')
                        ? 'bg-primary-100 text-primary-700 shadow-soft'
                        : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                    }
                  `}
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
              )}

              <span className="mx-1 text-sm text-neutral-500">
                Hi, <span className="font-semibold">{firstName}</span>
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex items-center gap-1
                  px-3 py-1 rounded-full
                  text-sm
                  text-neutral-600
                  border border-neutral-200
                  bg-white/80
                  shadow-soft
                  hover:bg-neutral-50
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
                className={`
                  flex items-center gap-1
                  px-3 py-1 rounded-full
                  transition
                  ${
                    isActive('/login')
                      ? 'bg-primary-100 text-primary-700 shadow-soft'
                      : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                  }
                `}
              >
                <User size={16} /> Login
              </Link>

              <Link
                href="/register"
                className={`
                  flex items-center gap-1
                  px-3 py-1 rounded-full
                  transition
                  ${
                    isActive('/register')
                      ? 'bg-primary-100 text-primary-700 shadow-soft'
                      : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                  }
                `}
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile: Cart + Hamburger */}
        <div className="md:hidden relative flex items-center gap-2">
          {/* Cart icon (mobile) */}
          {!isAdmin && (
            <Link
              href="/cart"
              aria-label="Cart"
              className={`
              inline-flex items-center justify-center
              rounded-full
              border border-primary-100
              bg-primary-50/80
              p-1.5
              text-primary-600
              shadow-soft
              ${isActive('/cart') ? 'ring-2 ring-primary-300' : ''}
            `}
            >
              <ShoppingBag size={18} />
            </Link>
          )}

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
                bg-[#6A9C87]/70
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
                className={`
                  text-center
                  p-2
                  rounded-2xl
                  bg-[#b5d7c7]
                  text-neutral-900
                  hover:bg-[#d9ebe2]
                  transition
                  ${isActive('/products') ? 'ring-2 ring-primary-200' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/categories"
                className={`
                  text-center
                  p-2
                  rounded-2xl
                  bg-[#b5d7c7]
                  text-neutral-900
                  hover:bg-[#d9ebe2]
                  transition
                  ${isActive('/categories') ? 'ring-2 ring-primary-200' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>

              

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link
                      href="/admin"
                      className={`
                        text-center
                        p-2
                        rounded-2xl
                        bg-[#b5d7c7]
                        text-neutral-900
                        flex items-center justify-center gap-2
                        hover:bg-[#d9ebe2]
                        transition
                        ${isActive('/admin') ? 'ring-2 ring-primary-200' : ''}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      text-center
                      p-2
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
                    className={`
                      text-center
                      p-2
                      rounded-2xl
                      bg-[#b5d7c7]
                      text-neutral-900
                      flex items-center justify-center gap-2
                      hover:bg-[#d9ebe2]
                      transition
                      ${isActive('/login') ? 'ring-2 ring-primary-200' : ''}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={16} />
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className={`
                      text-center
                      p-2
                      rounded-2xl
                      bg-[#b5d7c7]
                      text-neutral-900
                      hover:bg-[#d9ebe2]
                      transition
                      ${isActive('/register') ? 'ring-2 ring-primary-200' : ''}
                    `}
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
