import React from 'react'
import { useSelector } from 'react-redux';
import HabitListLayout from '../../../Layout/HabitListLayout';
import { timeOfDay } from '../../../utilities/getTimeOfDay';


const TimeOfDay = () => {
  const time = timeOfDay()
  // const habits = Object.values(useSelector(state => state.user?.user?.habits))

  const habits = Object.values(useSelector(state => state.user?.user?.habits))

  const filteredHabits = habits?.filter(el => el.timeOfDay === 'any time' || el.timeOfDay === time)
  
  return (
    <React.Fragment>

      <HabitListLayout habits={filteredHabits} heading={time} />

    </React.Fragment>
  )
}

export default TimeOfDay