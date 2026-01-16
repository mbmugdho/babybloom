'use client'

import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col">
      {/* Animation fills the available height */}
      <div className="flex-1 w-full overflow-hidden">
        <DotLottieReact
          src="https://lottie.host/5ae65940-b013-4258-8c35-a10cf6c3fedf/y0R65cVlMS.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Buttons below the animation */}
      <div className="w-full py-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="
            inline-flex items-center justify-center
            rounded-full
            px-5 py-2.5
            text-sm font-semibold
            text-white
            bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
            shadow-soft
            hover:from-primary-500 hover:to-accent-500
            transition
          "
        >
          Back to home
        </Link>
        <Link
          href="/products"
          className="
            inline-flex items-center justify-center
            rounded-full
            px-4 py-2.5
            text-sm font-semibold
            text-primary-600
            bg-primary-50/90
            border border-primary-100
            shadow-soft
            hover:bg-primary-100
            transition
          "
        >
          Browse products
        </Link>
      </div>
    </section>
  )
}