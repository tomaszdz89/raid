'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const raidAct2 = async (formData: FormData) => {
  const raidExp = formData.get('raidExp')
  const successChance = formData.get('successChance')

  try {
    if (Math.random() * 100 < Number(successChance)) {
      await prisma.raid.create({
        data: {
          name: 'Green Dragon',
          timestamp: new Date(),
          success: true,
          experienceGained: Number(raidExp),
          goldGained: 10,
          user: {
            connect: { id: 36 },
          },
        },
      })
      await prisma.user.update({
        where: {
          id: 36,
        },
        data: {
          gold: { increment: 10 },
          experience: { increment: 10 },
        },
      })
      // revalidatePath('/serverA')
      // revalidatePath('/countdown')
      return `essa on ${successChance}`
    } else {
      await prisma.raid.create({
        data: {
          timestamp: new Date(),
          success: false,
          experienceGained: 0,
          goldGained: 0,
          user: {
            connect: { id: 36 },
          },
        },
      })
      // revalidatePath('/serverA')

      return `fail on ${successChance}`
    }
  } catch (error) {
    // revalidatePath('/serverA')
    // throw new Error('Failed to create task')
    return 'something went wrong'
  }

  // revalidatePath('/srv')
}
