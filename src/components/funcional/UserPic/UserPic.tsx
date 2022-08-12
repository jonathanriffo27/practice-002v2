import {useContext} from 'react';

import UIContext from "../../../context/ui"

const UserPic = ({width, height}:any) => {
  const {user} = useContext(UIContext)
  return (
    <div
        style={{backgroundImage: `url(${user[0].picture.large})`, width: `${width}`, height: `${height}`}}
        className={`bg-contain bg-no-repeat rounded-full`}>
    </div>
  )
}

export default UserPic