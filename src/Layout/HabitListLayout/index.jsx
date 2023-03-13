import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '../../Components/Accordion';
import Incomplete from '../../Components/HabitList/Incomplete';
import OtherHabitList from '../../Components/HabitList/OtherHabitList';
import { COMPLETE, FAILED, INCOMPLETE, SKIPPED } from '../../Helpers/constants/Global';
import { habitsOrder } from '../../Helpers/constants/HabitOrder';
import { removeSelectHabit, selectHabit } from '../../Redux/habit';
import { getIndex } from '../../utilities/getIndex';
import HabitListHeader from '../Header/HabitListHeader';
import Tracker from '../Tracker';
import Create from '../../assets/images/create.svg'
import IconButton from '../../Components/Buttons/IconButton';
import { habitListIcon } from '../../Helpers/constants/Header';

const HabitListLayout = ({ habits, heading , areaId }) => {

    const [modal , setModal] = React.useState(false)

	const dragItem = React.useRef();
	const dragOverItem = React.useRef();
    const listRef = React.useRef()
    const dispatch = useDispatch()

	const habit = useSelector(state => state.habit.habit)
    const { date , order } = useSelector(state => state.headerStatus)
    // console.log(order , 'order')

    const filteredHabits = habits?.slice().sort(habitsOrder[order]?.orderFunction)

	const dragStart = (e, position) => (dragItem.current = position);

	const dragEnter = (e, position) => (dragOverItem.current = position);

    // Incomplete
    const incomplete = []
    // Failed
    const failed = []
    // skipped
    const skipped = []
    // Success
    const success = []

    filteredHabits.forEach(habit => {
        
        const idx = getIndex(habit.date , date)
        
        if(idx < 0)return;
        // const date = moment(habit.date).add(idx,'days').format("YYYY-MM-DD");
        let statusObj = habit.statuses[idx]
        if(!statusObj || statusObj.status == INCOMPLETE){
            incomplete.push(habit)
        }else if(statusObj.status === FAILED) failed.push(habit)
        else if(statusObj.status === COMPLETE) success.push(habit)
        else skipped.push(habit) 
    })  



    function globalClick(event){
        if(listRef.current?.contains(event.target))return;
        dispatch(removeSelectHabit())
    }

    React.useEffect(() => {
        document.addEventListener('click' , globalClick);
        return () => {
            document.removeEventListener('click' , globalClick);
        }
    } , [])

	const drop = (e) => {
		const copyListItems = [...habits];
		const dragItemContent = copyListItems[dragItem.current];
		copyListItems.splice(dragItem.current, 1);
		copyListItems.splice(dragOverItem.current, 0, dragItemContent);
		dragItem.current = null;
		dragOverItem.current = null;
		setHabits(copyListItems);
	};

    

    const onClickHandler = (habit) => {
        dispatch(selectHabit({ habit }))
    }

    const cond = !!incomplete.length || !!success.length || !!failed.length || !!skipped.length



	return (
		<div className='grid grid-cols-12 h-full' >

			<div className={`${habit ? 'col-span-8' : 'col-span-12'}  border-r-[1px] border-r-borderColor`}>
                <HabitListHeader heading={heading} areaId={areaId} modal={modal} setModal={setModal} />
				<div className='overflow-y-auto h-[calc(100vh-60px)]'>

                    {cond ? 
                    <div ref={listRef}>
                        {/* No Action  */}
                        {incomplete.length > 0 && <div onClick={e => e.stopPropagation()}>
                            {incomplete.map((el, idx) => (
                            <Incomplete
                                key={el.id} 
                                habit={el}
                                
                                onClick={() => onClickHandler(el)}
                                isDone={false}
                                isSelected={habit?.id === el.id}
                                onDragStart={(e) => dragStart(e, idx)}
                                onDragEnter={(e) => dragEnter(e, idx)}
                                onDragEnd={drop}
                                
                            />
                        ))}
                            </div>}
                        {/* Success */}

                        {success.length > 0 &&
                            <div className='mt-5'>
                                <Accordion text={"Success"} count={success.length} >
                                { success.map(el => <OtherHabitList
                                        key={el.id} 
                                        habit={el}
                                        isSelected={habit?.id === el.id}
                                        type={COMPLETE}
                                
                                    /> 
                            )}
                                </Accordion>
                            </div>
                        }

                        {/* Failed */}
                        {failed.length > 0 && <div className='mt-5'>
                            <Accordion text={"Failed"} count={failed.length} >
                            { failed.map(el => <OtherHabitList
                                        key={el.id} 
                                        habit={el}
                                        onClick={() => onClickHandler(el)}
                                        isSelected={habit?.id === el.id}
                                        type={FAILED}
                                
                                    /> 
                            )}

                            </Accordion>
                        </div>}

                        {/* Skipped */}
                        {skipped.length > 0 && <div className='mt-5'>
                            <Accordion text={"Skipped"} count={skipped.length} >
                            { skipped.map(el => <OtherHabitList
                                        key={el.id} 
                                        habit={el}
                                        onClick={() => onClickHandler(el)}
                                        isSelected={habit?.id === el.id}
                                        type={SKIPPED}
                                    /> 
                            )}
                            </Accordion>
                        </div>
                        }
                    </div>
                    :
                    <div className='h-full w-full flex justify-center items-center flex-col'>
                        <div className='w-[300px]'>

                            <img src={Create} className="w-full" />
                            <div className='mt-5 text-center text-white'>
                                <h2 className='text-lg  font-bold capitalize'>Create a new habit</h2>
                                <p className='text-borderColor mt-2'>Habits are like dominos. As one is formed, all others will follow!</p>
                                <IconButton
                                    value={'Add Habits'}
                                    Icon={habitListIcon['add'].Icon}
                                    className={'mx-auto  justify-center mt-3 w-32'}
                                    // splColor={"bg-secondary"}
                                    onClick={() => setModal(true)}
                                />
                            </div>
                        </div>



                    </div>}
                    
				</div>
			</div>

            {habit && <div className='col-span-4' onClick={e => e.stopPropagation()}>
                <Tracker habit={habit} />
            </div>}

		</div>
	);
};

export default HabitListLayout;
