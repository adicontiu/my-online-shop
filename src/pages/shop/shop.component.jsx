import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection
  from '../../components/preview-collection/preview-collection.component';
import {selectShopCollections} from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => {
  return <div className="shop-page">
    {
      collections.map(({id, ...otherCollectionProps}) => (
          <PreviewCollection key={id} {...otherCollectionProps}/>
      ))
    }

  </div>
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps, null)(ShopPage);