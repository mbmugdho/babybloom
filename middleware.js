import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

async function verifyAuthToken(token) {
  if (!token) return null
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export async function middleware(request) {
  const { pathname, search } = request.nextUrl

  const isCheckoutRoute = pathname.startsWith('/checkout')
  const isAddProductRoute = pathname.startsWith('/add-product')
  const isAdminRoute = pathname.startsWith('/admin')

  if (!isCheckoutRoute && !isAddProductRoute && !isAdminRoute) {
    return NextResponse.next()
  }

  const token = request.cookies.get('auth_token')?.value
  const payload = await verifyAuthToken(token)

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('callback', pathname + search)

  // Not logged in → must login
  if (!payload) {
    return NextResponse.redirect(loginUrl)
  }

  // Admin-only routes: /admin and /add-product
  if (isAdminRoute || isAddProductRoute) {
    const adminEmails = getAdminEmails()
    const email = (payload.email || '').toLowerCase()

    const isAdmin = payload.role === 'admin' && adminEmails.includes(email)

    if (!isAdmin) {
      const homeUrl = new URL('/', request.url)
      return NextResponse.redirect(homeUrl)
    }
  }

  // Auth OK
  return NextResponse.next()
}

export const config = {
  matcher: ['/checkout/:path*', '/add-product/:path*', '/admin/:path*'],
}
