import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16">
      {/* Main footer card */}
      <div className="border-t border-primary-100/70 bg-white/70 backdrop-blur-md">
        <Container className="py-8 sm:py-10">
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-neutral-200/80
              bg-white/80
              shadow-section
              backdrop-blur-md
              px-4 py-6
              sm:px-6 sm:py-8
            "
          >
            {/* Decorative glows */}
            <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

            <div className="relative z-10 grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] text-sm">
              {/* Brand / intro */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50/80 border border-primary-100/80 px-3 py-1 text-[11px] font-semibold text-primary-600 shadow-soft mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>Thoughtful essentials for little blooms</span>
                </div>

                <h3 className="font-poppins text-lg font-semibold text-neutral-600 mb-2">
                  BabyBloom
                </h3>
                <p className="text-neutral-400 mb-3">
                  Curated baby products chosen for gentle care, soft textures,
                  and everyday moments with growing families across Bangladesh.
                </p>

                <p className="text-xs text-neutral-400">
                  Serving parents in Dhaka, Chattogram, Sylhet, and beyond.
                </p>
              </div>

              {/* Shop */}
              <div>
                <h4 className="font-poppins text-sm font-semibold text-neutral-600 mb-3">
                  Shop
                </h4>
                <ul className="space-y-1.5 text-neutral-400">
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-primary-500 transition-colors"
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="hover:text-primary-500 transition-colors"
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <span className="text-xs inline-flex items-center gap-1 rounded-full bg-primary-50/80 border border-primary-100 px-2.5 py-1 text-primary-600 shadow-soft mt-1">
                      New arrivals & curated best sellers
                    </span>
                  </li>
                </ul>
              </div>

              {/* Categories (short) */}
              <div>
                <h4 className="font-poppins text-sm font-semibold text-neutral-600 mb-3">
                  Popular categories
                </h4>
                <ul className="space-y-1.5 text-neutral-400">
                  <li>Diapers &amp; Wipes</li>
                  <li>Skincare &amp; Bath</li>
                  <li>Feeding &amp; Nursing</li>
                  <li>Baby Clothing</li>
                </ul>
              </div>

              {/* Contact / social */}
              <div>
                <h4 className="font-poppins text-sm font-semibold text-neutral-600 mb-3">
                  Connect
                </h4>
                <ul className="space-y-1.5 text-neutral-400 mb-3">
                  <li className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary-500 shrink-0" />
                    <span>Dhaka, Bangladesh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={14} className="text-primary-500 shrink-0" />
                    <span>+880 1X XX XX XX XX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={14} className="text-primary-500 shrink-0" />
                    <span>support@babybloom.com</span>
                  </li>
                </ul>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Find us on</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50/90 border border-primary-100 text-primary-600 shadow-soft hover:bg-primary-100 transition-colors"
                    >
                      <MessageCircle size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary-50/90 border border-secondary-100 text-secondary-600 shadow-soft hover:bg-secondary-100 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-50/90 border border-accent-100 text-accent-700 shadow-soft hover:bg-accent-100 transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200/80 bg-white/80 backdrop-blur-md">
        <Container className="py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] sm:text-xs text-neutral-400">
          <div>
            © {year} BabyBloom. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              <span>Made with care for little ones in Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-neutral-300">•</span>
              <Link href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}