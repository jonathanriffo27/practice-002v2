import { useContext } from "react";
import { 
  faGear, faHouseChimney, faCarSide, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';

import UIContext from '../../../context/ui';

import MenuOption from "../MenuOption"

const Menu = () => {
  const { open } = useContext(UIContext);
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
    <nav className={`h-[calc(100%-50px)] bg-black.7 text-[#CCCCCC] pt-[20px] absolute duration-300
            ${open ? 'left-[0px]':'left-[-275px]'}`}>
      {menu.map(item => <MenuOption key={item.title}
                                    icon={item.icon} 
                                    text={item.title} 
                                    subMenu={item.childrens}
                                    height={item.childrens?.length} /> )}               
    </nav>
  )
}

export default Menu