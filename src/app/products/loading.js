import Container from '@/components/layout/Container'

export default function ProductsLoading() {
  const skeletonItems = new Array(8).fill(null)

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Header skeleton */}
        <div className="mb-6 md:mb-8">
          <div className="h-4 w-40 rounded-full bg-neutral-100 shimmer mb-2" />
          <div className="h-7 w-56 rounded-full bg-neutral-100 shimmer mb-3" />
          <div className="h-4 w-72 rounded-full bg-neutral-100 shimmer max-w-md" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {skeletonItems.map((_, idx) => (
            <div
              key={idx}
              className="
                relative overflow-hidden
                rounded-2xl
                border border-white/60
                bg-white/70
                shadow-soft
                backdrop-blur-md
                p-4 md:p-5
              "
            >
              {/* Decorative glows */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary-100/40 blur-2xl" />
              <div className="pointer-events-none absolute -left-14 -bottom-12 h-24 w-32 rounded-full bg-accent-100/40 blur-2xl" />

              <div className="relative z-10 space-y-3">
                {/* Badges row */}
                <div className="flex items-center justify-between mb-1">
                  <div className="h-5 w-20 rounded-full bg-neutral-100 shimmer" />
                  <div className="h-5 w-12 rounded-full bg-neutral-100 shimmer" />
                </div>

                {/* Image */}
                <div className="h-36 sm:h-40 w-full rounded-xl bg-neutral-100 shimmer mb-3" />

                {/* Title */}
                <div className="h-4 w-40 rounded-full bg-neutral-100 shimmer mb-1" />
                <div className="h-3 w-28 rounded-full bg-neutral-100 shimmer mb-3" />

                {/* Price + rating */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-4 w-24 rounded-full bg-neutral-100 shimmer" />
                    <div className="h-3 w-20 rounded-full bg-neutral-100 shimmer" />
                  </div>
                  <div className="h-4 w-16 rounded-full bg-neutral-100 shimmer" />
                </div>

                {/* Button */}
                <div className="h-8 w-full rounded-full bg-neutral-100 shimmer mt-3" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
