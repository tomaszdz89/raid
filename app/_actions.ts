'use server'

import { updateTodo } from '@/lib/raid'
import { revalidatePath } from 'next/cache'

export async function raidAction(
  name: string,
  gold: number,
  successPercent: number
) {
  await updateTodo('test')
  revalidatePath('/zed')
}

export async function raidA() {
  await updateTodo('test')
  revalidatePath('/srv')
}
