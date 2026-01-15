import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(request) {
  try {
    await connectDB()

    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide name, email and password',
        },
        { status: 400 }
      )
    }

    const existing = await User.findOne({ email: email.toLowerCase() })
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'An account with this email already exists',
        },
        { status: 400 }
      )
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      role: 'user',
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Registration failed',
        error: error.message,
      },
      { status: 500 }
    )
  }
}
