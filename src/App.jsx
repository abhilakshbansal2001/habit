import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './Helpers/RequiredAuth';
import NavigationRoute from './Layout/ProtectedRouteLayout';
import { privateRoutes } from './Routes/privateRoutes';
import { publicRoutes } from './Routes/PublicRoutes';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
        <Routes>
          {publicRoutes.map((route , idx) => <Route key={idx} element={<route.component />} path={route.path} /> )}
          

        <Route element={<NavigationRoute />}>
            {privateRoutes.map((route , idx) => <Route key={idx} path={route.path} element={ <RequireAuth> <route.component /> </RequireAuth> } />)}
          </Route>
          


          
        </Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
