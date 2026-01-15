'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'



const CART_KEY = 'babybloom_cart'

function formatPriceBDT(amount) {
  if (typeof amount !== 'number') return '৳0'
  return `৳${amount.toLocaleString('en-BD')}`
}

function readCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeCart(items) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

export default function CartPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const cart = readCart()
    setItems(cart)
    setLoading(false)
  }, [])

  const hasItems = items.length > 0

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  )

  function updateCart(nextItems, successMessage) {
    setItems(nextItems)
    writeCart(nextItems)
    if (successMessage) toast.success(successMessage)
  }

  function handleIncrement(id) {
    const next = items.map((item) => {
      if (item.id !== id) return item
      const max = item.stockQuantity || 99
      const nextQty = Math.min(item.quantity + 1, max)
      return { ...item, quantity: nextQty }
    })
    updateCart(next)
  }

  function handleDecrement(id) {
    const current = items.find((i) => i.id === id)
    if (!current) return

    if (current.quantity <= 1) {
      handleRemove(id)
      return
    }

    const next = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    updateCart(next)
  }

  function handleRemove(id) {
    const next = items.filter((item) => item.id !== id)
    updateCart(next, 'Item removed from cart')
  }

  function handleClearCart() {
    updateCart([], 'Cart cleared')
  }

  function handleCheckout() {
    if (!hasItems) {
      toast.error('Your cart is empty.')
      return
    }
    // This will be protected later (after login/register)
    router.push('/checkout')
  }

  function handleContinueShopping() {
    router.push('/products')
  }

  if (loading) {
    return (
      <section className="py-10 md:py-14">
        <Container>
          <div className="rounded-3xl border border-neutral-200 bg-white/80 shadow-section backdrop-blur-md px-4 py-6 sm:px-6 sm:py-7">
            <div className="h-5 w-44 rounded-full bg-neutral-100 shimmer mb-3" />
            <div className="h-4 w-72 rounded-full bg-neutral-100 shimmer mb-6" />
            <div className="h-24 w-full rounded-2xl bg-neutral-100 shimmer" />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-10 md:py-14">
      <Container>
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-neutral-200/80
            bg-white/80
            shadow-section
            backdrop-blur-md
            px-4 py-6
            sm:px-6 sm:py-7
            lg:px-8 lg:py-8
          "
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-6">
            {/* Header / breadcrumb */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-1 mb-1">
                  <Link
                    href="/"
                    className="hover:text-primary-500 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-neutral-300">/</span>
                  <span className="text-neutral-500">Cart</span>
                </div>
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700">
                  Your cart
                </h1>
                <p className="text-sm text-neutral-400 mt-1">
                  Review your selected baby essentials before checkout.
                </p>
              </div>

              <button
                type="button"
                onClick={handleContinueShopping}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  px-4 py-2
                  text-xs sm:text-sm font-semibold
                  border border-neutral-200
                  bg-white/80
                  text-neutral-600
                  shadow-soft
                  hover:bg-neutral-50
                  transition
                "
              >
                <ArrowLeft size={16} />
                Continue shopping
              </button>
            </div>

            {!hasItems ? (
              // Empty state
              <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50/80 px-4 py-8 text-center shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 border border-primary-100 text-primary-500 mb-3">
                  <ShoppingCart size={22} />
                </div>
                <p className="font-poppins text-lg font-semibold text-neutral-600 mb-1">
                  Your cart is empty
                </p>
                <p className="text-sm text-neutral-400 mb-4">
                  Add a few cozy essentials for your little one to get started.
                </p>
                <button
                  type="button"
                  onClick={handleContinueShopping}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full
                    px-5 py-2.5
                    text-sm font-semibold
                    text-white
                    bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                    shadow-soft
                    hover:from-primary-500 hover:to-accent-500
                    transition
                  "
                >
                  <ShoppingCart size={16} />
                  Browse products
                </button>
              </div>
            ) : (
              <>
                {/* Cart content */}
                <div className="grid gap-6 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
                  {/* Items list */}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="
                          relative overflow-hidden
                          rounded-2xl
                          border border-neutral-200/80
                          bg-white/90
                          shadow-soft
                          backdrop-blur-md
                          p-3 sm:p-4
                          flex gap-3 sm:gap-4
                        "
                      >
                        {/* Image */}
                        <div
                          className="
                            relative flex-shrink-0
                            h-20 w-20 sm:h-24 sm:w-24
                            rounded-xl
                            overflow-hidden
                            bg-neutral-50
                            border border-white/70
                            shadow-soft
                          "
                        >
                          <Image
                            src={
                              item.image || '/images/products/placeholder.jpg'
                            }
                            alt={item.name || 'Product'}
                            fill
                            className="object-contain p-2.5"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col gap-1">
                          <div className="flex justify-between gap-2">
                            <div>
                              <p className="font-poppins text-sm sm:text-base font-semibold text-neutral-700">
                                {item.name}
                              </p>
                              {item.brand && (
                                <p className="text-[11px] text-neutral-400">
                                  {item.brand}
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemove(item.id)}
                              className="
                                text-neutral-300 hover:text-secondary-600
                                transition
                              "
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          {/* Quantity + price row */}
                          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                            {/* Quantity controls */}
                            <div className="inline-flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleDecrement(item.id)}
                                className="
                                  h-8 w-8 rounded-full
                                  border border-neutral-200
                                  bg-white/90
                                  text-neutral-600
                                  flex items-center justify-center
                                  shadow-soft
                                  hover:bg-neutral-50
                                  transition
                                "
                              >
                                <Minus size={14} />
                              </button>
                              <span className="min-w-[2ch] text-center text-sm font-semibold text-neutral-700">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleIncrement(item.id)}
                                className="
                                  h-8 w-8 rounded-full
                                  border border-primary-200
                                  bg-primary-50/90
                                  text-primary-600
                                  flex items-center justify-center
                                  shadow-soft
                                  hover:bg-primary-100
                                  transition
                                "
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Line totals */}
                            <div className="text-right">
                              <div className="text-sm font-semibold text-primary-600">
                                {formatPriceBDT(
                                  (item.price || 0) * (item.quantity || 0)
                                )}
                              </div>
                              {item.price && (
                                <div className="text-[11px] text-neutral-400">
                                  {item.quantity} × {formatPriceBDT(item.price)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Clear cart */}
                    <button
                      type="button"
                      onClick={handleClearCart}
                      className="
                        inline-flex items-center gap-1.5
                        text-[11px] text-secondary-600
                        rounded-full
                        border border-secondary-200/80
                        bg-secondary-50/80
                        px-3 py-1.5
                        shadow-soft
                        hover:bg-secondary-100
                        transition
                      "
                    >
                      <Trash2 size={13} />
                      Clear cart
                    </button>
                  </div>

                  {/* Summary card */}
                  <div
                    className="
                      rounded-2xl
                      bg-neutral-50/90
                      border border-neutral-200/80
                      shadow-soft
                      backdrop-blur-md
                      p-4 sm:p-5
                      flex flex-col gap-3
                    "
                  >
                    <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-1">
                      Order summary
                    </h2>

                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span>Subtotal</span>
                      <span className="font-semibold text-neutral-700">
                        {formatPriceBDT(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>

                    <div className="border-t border-neutral-200 my-2" />

                    <div className="flex items-center justify-between text-sm font-semibold text-neutral-700">
                      <span>Total</span>
                      <span>{formatPriceBDT(subtotal)}</span>
                    </div>

                    <p className="text-[11px] text-neutral-400">
                      Prices shown in BDT. You&apos;ll confirm your delivery
                      details on the checkout page.
                    </p>

                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="
                        mt-2 inline-flex items-center justify-center gap-2
                        rounded-full
                        px-4 py-2.5
                        text-xs sm:text-sm font-semibold
                        text-white
                        bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                        shadow-soft
                        hover:from-primary-500 hover:to-accent-500
                        transition
                      "
                    >
                      <ShoppingCart size={16} />
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
