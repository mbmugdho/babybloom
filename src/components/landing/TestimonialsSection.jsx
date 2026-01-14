'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Nusrat Jahan',
    role: 'First-time mom',
    location: 'Dhaka, Bangladesh',
    rating: 5,
    text: 'BabyBloom made it so easy to choose safe products without spending hours researching. Everything feels thoughtfully selected for our climate and culture.',
  },
  {
    name: 'Rafiq Ahmed',
    role: 'Dad of twins',
    location: 'Chattogram, Bangladesh',
    rating: 5,
    text: 'With twins, we don’t have time to compare a hundred brands. BabyBloom’s curation has been a lifesaver for our daily essentials.',
  },
  {
    name: 'Taslima Akter',
    role: 'Working mom',
    location: 'Sylhet, Bangladesh',
    rating: 5,
    text: 'The quality is consistently great, and I love how gentle everything is on my baby’s skin. Deliveries are fast and reliable.',
  },
  {
    name: 'Tanvir Hasan',
    role: 'New dad',
    location: 'Khulna, Bangladesh',
    rating: 4,
    text: 'As a new dad, I had no idea where to start. The categories and best sellers made it simple to build our starter kit.',
  },
  {
    name: 'Mitu Rahman',
    role: 'Mom of a toddler',
    location: 'Rajshahi, Bangladesh',
    rating: 5,
    text: 'We’ve reordered the same BabyBloom finds multiple times now. The toys and skincare have become our everyday favorites.',
  },
  {
    name: 'Dr. Farzana Ali',
    role: 'Pediatrician & mom',
    location: 'Dhaka, Bangladesh',
    rating: 5,
    text: 'As a pediatrician, I’m careful about what we use at home. BabyBloom stocks brands I actually trust and recommend to parents.',
  },
  {
    name: 'Sajidul Islam',
    role: 'Stay-at-home dad',
    location: 'Barishal, Bangladesh',
    rating: 5,
    text: 'Love how everything feels calm and intentional—from the packaging to the product quality. It never feels like a random marketplace.',
  },
  {
    name: 'Rumana Chowdhury',
    role: 'Mom of 2 under 4',
    location: 'Rangpur, Bangladesh',
    rating: 5,
    text: 'The diapers, wipes, and bath products have all been so gentle. Our younger one has sensitive skin and has done great with these.',
  },
  {
    name: 'Mahmudul Hasan',
    role: 'First-time parent',
    location: 'Gazipur, Bangladesh',
    rating: 4,
    text: 'I really appreciate the clear descriptions and age ranges. It takes away the guesswork and helps us buy only what we need.',
  },
  {
    name: 'Sadia Noor',
    role: 'Expecting mom',
    location: 'Narayanganj, Bangladesh',
    rating: 5,
    text: 'We built most of our baby list from BabyBloom. It feels curated, cozy, and a lot less overwhelming than other sites.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 md:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            What parents are saying
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-neutral-500 mb-4">
            Loved by modern families
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            Real stories from parents who trust BabyBloom to make everyday
            moments safer, softer, and a little more magical.
          </p>
        </motion.div>

        {/* Coverflow carousel */}
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] sm:!w-[320px] lg:!w-[360px]"
            >
              <motion.article
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="
                  relative overflow-hidden
                  rounded-2xl
                  border border-white/60
                  bg-white/75
                  shadow-soft
                  backdrop-blur-md
                  p-6 md:p-7
                "
              >
                {/* Decorative glows */}
                <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-primary-100/40 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-10 h-28 w-32 rounded-full bg-accent-100/40 blur-2xl" />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Top row: badge + rating */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 px-3 py-1 text-[11px] font-semibold text-white shadow-soft">
                      <Quote size={14} className="opacity-90" />
                      <span>Verified parent</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < t.rating
                                ? 'text-accent-500 fill-accent-500'
                                : 'text-neutral-200'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-neutral-500">
                        {t.rating.toFixed ? t.rating.toFixed(1) : t.rating}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                    “{t.text}”
                  </p>

                  {/* Name / meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pt-2">
                    <div>
                      <p className="font-poppins text-sm font-semibold text-neutral-600">
                        {t.name}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {t.role}
                        {t.location ? ` • ${t.location}` : ''}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/70 border border-primary-200/80 px-3 py-1 text-[11px] font-semibold text-primary-600 shadow-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>BabyBloom customer</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Aggregate trust line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-2 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/60 px-4 py-2 text-[11px] md:text-xs font-medium text-primary-700 shadow-soft backdrop-blur-md">
            <span className="flex -space-x-1">
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              <span className="h-2 w-2 rounded-full bg-secondary-400" />
              <span className="h-2 w-2 rounded-full bg-accent-400" />
            </span>
            <span>
              4.8★ average rating from caring parents who shop BabyBloom.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}