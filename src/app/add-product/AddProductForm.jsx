'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tag, CheckCircle2, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AddProductForm({ categories }) {
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    brand: '',
    price: '',
    originalPrice: '',
    discount: '',
    categoryId: categories[0]?.categoryId || '',
    categorySlug: categories[0]?.slug || '',
    ageRange: '',
    image: '',
    images: '',
    shortDescription: '',
    longDescription: '',
    features: '',
    howToUse: '',
    safetyInfo: '',
    ingredients: '',
    tags: '',
    isFeatured: false,
    isBestSeller: false,
    isNewArrival: false,
  })

  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleCategoryChange(e) {
    const value = e.target.value
    const cat = categories.find((c) => c.categoryId === value)
    setForm((prev) => ({
      ...prev,
      categoryId: value,
      categorySlug: cat?.slug || '',
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const priceNum = Number(form.price) || 0
      const originalPriceNum = form.originalPrice
        ? Number(form.originalPrice)
        : null
      let discountNum = form.discount ? Number(form.discount) : 0

      // auto-calc discount if not provided but original price is present
      if (!discountNum && originalPriceNum && priceNum) {
        discountNum = Math.round(100 - (priceNum / originalPriceNum) * 100)
      }

      const payload = {
        name: form.name,
        brand: form.brand,
        price: priceNum,
        originalPrice: originalPriceNum,
        discount: discountNum,
        category: form.categoryId,
        categorySlug: form.categorySlug,
        ageRange: form.ageRange,
        image: form.image,
        images: form.images
          ? form.images
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean)
          : [form.image].filter(Boolean),
        shortDescription: form.shortDescription,
        longDescription: form.longDescription,
        features: form.features
          ? form.features
              .split('\n')
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
        howToUse: form.howToUse
          ? form.howToUse
              .split('\n')
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
        safetyInfo: form.safetyInfo || '',
        ingredients: form.ingredients
          ? form.ingredients
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
        tags: form.tags
          ? form.tags
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
        isFeatured: form.isFeatured,
        isBestSeller: form.isBestSeller,
        isNewArrival: form.isNewArrival,
      }

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to create product')
      }

      toast.success('Product created successfully')
      router.push('/admin')
    } catch (err) {
      toast.error(err.message || 'Failed to create product')
    } finally {
      setSubmitting(false)
    }
  }

  return (
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
      {/* Glows */}
      <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Back button */}
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="
            inline-flex items-center gap-2
            rounded-full
            px-3 py-1.5
            text-xs font-semibold
            text-neutral-600
            border border-neutral-200
            bg-white/80
            shadow-soft
            hover:bg-neutral-50
            transition
          "
        >
          <ArrowLeft size={14} />
          Back to dashboard
        </button>
        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            Admin · Add product
          </p>
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
            Create a new product
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl">
            Add a new curated baby essential to the BabyBloom catalog. Fill in
            all the key details, then publish to your store.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Basic info */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Product name
              </label>
              <input
                name="name"
                value={form.name}
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
                placeholder="e.g. Gentle Baby Lotion"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Brand
              </label>
              <input
                name="brand"
                value={form.brand}
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
                placeholder="e.g. BabyBloom Naturals"
                required
              />
            </div>
          </div>

          {/* Category + age */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Category
              </label>
              <select
                name="categoryId"
                value={form.categoryId}
                onChange={handleCategoryChange}
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
              >
                {categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Age range
              </label>
              <input
                name="ageRange"
                value={form.ageRange}
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
                placeholder="e.g. 0-12 months"
                required
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Price (BDT)
              </label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                type="number"
                min="0"
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
                Original price (optional)
              </label>
              <input
                name="originalPrice"
                value={form.originalPrice}
                onChange={handleChange}
                type="number"
                min="0"
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

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Discount % (optional)
              </label>
              <input
                name="discount"
                value={form.discount}
                onChange={handleChange}
                type="number"
                min="0"
                max="100"
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
                placeholder="Auto-calculated if left empty"
              />
            </div>
          </div>

          {/* Images */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Main image URL
              </label>
              <input
                name="image"
                value={form.image}
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
                placeholder="https://..."
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Additional image URLs (comma separated)
              </label>
              <input
                name="images"
                value={form.images}
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
                placeholder="https://..., https://..."
              />
            </div>
          </div>

          {/* Descriptions */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Short description
            </label>
            <input
              name="shortDescription"
              value={form.shortDescription}
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
              placeholder="One-line summary for cards."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Long description
            </label>
            <textarea
              name="longDescription"
              value={form.longDescription}
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
              rows={4}
              placeholder="Detailed description for the product page."
              required
            />
          </div>

          {/* Features / How to use */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Features (one per line)
              </label>
              <textarea
                name="features"
                value={form.features}
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
                rows={4}
                placeholder="- Gentle on skin- Hypoallergenic"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                How to use (one per line)
              </label>
              <textarea
                name="howToUse"
                value={form.howToUse}
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
                rows={4}
                placeholder="- Apply a small amount- Massage gently"
              />
            </div>
          </div>

          {/* Safety, ingredients, tags */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Safety information
            </label>
            <textarea
              name="safetyInfo"
              value={form.safetyInfo}
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
              placeholder="e.g. For external use only. Avoid contact with eyes."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Ingredients / materials (comma separated)
              </label>
              <input
                name="ingredients"
                value={form.ingredients}
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
                placeholder="e.g. Aloe vera, Chamomile extract"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Tags (comma separated)
              </label>
              <div className="relative">
                <Tag
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400"
                />
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  className="
                    w-full rounded-full border
                    bg-white/80
                    pl-8 pr-4 py-2.5 text-sm
                    text-neutral-600
                    border-neutral-200
                    shadow-soft
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-primary-400/70
                    focus-visible:border-primary-300
                    transition
                  "
                  placeholder="e.g. lotion, newborn, sensitive skin"
                />
              </div>
            </div>
          </div>

          {/* Flags */}
          <div className="flex flex-wrap gap-3 text-xs text-neutral-500">
            <label className="inline-flex items-center gap-2 rounded-full bg-primary-50/80 border border-primary-100 px-3 py-1.5 shadow-soft">
              <input
                type="checkbox"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleChange}
              />
              <span>Featured</span>
            </label>
            <label className="inline-flex items-center gap-2 rounded-full bg-accent-50/80 border border-accent-100 px-3 py-1.5 shadow-soft">
              <input
                type="checkbox"
                name="isBestSeller"
                checked={form.isBestSeller}
                onChange={handleChange}
              />
              <span>Best seller</span>
            </label>
            <label className="inline-flex items-center gap-2 rounded-full bg-secondary-50/80 border border-secondary-100 px-3 py-1.5 shadow-soft">
              <input
                type="checkbox"
                name="isNewArrival"
                checked={form.isNewArrival}
                onChange={handleChange}
              />
              <span>New arrival</span>
            </label>
          </div>

          {/* Submit */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-[11px] text-neutral-400 inline-flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-primary-500" />
              Double-check details before publishing to the store.
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
              {submitting ? 'Creating…' : 'Create product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
