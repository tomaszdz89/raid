import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const page = async () => {
  const session = await getServerSession(authOptions)
  console.log('test - session', session)
  return (
    <div>
      page
      <pre>{JSON.stringify(session)}</pre>
      {session ? <p>mamy zalogowanego</p> : <p>nie mamy zalogowanego</p>}
    </div>
  )
}

export default page
