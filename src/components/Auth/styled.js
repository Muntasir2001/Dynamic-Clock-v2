import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    

    @media (max-width: 720px) {
        padding-top: 70px;
    }
`;

export const Wrapper = styled.div`
    width: 30rem;
    height: fit-content;
    background-color: #211720;
    border-radius: 10px;
    padding: 20px;
    z-index: 2;
    @media (max-width: 720px) {
        width: 90%;
    }
`;

export const FormContainer = styled.div`
    h3 {
        text-align: center;
    }

    form {
        padding: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }
`;

export const Button = styled.button`
    width: ${({ other }) => (other ? '50%' : '100%')};
    height: 40px;
    background-color: ${({ other }) => (other ? '#6FB4FE' : '#6FB4FE')};
    border: none;
    border-radius: 5px;
    padding: 1px 5px;
    color: white;

    &:hover {
        cursor: pointer;
        filter: brightness(1.05);
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    font-size: 0.9rem;
`;

export const InputContainer = styled.div`
    position: relative;
    width: ${({ half }) => (half ? '48%' : '100%')};
    padding: 5px 0;

    input,
    label {
        display: block;
        border: none;
    }
`;

export const PasswordIconContainer = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    right: 15px;
    bottom: 27.5px;
    cursor: pointer;
    svg {
        width: 25px;
        stroke: #000;
    }
`;
