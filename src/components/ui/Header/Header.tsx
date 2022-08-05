import LogoHeader from "../LogoHeader";
import MenuButton from "../MenuButton";
import UserButton from "../UserButton/UserButton";

const Header = () => {
  return (
    <header className={`flex items-center justify-between
               bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md`}>
        <div className="Left flex items-center">
          <MenuButton />
          <LogoHeader />
        </div>
        <UserButton />
    </header>
  )
}

export default Header 