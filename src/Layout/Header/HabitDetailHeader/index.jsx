import React from 'react';
import IconButton from '../../../Components/Buttons/IconButton';
import { habitDetailIcon } from '../../../Helpers/constants/Header';



const HabitDetailHeader = ({ heading }) => {
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
					
					<IconButton
						value={'Feb , 2023'}
						Icon={habitDetailIcon['calender'].Icon}
					></IconButton>
					<IconButton
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
