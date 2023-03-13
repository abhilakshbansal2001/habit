import React from 'react'
import { useSelector } from 'react-redux';
import HabitListLayout from '../../../Layout/HabitListLayout';


const Habits = () => {

  const habits = Object.values(useSelector(state => state.user?.user?.habits))
  
  return (
    <React.Fragment>
      {/* {
        new Array(7).fill(0).map((el,idx) => <HabitList draggable key={idx} onClick={() => setId(idx)} isDone={false} isSelected={id === idx } />)
      }

      <div className='mt-5'>
        <Accordion value={"Success"}>
          <HabitList isDone={true} />
        </Accordion>
      </div>
      <div className='mt-5'>
        <Accordion value={"Mood Logged"}>
          <HabitList isDone={false} />
        </Accordion>
      </div> */}

      <HabitListLayout habits={habits} heading={"all habits"} />

    </React.Fragment>
  )
}

export default Habits