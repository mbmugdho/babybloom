'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProductFilters({
  categories,
  total,
  initialCategory,
  initialSort,
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentCategory =
    searchParams.get('category') || initialCategory || ''
  const currentSort = searchParams.get('sort') || initialSort || 'latest'

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams.toString())

    if (key === 'category') {
      if (!value || value === 'all') {
        params.delete('category')
      } else {
        params.set('category', value)
      }
    }

    if (key === 'sort') {
      if (!value || value === 'latest') {
        params.delete('sort')
      } else {
        params.set('sort', value)
      }
    }

    // whenever filters change, I reset the page to 1
    params.delete('page')

    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs md:text-sm">
      {/* Left: summary */}
      <div className="text-neutral-400">
        <span className="font-medium text-neutral-600">
          {total.toLocaleString('en-BD')}
        </span>{' '}
        products
        {currentCategory && (
          <>
            {' '}
            in{' '}
            <span className="font-medium text-neutral-600">
              {
                categories.find((c) => c.slug === currentCategory)?.name ||
                currentCategory.replace(/-/g, ' ')
              }
            </span>
          </>
        )}
      </div>

      {/* Right: controls */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Category filter */}
        <div
          className="
            inline-flex items-center gap-2
            rounded-full border border-neutral-200
            bg-white/80
            px-3 py-1.5
            shadow-soft
          "
        >
          <span className="text-[11px] font-bold text-primary-600 uppercase tracking-[0.16em]">
            Category
          </span>
          <select
            className="
              bg-transparent
              text-xs md:text-sm
              text-neutral-600
              border-none
              outline-none
              focus:outline-none
              focus:ring-0
            "
            value={currentCategory || 'all'}
            onChange={(e) => updateFilter('category', e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort filter */}
        <div
          className="
            inline-flex items-center gap-2
            rounded-full border border-primary-200
            bg-primary-50/80
            px-3 py-1.5
            shadow-soft
          "
        >
          <span className="text-[11px] font-bold text-primary-600 uppercase tracking-[0.16em]">
            Sort
          </span>
          <select
            className="
              bg-transparent
              text-xs md:text-sm
              text-primary-700
              border-none
              outline-none
              focus:outline-none
              focus:ring-0
            "
            value={currentSort || 'latest'}
            onChange={(e) => updateFilter('sort', e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}