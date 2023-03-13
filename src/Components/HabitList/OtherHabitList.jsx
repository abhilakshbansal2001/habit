import React from 'react'
import IconButton from '../Buttons/IconButton'
import { MdDragHandle } from 'react-icons/md'
import { RiMore2Line } from 'react-icons/ri'
import { AiOutlineUndo } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getIndex } from '../../utilities/getIndex'
import { INCOMPLETE } from '../../Helpers/constants/Global'
import { removeHabit, updateHabit } from '../../Redux/user'
import {  selectHabit } from '../../Redux/habit'
import LogProcess from './HabitListButtons/LogProcess'
import EditBtn from './HabitListButtons/EditBtn'
import UndoBtn from './HabitListButtons/UndoBtn'
import Modal from '../Modal'
import EditModal from './EditModal'
import Badge from './Badge'
import DeleteBtn from './HabitListButtons/DeleteBtn'

const OtherHabitList = ({ habit , isSelected , type   }) => {

    const [dropdown , setDropdown] = React.useState(false)
    const dispatch = useDispatch()
    const [isOpen , setIsOpen] = React.useState(false)

    const [isInputChanged,setIsInputChanged ] = React.useState(false);

    const date = useSelector(state => state.headerStatus.date)
    const selectedHabit = useSelector(state => state.habit.habit)


    const undoHandler = () => {
        const idx = getIndex(habit.date , date)
        const newHabit = {
            ...habit,
            statuses:[...habit.statuses]
        }

        newHabit.statuses[idx] = { 'status' :  INCOMPLETE}
        dispatch(updateHabit({habit : newHabit}))
        if(selectedHabit?.id === newHabit.id)
            dispatch(selectHabit({habit : newHabit}))

    }

    const modalCloseHandler = ( ) => {
        if(isInputChanged){
            const text = "Are you sure you want to discard the current change ?"
            const resp = confirm(text)
            if(!resp)
                return;
        }
        setIsOpen(false)
    }


    const clickHandler = () => {
        dispatch(selectHabit({ habit }))
    }

    const deleteHandler = () => {
        if(habit?.id == selectedHabit.id)
            dispatch(selectHabit({habit : null}))
        dispatch(removeHabit({id : habit.id}))
    }

  return (
    <React.Fragment>
        <div className={`px-2 flex items-center gap-2 hover:bg-backdrop ${isSelected && 'bg-backdrop'}`} onClick={clickHandler} >
            {/* Drag Lines */}
            <div className='cursor-move' onMouseDown={() => setDraggable(true)} onMouseUpCapture={() => setDraggable(false)}>
                <MdDragHandle className='text text-white rotate-90' />
            </div>

            {/* HABBIT */}
            <div className=' flex justify-between flex-1 items-center border-b-[1px] border-b-borderColor'>
                <div className='flex items-center gap-2 '>
                    <span className='text-md font-semibold text-white'>{habit.name}</span>
                    <Badge type={type}  />
                </div>

                <div className='flex' onClick={e => e.stopPropagation()}>
                    <IconButton value={"Undo"} Icon={AiOutlineUndo} className="h-9 my-3" onClick={undoHandler}  />
                    
                    <div className="relative pl-2" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}  >
                        <IconButton Icon={RiMore2Line} className=" h-9 my-3"   />
                        {dropdown && 
                            <div className='absolute w-44 overflow-hidden right-0 after:absolute rounded shadow-xl bg-buttonBackground z-10 -mt-1'>
                                <LogProcess onClick={clickHandler}/>
                                <EditBtn modalHandler={() => setIsOpen(true)} setModal={setIsOpen} />
                                <UndoBtn text={type} undoHandler={undoHandler} />
                                <DeleteBtn deleteHandler={deleteHandler} />
                            </div>
                        }
                    </div>
                </div>


            </div>
        </div>

        {
            isOpen && <Modal onClick={modalCloseHandler} >
                <EditModal habit={habit} setModal={setIsOpen} modalCloseHandler={modalCloseHandler} setIsInputChanged={setIsInputChanged} />
            </Modal>
        }
    </React.Fragment>
  )
}

export default OtherHabitList