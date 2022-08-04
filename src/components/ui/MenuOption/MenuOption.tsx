import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGear, faBars, faHouseChimney, faCarSide, faFileInvoiceDollar, faChevronRight
 } from '@fortawesome/free-solid-svg-icons';

const MenuOption = ({icon, text, subMenu}:any) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`MenuOption w-[275px] transition-all duration-300 cursor-pointer`}>
      <div onClick={() => setOpen (!open)}
          className={`flex justify-start items-center h-[50px] px-[20px] hover:bg-black.5`}>
        <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded cursor-pointer'>
          <FontAwesomeIcon icon={icon} className={`self-center h-[22px] w-[20px] text-[#CCCCCC]`} />
        </div>
        <span className='flex-grow text-left self-center ml-[10px]'>{text}</span>
        {subMenu ? <div className='flex font-semibold stroke-1'>
          <FontAwesomeIcon icon={faChevronRight} className={`h-[16px] w-[10px] text-[#CCCCCC] ${open ? 'rotate-90' : null}`} />
        </div> : null }          
      </div>
      {subMenu ? <div
        className={`bg-black.5 w-[275px] text-white z-10 duration-300 ${open ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        {subMenu.map((item:any):any => <h1 className='py-[10px] pl-[60px] hover:bg-black w-full text-[#CCCCCC]'>{item}</h1>)}  
        
      </div>  : null }   
    </div>
  )
}

export default MenuOption