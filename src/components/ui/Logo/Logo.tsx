import { useNavigate } from "react-router-dom"

import LogoImg from '../../../img/logo.png'

const Logo = ({width, height, margin, onClick}:any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(onClick)
  }
  return (
    <div onClick={handleClick}
        style={{backgroundImage: `url(${LogoImg})`, width, height, margin}}
        className='bg-contain bg-no-repeat cursor-pointer'>
    </div>
  )
}

export default Logo