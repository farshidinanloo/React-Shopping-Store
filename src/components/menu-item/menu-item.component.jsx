import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	switch (title) {
		case 'hats':
			title = 'کلاه';
			break;
		case 'sneakers':
			title = 'کتانی';
			break;
		case 'mens':
			title = 'مردانه';
			break;
		case 'womens':
			title = 'زنانه';
			break;
		case 'jackets':
			title = 'ژاکت';
			break;
		default:
			break;
	}

	return (
		<MenuItemContainer
			size={size}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<BackgroundImageContainer
				className='background-image'
				imageUrl={imageUrl}
			/>
			<ContentContainer className='content'>
				<ContentTitle>{title}</ContentTitle>
				<ContentSubtitle>خرید</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
