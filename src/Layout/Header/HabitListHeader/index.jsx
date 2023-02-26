import React from 'react';
import DropDownButton from '../../../Components/Buttons/DropDownButton';
import IconButton from '../../../Components/Buttons/IconButton';
import Modal from '../../../Components/Modal';
import { habitListIcon } from '../../../Helpers/constants/Header';
import AddHabitModal from './addHabitModal';
const HabitListHeader = ({ heading }) => {

	const [calendar , setCalendar] = React.useState(false)
	const [order , setOrder] = React.useState(false)
	const [modal , setModal] = React.useState(false)


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




	return (
		<React.Fragment>
			<div
				className={
					'w-full h-[55px] px-3 border-b-[1px] flex items-center border-b-borderColor'
				}
			>
				<span className='text-white font-medium capitalize'>
					{heading || 'All Habits'}
				</span>
				<div className='ml-auto flex gap-2'>
					<DropDownButton
						value={'Today'}
						Icon={
							habitListIcon['today']
								.Icon
						}
						open={calendar}
						setOpen={setCalendar}
						close={close}
						position={"left"}
					></DropDownButton>
					<DropDownButton
						value={'My Habits Order'}
						Icon={
							habitListIcon['order']
								.Icon
						}
						open={order}
						setOpen={setOrder}
						close={close}
						position={"center"}
					></DropDownButton>
					<IconButton
						value={'Add Habits'}
						Icon={habitListIcon['add'].Icon}
						splColor={"bg-secondary"}
						onClick={() => setModal(true)}
					/>

				</div>
			</div>

			{modal && <Modal onClick={() => setModal(false)}>
				<AddHabitModal setModal={setModal} />
			</Modal>}
		</React.Fragment>
	);
};

export default HabitListHeader;
