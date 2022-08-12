import {useContext} from 'react';

import Pic from "../../../img/userPic.png"
import UIContext from "../../../context/ui"

const UserPic = ({width, height}:any) => {
  const {user} = useContext(UIContext)
  return (
    <div
        style={{background: `url(${user[0].picture.large})`, width: `${width}`, height: `${height}`, backgroundPosition: 'center'}}
        className='bg-contain bg-no-repeat rounded-full'>
    </div>
  )
}

export default UserPic