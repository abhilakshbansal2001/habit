import React from 'react'
import IconButton from '../Buttons/IconButton'
import { MdDone , MdDragHandle } from 'react-icons/md'
import { RiMore2Line } from 'react-icons/ri'
import { RxDragHandleVertical } from 'react-icons/rx'

const HabitList = ({ text , isDone , isSelected , onClick  , onDragEnter , onDragStart, onDragEnd }) => {

    const [draggable , setDraggable] = React.useState(false)

  return (
    <div draggable={draggable} onDragEnter={onDragEnter} onDragStart={onDragStart} onDragEnd={onDragEnd} onClick={onClick} className={`px-2 flex items-center gap-2 hover:bg-backdrop ${isSelected && 'bg-backdrop'}`}>
        {/* Drag Lines */}
        <div className='cursor-move' onMouseDown={() => setDraggable(true)} onMouseUpCapture={() => setDraggable(false)}>
            <MdDragHandle className='text text-white rotate-90' />
        </div>

        {/* HABBIT */}
        <div className='py-3 flex justify-between flex-1 items-center border-b-[1px] border-b-borderColor'>
            <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold text-white'>{text}</span>
                <span className={`text-xs text-textColorPrimary ${isDone && 'line-through'}`}>0 / 1 times</span>
            </div>

            <div className='flex gap-2'>
                {!isDone && <IconButton value={"Done"} Icon={MdDone} />}
                <IconButton Icon={RiMore2Line} />
            </div>

        </div>
    </div>
  )
}

export default HabitList