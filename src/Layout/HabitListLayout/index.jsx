import React from 'react';
import HabitList from '../../Components/HabitList';

const HabitListLayout = ({}) => {

    const [id , setId] = React.useState(-1);

    const dragItem = React.useRef();
    const dragOverItem = React.useRef();




    const [habits , setHabits] = React.useState( ["hello" , "by" , "dada" , "rani"]);

	const dragStart = (e, position) => dragItem.current = position;

	const dragEnter = (e, position) => dragOverItem.current = position;

    const drop = (e) => {
        const copyListItems = [...habits];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setHabits(copyListItems);
      };

	return (
		<React.Fragment>
			<div>
				{habits.map((el, idx) => (
					<HabitList
						key={el.id}
						onClick={() => setId(idx)}
						isDone={false}
						isSelected={id === el.id}
                        onDragStart={(e) => dragStart(e, idx)}
                        onDragEnter={(e) => dragEnter(e, idx)}
                        onDragEnd={drop}
                        text={new String(el)}
                        
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default HabitListLayout;
