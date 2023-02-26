import React from 'react';
import { Outlet } from 'react-router-dom';
import HabitListHeader from '../Header/HabitListHeader';
import Sidebar from '../Sidebar';
import Tracker from '../Tracker';

const NavigationRoute = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen bg-primary '>
			<div className='grid grid-cols-12 h-screen overflow-hidden'>
				<div className='col-span-2 px-2 h-full border-r-[1px] border-r-borderColor overflow-y-auto'>
					<Sidebar />
				</div>
				<div className='col-span-6 border-r-[1px] border-r-borderColor'>
					<HabitListHeader />
					<div className=' overflow-y-auto h-[calc(100vh-65px)]'>
						<Outlet />
					</div>
				</div>
				<div className='col-span-4 overflow-y-auto'>
					<Tracker />
				</div>
			</div>
		</div>
	);
};

export default NavigationRoute;
