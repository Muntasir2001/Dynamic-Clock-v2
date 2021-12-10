import styled, { keyframes } from 'styled-components';

const bounceAnim = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, -60%)
    }
    30% {
        transform: translate(-50%, -25%)
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%)
    }
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 20px;
    z-index: 5;
    animation: ${bounceAnim} 0.5s;

    @media (max-width: 720px) {
        width: 90vw;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${({ showAddClock }) => (showAddClock ? '10px 60px 60px 60px' : '60px')};
    
    @media (max-width: 720px) {
        padding: ${({ showAddClock }) => (showAddClock ? '10px 40px 40px 40px' : '40px')};
    }
`;

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:hover svg {
        stroke: #990d0d;
    }
`;

export const PlusIconWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;

    &:hover svg {
        stroke: #b0a5b5;
    }
`;

export const IntlClockIconWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: ${({ showNav }) => (showNav ? '310px' : '70px')};
    transition: all 0.5s;
    transition-delay: ${({ showNav }) => (showNav ? '0s' : '0.5s')};
    z-index: 1;
    cursor: pointer;
`;

export const ClockContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-height: ${({ showAddClock }) => (showAddClock ? '70%' : '100%')};
    overflow: hidden auto;

    ::-webkit-scrollbar {
        //*chrome
        display: none;
    }
    -ms-overflow-style: none; //*IE 11
    scrollbar-width: none; //*Firefox 64

    /* &:hover {
        ::-webkit-scrollbar {
            display: block;
        }
        -ms-overflow-style: block; //*IE 11
        scrollbar-width: block; //*Firefox 64
    } */

    @media (max-width: 720px) {
        max-height: ${({ showAddClock }) => (showAddClock ? '40%' : '100%')};

    }
`;
