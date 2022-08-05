import React from 'react'

const Button = ({text, width, onClick}:any) => {
  return (
    <div style={{width}}
         onClick={onClick}
         className='Button flex justify-center items-center h-[40px] font-semibold text-[white] rounded-full bg-[#03495C] active:scale-90 duration-300'>
      <button className='w-full outline-none'>{text}</button>
    </div>
  )
}

export default Button
