import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body
  if (email === 'contact@gmail.com' && password === '12345678') {
    return NextResponse.json({ success: true, message: 'Login successful' })
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }
}