import React from 'react'
import { AiFillCaretRight  } from 'react-icons/ai' 

const Accordion = ({ children , text , count }) => {

  const [isActive , setIsActive] = React.useState(true);

  return (
    <React.Fragment>
      <div className='flex items-center px-2 gap-2 cursor-pointer' onClick={() => setIsActive(!isActive)}>
        <div>
          { isActive ? 
          <AiFillCaretRight className='text-white rotate-90' /> : 
          <AiFillCaretRight className='text-white' /> }
        </div>

        <div className='text-white font-semibold text-lg capitalize gap-1 flex'>
          <span>
            { count }
          </span>
          <span>
            { text }
          </span>
        </div>
      </div>
      { isActive &&  children }
    </React.Fragment>
  )
}

export default Accordion