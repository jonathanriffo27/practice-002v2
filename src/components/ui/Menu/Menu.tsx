import { useContext } from "react";
import { 
  faGear, faHouseChimney, faCarSide, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';

// import UIContext from '../../../context/ui';

import MenuOption from "../MenuOption"

const Menu = ({showMenu, setShowMenu}:any) => {
  const menu = [{
      title: 'Inicio',
      icon: faHouseChimney, 
      path: '/'  
    },
    {
      title: 'Maestros',
      icon: faGear, 
      path: '',   
      childrens: [
        {
          title: 'Canales',
          path: '/canales'
        },
        {
          title: 'Familias',
          path: '/familias'
        },
        {
          title: 'Productos',
          path: '/productos'
        },
        {
          title: 'Brokers',
          path: '/brokers'
        },
        {
          title: 'Usuarios',
          path: '/usuarios'
        }]  
    },
    {
      title: 'Procesos',
      icon: faCarSide,
      path: ''
    },
    {
      title: 'Reportes',
      icon: faFileInvoiceDollar, 
      path: '' 
    }
  ]
  return (
    <nav className={`h-[calc(100%-50px)] bg-black.7 text-[#CCCCCC] pt-[20px] absolute duration-300 z-40
            ${showMenu ? 'left-[0px]':'left-[-275px]'}`}>
      {menu.map(item => <MenuOption key={item.title}
                                    icon={item.icon} 
                                    text={item.title} 
                                    subMenu={item.childrens}
                                    onClick={item.path}
                                    height={item.childrens?.length}
                                    showMenu={showMenu}
                                    setShowMenu={setShowMenu}
                                    /> )}               
    </nav>
  )
}

export default Menu