import { useAppSelector } from '../../../redux/hooks';
// import {useContext} from 'react';

// import UIContext from "../../../context/ui"

const UserPic = ({width, height}:any) => {
  // const {user} = useContext(UIContext)
  const {user} = useAppSelector((state) => state.userSlice);
  return (
    <div
        style={{backgroundImage: `url(${user.picture.large})`, width: `${width}`, height: `${height}`}}
        className={`bg-contain bg-no-repeat rounded-full`}>
    </div>
  )
}

export default UserPic