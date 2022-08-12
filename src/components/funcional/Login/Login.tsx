import {useContext, useState} from 'react'
import {Users} from "../../../data/users"

import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Link  from "../../ui/Link"

import UIContext from "../../../context/ui"

const Login = () => {
  const [email, setEmail] = useState({ value:'', valid:''});
  const [password, setPassword] = useState({ value:'', valid:''});
  const [mensaje, setMensaje] = useState('')
  const {user, setUser} = useContext(UIContext)

  const handleChangeEmail = (e:any) => setEmail({...email, value: e.target.value })   
  const handleChangePassword = (e:any) => setPassword({...password, value: e.target.value})
  const findUser = Users.filter(item => item.email === email.value) 
  const handleClick = () => {
    (email.value.length !== 0 && password.value.length !== 0) ? (findUser.length === 0 ? setMensaje('Usuario inexistente o contraseña incorrecta') : findUser[0].login.password !== password.value ? setMensaje('Usuario inexistente o contraseña incorrecta') : setUser(findUser)) : setMensaje('Complete todos los campos')
  }
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
      <Logo width='303px' height='43px' />
      <div className='flex flex-col gap-[5px]'>
        <InputText label='Email' 
                   width='303px' 
                   type='email' 
                   onChange={handleChangeEmail} 
                   value={email.value} />
        <InputText label='Password' 
                   width='303px' 
                   type='password' 
                   onChange={handleChangePassword} 
                   value={password.value} />
      </div>
      <Button text='Ingresar' width='250px' onClick={handleClick} />
      <Link text='Olvide mi contraseña' url='' />
      <p className='mensaje text-red-500 text-md absolute bottom-[180px]'>{mensaje}</p>
    </div>
  ) 
}

export default Login