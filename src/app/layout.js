import { inter, poppins } from './fonts'
import './globals.css'
import { Toaster } from 'react-hot-toast'

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
      <body className="font-inter bg-neutral-50 text-neutral-500 min-h-screen antialiased">
        
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              padding: '16px',
            },
            success: {
              iconTheme: {
                primary: '#27AE60',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#E74C3C',
                secondary: '#fff',
              },
            },
          }}
        />

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
