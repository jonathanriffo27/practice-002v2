import { 
  faGear, faHouseChimney, faCarSide, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';

import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import UserInfo from '../UserInfo';
import Body from '../Body';

const Main = () => { 
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