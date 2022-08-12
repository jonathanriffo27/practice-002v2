import {useContext} from 'react';

import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import UserInfo from '../UserInfo';
import Body from '../../layout/Body';

import UIContext from "../../../context/ui"

const Main = () => { 
  const {user} = useContext(UIContext)

  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header />
      <Body>
        <Menu />
        <UserInfo nombre={`${user[0].name.first} ${user[0].name.last}`} cargo={user[0].name.title} />
      </Body>
    </div>
  )
}

export default Main