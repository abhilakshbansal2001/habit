import {
	AiOutlineFolderOpen,
	AiFillFolderOpen,
	AiOutlineUnorderedList,
    AiOutlineSetting,
    AiFillSetting
} from 'react-icons/ai';
import {
    BsSunset,
    BsSunsetFill,
    BsSunrise,
    BsSunriseFill,
    BsSun,
    BsSunFill,
	BsShare,
    BsShareFill,
	BsCalendarMonth,
	BsCalendar2MonthFill,
	
} from 'react-icons/bs';

const time = [
	{
		name: 'Evening',
		path: '/time-of-day',
		icon: BsSunset,
		selectedIcon: BsSunsetFill,
	},
	{
		name: 'Afternoon',
		path: '/time-of-day',
		icon: BsSun,
		selectedIcon: BsSunFill,
	},
	{
		name: 'Morning',
		path: '/time-of-day',
		icon: BsSunrise,
		selectedIcon: BsSunriseFill,
	}
];

const today = new Date()
const curHr = today.getHours()

let idx = 0;
if (curHr < 12) idx = 2
else if (curHr < 18) idx = 1
else idx=  0




export const General = [
	{
		name: 'All Habits',
		path: '/habits',
		icon: AiOutlineFolderOpen,
		selectedIcon: AiFillFolderOpen,
	},
	time[idx],
	{
		name: 'Monthly',
		path: '/monthly',
		icon: BsCalendarMonth,
		selectedIcon: BsCalendar2MonthFill,
	},
];

export const Preferences = [
	{
		name: 'Manage Habits',
		path: '/manage',
		icon: AiOutlineUnorderedList,
		selectedIcon: AiOutlineUnorderedList,
	},
	{
		name: 'App Settings',
		path: '/settings',
		icon: AiOutlineSetting,
		selectedIcon: AiFillSetting,
	},
	{
		name: 'Resource',
		path: '/resources',
		icon: BsShare,
		selectedIcon: BsShareFill,
	},
];
