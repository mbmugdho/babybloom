'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Sparkles, ShieldCheck } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState('')

  function validateEmail(value) {
    if (!value) return 'Please enter your email address.'
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!pattern.test(value)) return 'Please enter a valid email address.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationError = validateEmail(email.trim())
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setError('')
    setStatus('loading')

    // Fake async submit – later you can POST to /api/newsletter
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="
            relative overflow-hidden
            rounded-3xl
            bg-white/80
            border border-primary-100
            shadow-section
            backdrop-blur-md
            px-5 py-6
            sm:px-7 sm:py-7
            lg:px-10 lg:py-9
          "
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/50 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: copy */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-100 px-3 py-1 text-[11px] font-semibold text-primary-600 shadow-soft mb-3">
                <Sparkles size={14} className="text-primary-500" />
                <span>Stay in the loop</span>
              </div>

              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-600 mb-3">
                Get gentle updates in your inbox
              </h2>

              <p className="text-sm md:text-base text-neutral-400">
                Be the first to know about new baby essentials, soft launches,
                and curated checklists tailored for growing families in
                Bangladesh. No spam—just thoughtful, helpful updates.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-50/80 border border-primary-100 px-3 py-1 text-[11px] font-medium text-primary-600 shadow-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>Exclusive offers & early access</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-50/80 border border-secondary-100 px-3 py-1 text-[11px] font-medium text-secondary-700 shadow-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                  <span>Curated tips from real parents</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="w-full max-w-md">
              <form
                onSubmit={handleSubmit}
                className="
                  rounded-2xl
                  bg-neutral-50/70
                  border border-neutral-200/80
                  shadow-soft
                  backdrop-blur-md
                  p-4 sm:p-5
                  flex flex-col gap-3
                "
                noValidate
              >
                <label
                  htmlFor="newsletter-email"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
                >
                  <Mail size={14} className="text-primary-500" />
                  Email address
                </label>

                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status !== 'idle') {
                          setStatus('idle')
                          setError('')
                        }
                      }}
                      placeholder="you@example.com"
                      className="
                        w-full rounded-full border
                        bg-white/80
                        px-4 py-2.5
                        text-sm
                        text-neutral-600
                        placeholder:text-neutral-300
                        border-neutral-200
                        shadow-soft
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary-400/70
                        focus-visible:border-primary-300
                        transition
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      px-4 sm:px-5
                      py-2.5
                      text-sm font-semibold
                      text-white
                      bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                      shadow-soft
                      hover:from-primary-500 hover:to-accent-500
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition
                      whitespace-nowrap
                    "
                  >
                    {status === 'loading' ? 'Joining…' : 'Join newsletter'}
                  </button>
                </div>

                {/* Helper / status text */}
                <div className="flex flex-col gap-1">
                  {error && (
                    <p className="text-xs text-secondary-700 bg-secondary-50/80 border border-secondary-200/80 rounded-full px-3 py-1 inline-flex items-center gap-1.5 shadow-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                      {error}
                    </p>
                  )}

                  {status === 'success' && !error && (
                    <p className="text-xs text-primary-700 bg-primary-50/80 border border-primary-200/80 rounded-full px-3 py-1 inline-flex items-center gap-1.5 shadow-soft">
                      <ShieldCheck size={14} className="text-primary-500" />
                      You’re in. Look out for cozy updates and gentle offers in
                      your inbox.
                    </p>
                  )}

                  {status === 'idle' && !error && (
                    <p className="text-[11px] text-neutral-400 inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />
                      We respect your time and privacy. Unsubscribe anytime.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}