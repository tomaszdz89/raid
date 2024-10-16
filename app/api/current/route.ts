import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const currentUSer = await prisma.user.findUnique({
      where: { id: 36 },
    })

    return NextResponse.json(currentUSer, { status: 201 })
  } catch (error) {
    console.log(error)
  }
}
