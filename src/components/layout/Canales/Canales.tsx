import { 
    faPlus, faAngleRight, faAngleLeft
  } from '@fortawesome/free-solid-svg-icons';  
import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import Body from '../Body';
import InputText from '../../ui/InputText';
import Canal from '../../ui/Canal';
import Button from '../../ui/Button';
import ButtonPage from '../../ui/ButtonPage';

const Canales = () => {
  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header />
      <Body>
        <Menu />
        <div className='flex justify-center items-center w-[1220px] h-[60px] border-b border-[#CCCCCC]'>
            <span className='text-center text-[32px] font-bold w-full'>Canales</span>
        </div>
        <div className='flex justify-center items-center w-[1220px] h-[80px] border-b border-[#CCCCCC]'>                
            <InputText label='Buscar' width='439px' type='email' icon='buscar' />
        </div>
        <div className='flex flex-col flex-grow justify-center items-center w-[1220px] border-b border-[#CCCCCC] gap-[5px]'>                
            <Canal text='Corredora de Seguros' />
            <Canal text='tarjeta de Retail' />
            <Canal text='Pagina Web' />
        </div>
        <div className='grid grid-cols-3 items-center w-[1220px] h-[60px] border-b border-[#CCCCCC]'>                
            <div>
                <span>Mostrando 1 al 3 de 3 canales</span>
            </div>
            <div className='flex justify-center items-center gap-[3px]'>
                <ButtonPage icon={faAngleLeft} color='#959595' /> 
                <ButtonPage text='1'/> 
                <ButtonPage text='2'/> 
                <ButtonPage text='3'/> 
                <ButtonPage icon={faAngleRight} color='#959595' /> 
            </div>
            <div className='flex justify-end'>
                <Button icon={faPlus} width='40px' />
            </div>
        </div>
      </Body>
    </div>
  )
}

export default Canales