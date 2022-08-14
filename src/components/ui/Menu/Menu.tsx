import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  faGear, faHouseChimney, faCarSide, faFileInvoiceDollar, faChevronRight, faBars
} from '@fortawesome/free-solid-svg-icons';

import Icon from "../Icon";

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
          path: ''
        },
        {
          title: 'Productos',
          path: ''
        },
        {
          title: 'Brokers',
          path: ''
        },
        {
          title: 'Usuarios',
          path: ''
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

const MenuOption = ({ icon, text, subMenu, onClick, height, showMenu, setShowMenu }: any) => {
  const navigate = useNavigate();
  const [showSubMenu, setShowSubMenu] = useState(false)
  
  const handleClick = () => {
    !subMenu ? setShowMenu(!showMenu) : setShowSubMenu(!showSubMenu);
    navigate(onClick)
  }
  return (
    <div>
      <button onClick={handleClick}
              className={`flex justify-start items-center h-[50px] w-full px-[20px]         
                  hover:bg-black.5 cursor-pointer hover:text-white 
                  focus:bg-black.5 relative z-50`}>
        <div className="flex justify-center items-center 
                bg-[#787878] w-[30px] h-[30px] rounded">
          <Icon icon={icon} 
                color="#CCCCCC" 
                fontSize="20px" />
        </div>
        <span className="flex-grow text-left self-center ml-[10px]">{text}</span>
        {subMenu && (
          <div className={`duration-300 ${showSubMenu && "rotate-90"}`}>
            <Icon icon={faChevronRight} 
                  color="#CCCCCC" 
                  fontSize="17px" />
          </div>)}
      </button>
      {subMenu && (
        <div style={!showSubMenu ? {height: '0'} : {height: height*40+20}}
              className={`bg-black.5 w-[275px] text-white duration-300`}>
          {subMenu.map((item: any): any => (
            <div key={item.title}
                 className={`duration-300 
                 ${!showSubMenu ? "opacity-0" : "opacity-100"}`}>
              <Dropdown text={item.title} 
                        onClick={item.path}
                        showMenu={showMenu} 
                        setShowMenu={setShowMenu}
                        showSubMenu={showSubMenu}
                        setShowSubMenu={setShowSubMenu}
                        />

            </div>))}
        </div>)}
    </div>
  );
};

const Dropdown = ({text, onClick, showMenu, setShowMenu, showSubMenu, setShowSubMenu}:any) => { 
  const navigate = useNavigate();
  const handleClick = () => {
    setShowMenu(!showMenu)
    setShowSubMenu(!showSubMenu)
    navigate(onClick)
  }
  return (
    <button onClick={handleClick}
            className='w-full text-left pl-[60px] py-[10px]  hover:bg-black text-[#CCCCCC] hover:text-white duration-700'>{text}</button>
  )
}

const MenuButton = ({showMenu, setShowMenu}:any) => {
  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <button onClick={handleClick}
            className={`flex justify-center items-center
               bg-white w-[30px] h-[30px] rounded 
                cursor-pointer hover:border-2`}>
      <Icon icon={faBars} 
            color='#959595' 
            fontSize='20px' />
    </button>
  )
}

export default Menu

export { MenuButton }