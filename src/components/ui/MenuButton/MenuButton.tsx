import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { useContext } from "react";

// import UIContext from '../../../context/ui';
import Icon from '../Icon';

const MenuButton = ({showMenu, setShowMenu}:any) => {
  // const { open, setOpen } = useContext(UIContext);
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

export default MenuButton