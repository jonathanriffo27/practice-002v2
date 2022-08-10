import Pic from "../../../img/userPic.png"

const UserPic = ({width, height}:any) => {
  return (
    <div
        style={{backgroundImage: `url(${Pic})`, width: `${width}`, height: `${height}`}}
        className='bg-contain bg-no-repeat'>
    </div>
  )
}

export default UserPic