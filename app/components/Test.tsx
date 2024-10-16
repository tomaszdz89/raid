import React from 'react'
import useCurrentUser from '../hooks/useCurrentUser'

const Test = () => {
  const user = useCurrentUser()
  console.log('user - comp Test', user)
  return <div>Test</div>
}

export default Test
