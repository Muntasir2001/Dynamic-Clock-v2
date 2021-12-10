import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
    position: fixed;
    width: 300px;
    height: 300px;
    color: white;
    z-index: 1;
    @media (max-width: 720px) {
        z-index: 1;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 20px;
    /* 100% - 64 -> 64 as 20px left is default, 44 is the width of the MenuIcon itself */
    /* transform: ${({ showNav }) => (showNav ? 'translateX(0)' : 'translateX(-100% + 64px)')}; */
    left: ${({ showNav }) => (showNav ? 'calc(100% - 64px)' : '20px')};
    display: flex;
    transition: ${({ showNav }) => (showNav ? 'all 0.8s' : 'all 0.5s')};
    transition-delay: ${({ showNav }) => (showNav ? '0.3s' : '0s')};
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: ${({ showNav }) => (showNav ? '300px' : '0')};
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0 0 50px 0;
    padding: ${({ showNav }) => (showNav ? '90px 20px 20px 20px' : '90px 0 0 0')};
    transition: all 0.7s;
    /* transition-delay: ${({ showNav }) => (showNav ? '0.3s' : '0s')}; */
    gap: 10px;
    overflow-x: hidden;
`;

export const LoginIconContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: ${({ showNav }) => (showNav ? '25px' : '-50px')};
    display: flex;
    transition: ${({ showNav }) => (showNav ? 'all 0.8s' : 'all 0.5s')};
    transition-delay: ${({ showNav }) => (showNav ? '0.2s' : '0s')};
    cursor: pointer;
`;

// * Carousel
export const Slider = styled.section`
    width: 260px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
