import { useState } from 'react';
import Logo from "../../ui/Logo"
import UserPic from "../../ui/UserPic"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGear, faBars, faHouseChimney, faCarSide, faFileInvoiceDollar, faChevronRight
 } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="Menu h-screen w-screen overflow-hidden">
        <header className="flex items-center justify-between flex-wrap bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md">
            <div className="Left flex items-center">
                <div className='flex justify-center bg-white w-[30px] h-[30px] rounded cursor-pointer hover:border-2'>
                  <FontAwesomeIcon icon={faBars} className="self-center h-[22px] w-[20px] text-[#959595]" onClick={() => setOpen (!open)} />
                </div>
                <div className='ml-[25px]'>
                  <Logo width='143px' height='20px' />                
                </div>
            </div>
            <div className='Right float-right mr-[20px]'>
              <UserPic width='40px' height='40px' />              
            </div>
        </header>
        <div className='Body'>
          <nav>

          </nav>
        </div>
    </div>
  )
}

export default Menu