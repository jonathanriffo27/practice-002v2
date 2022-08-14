import Button from "../Button"
import CloseButton from "../CloseButton/CloseButton"
import InputText from "../InputText"

const Modal = ({onClick}:any) => {
  return (
    <div 
        className='grid place-content-center bg-black.5 h-screen fixed inset-0 z-50'>
      <div 
          className='w-[417px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative'>
        <CloseButton onClick={onClick} />
        <span className="text-[20px] font-medium">Nuevo Canal</span>
        <InputText width='357px' label='Nombre' />
        <Button width='250px' text='Registrar' onClick={onClick} />
      </div>
    </div>
  )
}

export default Modal