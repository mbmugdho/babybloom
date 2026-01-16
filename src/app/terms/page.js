import Container from '@/components/layout/Container'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Terms of Service | BabyBloom',
  description:
    'Review the BabyBloom terms of service to understand the basic rules for using our website and placing orders.',
}

export default function TermsPage() {
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
                Terms of service
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
                Using BabyBloom responsibly
              </h1>
              <p className="text-sm md:text-base text-neutral-400">
                These terms outline the basic rules for using the BabyBloom
                website and placing orders for baby products.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  1. Acceptance of terms
                </h2>
                <p>
                  By accessing or using the BabyBloom website, you agree to
                  these terms of service. If you do not agree, please do not use
                  the site or place orders.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  2. Use of the website
                </h2>
                <p>
                  You agree to use BabyBloom only for lawful purposes and in a
                  way that does not infringe the rights of others, restrict
                  their use of the site, or damage the platform. Any attempt to
                  interfere with the functionality or security of the site is
                  strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  3. Product information and availability
                </h2>
                <p>
                  We do our best to keep product details, prices, and stock
                  levels accurate. However, occasional errors or stock changes
                  may occur. We reserve the right to update product information,
                  adjust pricing, or limit quantities without prior notice.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  4. Orders and payments
                </h2>
                <p>
                  When you place an order, you confirm that the information
                  provided is correct and that you are authorized to use the
                  selected payment method. An order is considered accepted once
                  it has been reviewed and confirmed by BabyBloom. We may cancel
                  or adjust orders in cases of error, suspected fraud, or
                  unavailability of items.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  5. Deliveries and returns
                </h2>
                <p>
                  Estimated delivery times are provided as a guideline and may
                  vary based on your location and courier conditions. Please
                  inspect your order on arrival and contact us promptly if
                  something is missing, damaged, or incorrect so we can help
                  resolve the issue.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  6. Intellectual property
                </h2>
                <p>
                  The BabyBloom name, branding, design, and content on this site
                  are owned or licensed by us. You may not copy, modify,
                  redistribute, or use them for commercial purposes without
                  prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  7. Changes to these terms
                </h2>
                <p>
                  We may update these terms from time to time to reflect changes
                  in our services or legal requirements. When we do, we will
                  update the date or version on this page. Continued use of the
                  site after such changes means you accept the updated terms.
                </p>
              </section>

              <section>
                <h2 className="font-poppins text-sm font-semibold text-neutral-700 mb-1">
                  8. Contact
                </h2>
                <p>
                  If you have any questions about these terms, please contact us
                  at{' '}
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