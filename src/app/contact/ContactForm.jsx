// src/app/contact/ContactForm.jsx
'use client'

import { useState } from 'react'
import { Mail, User as UserIcon, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Email service is not configured. Please add EmailJS keys in .env.'
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'New message from BabyBloom contact form',
          message: form.message,
        },
        publicKey
      )

      toast.success('Thank you for reaching out. We will get back to you soon.')
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      toast.error(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-neutral-200/80
        bg-white/80
        shadow-section
        backdrop-blur-md
        px-4 py-6
        sm:px-6 sm:py-7
        lg:px-8 lg:py-8
        max-w-3xl mx-auto
      "
    >
      {/* Glows */}
      <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-44 rounded-full bg-accent-100/45 blur-3xl" />

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
            Contact us
          </p>
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 mb-2">
            We're here to help
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl">
            Have a question about a product, an order, or a potential
            collaboration? Send us a message and we’ll get back to you as soon
            as we can.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
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
                name="name"
                value={form.name}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
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
                name="email"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full rounded-full border
                  bg-white/80
                  px-4 py-2.5 text-sm
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
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
            >
              Subject (optional)
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="
                w-full rounded-full border
                bg-white/80
                px-4 py-2.5 text-sm
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
              placeholder="What is this about?"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400"
            >
              <MessageCircle size={14} className="text-primary-500" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="
                w-full rounded-2xl border
                bg-white/80
                px-4 py-2.5 text-sm
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
              rows={4}
              placeholder="How can we help you?"
              required
            />
          </div>

          {/* Submit */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-[11px] text-neutral-400">
              We usually respond within 1–2 working days.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full
                px-5 py-2.5
                text-xs sm:text-sm font-semibold
                text-white
                bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400
                shadow-soft
                hover:from-primary-500 hover:to-accent-500
                disabled:opacity-70 disabled:cursor-not-allowed
                transition
              "
            >
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}