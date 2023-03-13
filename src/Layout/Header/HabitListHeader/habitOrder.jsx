import React from 'react'
import { MdDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../../Redux/headerStatus';

const HabitOrder = ({ text , setOrder , headerOrder:order }) => {

  const dispatch = useDispatch();



  const isSelect = order === text;
  const selectHandler = (e) => {
    e.stopPropagation()
    dispatch(updateOrder({ order : text}))
    setOrder(false)
  }
  
  return (
    <React.Fragment>
      <div onClick={selectHandler} className={`w-full flex gap-2 cursor-pointer ${!isSelect && 'hover:bg-borderColor'} ${isSelect && 'bg-borderColor'} capitalize py-2 border-b border-b-borderColor text-center items-center px-2  text-white text-sm`}>
        <MdDone className={`${!isSelect && 'opacity-0' }`} />
        <abbr>{ text }</abbr> 
      </div>
    </React.Fragment>
  )
}

export default HabitOrder