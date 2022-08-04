import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Links from "../../ui/Link"

const Login = () => {
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
        <Logo width='303px' height='43px' />
        <div className='flex flex-col gap-[5px]'>
            <InputText label='Email' width='303px' type='email' />
            <InputText label='Password' width='303px' type='password' />
        </div>
        <Button text='Ingresar' />
        <Links text='Olvide mi contraseña' url='' />
    </div>
  ) 
}

export default Login