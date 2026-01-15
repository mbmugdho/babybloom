import { inter, poppins } from './fonts'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Navbar, Footer } from '@/components/layout'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: {
    default: 'BabyBloom | Premium Baby Products Store',
    template: '%s | BabyBloom',
  },
  description:
    'Discover the best baby products for your little one. From diapers to toys, skincare to clothing - everything your baby needs at BabyBloom.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter text-neutral-500 min-h-screen antialiased">
        <AuthProvider>
          <Toaster
            containerClassName="pointer-events-none mx-2 sm:mx-4"
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '12px',
                padding: '14px 18px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                fontSize: '14px',
              },
              success: { iconTheme: { primary: '#27AE60', secondary: '#fff' } },
              error: { iconTheme: { primary: '#E74C3C', secondary: '#fff' } },
            }}
          />

          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
