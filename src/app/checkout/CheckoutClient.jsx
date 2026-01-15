'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingCart, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'

const CART_KEY = 'babybloom_cart'

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

function formatPriceBDT(amount) {
  if (typeof amount !== 'number') return '৳0'
  return `৳${amount.toLocaleString('en-BD')}`
}

export default function CheckoutClient() {
  const router = useRouter()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const cart = readCart()
    setItems(cart)
    setLoading(false)
  }, [])

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  )

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    if (!form.fullName.trim()) return 'Please enter your full name.'
    if (!form.phone.trim()) return 'Please enter your phone number.'
    if (!form.address.trim()) return 'Please enter your address.'
    if (!form.city.trim()) return 'Please enter your city.'
    return ''
  }

  function clearCart() {
    setItems([])
    writeCart([])
  }

  async function handleConfirmOrder(e) {
    e.preventDefault()
    if (items.length === 0) {
      toast.error('Your cart is empty.')
      return
    }

    const error = validate()
    if (error) {
      toast.error(error)
      return
    }

    setSubmitting(true)

    try {

      // Simulate async delay
      await new Promise((res) => setTimeout(res, 800))

      clearCart()
      toast.success('Order confirmed! Thank you for shopping with BabyBloom.')

      router.push('/products')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-white/80 shadow-section backdrop-blur-md px-4 py-6 sm:px-6 sm:py-7">
        <div className="h-5 w-44 rounded-full bg-neutral-100 shimmer mb-3" />
        <div className="h-4 w-72 rounded-full bg-neutral-100 shimmer mb-6" />
        <div className="h-24 w-full rounded-2xl bg-neutral-100 shimmer" />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-white/80 shadow-section backdrop-blur-md px-4 py-6 sm:px-6 sm:py-7 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 border border-primary-100 text-primary-500 mb-3">
          <ShoppingCart size={22} />
        </div>
        <p className="font-poppins text-lg font-semibold text-neutral-600 mb-1">
          Your cart is empty
        </p>
        <p className="text-sm text-neutral-400 mb-4">
          Add some cozy essentials and then come back to checkout.
        </p>
        <button
          type="button"
          onClick={() => router.push('/products')}
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
          Browse products
        </button>
      </div>
    )
  }

  return (
    <div
      className="
        rounded-3xl
        border border-neutral-200/80
        bg-white/80
        shadow-section
        backdrop-blur-md
        px-4 py-6
        sm:px-6 sm:py-7
        lg:px-8 lg:py-8
        space-y-6
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-1">
          Checkout
        </p>
        <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-neutral-700">
          Delivery details
        </h1>
        <p className="text-sm text-neutral-400">
          Confirm your information so we can safely deliver your BabyBloom
          order.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
        {/* Form */}
        <form onSubmit={handleConfirmOrder} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Full name
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
                  text-neutral-600
                  border-neutral-200
                  shadow-soft
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-primary-400/70
                  focus-visible:border-primary-300
                  transition
                "
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Phone
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
                  text-neutral-600
                  border-neutral-200
                  shadow-soft
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-primary-400/70
                  focus-visible:border-primary-300
                  transition
                "
                placeholder="+880..."
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Address
            </label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="
                w-full rounded-full border
                bg-white/80
                px-4 py-2.5 text-sm
                text-neutral-600
                border-neutral-200
                shadow-soft
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-primary-400/70
                focus-visible:border-primary-300
                transition
              "
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                City
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
                  text-neutral-600
                  border-neutral-200
                  shadow-soft
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-primary-400/70
                  focus-visible:border-primary-300
                  transition
                "
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Postal code (optional)
              </label>
              <input
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
                  text-neutral-600
                  border-neutral-200
                  shadow-soft
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-primary-400/70
                  focus-visible:border-primary-300
                  transition
                "
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Notes (optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="
                w-full rounded-2xl border
                bg-white/80
                px-4 py-2.5 text-sm
                text-neutral-600
                border-neutral-200
                shadow-soft
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-primary-400/70
                focus-visible:border-primary-300
                transition
              "
              rows={3}
              placeholder="Any delivery instructions for the rider?"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-[11px] text-neutral-400 inline-flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-primary-500" />
              Your details will only be used to deliver this order.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full
                px-5 py-2.5
                text-xs sm:text-sm font-semibold
                text-white
                bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                shadow-soft
                hover:from-primary-500 hover:to-accent-500
                disabled:opacity-70 disabled:cursor-not-allowed
                transition
              "
            >
              {submitting ? 'Confirming…' : 'Confirm order'}
            </button>
          </div>
        </form>

        {/* Summary */}
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
          <h2 className="font-poppins text-sm font-semibold text-neutral-600">
            Order summary
          </h2>
          <div className="max-h-48 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-xs text-neutral-500 py-1"
              >
                <span className="truncate max-w-[60%]">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-semibold text-neutral-700">
                  {formatPriceBDT(
                    (item.price || 0) * (item.quantity || 0)
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-200 my-2" />
          <div className="flex items-center justify-between text-sm font-semibold text-neutral-700">
            <span>Total</span>
            <span>{formatPriceBDT(subtotal)}</span>
          </div>
          <p className="text-[11px] text-neutral-400">
            Shipping cost and exact delivery time will be confirmed after your
            order is received.
          </p>
        </div>
      </div>
    </div>
  )
}