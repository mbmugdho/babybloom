import Link from 'next/link'

const ageChips = [
  { label: 'Newborn (0-3m)', query: 'newborn' },
  { label: '0-12 months', query: '0-12-months' },
  { label: '6-24 months', query: '6-24-months' },
  { label: '2+ years', query: '2-plus-years' },
]

const needChips = [
  { label: 'Sleep & bedtime', tag: 'sleep' },
  { label: 'Bath time', tag: 'bath' },
  { label: 'Feeding time', tag: 'feeding' },
  { label: 'On-the-go', tag: 'on-the-go' },
  { label: 'New baby starter kit', tag: 'starter-kit' },
]

export default function ShopByAgeSection() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="container">
        <div
          className="
            rounded-3xl
            bg-white/80
            border border-neutral-200/80
            shadow-soft
            backdrop-blur-md
            px-4 py-5
            sm:px-6 sm:py-6
            lg:px-8 lg:py-7
          "
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-1.5">
                Shop by age or need
              </p>
              <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-semibold text-neutral-600 ">
                Find what fits your baby's chapter
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Browse gentle essentials tailored for specific age ranges and
                everyday moments - from sleepy snuggles to on-the-go adventures.
              </p>
            </div>

            {/* Chips */}
            <div className="flex-1 grid gap-3 sm:grid-cols-2">
              {/* Age */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1.5">
                  By age
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ageChips.map((chip) => (
                    <Link
                      key={chip.query}
                      href={`/products?age=${encodeURIComponent(chip.query)}`}
                      className="
                        inline-flex items-center gap-1.5
                        rounded-full
                        px-3 py-1.5
                        text-[11px] font-semibold
                        bg-primary-50/80
                        border border-primary-100
                        text-primary-600
                        shadow-soft
                        hover:bg-primary-100
                        transition
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Need */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1.5">
                  By need
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {needChips.map((chip) => (
                    <Link
                      key={chip.tag}
                      href={`/products?need=${encodeURIComponent(chip.tag)}`}
                      className="
                        inline-flex items-center gap-1.5
                        rounded-full
                        px-3 py-1.5
                        text-[11px] font-semibold
                        bg-accent-50/80
                        border border-accent-100
                        text-accent-700
                        shadow-soft
                        hover:bg-accent-100
                        transition
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
