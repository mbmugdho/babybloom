import Container from '@/components/layout/Container'
import ContactForm from './ContactForm'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Contact Us | BabyBloom',
  description:
    'Get in touch with the BabyBloom team for questions about products, orders, or partnerships.',
}

export default function ContactPage() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <ContactForm />
      </Container>
    </section>
  )
}