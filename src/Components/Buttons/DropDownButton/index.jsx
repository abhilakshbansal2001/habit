import React, { Children } from 'react'
import { MdArrowDropDown } from 'react-icons/md'


const DropDownButton = ({ value , Icon , splColor,  open , setOpen , close , position , children }) => {


  const buttonHandler = (e) => {
    e.stopPropagation();
    close();
    setOpen(!open)
  }

  let pos ;
  switch(position){
    case "center":
      pos = "right-[50%] translate-x-2/4";
      break;
    case "left":
      pos = "right-0";
      break;
    case "right":
      pos = "left-0";
      break;
    
  }

  return (
    <div className='relative'>
      <button onClick={buttonHandler} className={`${splColor ? splColor :  'bg-buttonBackground'} rounded p-2 flex gap-[5px] items-center`}>
        <div>
            { <Icon className="text-white" /> }
        </div>
        <span className='text-white text-xs'>{ value }</span>

        <div>
          <MdArrowDropDown className='text-white text-lg' />
        </div>

      </button>
      {
        open && <div className={`absolute w-60 shadow-lg border border-borderColor py-2 rounded bg-white mt-2 ${pos}`}>
          { children }
        </div>
      }
    </div>
  )
}

export default DropDownButton