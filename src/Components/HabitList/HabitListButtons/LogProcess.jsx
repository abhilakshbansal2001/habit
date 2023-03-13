import React from 'react'
import { CiKeyboard } from 'react-icons/ci'

const LogProcess = ({ onClick }) => {
  return (
    <div className='p-2 flex items-center cursor-pointer text-white gap-2 border-b border-b-borderColor hover:bg-secondary' onClick={onClick}>
        <CiKeyboard />
        <abbr className='capitalize'>Log process</abbr>
    </div>
  )
}

export default LogProcess