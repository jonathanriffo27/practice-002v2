import {useState} from 'react';
import { useAppSelector } from '../../../redux/hooks';

import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import UserInfo from '../UserInfo';
import Body from '../../layout/Body';

// import UIContext from "../../../context/ui"

const Main = () => { 
  // const {user} = useContext(UIContext)
  const [showMenu, setshowMenu] = useState(false)
  const {user} = useAppSelector((state) => state.userSlice);
  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header showMenu={showMenu} setShowMenu={setshowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setshowMenu} />
        <UserInfo nombre={`${user.name.first} ${user.name.last}`} cargo={user.name.title} />
      </Body>
    </div>
  )
}

export default Main