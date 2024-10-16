import React from 'react'
import prisma from '@/lib/db'

const Dashboard = async () => {
  const currentUser = await prisma.user.findUnique({
    where: {
      id: 36,
    },
  })

  console.log('dashboard', currentUser)
  return (
    <div className="w-full bg-blue-800 text-white p-5">
      <p>Dashboard</p>
      <p>gold {currentUser?.gold}</p>
    </div>
  )
}

export default Dashboard
