import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user.actions';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = event => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>قبلا ثبت نام کرده ام</SignInTitle>
			<span>با ایمیل و پسورد خود وارد شوید</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={email}
					label='ایمیل'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='پسورد'
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type='submit'> ورود </CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						ورود با گوگل
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);
