import BestSellersSection from '@/components/landing/BestSellersSection'
import CategoriesSection from '@/components/landing/CategoriesSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import HeroSection from '@/components/landing/HeroSection'
import NewsletterSection from '@/components/landing/NewsletterSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection'
import NewArrivalsSection from '@/components/landing/NewArrivalsSection'
import ShopByAgeSection from '@/components/landing/ShopByAgeSection'
import FaqSection from '@/components/landing/FaqSection'
import StoreStatsStrip from '@/components/landing/StoreStatsStrip'

export const metadata = {
  title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
  description: 'Shop curated baby products in Bangladesh – ...',
  openGraph: {
    title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
    description: 'Shop curated baby products in Bangladesh – ...',
    url: 'https://your-live-domain.com',
    siteName: 'BabyBloom',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
    description: 'Shop curated baby products in Bangladesh – ...',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ShopByAgeSection />
      <CategoriesSection />
      <BestSellersSection />
      <NewArrivalsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <StoreStatsStrip />
      <FaqSection />
      <NewsletterSection />
    </>
  )
}
