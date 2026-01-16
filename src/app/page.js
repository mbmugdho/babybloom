import HomeClient from './HomeClient'

export const metadata = {
  title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
  description:
    'Shop curated baby products in Bangladesh – from diapers and wipes to skincare, feeding, clothing, toys, and safety essentials. Thoughtfully selected for gentle, everyday care.',
  openGraph: {
    title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
    description:
      'Shop curated baby products in Bangladesh – from diapers and wipes to skincare, feeding, clothing, toys, and safety essentials. Thoughtfully selected for gentle, everyday care.',
    url: 'https://babybloom-ltd.vercel.app',
    siteName: 'BabyBloom',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BabyBloom | Gentle Baby Essentials for Modern Parents',
    description:
      'Shop curated baby products in Bangladesh – from diapers and wipes to skincare, feeding, clothing, toys, and safety essentials. Thoughtfully selected for gentle, everyday care.',
  },
}

export default function Home() {
  return <HomeClient />
}
