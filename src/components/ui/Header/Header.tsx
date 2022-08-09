import Logo from "../Logo";
import MenuButton from "../MenuButton";
import UserButton from "../UserButton/UserButton";

const Header = () => {
  return (
    <header className={`flex items-center justify-between
               bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md`}>
        <div className="Left flex items-center">
          <MenuButton />
          <Logo width='143px' height='20px' margin='0 0 0 25px' onClick='/' />
        </div>
        <UserButton />
    </header>
  )
}

export default Header 