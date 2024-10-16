import React from 'react'

type Props = {
  ready: boolean
}
const Yay = ({ ready }: Props) => {
  return <div>{ready ? <p>ready</p> : <p>wait</p>}</div>
}

export default Yay
