import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGear, faBars, faHouseChimney, faCarSide, faFileInvoiceDollar, faChevronRight
 } from '@fortawesome/free-solid-svg-icons';

const MenuOption = ({icon, text}:any) => {
  const [open, setOpen] = useState(true)
  return (
    <div className={`MenuOption flex justify-start items-center w-[275px] h-[50px] px-[20px] ${open ? 'w-[275px]':'w-[0px]'}`}>
      <div className='flex justify-center bg-[#787878] w-[30px] h-[30px] rounded cursor-pointer'>
        <FontAwesomeIcon icon={icon} className="self-center h-[22px] w-[20px] text-[#CCCCCC]" />
      </div>
      <span className='flex-grow text-left self-center ml-[10px]'>{text}</span>  
      <div className='flex font-semibold stroke-1'>
        <FontAwesomeIcon icon={faChevronRight} className=" h-[16px] w-[10px] text-[#CCCCCC]" />
      </div>     
    </div>
  )
}

export default MenuOption