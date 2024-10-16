'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()

    // signIn('credentials', {
    //   username,
    //   password,
    //   redirect: false,
    // })

    const response = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })

    console.log(response)

    if (!response?.error) {
      router.push('/test')
      // router.refresh()
    }

    // router.refresh()
    // router.push('/test')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    </main>
  )
}

export default Login
