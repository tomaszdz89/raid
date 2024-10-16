import prisma from '@/lib/db'
const fetchData = async () => {
  const newData = await prisma.user.findUnique({
    where: {
      id: 36,
    },
  })
  return newData
}

const page = async () => {
  const data = await fetchData()

  return <div>test</div>
}

export default page
