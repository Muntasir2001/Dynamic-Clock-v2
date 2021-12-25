import React, { useState, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Alert from './Alert';
import Success from './Success';
import {
	AuthFormParent,
	AuthFormHeading,
	AuthForm,
	AuthFormLabel,
	AuthFormInput,
	AuthFormEmailDiv,
	AuthFormPasswordDiv,
	AuthFormSubmitBtn,
} from '../../components/Auth-Firebase/AuthFormComponents';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions/auth';

const SignUp = () => {
	const [email, setEmail] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const [success, setSuccess] = useState(false);
	const [successMssg, setSuccessMssg] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const confirmPasswordRef = useRef();

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

		if (confirmPasswordRef.current.value !== password.password) {
			setPassword({ password: '' });
			confirmPasswordRef.current.value = '';

			setError(true);
			setErrorMssg('Passwords do not match!');

			hideErrorMssg();
			return 'incorrect password';
		} else {
			try {
				setLoading(true);
				setError(false);
				setSuccess(false);

				await signup(email.email, password.password);

				setSuccessMssg(true);
				setSuccessMssg('Sign Up successful!');
				hideSuccessMssg();

				dispatch(signUp(email, navigate));
			} catch (err) {
				setErrorMssg(err);
				console.log(err);
				hideErrorMssg();
			}
		}

		setLoading(false);
	};

	const hideErrorMssg = () => {
		setTimeout(() => {
			setError(false);
		}, 5000);
	};

	const hideSuccessMssg = () => {
		setTimeout(() => {
			setSuccess(false);
		}, 5000);
	};

	return (
		<>
			{error && <Alert mssg={errorMssg} />}
			{success && <Success mssg={successMssg} />}
			<AuthFormParent>
				<AuthForm onSubmit={onFormSubmit}>
					<AuthFormHeading>Sign Up</AuthFormHeading>
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
					<AuthFormPasswordDiv>
						<AuthFormLabel>Confirm Password</AuthFormLabel>
						<AuthFormInput
							ref={confirmPasswordRef}
							type='password'
							name='password'
							required
						/>
					</AuthFormPasswordDiv>
					<AuthFormSubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Enter'
					/>
					<p>
						Already have an account? <Link to='/sign-in'>Sign In</Link>
					</p>
				</AuthForm>
			</AuthFormParent>
		</>
	);
};

export default SignUp;
