'use client'

import { useEffect } from 'react'

const CART_KEY = 'babybloom_cart'

export default function AppClientShell() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        window.localStorage.removeItem(CART_KEY)
      } catch {
        // ignore
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return null
}