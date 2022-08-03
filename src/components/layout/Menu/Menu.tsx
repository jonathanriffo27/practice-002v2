import { useState } from 'react';
import Logo from "../../ui/Logo"
import UserPic from "../../ui/UserPic"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGear, faBars, faHouseChimney, faCarSide, faFileInvoiceDollar, faChevronRight
 } from '@fortawesome/free-solid-svg-icons';
import MenuOption from '../../ui/MenuOption';
import UserInfo from '../UserInfo';

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
        <div className='Body flex relative'>
          <nav className={`h-screen bg-black opacity-70 text-[#CCCCCC] pt-[20px] ${open ? 'w-[0px]':'w-[275px]'} duration-300`}> 
            <MenuOption icon='faHouseChimney' text='Inicio' />
            <MenuOption icon='faHouseChimney' text='Maestros' />
            <MenuOption icon='faHouseChimney' text='Procesos' />
            <MenuOption icon='faHouseChimney' text='Reportes' />
          </nav>
          <div className='Content'>
            <div className='absolute left-[544px] top-[244px]'>
              <UserInfo nombre='Juan Pablo Ramirez' cargo='Facturacion' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu