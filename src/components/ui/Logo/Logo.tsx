import LogoImg from '../../../img/logo.png'

const Logo = ({width, height}:any) => {
  return (
    <div
        style={{backgroundImage: `url(${LogoImg})`, width, height}}
        className='bg-contain bg-no-repeat cursor-pointer'>
    </div>
  )
}

export default Logo