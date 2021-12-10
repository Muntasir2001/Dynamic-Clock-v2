//* Styled
import { InputContainer, Input, PasswordIconContainer } from './styled';
//* Components
import EyeIcon from '../../svg/EyeIcon';
import EyeCloseIcon from '../../svg/EyeCloseIcon';
//* React

//* Redux

const InputComponent = ({
    name,
    handleChange,
    label,
    autoFocus,
    type,
    handleShowPassword,
    isPassword,
    half,
}) => {
    return (
        <InputContainer half={half}>
            <label>{label}</label>
            <Input type={type} name={name} autoFocus={autoFocus} onChange={handleChange} />
            {isPassword && (
                <PasswordIconContainer onClick={handleShowPassword}>
                    {type === 'password' ? <EyeIcon /> : <EyeCloseIcon />}
                </PasswordIconContainer>
            )}
        </InputContainer>
    );
};

export default InputComponent;
