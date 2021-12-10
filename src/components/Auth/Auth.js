//* Styled
import { Container, FormContainer, Wrapper, Button } from './styled';
//* Components

//* React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//* Redux
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../redux/actions/auth';
import InputComponent from './Input';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        // * Add disabled for submit button
        
        if (isSignup) dispatch(signUp(formData, navigate));
        else dispatch(signIn(formData, navigate));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
    };

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <h3>{isSignup ? 'Sign Up' : 'Sign In'}</h3>

                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <>
                                <InputComponent
                                    name='firstName'
                                    label='First Name'
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <InputComponent
                                    name='lastName'
                                    label='Last Name'
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <InputComponent
                            name='email'
                            label='Email Address'
                            type='email'
                            handleChange={handleChange}
                        />
                        <InputComponent
                            name='password'
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            handleChange={handleChange}
                            handleShowPassword={handleShowPassword}
                            isPassword
                        />
                        {isSignup && (
                            <InputComponent
                                name='confirmPassword'
                                label='Repeat Password'
                                type='password'
                                handleChange={handleChange}
                            />
                        )}
                        <Button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
                    </form>
                </FormContainer>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button other onClick={switchMode}>
                        {isSignup ? 'Already have an account? Log in!' : 'Dont have an account? Sign up!'}
                    </Button>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Auth;
