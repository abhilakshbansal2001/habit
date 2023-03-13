import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import Modal from '../../Modal'

const EditBtn = ({ modalHandler }) => {


  return (
    <React.Fragment>
        <div onClick={modalHandler} className='p-2 flex items-center text-white cursor-pointer gap-2 border-b border-b-borderColor hover:bg-secondary'>
            <AiFillEdit />
            <abbr>Edit</abbr>
        </div>
        
    </React.Fragment>
  )
}

export default EditBtn