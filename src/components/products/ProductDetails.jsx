'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  Star,
  Leaf,
  ShieldCheck,
  PackageOpen,
  CheckCircle2,
  Tag,
  ShoppingCart,
  ArrowLeft,
} from 'lucide-react'

function formatPriceBDT(amount) {
  if (typeof amount !== 'number') return ''
  return `৳${amount.toLocaleString('en-BD')}`
}

const CART_KEY = 'babybloom_cart'

function getCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(cart) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  } catch {
    // ignore
  }
}

export default function ProductDetails({ product }) {
  const router = useRouter()

  const mainImage = product.images?.[0] || product.image
  const galleryImages =
    product.images && product.images.length > 1
      ? product.images
      : [product.image || '/images/products/placeholder.jpg']

  const rating = typeof product.rating === 'number' ? product.rating : 0
  const reviews = product.reviewsCount || 0

  const features = product.features || []
  const howToUse = product.howToUse || []
  const ingredients = product.ingredients || []
  const tags = product.tags || []

  const badgeLabel = product.isBestSeller
    ? 'Best seller'
    : product.isNewArrival
    ? 'New arrival'
    : product.isFeatured
    ? 'Featured pick'
    : null

  const handleGoBack = () => {
    router.back()
  }

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('This item is currently out of stock.')
      return
    }

    const id = product.productId || product._id || product.slug
    if (!id) {
      toast.error('Unable to add this item to cart.')
      return
    }

    const cart = getCart()
    const existingIndex = cart.findIndex((item) => item.id === id)

    if (existingIndex > -1) {
      // increment quantity if  in cart
      cart[existingIndex].quantity += 1
    } else {
      cart.push({
        id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: mainImage || product.image,
        quantity: 1,
        inStock: product.inStock,
        stockQuantity: product.stockQuantity,
        categorySlug: product.categorySlug,
        brand: product.brand,
      })
    }

    saveCart(cart)
    toast.success('Added to cart')
    router.push('/cart')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
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
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:text-primary-500 transition-colors">
            Home
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href="/products"
            className="hover:text-primary-500 transition-colors"
          >
            Products
          </Link>
          {product.categorySlug && (
            <>
              <span className="text-neutral-300">/</span>
              <Link
                href={`/categories/${product.categorySlug}`}
                className="hover:text-primary-500 transition-colors"
              >
                {product.categoryName ||
                  product.categorySlug.replace(/-/g, ' ')}
              </Link>
            </>
          )}
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-500">{product.name}</span>
        </div>

        {/* Main content grid */}
        <div className="grid gap-7 lg:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] items-start">
          {/* Left: images */}
          <div className="space-y-4">
            {/* Main image  */}
            <div
              className="
                relative overflow-hidden
                rounded-2xl
                border border-white/70
                bg-neutral-50
                shadow-soft
                h-[260px] sm:h-[300px] md:h-[340px]
              "
            >
              <Image
                src={mainImage || '/images/products/placeholder.jpg'}
                alt={product.name || 'Product image'}
                fill
                className="object-contain p-4"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-neutral-900/35 flex items-center justify-center">
                  <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-600 shadow-soft">
                    Out of stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails  */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="
                      relative flex-shrink-0
                      h-16 w-16 sm:h-18 sm:w-18
                      rounded-xl
                      overflow-hidden
                      border border-white/70
                      bg-neutral-50
                      shadow-soft
                    "
                  >
                    <Image
                      src={img || '/images/products/placeholder.jpg'}
                      alt={`${product.name || 'Product'} image ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Small meta strip */}
            <div className="flex flex-wrap gap-2 text-[11px]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/80 border border-primary-100 px-3 py-1 text-primary-600 shadow-soft">
                <Leaf size={13} className="text-primary-500" />
                Gentle & baby‑friendly selection
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-50/80 border border-secondary-100 px-3 py-1 text-secondary-700 shadow-soft">
                <ShieldCheck size={13} className="text-secondary-500" />
                Curated for families in Bangladesh
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div className="space-y-5">
            {/* Heading + rating */}
            <div>
              {badgeLabel && (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/90 border border-primary-100 px-3 py-1 text-[11px] font-semibold text-primary-600 shadow-soft mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>{badgeLabel}</span>
                </div>
              )}

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-1.5">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                <span>
                  Brand:{' '}
                  <span className="font-medium text-neutral-500">
                    {product.brand}
                  </span>
                </span>
                {product.ageRange && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span>Age: {product.ageRange}</span>
                  </>
                )}
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-accent-500 fill-accent-500" />
                  <span className="font-semibold text-neutral-600">
                    {rating ? rating.toFixed(1) : '4.5'}
                  </span>
                  {reviews > 0 && (
                    <span className="text-neutral-400">
                      ({reviews} reviews)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Price / stock card */}
            <div
              className="
                rounded-2xl
                bg-neutral-50/80
                border border-neutral-200/80
                shadow-soft
                backdrop-blur-md
                p-4 sm:p-5
                flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between
              "
            >
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl md:text-3xl font-poppins font-semibold text-primary-600">
                    {formatPriceBDT(product.price)}
                  </span>
                  {product.originalPrice &&
                    product.originalPrice > product.price && (
                      <span className="text-sm text-neutral-400 line-through">
                        {formatPriceBDT(product.originalPrice)}
                      </span>
                    )}
                  {product.discount ? (
                    <span className="rounded-full bg-secondary-100 px-2 py-0.5 text-[11px] font-semibold text-secondary-800 border border-secondary-200 shadow-soft">
                      Save {product.discount}%
                    </span>
                  ) : null}
                </div>
                <p className="text-xs text-neutral-400">
                  Inclusive of all taxes • Prices shown in BDT
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                {product.inStock ? (
                  <>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/80 border border-primary-100 px-3 py-1 text-[11px] font-semibold text-primary-600 shadow-soft">
                      <CheckCircle2 size={13} className="text-primary-500" />
                      In stock • {product.stockQuantity || 0} available
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Ships within Bangladesh
                    </span>
                  </>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-[11px] font-semibold text-neutral-500 shadow-soft">
                    <PackageOpen size={13} />
                    Currently out of stock
                  </span>
                )}
              </div>
            </div>

            {/* Actions: Go back + Add to cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleGoBack}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  px-4 py-2.5
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
                Go back
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  px-5 py-2.5
                  text-xs sm:text-sm font-semibold
                  text-white
                  bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                  shadow-soft
                  hover:from-primary-500 hover:to-accent-500
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition
                  flex-1 sm:flex-none
                "
              >
                <ShoppingCart size={16} />
                {product.inStock ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>

            {/* Short description */}
            {product.shortDescription && (
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            {/* Features + how to use */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {/* Features */}
              {features.length > 0 && (
                <div>
                  <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-2">
                    Key features
                  </h2>
                  <ul className="space-y-1.5 text-sm text-neutral-500">
                    {features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to use */}
              {howToUse.length > 0 && (
                <div>
                  <h2 className="font-poppins text-sm font-semibold text-neutral-600 mb-2">
                    How to use
                  </h2>
                  <ol className="space-y-1.5 text-sm text-neutral-500 list-decimal list-inside">
                    {howToUse.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Safety info + ingredients */}
            {(product.safetyInfo || ingredients.length > 0) && (
              <div className="grid gap-4 md:gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                {product.safetyInfo && (
                  <div
                    className="
                      rounded-2xl
                      bg-secondary-50/80
                      border border-secondary-200/80
                      shadow-soft
                      backdrop-blur-md
                      p-4
                      text-sm
                    "
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={16} className="text-secondary-600" />
                      <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-secondary-700">
                        Safety information
                      </h3>
                    </div>
                    <p className="text-secondary-800 text-sm leading-relaxed">
                      {product.safetyInfo}
                    </p>
                  </div>
                )}

                {ingredients.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf size={16} className="text-primary-600" />
                      <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
                        Ingredients / materials
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="
                            inline-flex items-center gap-1
                            rounded-full
                            bg-primary-50/80
                            border border-primary-100/80
                            px-3 py-1
                            text-[11px]
                            text-primary-700
                            shadow-soft
                          "
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="
                      inline-flex items-center gap-1
                      rounded-full
                      bg-neutral-50/90
                      border border-neutral-200/80
                      px-3 py-1
                      text-[11px]
                      text-neutral-500
                      shadow-soft
                    "
                  >
                    <Tag size={12} className="text-primary-400" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}