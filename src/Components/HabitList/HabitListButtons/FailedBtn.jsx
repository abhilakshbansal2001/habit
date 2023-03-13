import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const FailedBtn = ({  clickHandler }) => {

	return (
    <div className='p-2 flex items-center text-white gap-2 border-b cursor-pointer border-b-borderColor hover:bg-secondary'  onClick={clickHandler} >
      <RxCross2 />
      <abbr className='capitalize'>fail</abbr>
    </div>
  )
};

export default FailedBtn;
