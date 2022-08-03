import React from 'react'

const InputText = ({label, width, type}: any) => {
  return (
    <div id='inputText' style={{width}} className={`flex justify-center items-center relative`}>
        <input type={type} 
            placeholder=' '
            className='w-full border-[1px] border-[#CCCCCC] rounded-[5px] h-[60px] pl-[10px] pt-[17px] peer placeholder-transparent' />
        <label htmlFor="" 
            className={`left-[10px] text-[12px] top-[4px] text-[#555555]
            peer-placeholder-shown:text-[16px]
            peer-placeholder-shown:top-[17px] 
            peer-placeholder-shown:text-[#7c7b7b] 
            peer-focus:text-[12px] 
            peer-focus:top-[4px]
            duration-300 absolute
        `}>{label}</label>
    </div>
  )
}

export default InputText