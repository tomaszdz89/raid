'use client'

import { useEffect, useState } from 'react'
import { raidAct2 } from '../actions/raidAct2'
import { useRouter } from 'next/navigation'

type DateProps = {
  updatedAt: Date
}
console.log('aaa')
const SrvC = ({ updatedAt }: DateProps) => {
  const router = useRouter()

  const cooldownSeconds = 60
  const timeString = updatedAt?.toString()
  const test: number = new Date(timeString).getTime() / 1000
  const test2: number = test + cooldownSeconds
  const targetTimestamp = test + cooldownSeconds

  //

  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000) // Current time in seconds
    const timeLeft = targetTimestamp - now
    return Math.max(timeLeft, 0)
  }

  const clientAction = async (formData: FormData) => {
    const result = await raidAct2(formData)

    console.log('result', result)
    router.refresh()
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    console.log('use effect run')
    if (timeLeft <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      console.log('tl', timeLeft)

      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>SrvC</h1>
      <p>ostatni rajd - {test}</p>
      <p>nastepny rajd - {test2}</p>
      {timeLeft <= 0 ? <p>mozna isc na raid</p> : <p>odpoczywaj</p>}
      <p suppressHydrationWarning>time left - {timeLeft}</p>

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

export default SrvC
