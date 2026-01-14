import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-16">
      <Container className="py-12 grid gap-8 md:grid-cols-4 text-sm">
        {/* Brand */}
        <div>
          <h3 className="font-poppins font-semibold mb-2">BabyBloom</h3>
          <p className="text-neutral-400">
            Thoughtfully curated baby essentials for modern parents.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>Diapers & Wipes</li>
            <li>Feeding & Nursing</li>
            <li>Baby Clothing</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </Container>

      <div className="text-center text-xs text-neutral-400 py-4">
        © {new Date().getFullYear()} BabyBloom. All rights reserved.
      </div>
    </footer>
  )
}
