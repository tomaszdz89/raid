import prisma from '@/lib/db'
import React from 'react'
import Zedd from '../components/Zedd'

const raids = [
  {
    name: 'Green Dragon',
    experience: 10,
    successPercent: 100,
    gold: 10,
  },
  {
    name: 'Yellow Dragon',
    experience: 20,
    successPercent: 75,
    gold: 20,
  },
  {
    name: 'Red Dragon',
    experience: 30,
    successPercent: 50,
    gold: 30,
  },
]

const Page = async () => {
  const currentUser = await prisma.user.findUnique({
    where: {
      id: 36,
    },
  })

  return (
    <>
      <div>
        <div>gold - {currentUser?.gold}</div>
      </div>
      <div>
        {/* {raids.map((raid) => {
          return (
            <div key={raid.name}>
              <p>{raid.name}</p>
              <p>{raid.experience}</p>
              <button onClick={() =>
                  console.log('ez')
                }>Raid!</button>
            </div>
          )
        })} */}
        {raids.map((raid) => {
          return (
            <Zedd
              key={raid.name}
              name={raid.name}
              experience={raid.experience}
              gold={raid.gold}
              successPercent={raid.successPercent}
            />
          )
        })}
      </div>
    </>
  )
}

export default Page
