import Container from '@/components/layout/Container'

export const dynamic = 'force-static'

export const metadata = {
  title: 'About BabyBloom',
  description:
    'Learn more about BabyBloom – a curated baby products store built to make it easier for parents in Bangladesh to choose gentle, trusted essentials.',
}

const team = [
  {
    name: 'Md Montasir Billah',
    role: 'Founder & Full‑Stack Developer',
    bio: 'Builds the product experience from database to UI, making sure every interaction feels calm and intuitive.',
    initials: 'MB',
  },
  {
    name: 'Ayesha Rahman',
    role: 'UX & Visual Designer',
    bio: 'Shapes the BabyBloom look & feel with soft, parent‑friendly design and clear, simple flows.',
    initials: 'AR',
  },
  {
    name: 'Dr. Farhana Ali',
    role: 'Pediatric Advisor',
    bio: 'Helps review product categories and content so parents can feel more confident about what they choose.',
    initials: 'FA',
  },
]

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
            max-w-5xl mx-auto
            space-y-8 md:space-y-10
          "
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-8 md:space-y-10">
            {/* Intro / Hero copy */}
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                  About us
                </p>
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700">
                  A cozy corner for modern parents in Bangladesh
                </h1>
                <p className="text-sm md:text-base text-neutral-400 max-w-xl">
                  BabyBloom was created to make it easier for parents in
                  Bangladesh to find gentle, trustworthy baby essentials without
                  feeling overwhelmed by endless options and noisy marketplaces.
                </p>
              </div>

              {/* Highlight card */}
              <div
                className="
                  rounded-2xl
                  bg-gradient-to-br from-primary-50 via-white to-secondary-50
                  border border-primary-100/80
                  shadow-soft
                  backdrop-blur-md
                  px-4 py-4 sm:px-5 sm:py-5
                  text-xs sm:text-sm
                  text-neutral-500
                  space-y-2
                "
              >
                <p className="font-poppins text-sm font-semibold text-neutral-700">
                  Curated, not crowded
                </p>
                <p>
                  Instead of thousands of random items, BabyBloom focuses on a
                  thoughtful selection of diapers, wipes, skincare, feeding,
                  clothing, toys and safety essentials that actually make sense
                  together.
                </p>
                <p>
                  The goal is simple: help you feel calm and confident when
                  choosing something for the little person who matters most.
                </p>
              </div>
            </div>

            {/* 3 pillars */}
            <div className="grid gap-4 sm:grid-cols-3 text-xs text-neutral-500 pt-2">
              <div className="rounded-2xl bg-primary-50/80 border border-primary-100 p-3 shadow-soft">
                <p className="font-poppins text-sm font-semibold text-neutral-700 mb-0.5">
                  Curated, not crowded
                </p>
                <p>
                  A focused collection of baby essentials instead of endless
                  scrolling and decision fatigue.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-50/80 border border-secondary-100 p-3 shadow-soft">
                <p className="font-poppins text-sm font-semibold text-neutral-700 mb-0.5">
                  Built for Bangladesh
                </p>
                <p>
                  Product choices, language, and expectations shaped around real
                  families and daily life here.
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

            {/* Our story */}
            <div className="grid gap-6 md:grid-cols-2 text-sm text-neutral-500 leading-relaxed">
              <div className="space-y-2">
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  Our story
                </h2>
                <p>
                  BabyBloom started as a small idea: what if parents could shop
                  for baby essentials in a space that felt as gentle as the
                  products themselves? No flashing banners and no aggressive
                  upsell, just calm, well‑structured shelves.
                </p>
                <p>
                  We leaned into soft visuals, clear product descriptions, and a
                  layout that mirrors how parents naturally think: by age, need,
                  and everyday routines.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  Our promise
                </h2>
                <p>
                  We are not trying to be the biggest store. We would rather be
                  a reliable, friendly stop in your day – a place you come back
                  to because it feels warm, thoughtful, and easy to use.
                </p>
                <p>
                  As BabyBloom grows, we will keep improving the experience:
                  refining categories, surfacing the right products at the right
                  time, and listening closely to what makes life easier for
                  families like yours.
                </p>
              </div>
            </div>

            {/* Meet our team */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-1.5">
                    Meet our team
                  </p>
                  <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-semibold text-neutral-700">
                    The humans behind BabyBloom
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-1">
                    A small, focused group working across design, development,
                    and care to build a calmer baby shopping experience.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="
                      relative overflow-hidden
                      rounded-2xl
                      border border-neutral-200/80
                      bg-white/90
                      shadow-soft
                      backdrop-blur-md
                      p-3.5 sm:p-4
                      flex flex-col
                      text-xs sm:text-sm
                    "
                  >
                    <div className="pointer-events-none absolute -top-8 -right-8 h-16 w-16 rounded-full bg-primary-100/40 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-20 w-24 rounded-full bg-accent-100/40 blur-2xl" />

                    <div className="relative z-10 flex items-center gap-3 mb-2">
                      <div
                        className="
                          h-10 w-10 sm:h-11 sm:w-11
                          rounded-full
                          bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100
                          border border-white
                          shadow-soft
                          flex items-center justify-center
                          font-poppins font-semibold text-xs text-neutral-600
                        "
                      >
                        {member.initials}
                      </div>
                      <div>
                        <p className="font-poppins text-sm font-semibold text-neutral-700">
                          {member.name}
                        </p>
                        <p className="text-[11px] text-primary-600">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="relative z-10 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}