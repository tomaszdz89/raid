import prisma from '@/lib/db'
import DateA from '../components/DateA'
import Datee from '../components/Datee'

const Page = async () => {
  // const now = new Date()

  // const currentUser = await prisma.user.findUnique({
  //   where: {
  //     id: 36,
  //   },
  // })

  const currentUser = await prisma.user.findUnique({
    where: {
      id: 36,
    },
    include: {
      raids: {
        orderBy: {
          timestamp: 'desc',
        },
      },
    },
  })

  const nextRaid =
    new Date(currentUser!.raids[0]!.timestamp.toString()).getTime() / 1000 + 10

  // const raids = await prisma.raid.findMany({
  //   where: {
  //     userId: 36,
  //   },
  // })
  console.log('update', currentUser?.updatedAt)
  console.log(currentUser?.raids[0])
  // console.log('userRaids', currentUser?.raids[0].timestamp)
  // console.log('raids', raids)
  return (
    <div>
      <div className="bg-slate-300 p-5 align-middle text-center">
        <h2>{currentUser?.username}</h2>
        <p>
          {currentUser?.experience} | {currentUser?.gold}
        </p>
      </div>
      {currentUser && <DateA updatedAt={nextRaid} />}
      {/* {currentUser && <DateA updatedAt={currentUser?.raids[0].timestamp} />} */}
      {/* <DateA
        updatedAt={
          currentUser?.raids[0].timestamp
        }
      /> */}
      {/* {currentUser && (
        <Datee updatedAt={currentUser?.updatedAt} timeInitial={now.getTime()} />
      )} */}
    </div>
  )
}

export default Page
