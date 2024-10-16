import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import MiniProfile from './components/MiniProfile'
// import Dashboard from './components/Dashboard'
import Provider from './context/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raid every hour',
  description: 'Simple raid game',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Provider> */}
      <body className={inter.className}>
        <Nav />
        {/* <MiniProfile /> */}
        {/* <Dashboard /> */}
        {children}
      </body>
      {/* </Provider> */}
    </html>
  )
}
