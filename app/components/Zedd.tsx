'use client'
import { useTransition } from 'react'
import { raidAction } from '../_actions'
import { raidAct } from '../actions/raidAct'

type RaidProps = {
  name: string
  experience: number
  gold: number
  successPercent: number
}

const Zedd = ({ name, experience, gold, successPercent }: RaidProps) => {
  const [isPending, startTransition] = useTransition()

  async function clientAction() {
    const result = await raidAction('test', 10, 10)

    console.log(result)
  }

  // const handleRaid = async (
  //   username: string,
  //   gold: number,
  //   successPercent: number
  // ) => {
  //   const body = { username, gold, successPercent }
  //   try {
  //     const response = await fetch('/api/raid', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(body),
  //     })

  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log('response', data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="mt-6">
      <p>{name}</p>
      <p>exp- {experience}</p>
      <p>gold- {gold}</p>
      <p>succ- {successPercent}</p>
      {/* <button onClick={() => console.log('ez')}>Raid!</button> */}
      <button
        onClick={
          // () => startTransition(() => raidAction('test', experience, gold))
          () => startTransition(() => clientAction())
          // startTransition(() => raidAct())
        }
      >
        Raid!
      </button>
      {/* <button onClick={() => handleRaid('test', experience, successPercent)}>
        Raid!
      </button> */}
    </div>
  )
}

export default Zedd
