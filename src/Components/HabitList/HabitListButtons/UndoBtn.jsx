import React from 'react';
import { CiUndo } from 'react-icons/ci';

const UndoBtn = ({ text  , undoHandler }) => {

	return (
    <div className='p-2 flex items-center text-white gap-2 border-b cursor-pointer border-b-borderColor hover:bg-secondary' onClick={undoHandler} >
      <CiUndo />
      <abbr className='capitalize'>Undo {text}</abbr>
    </div>
  )
};

export default UndoBtn;
