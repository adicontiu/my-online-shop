import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
export default CollectionsOverviewContainer;