import React from 'react';
import { MdDone } from 'react-icons/md'

const DoneBtn = ({ clickHandler }) => {

	return (
    <div className='p-2 flex items-center text-white gap-2 border-b cursor-pointer border-b-borderColor hover:bg-secondary'  onClick={clickHandler} >
      <MdDone />
      <abbr className='capitalize'>done</abbr>
    </div>
  )
};

export default DoneBtn;
