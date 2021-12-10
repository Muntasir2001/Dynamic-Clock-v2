import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;

    justify-content: space-evenly;


    @media (max-width: 720px) {
        padding: 25px;
    }
`;
export const ClockContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(10%);
    user-select: none;
    transition: all 1s;
`;
export const ClockWrapper = styled.div`
    min-width: 75vw;
    position: relative;
    display: flex;
    justify-content: center;
`;
export const ClockDisplayWrapper = styled.div`
    text-align: center;
    font-size: 16vw;
    line-height: 1;
`;
export const ClockAMPMContainer = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
`;
export const ClockAMPMWrapper = styled.div`
    text-align: center;
    font-size: 4vw;
    opacity: ${({ transparent }) => transparent && 0.5};
    &:first-child {
        line-height: 1;
    }
`;
export const ClockDateWrapper = styled.div`
    font-size: 1.5vw;

    @media (max-width: 720px) {
        font-size: 5vw;
    }
`;

export const StopwatchIconWrapper = styled.div`
    position: absolute;
    top: ${({ showNav }) => (showNav ? '310px' : '70px')};
    left: 20px;
    transition: all 0.5s;
    transition-delay: ${({ showNav }) => (showNav ? '0s' : '0.5s')};
    z-index: 1;
    cursor: pointer;
`;

export const StopwatchContainer = styled.div`
    width: 70%;
    height: ${({ showStopwatch }) => (showStopwatch ? '30vh' : '0')};
    transition: width 0.3s ease 0s;
    overflow: hidden;
    transition: all 1s;
    margin-top: 100px;

    @media (max-width: 720px) {
        width: 100%;
    }
`;

export const StopwatchWrapper = styled.div`
    width: 100%;
    height: 30vh;
    padding: 25px 25px 30px 25px;
    background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    justify-content: space-around;
    user-select: none;
`;

export const StopwatchClock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 4vw;

    @media (max-width: 720px) {
        font-size: 11vw;
    }
`;

export const StopwatchOGTime = styled.span`
    font-size: 1vw;
    height: 30px;
    position: relative;
    bottom: 10px;

    @media (max-width: 720px) {
        font-size: 3.5vw;
        bottom: 0;
    }
`;

export const StopwatchBtnWrapper = styled.div`
    position: relative;
    display: flex;
    bottom: 0;
    width: 50%;
    justify-content: space-evenly;

    @media (max-width: 720px) {
        width: 100%;
    }
`;

export const StopwatchBtn = styled.button`
    background-color: ${({ color }) => color};
    color: white;
    padding: 0.8vw 1.2vw;
    font-size: 1.25rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        filter: brightness(1.05);
    }
`;
