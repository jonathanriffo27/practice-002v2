import { 
  faGear, faHouseChimney, faCarSide, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';

import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import UserInfo from '../UserInfo';
import Body from '../Body';

const Main = () => {
  const menu = [{
      title: 'Inicio',
      icon: faHouseChimney,   
    },
    {
      title: 'Maestros',
      icon: faGear, 
      childrens: ['Canales', 'Familias', 'Productos', 'Brokers', 'Usuarios']  
    },
    {
      title: 'Procesos',
      icon: faCarSide,  
    },
    {
      title: 'Reportes',
      icon: faFileInvoiceDollar,  
    },
  ]
  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header />
      <Body>
        <Menu />
        <UserInfo nombre='Juan Pablo Ramirez' cargo='Facturacion' />
      </Body>
    </div>
  )
}

export default Main