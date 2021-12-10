import styled from 'styled-components';

export const ClockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    user-select: none;
`;

export const DeleteWrapper = styled.div`
    display: none;
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: #ff5959;
    width: 11px;
    height: 11px;
    border-radius: 100%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 720px) {
        width: 15px;
        height: 15px;
    }
`;

export const ClockContainer = styled.div`
    position: relative;
    width: 20rem;
    height: 12rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${DeleteWrapper} {
        display: block;
    }
`;

export const OptionsModal = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
`;

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const OptionsButton = styled.div`
    background-color: ${({ update }) => (update ? '#55A0DA' : '#721C1D')};
    padding: 10px;
    border-radius: 10px;
    width: 50%;
    text-align: center;

    &:hover {
        cursor: pointer;
        filter: brightness(1.05);
    }
`;
