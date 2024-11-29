import React from 'react'

type Prop ={
    text:string
}

const Button = ({text}:Prop) => {
  return (
    <button className='px-5 py-4 bg-[#3461FF] text-white text-sm rounded-full'>
      {text}
    </button>
  )
}

export default Button
