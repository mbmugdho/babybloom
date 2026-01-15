'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [checkingAuth, setCheckingAuth] = useState(true)

  const isAuthenticated = !!user

  const fetchCurrentUser = useCallback(async () => {
    try {
      const res = await fetch('/api/auth', { method: 'GET' })
      if (!res.ok) {
        setUser(null)
        return
      }
      const data = await res.json()
      if (data.success && data.data?.user) {
        setUser(data.data.user)
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    }
  }, [])

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      setCheckingAuth(true)
      await fetchCurrentUser()
      if (isMounted) setCheckingAuth(false)
    })()
    return () => {
      isMounted = false
    }
  }, [fetchCurrentUser])

  async function login(email, password) {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Login failed')
      }

      if (data.data?.user) {
        setUser(data.data.user)
      }

      toast.success('Login successful')
      return { success: true, user: data.data.user }
    } catch (err) {
      toast.error(err.message || 'Login failed')
      return { success: false, error: err.message }
    }
  }

  async function logout() {
    try {
      const res = await fetch('/api/auth', { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Logout failed')
      }
      setUser(null)
      toast.success('Logged out')
    } catch (err) {
      toast.error(err.message || 'Logout failed')
    }
  }

  const value = {
    user,
    isAuthenticated,
    checkingAuth,
    login,
    logout,
    refreshUser: fetchCurrentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
  return ctx
}
