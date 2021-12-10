import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 225px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 720px) {
        flex-direction: column;
        height: auto;
    }
`;

export const LeftWrapper = styled.div`
    position: relative;
    display: flex;
    width: 50%;
    height: 100%;

    padding: 20px;
    form {
        width: 100%;
    }

    input[type='text'] {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    @media (max-width: 720px) {
        width: 100%;
    }
`;
export const RightWrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 720px) {
        width: 100%;
        padding: 0 20px 20px 20px;
    }
`;

export const ClockContainer = styled.div`
    width: 20vw;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    display: flex;

    @media (max-width: 720px) {
        width: 100%;

        h1 {
            font-size: 25px;
        }
    }
`;
export const ClockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const Button = styled.button`
    position: relative;
    margin-left: auto;
    padding: 0 10px;
    background-color: rgb(117, 175, 130, 0.5);
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: white;
    opacity: ${({ disabled }) => disabled && '0.3'};

    &:hover {
        cursor: pointer;
        background-color: rgb(117, 175, 130, 0.7);
    }

    @media (max-width: 720px) {
        width: 100%;
    }
`;
