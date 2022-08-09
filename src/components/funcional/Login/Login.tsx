import { useNavigate } from "react-router-dom"
import {useContext} from 'react'

import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Link  from "../../ui/Link"

import UIContext from "../../../context/ui"

const Login = () => {
  const {user, setUser} = useContext(UIContext)
  const navigate = useNavigate();

  const handleClick = () => {
    // setUser({...user, email: 'jonathan.riffo7@gamil.com'})
    // navigate('/')
  }
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
      <Logo width='303px' height='43px' />
      <div className='flex flex-col gap-[5px]'>
        <InputText label='Email' width='303px' type='email' onChange={setUser} user={user} />
        <InputText label='Password' width='303px' type='password' />
      </div>
      <Button text='Ingresar' width='250px' onClick={handleClick} />
      <Link text='Olvide mi contraseña' url='' />
    </div>
  ) 
}

export default Login