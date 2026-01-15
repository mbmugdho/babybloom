// src/components/landing/FaqSection.jsx

import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Where do you deliver in Bangladesh?',
    a: 'We currently deliver across major cities in Bangladesh including Dhaka, Chattogram, Sylhet, Khulna, Rajshahi and more. Delivery availability for your exact area will be confirmed at checkout.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Most orders reach you within 2–5 working days, depending on your location. You’ll receive regular updates once your order is confirmed.',
  },
  {
    q: 'Are BabyBloom products safe for newborns?',
    a: 'We carefully curate products with gentle ingredients and baby-safe materials. Many items are dermatologist tested and clearly labeled with age recommendations and safety notes.',
  },
  {
    q: 'What is your return or replacement policy?',
    a: 'If you receive a damaged or incorrect product, please contact us within 48 hours with your order details. We’ll review and arrange a replacement or suitable resolution.',
  },
  {
    q: 'Do you offer any discounts or bundles?',
    a: 'Yes – you’ll often find promotions on best sellers and curated bundles. Subscribe to our newsletter to be the first to know about new offers and starter kits.',
  },
  {
    q: 'How can I get help choosing products?',
    a: 'You can explore by category, age, or need on the site. For extra guidance, reach out to our support team – we’re happy to suggest gentle essentials based on your baby’s age and needs.',
  },
]

export default function FaqSection() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-7 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            Questions from parents
          </p>
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-neutral-600 mb-2">
            Frequently asked questions
          </h2>
          <p className="text-sm md:text-base text-neutral-400">
            A quick guide to how BabyBloom works, what we offer, and how we
            support you through every stage of your baby's journey.
          </p>
        </div>

        <div
          className="
            rounded-3xl
            bg-white/80
            border border-neutral-200/80
            shadow-section
            backdrop-blur-md
            px-4 py-5
            sm:px-6 sm:py-6
            lg:px-8 lg:py-7
            max-w-5xl mx-auto
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="
                  group
                  rounded-2xl
                  border border-neutral-200
                  bg-neutral-50/80
                  px-3 sm:px-4 py-2.5
                  transition
                  open:bg-white
                  open:shadow-soft
                "
              >
                <summary
                  className="
                    flex items-center justify-between gap-4
                    cursor-pointer
                    list-none
                  "
                >
                  <span className="font-poppins text-sm sm:text-base font-semibold text-neutral-600">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="
                      text-neutral-400
                      flex-shrink-0
                      transition-transform duration-200
                      group-open:rotate-180
                    "
                  />
                </summary>
                <div className="mt-2 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
