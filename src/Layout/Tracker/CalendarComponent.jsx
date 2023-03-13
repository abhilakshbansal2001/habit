import moment from 'moment'
import React from 'react'
import { Calendar } from 'react-calendar'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import TileComponent from '../../Components/Tracker/TileComponent'
import { COMPLETE, FAILED, INCOMPLETE, SKIPPED } from '../../Helpers/constants/Global'
import { updateDate } from '../../Redux/headerStatus'

const CalendarComponent = () => {
  const habit = useSelector(state => state.habit.habit)
  const [date, onChange] = React.useState(new Date());
	const { date: headerDate } = useSelector(state => state.headerStatus)


  React.useEffect(() => {
    onChange(new Date(headerDate))
  } , [headerDate])

  const dispatch = useDispatch()

  const clickHandler = ( date) => {
    dispatch(updateDate({newDate : moment(date).format("YYYY-MM-DD")}))
  }
  
  return (
    <Calendar
            className="w-full h-full bg-transparent text-textColorPrimary aspect-square border-none"
            onChange={onChange} 
            value={date}  
            minDate={new Date(habit.date)}
            maxDate={new Date()}
            prev2Label={<div className='hidden'></div>}
            onClickDay={clickHandler}
            tileContent={({ date, view }) =>  {
              
              const startDate = moment(habit.date)
              const selectedDate = moment(date)
              
              const todayDate = moment()
              if(selectedDate <= todayDate && selectedDate >= startDate){
                const idx = selectedDate.diff(startDate , 'days')
                let a;
                if(a = habit.statuses[idx] || a === INCOMPLETE){
                  switch(a.status){
                    case FAILED:
                        return <TileComponent> <RxCross2 className='text-red-500' /> </TileComponent> ;
                    case COMPLETE   :
                      return <TileComponent> <MdDone className='text-green-500' /> </TileComponent>  ;
                    case SKIPPED:
                      return <TileComponent> <BsArrowRightShort className='text-yellow-500' /> </TileComponent>  ;


                  }
                  return <></>;
                }else return <div></div>
              }
                
              // view === 'month' 
            }
              
            }
          />
  )
}

export default CalendarComponent