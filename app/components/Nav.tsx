import Link from 'next/link'

const Nav = () => {
  return (
    <div className="flex gap-20 max-w-lg">
      <Link href="/">Home</Link>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/highscores">Highscores</Link>
      {/* <Link href="/raids">Raids</Link> */}
      {/* <Link href="/zed">Zed</Link> */}
      {/* <Link href="/date">Date</Link> */}
      <Link href="/history">History</Link>
      {/* <Link href="/srv">Srv</Link> */}
      {/* <Link href="/serverA">Srv A</Link> */}
      <Link href="/countdown">Countdown</Link>
      <Link href="/test">Test dashbord</Link>
    </div>
  )
}

export default Nav
