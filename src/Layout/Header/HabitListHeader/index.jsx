import moment from 'moment';
import React from 'react';
import { Calendar } from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import DropDownButton from '../../../Components/Buttons/DropDownButton';
import IconButton from '../../../Components/Buttons/IconButton';
import Modal from '../../../Components/Modal';
import { habitsOrderArray } from '../../../Helpers/constants/HabitOrder';
import { habitListIcon } from '../../../Helpers/constants/Header';
import { updateDate } from '../../../Redux/headerStatus';
import { dateConstructor } from '../../../utilities/dateConstructor';
import AddHabitModal from './addHabitModal';
import HabitOrder from './habitOrder';
const HabitListHeader = ({ heading  , areaId , modal  , setModal}) => {

	const [calendar , setCalendar] = React.useState(false)
	const [order , setOrder] = React.useState(false)
	

	const { date: headerDate , order: headerOrder } = useSelector(state => state.headerStatus)
	const date = new Date(headerDate)

	let calendarValue = dateConstructor(headerDate) ;
	if(headerDate == moment(new Date()).format("YYYY-MM-DD"))
		calendarValue = 'Today'

	const dispatch = useDispatch();


	const close = () => {
		setCalendar(false)
		setOrder(false)
	}

	React.useEffect(() => {
		
		document.body.addEventListener('click' , close)
		return () => {
		  document.body.removeEventListener('click' , close)
		}
	}, [])


	const dateChangeHandler = (value , event) => {
		dispatch(updateDate({newDate : moment(value).format("YYYY-MM-DD")}))
		setCalendar(false)
	}


	


	return (
		<React.Fragment>
			<div
				className={
					'w-full h-[55px] px-3 border-b-[1px] flex items-center border-b-borderColor'
				}
			>
				<span className='text-white font-medium capitalize'>
					{heading}
				</span>
				<div className='ml-auto flex gap-2'>
					<DropDownButton
						value={calendarValue}
						Icon={
							habitListIcon['today']
								.Icon
						}
						open={calendar}
						setOpen={setCalendar}
						close={close}
						position={"left"}
					>
						<div className='w-full bg-buttonBackground z-[100000]' onClick={e => e.stopPropagation()} >
							<Calendar
								className="w-full h-full bg-transparent  text-textColorPrimary border-none"
								maxDate={new Date()}
								tileClassName="text-textColorPrimary"
								value={date}
								onChange={dateChangeHandler}
							/>
						</div>
					</DropDownButton>
					<DropDownButton
						value={headerOrder}
						Icon={
							habitListIcon['order']
								.Icon
						}
						open={order}
						setOpen={setOrder}
						close={close}
						position={"center"}
					>
						<div className='w-36 bg-buttonBackground'>
							{habitsOrderArray.map(habitOrder => <HabitOrder text={habitOrder.name} headerOrder={headerOrder} setOrder={setOrder} />)}
						</div>	
					</DropDownButton>
					<IconButton
						value={'Add Habits'}
						Icon={habitListIcon['add'].Icon}
						splColor={"bg-secondary"}
						onClick={() => setModal(true)}
					/>

				</div>
			</div>

			{modal && <Modal onClick={() => setModal(false)}>
				<AddHabitModal setModal={setModal} areaId={areaId} heading={heading} />
			</Modal>}
		</React.Fragment>
	);
};

export default HabitListHeader;
