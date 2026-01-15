import Container from '@/components/layout/Container'

export const metadata = {
  title: 'Checkout | BabyBloom',
  description:
    'Complete your BabyBloom order with your delivery details. Secure checkout for curated baby essentials in Bangladesh.',
}

export default function CheckoutPage() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div
          className="
            rounded-3xl
            border border-neutral-200/80
            bg-white/80
            shadow-section
            backdrop-blur-md
            px-4 py-6
            sm:px-6 sm:py-7
            lg:px-8 lg:py-8
            text-sm
          "
        >
          <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-neutral-700 mb-2">
            Checkout
          </h1>
          <p className="text-neutral-400 mb-4">
            This page will be protected. After you implement registration and
            login, only authenticated users will be able to place orders from
            here.
          </p>
          <p className="text-neutral-400">
            Next steps (Phase 7/8): implement register, login, and a protected
            delivery form here to complete the order.
          </p>
        </div>
      </Container>
    </section>
  )
}
