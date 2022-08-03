import React from 'react'

const Links = ({text, url}:any) => {
  return (
    <div
      className='Link flex justify-center items-center w-[303px] font-semibold text-[#0500FF] active:scale-90 hover:underline duration-300'>
        <a href={url}>{text}</a>
    </div>
  )
}

export default Links