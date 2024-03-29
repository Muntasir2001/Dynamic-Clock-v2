import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Alert from './Alert';
import {
	AuthFormParent,
	AuthFormHeading,
	AuthForm,
	AuthFormLabel,
	AuthFormInput,
	AuthFormEmailDiv,
	AuthFormPasswordDiv,
	AuthFormSubmitBtn,
	AuthFormBottomText,
} from './AuthFormComponents';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/auth';

const SignIn = () => {
	const [email, setEmail] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { signin } = useAuth();

	const onEmailChange = (e) => {
		setEmail(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onPasswordChange = (e) => {
		setPassword(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();

		try {
			setError(false);
			setLoading(true);

			await signin(email.email, password.password);

			dispatch(signIn(email, navigate));
		} catch (err) {
			setError(true);
			setErrorMssg('Cannot Sign In');
			console.log(err);
			hideErrorMssg();
		}

		setLoading(false);
	};

	const hideErrorMssg = () => {
		setTimeout(() => {
			setError(false);
			setErrorMssg('');
		}, 5000);
	};

	return (
		<>
			{error && <Alert mssg={errorMssg} />}
			<AuthFormParent>
				<AuthForm onSubmit={onFormSubmit}>
					<AuthFormHeading>Sign In</AuthFormHeading>
					<AuthFormEmailDiv>
						<AuthFormLabel>Email</AuthFormLabel>
						<AuthFormInput
							type='text'
							name='email'
							value={email.email}
							onChange={onEmailChange}
							required
						/>
					</AuthFormEmailDiv>
					<AuthFormPasswordDiv>
						<AuthFormLabel>Password</AuthFormLabel>
						<AuthFormInput
							type='password'
							name='password'
							value={password.password}
							onChange={onPasswordChange}
							required
						/>
					</AuthFormPasswordDiv>
					<AuthFormSubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Sign In'
					/>
					<p>
						Need an account?<Link to='/sign-up'> Sign Up</Link>
					</p>
					<AuthFormBottomText>
						Forgot password?<Link to='/forgot-password'> Click Here</Link>
					</AuthFormBottomText>
				</AuthForm>
			</AuthFormParent>
		</>
	);
};

export default SignIn;
