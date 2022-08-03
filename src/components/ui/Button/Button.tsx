import React from 'react'

const Button = ({text}:any) => {
  return (
    <div
      className='Button flex justify-center items-center w-[250px] h-[40px] font-semibold text-[white] rounded-[20px] bg-[#03495C] active:scale-90 duration-300'>
        <button className='w-full'>{text}</button>
    </div>
  )
}

export default Button
