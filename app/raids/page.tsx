import React from 'react'
import prisma from '@/lib/db'
import Xd from '../components/Xd'

const Page = async () => {
  // const currentUser = await prisma.user.findUnique({
  //   where: {
  //     id: 36,
  //   },
  // })

  const currentUser = await prisma.user.findUnique({
    where: {
      id: 36,
    },
    include: {
      raids: {
        orderBy: {
          timestamp: 'desc',
        },
      },
    },
  })

  console.log('CU', currentUser)
  console.log(currentUser?.updatedAt.toLocaleString())

  return (
    <div>
      {/* <h1>Username: {currentUser?.username}</h1> */}

      <Xd
        gold={currentUser?.gold}
        // updatedAt={currentUser?.raids[0].timestamp}
      />

      <p>updatedAt {currentUser?.updatedAt.toLocaleString()}</p>
    </div>
  )
}

export default Page
