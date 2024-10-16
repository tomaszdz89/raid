import { useRouter } from 'next/navigation'

import { raidAction } from '../actions/raidAction'

type RaidFormProps = {
  name: string
  successPercent: number
  experience: number
  gold: number
  disabled: boolean
  setResult: Function
  userId: number
}

const RaidForm = ({
  name,
  successPercent,
  experience,
  gold,
  disabled,
  setResult,
  userId,
}: RaidFormProps) => {
  const router = useRouter()

  const clientAction = async (formData: FormData) => {
    const result = await raidAction(formData, userId)
    setResult(result)
    console.log('result', result)
    router.refresh()
  }
  return (
    <div className="card">
      <form action={clientAction}>
        <p>{name}</p>
        <input
          type="text"
          name="raidName"
          placeholder={name}
          required
          value={name}
          readOnly
          // hidden
        />
        <input
          type="number"
          name="successChance"
          //   placeholder="50"
          required
          value={successPercent}
          readOnly
          //   hidden
        />
        <input
          type="number"
          name="raidExp"
          //   placeholder="10"
          required
          value={experience}
          readOnly
        />
        <input
          type="number"
          name="raidGold"
          //   placeholder="10"
          required
          value={gold}
          readOnly
        />
        <button disabled={disabled} type="submit">
          submit
        </button>
      </form>
    </div>
  )
}

export default RaidForm
