export default function StoreStatsStrip() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="container">
        <div
          className="
            rounded-3xl
            bg-white/80
            border border-primary-100/80
            shadow-soft
            backdrop-blur-md
            px-4 py-4
            sm:px-6 sm:py-4
            flex flex-col gap-3
            sm:flex-row sm:items-center sm:justify-between
            text-[11px] sm:text-xs
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary-400" />
            <span className="font-semibold text-neutral-600">
              BabyBloom in numbers
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-neutral-500">
            <StatItem label="Curated products" value="72+" />
            <StatItem label="Essential categories" value="6" />
            <StatItem label="Average rating" value="4.8★" />
            <StatItem label="Happy families" value="10k+" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ label, value }) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="font-poppins text-sm font-semibold text-neutral-700">
        {value}
      </span>
      <span className="text-[11px] text-neutral-400">{label}</span>
    </div>
  )
}
