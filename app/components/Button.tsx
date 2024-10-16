'use client'
import React from 'react'


interface Button {
    text: string
}
// onClick={() => handleRaid(raid.experience)}

const handleClick = () => {
    console.log('test')
}

const Button = ({text}: Button) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>{text}</button>    
  )
}

export default Button