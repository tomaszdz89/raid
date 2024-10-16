'use client'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { raids } from '@/raids'
interface Props {
  gold?: number
  // updatedAt: Date | null
}

// const raids = [
//   {
//     name: 'Green Dragon',
//     experience: 10,
//     successPercent: 100,
//     gold: 10,
//   },
//   {
//     name: 'Yellow Dragon',
//     experience: 20,
//     successPercent: 75,
//     gold: 20,
//   },
//   {
//     name: 'Red Dragon',
//     experience: 30,
//     successPercent: 50,
//     gold: 30,
//   },
// ]

// const handleRaid = async (
//   username: string,
//   gold: number,
//   successPercent: number
// ) => {
//   const body = { username, gold, successPercent }

//   await fetch('/api/raid', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   // console.log(response)
// }

const Xd = ({ gold }: Props) => {
  const handleRaid = async (
    username: string,
    gold: number,
    successPercent: number
  ) => {
    const body = { username, gold, successPercent }
    try {
      console.log(Date.now())
      const response = await fetch('/api/raid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      // console.log(response)

      if (response.ok) {
        const data = await response.json()
        // console.log('response', data)
        setResult(data.message)
        setGoldCount(data.updateTest.gold)
        revalidatePath('/raids')
        // revalidatePath('/date')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // test
  const [counter, setCounter] = useState(0)
  //test

  const [goldCount, setGoldCount] = useState(gold)
  const [result, setResult] = useState('')
  const channel = supabase
    .channel('schema-db-changes')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
      },
      (payload) => {
        // console.log('xddddd')
        console.log('payload', payload)

        if (payload.new.id === 36) {
        }
      }
    )
    .subscribe()
  return (
    <>
      <div className="p-5 border border-sky-900">
        <p>gold: {goldCount}</p>
      </div>
      {result}
      <div>
        {raids.map((raid) => {
          return (
            <div key={raid.name} className="border-2 p-5">
              <h2>{raid.name} Raid</h2>
              <p>Success Chance - {raid.successPercent}%</p>
              <p>Experience - {raid.experience}</p>
              <p>Gold - {raid.gold}</p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:cursor-default disabled:bg-slate-600"
                onClick={() =>
                  handleRaid('test', raid.experience, raid.successPercent)
                }
              >
                click
              </button>
              {/* <Button onClick={handleRaid}/>     */}
              {/* <Button text={raid.name}/>     */}
            </div>
          )
        })}
        <h3>{counter}</h3>
        <button
          onClick={() => {
            setCounter(2)
          }}
        >
          Counter+1
        </button>
      </div>
    </>
  )
}

export default Xd
