import React from 'react'

const Modal = ({ children , onClick }) => {
  return (
    <div onClick={onClick} className='absolute inset-0 bg-[#00000070] flex justify-center items-center z-20 '>
        
        { children }
    </div>
  )
}

export default Modal