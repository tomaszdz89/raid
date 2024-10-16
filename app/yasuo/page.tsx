'use client'

import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  // Calculate the end time based on current time and the countdown duration

  const targetTimestamp = 1705529982

  const countdownDuration = 60

  const endTime = targetTimestamp - countdownDuration

  const calculateTimeLeft = () => {
    // Get the current time
    const now = Math.floor(Date.now() / 1000) // Convert to seconds
    // Calculate the time left
    const timeLeft = endTime - now
    // Ensure that we do not return a negative time left
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
  }, [timeLeft])

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime()}</p>
    </div>
  )
}

export default function Home() {
  // Example start time (Unix timestamp in seconds)
  const startTime = 1705519361
  // Countdown duration (1 hour = 3600 seconds)
  const duration = 3600

  return (
    <div>
      <CountdownTimer />
    </div>
  )
}
