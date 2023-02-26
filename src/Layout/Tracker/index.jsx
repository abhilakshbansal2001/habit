import React from 'react'
import HabitDetailHeader from '../Header/HabitDetailHeader'
import Fire from '../../assets/fire.png'
import { MdDone } from 'react-icons/md'
import { BsArrowUpShort , BsArrowRightShort } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const Tracker = () => {
  return (
    <React.Fragment>
      <HabitDetailHeader />
      <div className='p-2 grid grid-cols-2 gap-2'>
        {/* Streak */}
        <div className='border-[1px] border-borderColor col-span-2 flex items-center gap-4 px-3 py-5 rounded-md'>
          <div>
            <img src={Fire} className="h-10" />
          </div>
          <div className='flex items-center justify-between flex-1'>
            <div className='flex flex-col text-white'>
              <div className='uppercase text-[10px] text-textColorPrimary'>Current Streak</div>
              <div className='font-bold'>2 days</div>
            </div>
            <div className='text-xs text-textColorPrimary bg-backdrop capitalize px-3 py-1 rounded'>
                from feb 23, 2023
            </div>
          </div>
        </div>

        {/* Complete */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <MdDone />
            <span className='uppercase text-xs'>Complete</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            2 Days
          </div>
          <div className='text-green-600 flex items-center mt-1'>
            <BsArrowUpShort />
            <span className='text-xs'>2 days</span>
          </div>
        </div>

        {/* Failed */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <RxCross2 />
            <span className='uppercase text-xs'>Failed</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            2 Days
          </div>
          <div className='text-red-600 flex items-center mt-1'>
            <BsArrowUpShort className='rotate-180' />
            <span className='text-xs'>2 days</span>
          </div>
        </div>

        {/* Skipped */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <BsArrowRightShort />
            <span className='uppercase text-xs'>Skipped</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            2 Days
          </div>
          <div className='text-yellow-600 flex items-center mt-1'>
            <BsArrowRightShort />
            <span className='text-xs'>2 days</span>
          </div>
        </div>

        {/* Total */}
        <div className='border-[1px] border-borderColor col-span-1 px-3 py-5 rounded-md'>
          <div className='text-textColorPrimary flex items-center gap-2'>
            <span className='uppercase text-xs'>Total</span>
          </div>
          <div className='text-white font-bold mt-2 text-xl'>
            2 Days
          </div>
          <div className='text-green-600 flex items-center mt-1'>
            <BsArrowUpShort />
            <span className='text-xs'>2 days</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tracker