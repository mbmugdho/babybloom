import Container from '@/components/layout/Container'

export const dynamic = 'force-static'

export const metadata = {
  title: 'About BabyBloom',
  description:
    'Learn more about BabyBloom – a curated baby products store built to make it easier for parents in Bangladesh to choose gentle, trusted essentials.',
}

export default function AboutPage() {
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
            max-w-4xl mx-auto
          "
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                About us
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
                A cozy corner for modern parents
              </h1>
              <p className="text-sm md:text-base text-neutral-400 max-w-2xl">
                BabyBloom was created to make it easier for parents in
                Bangladesh to find gentle, trustworthy baby essentials without
                feeling overwhelmed by endless options.
              </p>
            </div>

            <div className="space-y-3 text-sm text-neutral-500 leading-relaxed">
              <p>
                Instead of a giant marketplace, BabyBloom focuses on a curated
                collection of products – from diapers and wipes to skincare,
                feeding, clothing, toys and safety essentials. Each item is
                chosen with comfort, safety, and everyday practicality in mind.
              </p>
              <p>
                We aim to bring together soft textures, thoughtful ingredients,
                and calm design into one experience, so you can spend less time
                researching and more time cuddling your little one.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs text-neutral-500 pt-2">
              <div className="rounded-2xl bg-primary-50/80 border border-primary-100 p-3 shadow-soft">
                <p className="font-poppins text-sm font-semibold text-neutral-700 mb-0.5">
                  Curated, not crowded
                </p>
                <p>
                  A focused selection of essentials instead of thousands of
                  random options.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-50/80 border border-secondary-100 p-3 shadow-soft">
                <p className="font-poppins text-sm font-semibold text-neutral-700 mb-0.5">
                  Built for Bangladesh
                </p>
                <p>
                  Products and messaging tailored for local families and daily
                  life here.
                </p>
              </div>
              <div className="rounded-2xl bg-accent-50/80 border border-accent-100 p-3 shadow-soft">
                <p className="font-poppins text-sm font-semibold text-neutral-700 mb-0.5">
                  Gentle by design
                </p>
                <p>
                  A focus on soft, baby‑friendly formulations and materials
                  wherever possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
