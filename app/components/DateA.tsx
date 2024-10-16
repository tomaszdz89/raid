'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type DateProps = {
  updatedAt: number
}

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

const DateComp = ({ updatedAt }: DateProps) => {
  // const currentTime = Math.floor(Date.now() / 1000)
  const [result, setResult] = useState('')
  const router = useRouter()

  const handleRaid = async (
    username: string,
    gold: number,
    successPercent: number
  ) => {
    const body = { username, gold, successPercent }
    try {
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
        // setGoldCount(data.updateTest.gold)
        // revalidatePath('/raids')
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const cooldownSeconds = 10
  const currentTime = new Date()
  const timeString = updatedAt?.toString()

  const test: number = new Date(timeString).getTime() / 1000
  const testvez: number = new Date(timeString).getTime()
  const test2: number = test + cooldownSeconds
  const [time, setTime] = useState(Math.floor(new Date().getTime() / 1000))
  // const [timeLeft, setTimeLeft] = useState<null | number>(test2 - time)

  const targetTimestamp = test + cooldownSeconds

  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000) // Current time in seconds
    const timeLeft = targetTimestamp - now
    return Math.max(timeLeft, 0)
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    console.log('ezz')
    if (timeLeft <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      console.log('1')
      console.log(timeLeft)
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(Math.floor(new Date().getTime() / 1000))
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  // console.log('xd', updatedAt)
  // //   console.log(typeof currentTime)

  // useEffect(() => {
  //   const timer2 = setInterval(() => {
  //     setTimeLeft(test2 - time)
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer2)
  //     // clearInterval(timer2)
  //   }
  // }, [time, test2])

  return (
    <div>
      {/* <p>{updatedAt?.toString()}</p> */}
      {/* <p>{updatedAt?.toLocaleString()}</p> */}
      <p>.</p>
      <p>ostatni rajd - {test}</p>
      <p>nastepny rajd - {test2}</p>
      {result}
      {/* <p>current time - {Math.floor(currentTime.getTime() / 1000)}</p> */}
      {/* wtf - {time.toLocaleTimeString()} */}
      {/* {Math.floor(currentTime.getTime() / 1000) - test} */}
      {/* {Math.floor(currentTime.getTime() / 1000) - (test + cooldownSeconds) > */}
      {timeLeft <= 0 ? <p>mozna isc na raid</p> : <p>odpoczywaj</p>}
      {/* <p>time - {time}</p> */}
      <p suppressHydrationWarning>time left - {timeLeft}</p>

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
      </div>
    </div>
  )
}
export default DateComp
