import BestSellersSection from "@/components/landing/BestSellersSection";
import CategoriesSection from "@/components/landing/CategoriesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <BestSellersSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
