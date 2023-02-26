import Info from '../pages/PublicPages/Info';
import User from '../pages/PublicPages/User';

const publicRoutes = [
	{ path: '/', component: User },
	{ path: '/how-to-use-it', component: Info },
];

export { publicRoutes };
