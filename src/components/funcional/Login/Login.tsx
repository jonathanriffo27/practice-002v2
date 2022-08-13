import {useContext, useState} from 'react'
import {Users} from "../../../data/users"
import { useAppDispatch } from '../../../redux/hooks'
import { setUser } from '../../../redux/slices/userSlice'

import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Link  from "../../ui/Link"

// import UIContext from "../../../context/ui"

const Login = () => {
const dispatch = useAppDispatch();

  const [login, setLogin] = useState({ email:'', password:''});
  const [mensaje, setMensaje] = useState('')

  const handleChangeEmail = (e:any) => setLogin({...login, email: e.target.value })   
  const handleChangePassword = (e:any) => setLogin({...login, password: e.target.value})
  const handleClick = () => {
    const findUser = Users.filter(item => item.email === login.email)[0] 
    
    if(login.email.length === 0 || login.password.length === 0){
      return setMensaje('Complete todos los campos')
    }
    if(findUser && findUser.login.password === login.password){
        return dispatch(setUser(findUser))
    } 
    return setMensaje('Usuario inexistente o contraseña incorrecta')
  }
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
      <Logo width='303px' height='43px' />
      <div className='flex flex-col gap-[5px]'>
        <InputText label='Email' 
                   width='303px' 
                   type='email' 
                   onKeyUp={handleClick}
                   onChange={handleChangeEmail} 
                   value={login.email} />
        <InputText label='Password' 
                   width='303px' 
                   type='password' 
                   onKeyUp={handleClick}
                   onChange={handleChangePassword} 
                   value={login.password} />
      </div>
      <Button text='Ingresar' width='250px' onClick={handleClick} />
      <Link text='Olvide mi contraseña' url='' />
      <p className='mensaje text-red-500 text-md absolute bottom-[180px]'>{mensaje}</p>
    </div>
  ) 
}

export default Login