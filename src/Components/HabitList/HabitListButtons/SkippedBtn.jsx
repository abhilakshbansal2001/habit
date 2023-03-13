import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const SkippedBtn = ({ clickHandler }) => {

	return (
    <div className='p-2 flex items-center text-white gap-2 border-b cursor-pointer border-b-borderColor hover:bg-secondary'  onClick={clickHandler} >
      <BsArrowRight  />
      <abbr className='capitalize'>skip</abbr>
    </div>
  )
};

export default SkippedBtn;
