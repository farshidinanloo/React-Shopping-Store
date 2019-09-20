import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
	let { title, items } = collection;

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
			break
	}
	
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
