import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index: 2;
`;
export const IconContainer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    pointer-events: none;

    svg {
        stroke: #000;
        width: 25px;
    }

    &:hover svg {
        stroke: ${({ noHover }) => !noHover && '#990d0d'};
    }
`;
export const InputWrapper = styled.div``;
export const OptionsContainer = styled.div`
    position: absolute;
    width: 100%;
    max-height: 300px;
    top: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    overflow: hidden auto;
`;
export const OptionsWrapper = styled.div`
    padding: 10px;
    color: black;
    &:hover {
        color: white;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;
