import React from 'react'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface User {
  name: String
  gold: Number
  id: Number
}

interface Session {
  user: User
}

const MiniProfile = async () => {
  const session: Session | null = await getServerSession(authOptions)
  console.log('AAAA', session)

  return (
    <div className="w-full bg-green-800 text-white p-5">
      MiniProfile
      {session ? (
        <>
          <p>{session.user.name}</p>
          <p>{`${session.user.gold}`}</p>
          <p>{`${session.user.id}`}</p>
          <p>jest zalogowany</p>
        </>
      ) : (
        <p>nie mamy zalogowanego</p>
      )}
    </div>
  )
}

export default MiniProfile
