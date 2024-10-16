'use client'

import { SessionProvider } from 'next-auth/react'

interface Props {
  session: any
  children: any
}

const Provider = ({ session, children }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
