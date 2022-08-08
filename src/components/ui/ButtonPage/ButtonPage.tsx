import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Icon from '../Icon'

const ButtonPage = ({icon, text}:any) => {
  return (
    <button className='w-[40px] h-[40px] bg-[#D9D9D9] rounded-[5px] text-[#959595] hover:bg-[#959595] hover:text-[white]'>
        {text}
        <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default ButtonPage