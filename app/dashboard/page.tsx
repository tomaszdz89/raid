'use client'
import { useSession } from 'next-auth/react'
const Page = () => {
  const { data: session, status } = useSession()
  console.log(session)
  return <div>page</div>
}

export default Page
