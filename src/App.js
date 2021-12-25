//* Styled
import GlobalStyle from './styled';
//* Components
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Auth from './components/Auth/Auth';
import SignIn from './components/Auth-Firebase/SignIn';
import SignUp from './components/Auth-Firebase/SignUp';
import ForgotPassword from './components/Auth-Firebase/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
//* React
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
//* Redux
import { useDispatch, useSelector } from 'react-redux';
import { setWallpaper } from './redux/actions/wallpaper';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setWallpaper(JSON.parse(localStorage.getItem('wallpaper'))));
	}, []);

	const { wallpaper } = useSelector((state) => state.wallpaperReducer);

	const user = JSON.parse(localStorage.getItem('dynamicClockUser'));

	const [showNav, setShowNav] = useState(false);

	return (
		<>
			<GlobalStyle
				wallpaper={
					wallpaper
						? process.env.PUBLIC_URL + '/images/' + wallpaper
						: process.env.PUBLIC_URL + '/images/tokyo.jpg'
				}
			/>
			<AuthProvider>
				<div>
					<Sidebar showNav={showNav} setShowNav={setShowNav} />
					<Routes>
						<Route path='/' element={<Home showNav={showNav} />} />
						<Route path='sign-up' element={<SignUp />} />
						<Route
							path='sign-in'
							element={!user ? <SignIn /> : <Navigate to={'/'} />}
						/>
						<Route path='forgot-password' element={<ForgotPassword />} />
					</Routes>
				</div>
			</AuthProvider>
		</>
	);
}

export default App;
