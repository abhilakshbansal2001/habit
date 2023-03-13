import React, { useEffect } from 'react'
import HabitDetailHeader from '../Header/HabitDetailHeader'
import Fire from '../../assets/images/fire.png'
import { MdDone } from 'react-icons/md'
import { BsArrowUpShort , BsArrowRightShort } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineFire } from 'react-icons/ai'
import { COMPLETE, FAILED, INCOMPLETE, SKIPPED } from '../../Helpers/constants/Global'
import './calendar.css';

import { useSelector } from 'react-redux'
import CalendarComponent from './CalendarComponent'
import Modal from '../../Components/Modal'
import EditModal from '../../Components/HabitList/EditModal'
import { getCurrentStreak, getLongestStreak } from '../../utilities/streaks'
import { getIndex } from '../../utilities/getIndex'
import moment from 'moment'
import { dateConstructor } from '../../utilities/dateConstructor'

const Tracker = () => {
  const [isOpen , setIsOpen] = React.useState(false)
  const [isInputChanged,setIsInputChanged ] = React.useState(false);


  const habit = useSelector(state => state.habit.habit)

  const todayIndex = getIndex(habit.date , new Date());
  const statuses = habit.statuses?.slice(0,todayIndex)

  const failed =  statuses.filter(el => el?.status === FAILED).length 
  const skipped =  statuses.filter(el => el?.status === SKIPPED).length 
  const complete =  statuses.filter(el => el?.status === COMPLETE).length
  
  const lastIndex = getIndex(habit.date, moment().subtract(1, 'days'))
  const currentStreak =  getCurrentStreak(statuses ,lastIndex ) 

  const {longestStreak , endIdx} = getLongestStreak(statuses)
  const streakFinishDate = endIdx !== -1 ? dateConstructor(moment(habit.date).add(endIdx , 'days')) : null;

  // -1 as streak starts from finished date itself
  const streakStartDate = streakFinishDate ? dateConstructor(moment(streakFinishDate).subtract(longestStreak - 1 , 'days')) : null;


  // const currentStreak = 0;



  const modalCloseHandler = ( ) => {
    if(isInputChanged){
        const text = "Are you sure you want to discard the current change ?"
        const resp = confirm(text)
        if(!resp)
            return;
    }
    setIsOpen(false)
  }


  return (
    <React.Fragment>
      <HabitDetailHeader heading={habit.name} date={habit.date} setIsOpen={setIsOpen} />
      <div className='p-2 grid grid-cols-2 gap-2 overflow-y-auto h-[calc(100vh-60px)]' style={{ gridAutoRows: "auto" }}>
        {/* Streak */}
        <div className='border-[1px] border-borderColor col-span-2 row-span-1 flex items-center gap-4 px-3 py-5 rounded-md'>
          <div>
            <img src={Fire} className="h-10" />
          </div>
          <div className='flex items-center justify-between flex-1'>
            <div className='flex flex-col text-white'>
              <div className='uppercase text-[10px] text-textColorPrimary'>Longest Streak</div>
              <div className='font-bold'>{longestStreak} days</div>
            </div>
            {streakFinishDate && <div className='text-xs text-textColorPrimary bg-backdrop capitalize px-3 py-1 rounded'>
                {streakStartDate}-{streakFinishDate}
            </div>}
          </div>
        </div>

        {/* Complete */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <MdDone />
            <span className='uppercase text-xs'>Complete</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            {complete} Days
          </div>
          {complete > 0 && <div className='text-green-600 flex items-center mt-1'>
            <BsArrowUpShort />
            <span className='text-xs'>{complete} days</span>
          </div>}
        </div>

        {/* Failed */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <RxCross2 />
            <span className='uppercase text-xs'>Failed</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            {failed} Days
          </div>
          { failed > 0 && <div className='text-red-600 flex items-center mt-1'>
            <BsArrowUpShort className='rotate-180' />
            <span className='text-xs'>{failed} days</span>
          </div>}
        </div>

        {/* Skipped */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <BsArrowRightShort />
            <span className='uppercase text-xs'>Skipped</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            {skipped} Days
          </div>
          {skipped > 0 && <div className='text-yellow-600 flex items-center mt-1'>
            <BsArrowRightShort />
            <span className='text-xs'>{skipped} days</span>
          </div>}
        </div>

        {/* Current Streak */}
        <div className='border border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <span className='uppercase text-xs'>current streak</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            {currentStreak} Days
          </div>
          {currentStreak > 0 && <div className='text-orange-500 flex items-center gap-1 mt-1'>
            <AiOutlineFire />
            <span className='text-xs'>{currentStreak} days</span>
          </div>}
        </div>

        {/* Calander */}
        <div className='col-span-2  rounded p-2 border border-borderColor '>
          <CalendarComponent  habit={habit} />
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

export default Tracker











