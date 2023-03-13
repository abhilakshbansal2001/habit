import React from 'react';
import IconButton from '../../../Components/Buttons/IconButton';
import { habitDetailIcon } from '../../../Helpers/constants/Header';
import { dateConstructor } from '../../../utilities/dateConstructor';



const HabitDetailHeader = ({ heading , date , setIsOpen }) => {

	const calanderDate = dateConstructor(date)

	return (
		<React.Fragment>
			<div
				className={
					'w-full h-[55px] px-3 border-b-[1px] flex gap-3 items-center border-b-borderColor'
				}
			>
				<span className='text-white font-medium capitalize flex-1 '>
					{heading}
				</span>
				<div className='ml-auto flex gap-2 items-center'>
					
					<IconButton
						value={calanderDate}
						Icon={habitDetailIcon['calender'].Icon}
					></IconButton>
					<IconButton
						onClick={() => setIsOpen(true)}
						Icon={habitDetailIcon['edit'].Icon}
					></IconButton>
					<IconButton
						Icon={habitDetailIcon['share'].Icon}
					></IconButton>
					<IconButton
						Icon={habitDetailIcon['move'].Icon}
					></IconButton>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HabitDetailHeader;
