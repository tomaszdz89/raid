import prisma from './db'

export async function updateTodo(username: string) {
  try {
    // const todo = await prisma.user.update({
    //   where: {
    //     username,
    //   },
    //   data: {
    //     gold: { increment: 10 },
    //   },
    // })
    const raid = await prisma.raid.create({
      data: {
        timestamp: new Date(),
        success: true,
        experienceGained: 10,
        goldGained: 10,
        user: {
          connect: { id: 36 },
        },
      },
    })
    // return { raid }
    return 'essa'
  } catch (error) {
    // return { error }
    return 'wtf'
  }
}
