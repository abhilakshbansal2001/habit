import React from 'react';
import { MdDeleteOutline } from 'react-icons/md'

const DeleteBtn = ({ deleteHandler }) => {

	return (
    <div className='p-2 flex items-center text-white gap-2 border-b cursor-pointer border-b-borderColor hover:bg-secondary'  onClick={deleteHandler} >
      <MdDeleteOutline />
      <abbr className='capitalize'>delete</abbr>
    </div>
  )
};

export default DeleteBtn;
