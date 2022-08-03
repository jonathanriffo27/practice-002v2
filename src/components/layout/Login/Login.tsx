import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import Links from "../../ui/Link"

const Login = () => {
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen">
        <div className='mb-[30px]'>
            <Logo width='303px' height='43px' />
        </div>
        <div className='mb-[5px]'>
            <InputText label='Email' width='303px' type='email' />
        </div>
        <div className='mb-[30px]'>
            <InputText label='Password' width='303px' type='password' />
        </div>
        <div className='mb-[30px]'>
            <Button text='Ingresar' />
        </div>
        <div>
            <Links text='Olvide mi contraseña' url='' />
        </div>
    </div>
  )
}

export default Login