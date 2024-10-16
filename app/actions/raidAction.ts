'use server'

import prisma from '@/lib/db'

export const raidAction = async (formData: FormData, userId: number) => {
  const raidExp = formData.get('raidExp')
  const successChance = formData.get('successChance')
  const raidName = formData.get('raidName')
  const raidGold = formData.get('raidGold')

  try {
    if (Math.random() * 100 < Number(successChance)) {
      await prisma.raid.create({
        data: {
          name: String(raidName),
          timestamp: new Date(),
          success: true,
          experienceGained: Number(raidExp),
          goldGained: Number(raidGold),
          user: {
            connect: { id: userId },
          },
        },
      })
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          gold: { increment: Number(raidGold) },
          experience: { increment: Number(raidExp) },
        },
      })
      return `You were successful on ${raidName} raid. You earned ${raidExp} experience and ${raidGold} gold. Keep going!`
    } else {
      await prisma.raid.create({
        data: {
          name: String(raidName),
          timestamp: new Date(),
          success: false,
          experienceGained: 0,
          goldGained: 0,
          user: {
            connect: { id: userId },
          },
        },
      })

      return `You were unlucky this time. Next raid will be better!`
    }
  } catch (error) {
    return 'Something went wrong!'
  }
}
