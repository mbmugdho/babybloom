import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* ═══════════════════════════════════════════════════════════════
          LOGO & BRAND
          ═══════════════════════════════════════════════════════════════ */}
      <div className="text-center mb-12">
        <h1 className="font-poppins text-hero text-primary-400 mb-4">
          BabyBloom
        </h1>
        <p className="text-body text-neutral-400 max-w-md mx-auto">
          Premium baby products for your little one. Quality, safety, and
          comfort in every product.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          COLOR PALETTE PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl shadow-card p-8 max-w-3xl w-full mb-8">
        <h2 className="font-poppins text-section text-neutral-500 mb-6 text-center">
          Color Palette Preview
        </h2>

        {/* Primary Colors - Sage Green */}
        <div className="mb-6">
          <p className="text-body-sm font-medium text-neutral-400 mb-3">
            Primary (Sage Green)
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="w-14 h-14 rounded-xl bg-primary-50 shadow-soft"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-100"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-200"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-300"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-400 shadow-button"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-500"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-600"></div>
            <div className="w-14 h-14 rounded-xl bg-primary-700"></div>
          </div>
        </div>

        {/* Secondary Colors - Soft Blush */}
        <div className="mb-6">
          <p className="text-body-sm font-medium text-neutral-400 mb-3">
            Secondary (Soft Blush)
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="w-14 h-14 rounded-xl bg-secondary-50"></div>
            <div className="w-14 h-14 rounded-xl bg-secondary-100"></div>
            <div className="w-14 h-14 rounded-xl bg-secondary-200"></div>
            <div className="w-14 h-14 rounded-xl bg-secondary-300"></div>
            <div className="w-14 h-14 rounded-xl bg-secondary-400"></div>
            <div className="w-14 h-14 rounded-xl bg-secondary-500"></div>
          </div>
        </div>

        {/* Accent Colors - Warm Honey */}
        <div className="mb-6">
          <p className="text-body-sm font-medium text-neutral-400 mb-3">
            Accent (Warm Honey)
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="w-14 h-14 rounded-xl bg-accent-50"></div>
            <div className="w-14 h-14 rounded-xl bg-accent-100"></div>
            <div className="w-14 h-14 rounded-xl bg-accent-200"></div>
            <div className="w-14 h-14 rounded-xl bg-accent-300"></div>
            <div className="w-14 h-14 rounded-xl bg-accent-400"></div>
          </div>
        </div>

        {/* Additional Accents */}
        <div className="mb-8">
          <p className="text-body-sm font-medium text-neutral-400 mb-3">
            Additional Accents
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              className="w-14 h-14 rounded-xl bg-softBlue-200"
              title="Soft Blue"
            ></div>
            <div
              className="w-14 h-14 rounded-xl bg-lavender-200"
              title="Lavender"
            ></div>
            <div
              className="w-14 h-14 rounded-xl bg-peach-200"
              title="Peach"
            ></div>
            <div
              className="w-14 h-14 rounded-xl bg-success"
              title="Success"
            ></div>
            <div
              className="w-14 h-14 rounded-xl bg-warning"
              title="Warning"
            ></div>
            <div className="w-14 h-14 rounded-xl bg-error" title="Error"></div>
            <div
              className="w-14 h-14 rounded-xl bg-rating"
              title="Rating"
            ></div>
          </div>
        </div>

        {/* Button Examples */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-outline">Outline Button</button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TYPOGRAPHY PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl shadow-card p-8 max-w-3xl w-full mb-8">
        <h2 className="font-poppins text-section text-neutral-500 mb-6 text-center">
          Typography Preview
        </h2>

        <div className="space-y-4">
          <div>
            <span className="text-tiny text-neutral-300">
              Hero (48px - Poppins 700)
            </span>
            <h1 className="font-poppins text-hero text-neutral-500">
              Hero Title
            </h1>
          </div>

          <div>
            <span className="text-tiny text-neutral-300">
              Section (32px - Poppins 600)
            </span>
            <h2 className="font-poppins text-section text-neutral-500">
              Section Heading
            </h2>
          </div>

          <div>
            <span className="text-tiny text-neutral-300">
              Card Title (20px - Inter 600)
            </span>
            <h3 className="font-inter text-card-title font-semibold text-neutral-500">
              Product Card Title
            </h3>
          </div>

          <div>
            <span className="text-tiny text-neutral-300">
              Body (16px - Inter 400)
            </span>
            <p className="font-inter text-body text-neutral-400">
              This is body text using Inter 400. It's comfortable to read and
              maintains good readability across all devices.
            </p>
          </div>

          <div>
            <span className="text-tiny text-neutral-300">
              Body Small (14px - Inter 400)
            </span>
            <p className="font-inter text-body-sm text-neutral-300">
              Smaller body text for descriptions, meta information, and
              secondary content.
            </p>
          </div>

          <div>
            <span className="text-tiny text-neutral-300">
              Tiny (12px - Inter 400)
            </span>
            <p className="font-inter text-tiny text-neutral-300">
              Tiny text for labels, timestamps, and badges.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BADGES PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl shadow-card p-8 max-w-3xl w-full mb-8">
        <h2 className="font-poppins text-section text-neutral-500 mb-6 text-center">
          Badges & Status
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          <span className="badge badge-primary">New Arrival</span>
          <span className="badge badge-secondary">Best Seller</span>
          <span className="badge badge-success">In Stock</span>
          <span className="badge badge-warning">Low Stock</span>
          <span className="badge badge-error">Out of Stock</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STATUS INDICATOR
          ═══════════════════════════════════════════════════════════════ */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
        <span className="text-body-sm text-neutral-400">
          Phase 1: Foundation Complete ✓
        </span>
      </div>

      {/* Quick Links for Testing */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/products"
          className="text-body-sm text-primary-400 hover:text-primary-500 underline"
        >
          Products Page →
        </Link>
        <Link
          href="/categories"
          className="text-body-sm text-primary-400 hover:text-primary-500 underline"
        >
          Categories Page →
        </Link>
        <Link
          href="/login"
          className="text-body-sm text-primary-400 hover:text-primary-500 underline"
        >
          Login Page →
        </Link>
      </div>
    </div>
  )
}
