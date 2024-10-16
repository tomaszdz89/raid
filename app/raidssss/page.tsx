'use client'
import { useRouter } from 'next/navigation'
import Button from '../components/Button'
const raids = [
  {
    name: 'Green Dragon',
    experience: 10,
    successPercent: 100,
    gold: 10,
  },
  {
    name: 'Yellow Dragon',
    experience: 20,
    successPercent: 75,
    gold: 20,
  },
  {
    name: 'Red Dragon',
    experience: 30,
    successPercent: 50,
    gold: 30,
  },
]

// const router = useRouter
// const handleRaid = async (username: string, gold: number) => {
//   const body = { username, gold }
//   await fetch('/api/raid', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
// }

const Page = () => {
  const router = useRouter()
  const handleRaid = async (username: string, gold: number) => {
    const body = { username, gold }
    await fetch('/api/raid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    router.refresh()
  }
  return (
    <div>
      {raids.map((raid) => {
        return (
          <div key={raid.name} className="border-2 p-5">
            <h2>{raid.name} Raid</h2>
            <p>Success Chance - {raid.successPercent}</p>
            <p>Experience - {raid.experience}</p>
            <p>Gold - {raid.gold}</p>
            {/* <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:cursor-default disabled:bg-slate-600"
              onClick={() => handleRaid('test', raid.gold)}
              disabled
            >
              click
            </button> */}
            {/* <Button onClick={handleRaid}/>     */}
            <Button text={raid.name} />
          </div>
        )
      })}
    </div>
  )
}

export default Page
