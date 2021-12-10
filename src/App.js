//* Styled
import GlobalStyle from './styled';
//* Components
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Auth from './components/Auth/Auth';
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
            <GlobalStyle wallpaper={wallpaper} />
            <div>
                <Sidebar showNav={showNav} setShowNav={setShowNav} />
                <Routes>
                    <Route path='/' element={<Home showNav={showNav} />} />
                    <Route path='auth' element={!user ? <Auth /> : <Navigate to={'/'} />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
