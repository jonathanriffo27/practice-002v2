import {useContext} from 'react'

import Login from '../Login'
import Main from '../Main'

import UIContext from '../../../context/ui'

const Switch = () => {
    const {user} = useContext(UIContext)
  return  user.length === 1 ? <Main /> : <Login />;
}

export default Switch