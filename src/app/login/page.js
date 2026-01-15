'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Container from '@/components/layout/Container'
import useAuth from '@/hooks/useAuth'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const callbackUrl = useMemo(
    () => searchParams.get('callback') || '',
    [searchParams]
  )
  const prefillEmail = searchParams.get('email') || ''

  const { login, isAuthenticated, user } = useAuth()
  const [email, setEmail] = useState(prefillEmail)
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    if (!isAuthenticated || !user) return

    if (callbackUrl) {
      router.replace(callbackUrl)
    } else if (user.role === 'admin') {
      router.replace('/admin')
    } else {
      router.replace('/checkout')
    }
  }, [isAuthenticated, user, callbackUrl, router])

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const result = await login(email.trim(), password)

    setSubmitting(false)

    if (result.success) {
      const loggedInUser = result.user || user

      if (callbackUrl) {
        router.replace(callbackUrl)
      } else if (loggedInUser?.role === 'admin') {
        router.replace('/admin')
      } else {
        router.replace('/checkout')
      }
    }
  }

  function fillDemoAdmin() {
    setEmail('admin@babybloom.com')
    setPassword('BabyBloom@2024')
  }

  if (isAuthenticated && user) {
    return null
  }

  return (
    <section className="py-10 md:py-14">
      <Container>
        <div
          className="
            max-w-md mx-auto
            relative overflow-hidden
            rounded-3xl
            border border-neutral-200/80
            bg-white/80
            shadow-section
            backdrop-blur-md
            px-5 py-6
            sm:px-7 sm:py-7
          "
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

          <div className="relative z-10 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                Welcome back
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-neutral-700 mb-2">
                Log in to BabyBloom
              </h1>
              <p className="text-sm text-neutral-400">
                Sign in to continue your order, manage your details, or access
                your admin tools.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
                >
                  <Mail size={14} className="text-primary-500" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
                >
                  <Lock size={14} className="text-primary-500" />
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="
                  w-full
                  inline-flex items-center justify-center
                  rounded-full
                  px-4 py-2.5
                  text-sm font-semibold
                  text-white
                  bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                  shadow-soft
                  hover:from-primary-500 hover:to-accent-500
                  disabled:opacity-70 disabled:cursor-not-allowed
                  transition
                "
              >
                {submitting ? 'Logging in…' : 'Log in'}
              </button>
            </form>

            <p className="text-[11px] text-neutral-400">
              New here?{' '}
              <a
                href="/register"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Create an account
              </a>{' '}
              to complete your order.
            </p>

            {/* Demo admin section */}
            <div className="mt-3 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 px-3 py-3 text-[11px] text-neutral-500 shadow-soft">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-neutral-600">
                  Demo for admin dashboard
                </span>
                <p>
                  Use the demo admin account to explore the BabyBloom admin
                  dashboard.
                </p>
                <p className="text-[10px] text-neutral-400">
                  Email: <span className="font-mono">admin@babybloom.com</span>{' '}
                  <br />
                  Password: <span className="font-mono">BabyBloom@2024</span>
                </p>
                <button
                  type="button"
                  onClick={fillDemoAdmin}
                  className="
                    mt-1 inline-flex items-center justify-center
                    rounded-full
                    px-3 py-1.5
                    text-[11px] font-semibold
                    text-primary-600
                    bg-primary-50/80
                    border border-primary-100
                    shadow-soft
                    hover:bg-primary-100
                    transition
                  "
                >
                  Fill demo admin credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
