import {useContext} from 'react'

import Login from '../Login'
import Main from '../Main'

import UIContext from '../../../context/ui'

const Switch = () => {
    const {user} = useContext(UIContext)
    const {email} = user;
  return  email ? <Main /> : <Login />;
}

export default Switch