import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import HabitListLayout from '../../../Layout/HabitListLayout';


const Area = () => {

  const  { areaId } = useParams();
  const navigateTo = useNavigate()
  const area = useSelector(state => state.user?.user?.areas[areaId])
  if(!area)navigateTo("/")

  const { name } = area
  // const habits = useSelector(state => state.user?.user?.habits?)

  
  const habits = Object.values(useSelector(state => state.user?.user?.habits))

  const filteredHabits = habits?.filter(habit => habit.areaId === areaId)

  return (
    <React.Fragment>

      <HabitListLayout habits={filteredHabits} heading={name} areaId={areaId} />

    </React.Fragment>
  )
}

export default Area