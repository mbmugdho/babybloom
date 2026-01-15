import Link from 'next/link'

export default function ProductPagination({
  page,
  totalPages,
  searchParams = {},
  basePath = '/products',
}) {
  if (totalPages <= 1) return null

  const { category, sort } = searchParams

  const createHref = (pageNumber) => {
    const params = new URLSearchParams()

    if (category) params.set('category', category)
    if (sort && sort !== 'latest') params.set('sort', sort)
    if (pageNumber > 1) params.set('page', String(pageNumber))

    const qs = params.toString()
    return qs ? `${basePath}?${qs}` : basePath
  }

  const pages = []
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i)
  }

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] sm:text-xs text-neutral-500">
      <div>
        Page <span className="font-semibold text-neutral-600">{page}</span> of{' '}
        <span className="font-semibold text-neutral-600">{totalPages}</span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {/* Previous */}
        {page > 1 ? (
          <Link
            href={createHref(page - 1)}
            className="
              px-3 py-1.5 rounded-full
              border border-neutral-200
              bg-white/80
              text-neutral-600
              shadow-soft
              hover:bg-neutral-50
              transition
            "
          >
            Previous
          </Link>
        ) : (
          <span
            className="
              px-3 py-1.5 rounded-full
              border border-neutral-100
              bg-white/60
              text-neutral-300
              shadow-soft
              cursor-not-allowed
            "
          >
            Previous
          </span>
        )}

        {/* Page numbers */}
        {pages.map((p) =>
          p === page ? (
            <span
              key={p}
              className="
                px-3 py-1.5 rounded-full
                bg-primary-500
                text-white
                text-xs
                font-semibold
                shadow-soft
              "
            >
              {p}
            </span>
          ) : (
            <Link
              key={p}
              href={createHref(p)}
              className="
                px-3 py-1.5 rounded-full
                border border-neutral-200
                bg-white/80
                text-neutral-600
                text-xs
                shadow-soft
                hover:bg-neutral-50
                transition
              "
            >
              {p}
            </Link>
          )
        )}

        {/* Next */}
        {page < totalPages ? (
          <Link
            href={createHref(page + 1)}
            className="
              px-3 py-1.5 rounded-full
              border border-neutral-200
              bg-white/80
              text-neutral-600
              shadow-soft
              hover:bg-neutral-50
              transition
            "
          >
            Next
          </Link>
        ) : (
          <span
            className="
              px-3 py-1.5 rounded-full
              border border-neutral-100
              bg-white/60
              text-neutral-300
              shadow-soft
              cursor-not-allowed
            "
          >
            Next
          </span>
        )}
      </div>
    </div>
  )
}
