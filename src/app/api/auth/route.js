import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

// Helpers to determine env-based admins
function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

function getEffectiveRole(user) {
  const adminEmails = getAdminEmails()
  const email = (user.email || '').toLowerCase()
  const isEnvAdmin = adminEmails.includes(email)
  if (isEnvAdmin) return 'admin'
  return user.role || 'user'
}

// ═══════════════════════════════════════════════════════════════════
// POST - Login
// ═══════════════════════════════════════════════════════════════════
export async function POST(request) {
  try {
    await connectDB()

    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide email and password',
        },
        { status: 400 }
      )
    }

    // Find user with password
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      '+password'
    )

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      )
    }

    // Check password
    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      )
    }

    // Check if user is active
    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Account is deactivated',
        },
        { status: 401 }
      )
    }

    const effectiveRole = getEffectiveRole(user)

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: effectiveRole,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: effectiveRole,
        },
        token,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Login failed',
        error: error.message,
      },
      { status: 500 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
// GET - Check Auth Status / Get Current User
// ═══════════════════════════════════════════════════════════════════
export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: 'Not authenticated',
          isAuthenticated: false,
        },
        { status: 401 }
      )
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    await connectDB()

    // Get fresh user data
    const user = await User.findById(decoded.id)

    if (!user || !user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found or inactive',
          isAuthenticated: false,
        },
        { status: 401 }
      )
    }

    const effectiveRole = getEffectiveRole(user)

    return NextResponse.json({
      success: true,
      isAuthenticated: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: effectiveRole,
        },
      },
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Authentication failed',
        isAuthenticated: false,
      },
      { status: 401 }
    )
  }
}

// ═══════════════════════════════════════════════════════════════════
export async function DELETE() {
  try {
    const cookieStore = await cookies()

    // Clear the auth cookie
    cookieStore.set('auth_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    })

    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Logout failed',
      },
      { status: 500 }
    )
  }
}
