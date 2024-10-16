'use client'

import React from 'react'
import { raidAct } from '../actions/raidAct'
import prisma from '@/lib/db'
import { raidAct2 } from '../actions/raidAct2'

const page = () => {
  // const addRaid = async (formData: FormData) => {
  //   'use server'

  //   const raidExp = formData.get('raidExp')

  //   const raid = await prisma.raid.create({
  //     data: {
  //       timestamp: new Date(),
  //       success: true,
  //       experienceGained: Number(raidExp),
  //       goldGained: 10,
  //       user: {
  //         connect: { id: 36 },
  //       },
  //     },
  //   })
  // }

  const clientAction = async (formData: FormData) => {
    const result = await raidAct2(formData)
    console.log(result)
  }
  return (
    <div>
      <form action={clientAction}>
        <input
          type="number"
          name="raidExp"
          placeholder="10"
          //   value={10}
          required
          value={10}
          readOnly
        />
        <input
          type="number"
          name="successChance"
          placeholder="50"
          //   value={10}
          required
          value={50}
          readOnly
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default page
