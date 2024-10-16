'use client'
import { useEffect, useState } from 'react'

type DateProps = {
  updatedAt: Date
  timeInitial: number
}

const DateComp = ({ updatedAt, timeInitial }: DateProps) => {
  // const currentTime = Math.floor(Date.now() / 1000)

  const cooldownSeconds = 60
  const currentTime = new Date()
  const timeString = updatedAt?.toString()

  const test: number = new Date(timeString).getTime() / 1000
  const test2: number = test + cooldownSeconds
  const [time, setTime] = useState(Math.floor(new Date().getTime() / 1000))

  // const [timeLeft, setTimeLeft] = useState<null | number>(test2 - time)

  const targetTimestamp = test + cooldownSeconds

  const calculateTimeLeft = () => {
    // const now = Math.floor(Date.now() / 1000) // Current time in seconds

    const now = new Date(timeInitial).getTime() / 1000
    const timeLeft = targetTimestamp - now
    return Math.max(timeLeft, 0)
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    if (timeLeft <= 0) {
      return
    }

    const intervalId = setInterval(() => {
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
      <p>{updatedAt?.toString()}</p>
      <p>{updatedAt?.toLocaleString()}</p>
      <p>.</p>
      <p>ostatni rajd - {test}</p>
      <p>nastepny rajd - {test2}</p>
      {/* <p>current time - {Math.floor(currentTime.getTime() / 1000)}</p> */}
      {/* wtf - {time.toLocaleTimeString()} */}
      {Math.floor(currentTime.getTime() / 1000) - test}
      {/* {Math.floor(currentTime.getTime() / 1000) - (test + cooldownSeconds) > */}
      {timeLeft <= 0 ? <p>mozna isc na raid</p> : <p>odpoczywaj</p>}
      <p>time - {time}</p>
      <p>time left - {timeLeft}</p>
    </div>
  )
}
export default DateComp
