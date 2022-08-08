import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon, color, fontSize, text}:any) => {
  return (
      <FontAwesomeIcon style={{color, fontSize }}
                       icon={icon} />
  )
}

export default Icon