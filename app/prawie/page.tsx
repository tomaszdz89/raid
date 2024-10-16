import React from 'react'
import Hah from '../components/Hah'

const page = () => {
  const now = new Date()
  return (
    <div>
      <h1>ehh</h1>
      <Hah time={now.getTime()} />
    </div>
  )
}

export default page
