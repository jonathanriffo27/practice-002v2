// import { useContext } from "react";
import { useNavigate } from "react-router-dom"


// import UIContext from '../../../context/ui';

const Dropdown = ({text, onClick, showMenu, setShowMenu, showSubMenu, setShowSubMenu}:any) => { 
  const navigate = useNavigate();
  // const { open, setOpen } = useContext(UIContext);
  // const { showMenu, setShowMenu } = useContext(UIContext);
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

export default Dropdown