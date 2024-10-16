import prisma from '@/lib/db'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('body', body)

    const { username, gold, successPercent } = body

    // console.log('username', username)
    // console.log('gold', gold)

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     username,
    //   },
    // })

    // const raid = await prisma.raid.create({
    //   data: {
    //     timestamp: new Date(),
    //     success: true,
    //     experienceGained: 10,
    //     goldGained: 10,
    //     user: {
    //       connect: { id: 36 },
    //     },
    //   },
    // })
    // revalidatePath('/date')

    // console.log('Current user', currentUser)

    if (Math.random() * 100 < successPercent) {
      const updateTest = await prisma.user.update({
        where: {
          username,
        },
        data: {
          gold: { increment: gold },
        },
      })

      // revalidatePath('/date')

      return NextResponse.json(
        {
          updateTest,
          message: `U did great job in recent raid!. U gained ${gold} gold`,
        },
        { status: 201 }
      )
    } else {
      // const updateTest = await prisma.user.update({
      //   where: {
      //     username,
      //   },
      //   data: {
      //
      //   },
      // })
      return NextResponse.json(
        {
          // updateTest,
          message: 'Ur raid failed and u lost 1 live',
        },
        { status: 201 }
      )
    }
  } catch (error) {
    console.log(error)
  }
}
