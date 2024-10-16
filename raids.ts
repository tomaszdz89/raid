type Raid = {
  name: string
  experience: number
  successPercent: number
  gold: number
}

export const raids: Raid[] = [
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
