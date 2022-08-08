import React from 'react'

const Content = ({children}:any) => {
  return (
    <div className='flex flex-col w-[1220px] h-screen'>
        {children}
    </div>
  )
}

export default Content