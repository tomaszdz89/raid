import prisma from '@/lib/db'

async function getPosts() {
  const posts = await prisma.user.findMany()
  return posts
}

const page = async () => {
  const users = await getPosts()

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="flex gap-7">
            <div>{user.username}</div>
            <div>{user.experience}</div>
            <div>{user.gold}</div>
          </div>
        )
      })}
    </div>
  )
}

export default page
