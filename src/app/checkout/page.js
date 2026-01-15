import Container from '@/components/layout/Container'
import CheckoutClient from './CheckoutClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Checkout | BabyBloom',
  description:
    'Complete your BabyBloom order by providing your delivery details. Secure checkout for curated baby essentials in Bangladesh.',
}

export default function CheckoutPage() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <CheckoutClient />
      </Container>
    </section>
  )
}
