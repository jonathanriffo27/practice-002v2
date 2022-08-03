import LogoImg from '../../../img/logo.png'

const Logo = ({width, height}:any) => {
  return (
    <div
        style={{backgroundImage: `url(${LogoImg})`, width: `${width}`, height: `${height}`}}
        className='bg-contain bg-no-repeat'>
    </div>
  )
}

export default Logo