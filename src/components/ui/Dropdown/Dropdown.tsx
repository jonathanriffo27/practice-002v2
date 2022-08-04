

const Dropdown = ({text}:any) => { 
  return (
    <div className={`Dropdown py-[10px]  hover:bg-black text-[#CCCCCC] focus:text-white duration-700`}>
        <button className='w-full text-left pl-[60px]'>{text}</button>
    </div>
  )
}

export default Dropdown