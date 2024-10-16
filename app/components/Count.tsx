'use client'

import React, { useEffect, useState } from 'react'
import { raidAct2 } from '../actions/raidAct2'
import { useRouter } from 'next/navigation'
import { raids } from '@/raids'
import RaidForm from './RaidForm'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
type DateProps = {
  nextRaid: number | null
  userId: number
}

const Count = ({ nextRaid, userId }: DateProps) => {
  const calculateTimeLeft = (nextRaid: number) => {
    const difference = nextRaid - Math.floor(Date.now() / 1000)
    let timeLeft = 0

    if (difference > 0) {
      timeLeft = difference
    } else {
      timeLeft = 0
    }

    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(nextRaid!))
  const [result, setResult] = useState('')

  const router = useRouter()
  console.log(timeLeft)
  console.log('nextreaid', nextRaid)
  useEffect(() => {
    console.log(timeLeft)
    console.log('use efftc run')
    // ??if (timeLeft <= 0) {
    //   return
    // }

    // const timer = setInterval(() => {
    //   setTimeLeft(calculateTimeLeft(nextRaid!))
    //   console.log(timeLeft)
    // }, 1000)

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(nextRaid!)
      if (newTimeLeft <= 0) {
        clearInterval(timer)
        setTimeLeft(0)
      } else {
        setTimeLeft(newTimeLeft)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, nextRaid])

  const clientAction = async (formData: FormData) => {
    const result = await raidAct2(formData)
    setResult(result)
    console.log('result', result)
    router.refresh()
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const paddedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${minutes}min ${paddedSeconds}sec`
  }

  return (
    <>
      {/* <div suppressHydrationWarning>{timeLeft}</div> */}
      <div suppressHydrationWarning>{formatTime(timeLeft)}</div>

      {/* <Image src="/resting.png" alt="resting" width={500} height={500} />
      <Image src="/ready.png" alt="resting" width={500} height={500} /> */}

      <form action={clientAction}>
        <input
          type="number"
          name="raidExp"
          // placeholder="10"
          //   value={10}
          required
          value={10}
          readOnly
        />
        <input
          type="number"
          name="successChance"
          // placeholder="50"
          //   value={10}
          required
          value={50}
          readOnly
        />
        <button type="submit" disabled={timeLeft > 0}>
          submit
        </button>
        {/* <p>{nextRaid}</p> */}
        {/* <p>{result}</p> */}
      </form>

      <p>{result}</p>
      {/* <p>{nextRaid}</p> */}
      <br />

      {raids.map((raid) => {
        return (
          <RaidForm
            key={raid.name}
            name={raid.name}
            successPercent={raid.successPercent}
            experience={raid.experience}
            gold={raid.gold}
            disabled={timeLeft > 0}
            setResult={setResult}
            userId={userId}
          />
        )
      })}

      <button
        onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}
      >
        logout
      </button>
    </>
  )
}

export default Count
