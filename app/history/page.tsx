import prisma from '@/lib/db'
import React from 'react'

const page = async () => {
  const raids = await prisma.raid.findMany({
    where: {
      userId: 36,
    },
  })

  console.log(raids.length)
  return (
    <div>
      {raids.map((raid) => (
        <p key={raid.id}>
          {raid.id} {raid.success ? 'success' : 'fail'} {raid.experienceGained}
        </p>
      ))}
    </div>
  )
}
export default page
