import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 1000;
	const publishableKey = 'pk_test_ABTBXxjfSQ7R8XY65BWDNeTW00YkfjHQRG';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then(() => {
				alert('پرداخت با موفقیت انجام شد');
			})
			.catch(() => {
				alert('پرداخت با موفقیت انجام شد');
			});
	};

	return (
		<StripeCheckout
			label='پرداخت'
			name='Farshid Store'
			image='https://svgshare.com/i/CUz.svg'
			description={`مجموع ${price}`}
			amount={priceForStripe}
			panelLabel='پرداخت'
			token={onToken}
			stripeKey={publishableKey}
			currency='IRR'
		/>
	);
};

export default StripeCheckoutButton;
