import { useContext } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"

import UIContext from "../../../context/ui";

import Dropdown from "../Dropdown";
import Icon from "../Icon";

const MenuOption = ({ icon, text, subMenu, onClick, height }: any) => {
  const navigate = useNavigate();
  const { open, setOpen } = useContext(UIContext);
  const { showMenu, setShowMenu } = useContext(UIContext);
  const handleClick = () => {
    !subMenu ? setOpen(!open) : setShowMenu(!showMenu);
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
          <div className={`duration-300 ${showMenu && "rotate-90"}`}>
            <Icon icon={faChevronRight} 
                  color="#CCCCCC" 
                  fontSize="17px" />
          </div>)}
      </button>
      {subMenu && (
        <div style={!showMenu ? {height: '0'} : {height: height*40+20}}
              className={`bg-black.5 w-[275px] text-white duration-300`}>
          {subMenu.map((item: any): any => (
            <div key={item.title}
                 className={`duration-300 
                 ${!showMenu ? "opacity-0" : "opacity-100"}
                 `}>
              <Dropdown text={item.title} onClick={item.path} />
            </div>))}
        </div>)}
    </div>
  );
};

export default MenuOption;
