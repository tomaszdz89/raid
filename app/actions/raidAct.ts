'use server'
import { revalidatePath } from 'next/cache'

import { updateTodo } from '@/lib/raid'

import prisma from '@/lib/db'

// export const raidAct = async () => {
//   updateTodo('test')
//   revalidatePath('/srv')
// }

export const raidAct = async (gold: number) => {
  try {
    await prisma.raid.create({
      data: {
        timestamp: new Date(),
        // name: 'essa',
        success: true,
        experienceGained: 10,
        goldGained: gold,
        user: {
          connect: { id: 36 },
        },
      },
    })
  } catch (error) {
    return {
      error: 'Something went wrong!',
    }
  }
}
