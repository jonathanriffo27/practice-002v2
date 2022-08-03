import Links from "../../ui/Link"
import UserPic from "../../ui/UserPic"

const UserInfo = ({nombre, cargo}:any) => {
  return (
    <div className="UserInfo flex flex-col justify-center items-center w-[193px] h-[231px]">  
      <div className="mb-[11px]">
        <UserPic width='120px' height='120px' />  
      </div>   
      <h1 className='text-[20px] font-[600]'>{nombre}</h1>            
      <h1 className='text-[20px]'>{cargo}</h1> 
      <div className="font-[400] mt-[30px]">
        <Links text='Cambiar mi contraseña' url='' />           
      </div>
    </div>
  )
}

export default UserInfo