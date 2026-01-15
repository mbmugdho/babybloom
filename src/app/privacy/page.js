import Container from '@/components/layout/Container'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Privacy Policy | BabyBloom',
  description:
    'Read the BabyBloom privacy policy to learn how we collect, use, and protect your information when you shop for baby essentials.',
}

export default function PrivacyPage() {
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
            text-sm text-neutral-500
          "
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                Privacy policy
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
                How we handle your information
              </h1>
              <p className="text-sm md:text-base text-neutral-400">
                Your privacy matters. This page explains how BabyBloom collects,
                uses, and protects your information when you browse our site and
                place orders.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  1. Information we collect
                </h2>
                <p>
                  When you use BabyBloom, we may collect basic information such
                  as your name, email address, phone number, delivery address,
                  and order details. We also collect non‑identifying technical
                  data such as device type, browser information, and usage
                  patterns to help improve the site.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  2. How we use your information
                </h2>
                <p>
                  We use your information primarily to process and deliver your
                  orders, provide customer support, send important updates about
                  your purchases, and improve the BabyBloom experience. We may
                  occasionally share curated updates or offers if you opt in to
                  receive them.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  3. Cookies and analytics
                </h2>
                <p>
                  Like most websites, we use cookies and similar technologies to
                  keep your session active, remember basic preferences, and
                  understand how visitors use the site. This helps us keep the
                  experience smooth and identify areas we can improve.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  4. Sharing your data
                </h2>
                <p>
                  We do not sell your personal data. We only share information
                  with trusted service providers (for example, payment
                  processors or delivery partners) when it is necessary to
                  complete your order or operate BabyBloom. These partners are
                  expected to handle your data securely and lawfully.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  5. Data retention and security
                </h2>
                <p>
                  We keep your information only for as long as needed to provide
                  our services, maintain basic business records, and comply with
                  applicable laws. We use reasonable technical and
                  organizational measures to help protect your data against
                  unauthorized access, loss, or misuse.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  6. Your choices
                </h2>
                <p>
                  You can contact us if you’d like to review or update your
                  account details, or if you no longer wish to receive
                  marketing‑style emails. Some basic transactional emails (for
                  example, order confirmations) will still be sent as they are
                  necessary to complete your purchases.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  7. Contact
                </h2>
                <p>
                  If you have any questions about this privacy policy or how
                  your information is used, please reach out to us at{' '}
                  <span className="font-medium text-primary-600">
                    support@babybloom.com
                  </span>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
