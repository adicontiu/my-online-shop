import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import {connect} from 'react-redux';
import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps, null)(WithSpinner(CollectionPage));

export default CollectionPageContainer;