import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password } = body

    const emailUsed = await prisma.user.findUnique({
      where: { email: email },
    })

    if (emailUsed) {
      return NextResponse.json(
        { message: 'This email is already used' },
        { status: 400 }
      )
    }

    const usernameUsed = await prisma.user.findUnique({
      where: { username: username },
    })

    if (usernameUsed) {
      return NextResponse.json(
        { message: 'Player with this username already exists' },
        { status: 400 }
      )
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    })

    return NextResponse.json(
      { newUser, message: 'User registed' },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
  }
}
