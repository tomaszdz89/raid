import prisma from '@/lib/db'
import React from 'react'
import SrvC from '../components/SrvC'

const page = async () => {
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

  return (
    <div>
      <h2>{currentUser?.username}</h2>

      {currentUser && <SrvC updatedAt={currentUser?.raids[0].timestamp} />}
    </div>
  )
}

export default page
