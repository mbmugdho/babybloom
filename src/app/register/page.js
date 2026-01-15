'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/layout/Container'
import { Mail, Lock, User as UserIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'



export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Registration failed')
      }

      toast.success('Registration successful. Please log in.')
      router.push(
        `/login?email=${encodeURIComponent(email)}&callback=/checkout`
      )
    } catch (err) {
      toast.error(err.message || 'Registration failed')
    } finally {
      setSubmitting(false)
    }
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
                Create your account
              </p>
              <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-neutral-700 mb-2">
                Join BabyBloom
              </h1>
              <p className="text-sm text-neutral-400">
                Save your details to make future orders faster and simpler.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
                >
                  <UserIcon size={14} className="text-primary-500" />
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Your full name"
                  required
                />
              </div>

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
                  autoComplete="new-password"
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
                  placeholder="Create a password"
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
                {submitting ? 'Creating account…' : 'Create account'}
              </button>
            </form>

            <p className="text-[11px] text-neutral-400">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                Log in
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
