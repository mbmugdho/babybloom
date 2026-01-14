'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const slides = [
  {
    image: 'https://ik.imagekit.io/azfnpskmy/hero01.jpg',
    title: 'Gentle Care for Little Ones',
    subtitle: 'Premium baby essentials made with love',
  },
  {
    image: 'https://ik.imagekit.io/azfnpskmy/hero02.jpg',
    title: 'Soft. Safe. Trusted.',
    subtitle: 'Everything your baby needs, in one place',
  },
  {
    image: 'https://ik.imagekit.io/azfnpskmy/hero03.jpg',
    title: 'Because Every Baby Deserves the Best',
    subtitle: 'Curated products for modern parents',
  },
]

export default function HeroSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-4 lg:mt-8">
      <div className="mx-auto max-w-container">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-100 shadow-section">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]">
                  {/* Banner Image (Next Image with ImageKit) */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />

                  {/* Overlay using your palette */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-neutral-500/70 via-neutral-500/20 to-transparent" />

                  {/* Centered Text + CTA */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                      <span
                        className="
                          inline-block
                          bg-clip-text
                          text-transparent
                          bg-[length:200%_200%]
                          animate-hero-title-gradient
                        "
                      >
                        {slide.title}
                      </span>
                    </h1>

                    <p className="text-white text-sm sm:text-base md:text-lg mb-5 max-w-xl">
                      {slide.subtitle}
                    </p>

                    <Link
                      href="/categories"
                      className="relative z-10 inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold shadow-lg
                                 transition-transform hover:scale-105 bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 hover:from-primary-500 hover:to-accent-500"
                    >
                      Browse Category
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
