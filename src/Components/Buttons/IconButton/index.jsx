import React from 'react'

const IconButton = ({ value ,Icon, onClick , splColor }) => {
  return (
        <div onClick={onClick} className={`${splColor ? splColor : 'bg-buttonBackground'} px-2 ${value && 'pr-3'} py-2 cursor-pointer rounded flex items-center gap-2`}>
			<Icon className='text-white text-md' />
            {value && <span className='text-white text-sm'>{ value }</span>}
        </div>
  )
}

export default IconButton