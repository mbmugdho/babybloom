import { inter, poppins } from './fonts'
import './globals.css'

// 📋 METADATA
export const metadata = {
  title: {
    default: 'BabyBloom | Premium Baby Products Store',
    template: '%s | BabyBloom',
  },
  description:
    'Discover the best baby products for your little one. From diapers to toys, skincare to clothing - everything your baby needs at BabyBloom.',
  keywords: [
    'baby products',
    'baby store',
    'diapers',
    'baby clothing',
    'baby toys',
    'baby skincare',
    'baby feeding',
    'newborn essentials',
    'baby care',
  ],
  authors: [{ name: 'BabyBloom' }],
  creator: 'BabyBloom',
  openGraph: {
    title: 'BabyBloom | Premium Baby Products Store',
    description:
      'Discover the best baby products for your little one. Quality, safety, and comfort for your baby.',
    url: 'https://babybloom.vercel.app',
    siteName: 'BabyBloom',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BabyBloom | Premium Baby Products Store',
    description: 'Discover the best baby products for your little one.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ROOT LAYOUT

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter bg-neutral-50 text-neutral-500 min-h-screen antialiased">
        {/* I'll add Navbar here later */}

        <main className="min-h-screen">{children}</main>

        {/* I'll add Footer here later */}
      </body>
    </html>
  )
}
