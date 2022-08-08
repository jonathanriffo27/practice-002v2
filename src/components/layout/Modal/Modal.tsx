import Button from "../../ui/Button"
import CloseButton from "../../ui/CloseButton/CloseButton"
import InputText from "../../ui/InputText"


const Modal = ({onClick}:any) => {
  return (
    <div className='bg-black.5 fixed inset-0 z-50'>
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[417px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative'>
                <CloseButton onClick={onClick} />
                <span className="text-[20px] font-medium">Nuevo Canal</span>
                <InputText width='357px' label='Nombre' />
                <Button width='250px' text='Registrar' onClick={onClick} />
            </div>
        </div>
    </div>
  )
}

export default Modal