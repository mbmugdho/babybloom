"use client";

import { 
  Rating, 
  ShimmerProductCard, 
  ShimmerText, 
  ShimmerImage 
} from "@/components/ui";
import toast from "react-hot-toast";
import { 
  ShoppingCart, 
  Heart, 
  Truck, 
  Shield, 
  Clock, 
  ArrowRight,
  Plus
} from "lucide-react";

export default function ComponentsTestPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            🎨 UI Components
          </h1>
          <p className="text-lg text-neutral-400">
            BabyBloom Design System - Simple & Clean with Glassmorphism
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* GLASSMORPHISM CARDS */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Glassmorphism Cards
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Glass Card 1 */}
            <div className="card-glass p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <Truck className="text-primary-500" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-500 mb-2">
                Free Shipping
              </h3>
              <p className="text-sm text-neutral-400">
                Free delivery on orders over ৳1000
              </p>
            </div>

            {/* Glass Card 2 */}
            <div className="card-glass p-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="text-secondary-500" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-500 mb-2">
                Safe & Secure
              </h3>
              <p className="text-sm text-neutral-400">
                100% safe baby products
              </p>
            </div>

            {/* Glass Card 3 */}
            <div className="card-glass p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="text-accent-500" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-500 mb-2">
                24/7 Support
              </h3>
              <p className="text-sm text-neutral-400">
                Round the clock assistance
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* BUTTONS - NOW ROUNDED FULL */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Buttons (Rounded Full)
          </h2>

          <div className="card-glass p-6 space-y-6">
            {/* Primary Buttons */}
            <div>
              <p className="text-sm text-neutral-400 mb-3">Primary Buttons</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-sm">Small</button>
                <button className="btn btn-primary">Default</button>
                <button className="btn btn-primary btn-lg">Large</button>
                <button className="btn btn-primary" disabled>Disabled</button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <p className="text-sm text-neutral-400 mb-3">With Icons</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="btn btn-secondary">
                  <Heart size={18} />
                  Wishlist
                </button>
                <button className="btn btn-outline">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* All Variants */}
            <div>
              <p className="text-sm text-neutral-400 mb-3">All Variants</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-outline">Outline</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-glass">Glass</button>
              </div>
            </div>

            {/* Icon Only Buttons */}
            <div>
              <p className="text-sm text-neutral-400 mb-3">Icon Only</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-icon btn-icon-sm">
                  <Plus size={18} />
                </button>
                <button className="btn btn-primary btn-icon">
                  <ShoppingCart size={20} />
                </button>
                <button className="btn btn-outline btn-icon">
                  <Heart size={20} />
                </button>
                <button className="btn btn-glass btn-icon">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* BADGES */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Badges
          </h2>

          <div className="card-glass p-6">
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-primary">New Arrival</span>
              <span className="badge badge-secondary">Best Seller</span>
              <span className="badge badge-success">In Stock</span>
              <span className="badge badge-warning">Low Stock</span>
              <span className="badge badge-error">Out of Stock</span>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* RATING */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Rating Component
          </h2>

          <div className="card-glass p-6 space-y-4">
            <Rating value={5} count={1234} />
            <Rating value={4.5} count={567} />
            <Rating value={4} count={89} />
            <Rating value={3.5} count={45} />
            <Rating value={2} count={12} />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* SHIMMER LOADING */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Shimmer Loading Effects
          </h2>

          {/* Basic Shimmer */}
          <div className="card-glass p-6 mb-6">
            <p className="text-sm text-neutral-400 mb-4">Text Shimmer</p>
            <ShimmerText lines={3} />
          </div>

          {/* Product Cards */}
          <p className="text-sm text-neutral-400 mb-4">Product Card Shimmer</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ShimmerProductCard />
            <ShimmerProductCard />
            <ShimmerProductCard />
            <ShimmerProductCard />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* FORMS */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Form Inputs
          </h2>

          <div className="card-glass p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-2">
                  Regular Input
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-2">
                  Glass Input
                </label>
                <input
                  type="email"
                  className="input input-glass"
                  placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-500 mb-2">
                  Textarea
                </label>
                <textarea
                  className="input min-h-[120px] resize-y"
                  placeholder="Enter description..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* TOAST NOTIFICATIONS */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Toast Notifications
          </h2>

          <div className="card-glass p-6">
            <div className="flex flex-wrap gap-4">
              <button
                className="btn btn-primary"
                onClick={() => toast.success("Product added to cart!")}
              >
                Success Toast
              </button>
              <button
                className="btn btn-danger"
                onClick={() => toast.error("Something went wrong!")}
              >
                Error Toast
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => toast("Hello! 👋 This is a notification", { icon: "ℹ️" })}
              >
                Info Toast
              </button>
              <button
                className="btn btn-glass"
                onClick={() =>
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 2000)),
                    {
                      loading: "Adding to cart...",
                      success: "Added successfully! 🎉",
                      error: "Failed to add",
                    }
                  )
                }
              >
                Promise Toast
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* PRODUCT CARD EXAMPLES */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="font-poppins text-2xl font-bold text-neutral-500 mb-6">
            Product Cards (Glass Style)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="card-glass overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                <div className="absolute top-3 left-3">
                  <span className="badge badge-primary">New</span>
                </div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110">
                  <Heart size={18} className="text-neutral-500" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-400 mb-1">SoftCare</p>
                <h3 className="font-semibold text-neutral-500 mb-2 line-clamp-2">
                  Ultra Baby Diapers - Newborn
                </h3>
                <Rating value={4.8} count={1245} />
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-lg font-bold text-primary-500">৳499</span>
                    <span className="text-sm text-neutral-400 line-through ml-2">৳599</span>
                  </div>
                  <button className="btn btn-primary btn-icon btn-icon-sm">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="card-glass overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-secondary-100 to-secondary-200 relative">
                <div className="absolute top-3 left-3">
                  <span className="badge badge-secondary">Best Seller</span>
                </div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110">
                  <Heart size={18} className="text-neutral-500" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-400 mb-1">GentleTouch</p>
                <h3 className="font-semibold text-neutral-500 mb-2 line-clamp-2">
                  Baby Moisturizing Lotion
                </h3>
                <Rating value={4.6} count={892} />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-primary-500">৳299</span>
                  <button className="btn btn-primary btn-icon btn-icon-sm">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="card-glass overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 relative">
                <div className="absolute top-3 left-3">
                  <span className="badge badge-success">In Stock</span>
                </div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110">
                  <Heart size={18} className="text-neutral-500" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-400 mb-1">PureSip</p>
                <h3 className="font-semibold text-neutral-500 mb-2 line-clamp-2">
                  BPA-Free Feeding Bottle
                </h3>
                <Rating value={4.7} count={678} />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-primary-500">৳349</span>
                  <button className="btn btn-primary btn-icon btn-icon-sm">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="card-glass overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <div className="absolute top-3 left-3">
                  <span className="badge badge-warning">Low Stock</span>
                </div>
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110">
                  <Heart size={18} className="text-neutral-500" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-400 mb-1">SnuggleSoft</p>
                <h3 className="font-semibold text-neutral-500 mb-2 line-clamp-2">
                  Baby Cotton Bodysuit Set
                </h3>
                <Rating value={4.9} count={432} />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-primary-500">৳799</span>
                  <button className="btn btn-primary btn-icon btn-icon-sm">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* COMPLETION STATUS */}
        {/* ════════════════════════════════════════════════════════════ */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="font-medium text-neutral-500">
              Phase 3 Complete - Simple & Clean! ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}