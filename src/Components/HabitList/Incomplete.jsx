import React from 'react'
import IconButton from '../Buttons/IconButton'
import { MdDragHandle } from 'react-icons/md'
import { RiMore2Line } from 'react-icons/ri'
import { MdDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getIndex } from '../../utilities/getIndex'
import { COMPLETE, FAILED, SKIPPED } from '../../Helpers/constants/Global'
import { updateHabit } from '../../Redux/user'
import {  selectHabit } from '../../Redux/habit'
import LogProcess from './HabitListButtons/LogProcess'
import EditBtn from './HabitListButtons/EditBtn'
import Modal from '../Modal'
import EditModal from './EditModal'
import DoneBtn from './HabitListButtons/DoneBtn'
import SkippedBtn from './HabitListButtons/SkippedBtn'
import FailedBtn from './HabitListButtons/FailedBtn'

const Incomplete = ({ habit , isSelected   }) => {

    const [dropdown , setDropdown] = React.useState(false)
    const dispatch = useDispatch()
    const [isOpen , setIsOpen] = React.useState(false)

    const [isInputChanged,setIsInputChanged ] = React.useState(false);

    const date = useSelector(state => state.headerStatus.date)
    const selectedHabit = useSelector(state => state.habit.habit)



    const doneHandler = (e) => {
        e.stopPropagation()
        const idx = getIndex(habit.date , date)
        // const statusObj= moment(habit.date).add(idx,'days').format("YYYY-MM-DD");
        // const newHabit = {
        //     ...habit,
        //     statuses: {
        //         ...habit.statuses,
        //         [statusObj] : {
        //             status : COMPLETE
        //         }
        //     }
        // }
        // dispatch(updateHabit({habit : newHabit}))
        const newHabit = {
            ...habit,
            statuses:[...habit.statuses]
        }

        newHabit.statuses[idx] = { 'status' :  COMPLETE}
        dispatch(updateHabit({habit : newHabit}))
        if(selectedHabit?.id === newHabit.id)
            dispatch(selectHabit({habit : newHabit}))

    }

    const failHandler = (e) => {
        const idx = getIndex(habit.date , date)
        // const statusObj= moment(habit.date).add(idx,'days').format("YYYY-MM-DD");
        // const newHabit = {
        //     ...habit,
        //     statuses: {
        //         ...habit.statuses,
        //         [statusObj] : {
        //             status : FAILED
        //         }
        //     }
        // }
        // dispatch(updateHabit({habit : newHabit}))
        const newHabit = {
            ...habit,
            statuses:[...habit.statuses]
        }

        newHabit.statuses[idx] = { 'status' :  FAILED}
        dispatch(updateHabit({habit : newHabit}))
        if(selectedHabit?.id === newHabit.id)
            dispatch(selectHabit({habit : newHabit}))

    }

    const skipHandler = (e) => {
        const idx = getIndex(habit.date , date)
        // const statusObj= moment(habit.date).add(idx,'days').format("YYYY-MM-DD");
        // const newHabit = {
        //     ...habit,
        //     statuses: {
        //         ...habit.statuses,
        //         [statusObj] : {
        //             status : SKIPPED
        //         }
        //     }
        // }
        // dispatch(updateHabit({habit : newHabit}))
        const newHabit = {
            ...habit,
            statuses:[...habit.statuses]
        }

        newHabit.statuses[idx] = { 'status' :  SKIPPED}
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


    const selectHandler = () => {
        dispatch(selectHabit({ habit }))
    }

  return (
    <React.Fragment>
        <div className={`px-2 flex items-center gap-2 hover:bg-backdrop ${isSelected && 'bg-backdrop'}`} onClick={selectHandler} >
            {/* Drag Lines */}
            <div className='cursor-move' onMouseDown={() => setDraggable(true)} onMouseUpCapture={() => setDraggable(false)}>
                <MdDragHandle className='text text-white rotate-90' />
            </div>

            {/* HABBIT */}
            <div className=' flex justify-between flex-1 items-center border-b-[1px] border-b-borderColor'>
                <div className='flex items-center gap-2 '>
                    <span className='text-md font-semibold text-white'>{habit.name}</span>
                    <span className='text-xs font-semibold text-white bg-secondary p-[2px] px-2 rounded-xl'>Pending</span>
                </div>

                <div className='flex' onClick={e => e.stopPropagation()}>
                    <IconButton onClick={doneHandler} value={"Done"} Icon={MdDone}  className="h-9 my-3" />
                    
                    <div className="relative pl-2" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}  >
                        <IconButton Icon={RiMore2Line} className=" h-9 my-3"   />
                        {dropdown && 
                            <div className='absolute w-44 overflow-hidden right-0 after:absolute rounded shadow-xl bg-buttonBackground z-10 -mt-1'>
                                <LogProcess onClick={selectHandler}/>
                                <EditBtn modalHandler={() => setIsOpen(true)} setModal={setIsOpen} />
                                <DoneBtn clickHandler={doneHandler}  />
                                <SkippedBtn clickHandler={skipHandler} />
                                <FailedBtn clickHandler={failHandler} />
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

export default Incomplete