//* Styled
import { Container, Wrapper, IconContainer, LoginIconContainer } from './styled';

//* Components
import MenuIcon from '../../svg/MenuIcon';
import LoginIcon from '../../svg/LoginIcon';
import LogoutIcon from '../../svg/LogoutIcon';
//* React
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
//* Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';

const Sidebar = ({ showNav, setShowNav }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNav = () => {
        setShowNav((prev) => !prev);
    };

    let user = JSON.parse(localStorage.getItem('dynamicClockUser'));

    const handleAuth = () => {
        if (user) {
            dispatch(logout());
            navigate('/');
        } else {
            navigate('./auth');
        }
    };

    return (
        <Container>
            <IconContainer showNav={showNav} onClick={handleNav}>
                <MenuIcon />
            </IconContainer>
            <LoginIconContainer showNav={showNav} onClick={handleAuth}>
                {user ? <LogoutIcon /> : <LoginIcon />}
            </LoginIconContainer>
            <Wrapper showNav={showNav}>
                <Carousel />
            </Wrapper>
        </Container>
    );
};

export default Sidebar;
