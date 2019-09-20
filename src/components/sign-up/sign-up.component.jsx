import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("پسورد ها یکسان نیست");
			return;
		}

		if (password.length < 6) {
			alert("پسورد کوتاه می باشد (حداقل 6)");
			return;
		}


		signUpStart({ displayName, email, password });
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>قبلا ثبت نام نکرده ام</SignUpTitle>
			<span>با ایمیل و پسورد ثبت نام کنید</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label='نام'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='ایمیل'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='پسورد'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='تکرار پسورد'
					required
				/>
				<CustomButton type='submit'>ثبت نام</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
