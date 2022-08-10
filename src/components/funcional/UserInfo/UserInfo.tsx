import Link from "../../ui/Link"
import UserPic from "../UserPic"

const UserInfo = ({nombre, cargo, height}:any) => {
  return (
    <div className="flex items-center h-full">
      <div className="UserInfo flex flex-col justify-center items-center 
            w-[193px] h-[231px] mb-[50px]">  
        <div className="mb-[11px]">
          <UserPic width='120px' 
                  height='120px' />  
        </div>   
        <h1 className='text-[20px] font-[600]'>{nombre}</h1>            
        <h1 className='text-[20px]'>{cargo}</h1> 
        <div className="font-[400] my-[30px]">
          <Link text='Cambiar mi contraseña' 
                url='' />           
        </div>
      </div>
    </div>
  )
}

export default UserInfo