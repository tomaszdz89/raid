import prisma from '@/lib/db'
import React from 'react'
import Count from '../components/Count'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const page = async () => {
  const session = await getServerSession(authOptions)
  // console.log('countdown session', session)
  // const currentUser = await prisma.user.findUnique({
  //   where: {
  //     id: 36,
  //   },
  //   include: {
  //     raids: {
  //       orderBy: {
  //         timestamp: 'desc',
  //       },
  //     },
  //   },
  // })

  const currentUser = await prisma.user.findUnique({
    where: {
      id: Number(session?.user?.id),
    },
    include: {
      raids: {
        orderBy: {
          timestamp: 'desc',
        },
      },
    },
  })

  console.log('dbfbd8f', currentUser)

  const nextRaid =
    new Date(currentUser!.raids[0]!.timestamp.toString()).getTime() / 1000 + 10
  // console.log('wtf', currentUser?.raids[0].timestamp)
  // console.log('nr', nextRaid)

  return (
    <div>
      {/* <Count nextRaid={currentUser?.raids[0].timestamp} /> */}
      <Count nextRaid={nextRaid} userId={currentUser?.id} />
    </div>
  )
}
export default page
