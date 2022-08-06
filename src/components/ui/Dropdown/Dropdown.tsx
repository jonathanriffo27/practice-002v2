import { useContext } from "react";

import UIContext from '../../../context/ui';

const Dropdown = ({text, onClick}:any) => { 
  const { open, setOpen } = useContext(UIContext);
  const { showMenu, setShowMenu } = useContext(UIContext);
  const handleClick = () => {
    setOpen(!open)
    setShowMenu(!showMenu)
  }
  return (
    <button onClick={handleClick}
            className='w-full text-left pl-[60px] py-[10px]  hover:bg-black text-[#CCCCCC] hover:text-white duration-700'>{text}</button>
  )
}

export default Dropdown