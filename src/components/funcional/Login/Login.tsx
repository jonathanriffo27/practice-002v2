import {useContext, useState} from 'react'

import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Link  from "../../ui/Link"

import UIContext from "../../../context/ui"

const Login = () => {
  const [login, setLogin] = useState({ email:'', password:''})
  const {user, setUser} = useContext(UIContext)

  const handleClick = () => setUser({...user, email: login.email, password: login.password})
  const handleChange = (e:any) => setLogin({...login, email: e.target.value})   
  const handleChangePassword = (e:any) => setLogin({...login, password: e.target.value})
  
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
      <Logo width='303px' height='43px' />
      <div className='flex flex-col gap-[5px]'>
        <InputText label='Email' width='303px' type='email' onChange={handleChange} value={login.email} />
        <InputText label='Password' width='303px' type='password' onChange={handleChangePassword} value={login.password} />
      </div>
      <Button text='Ingresar' width='250px' onClick={handleClick} />
      <Link text='Olvide mi contraseña' url='' />
    </div>
  ) 
}

export default Login