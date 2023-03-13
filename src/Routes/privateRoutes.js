import Habits from '../pages/PrivatePages/AllHabits';
import Area from '../pages/PrivatePages/Area';
import Monthly from '../pages/PrivatePages/Monthly';
import TimeOfDay from '../pages/PrivatePages/TimeOfDay';

const privateRoutes = [
    { path: '/habits', component: Habits },
    { path: '/time-of-day', component: TimeOfDay },
    { path: '/monthly', component: Monthly },
    { path: '/area/:areaId', component: Area },

];

export { privateRoutes };
