import { useState } from 'react';
import Logo from "../../ui/Logo"
import UserPic from "../../ui/UserPic"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGear, faBars, faHouseChimney, faCarSide, faFileInvoiceDollar
 } from '@fortawesome/free-solid-svg-icons';
import MenuOption from '../../ui/MenuOption';
import UserInfo from '../UserInfo';

const Menu = () => {
  const [open, setOpen] = useState(false)

  const menu = [{
    title: 'Inicio',
    icon: faHouseChimney,   
  },
  {
    title: 'Maestros',
    icon: faGear, 
    childrens: ['Canales', 'Familias', 'Productos', 'Brokers', 'Usuarios']  
  },
  {
    title: 'Procesos',
    icon: faCarSide,  
  },
  {
    title: 'Reportes',
    icon: faFileInvoiceDollar,  
  },
]
  return (
    <div className="Menu h-screen w-screen overflow-hidden bg-white">
        <header className={`flex items-center justify-between flex-wrap
                           bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md`}>
            <div className="Left flex items-center">
                <div className={`flex justify-center items-center bg-white 
                                w-[30px] h-[30px] rounded cursor-pointer hover:border-2`}>
                  <FontAwesomeIcon icon={faBars} 
                                   className="h-[22px] w-[20px] text-[#959595]" 
                                   onClick={() => setOpen (!open)} />
                </div>
                <div className='ml-[25px] cursor-pointer'>
                  <Logo width='143px' height='20px' />                
                </div>
            </div>
            <div className='Right float-right mr-[20px] cursor-pointer'>
              <UserPic width='40px' height='40px' />              
            </div>
        </header>
        <nav className={`h-screen bg-black.7 text-[#CCCCCC] pt-[20px] 
                        ${open ? 'left-[0px]':'left-[-275px]'} absolute duration-300`}>
          <div className=''>
          {menu.map(item => <MenuOption key={item.title}
                                        icon={item.icon} 
                                        text={item.title} 
                                        subMenu={item.childrens && item.childrens} /> )}        
          </div>                
        </nav>
        <div className='Content flex justify-center items-center w-screen h-[calc(100%-50px)]'>
          <UserInfo nombre='Juan Pablo Ramirez' cargo='Facturacion' />
        </div>
    </div>
  )
}

export default Menu