import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection
  from '../../components/preview-collection/preview-collection.component';
import './collections-overview.styles.scss';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => {
  return <div className="collections-overview">
    {
      collections.map(({id, ...otherCollectionProps}) => (
          <PreviewCollection key={id} {...otherCollectionProps}/>
      ))
    }
  </div>
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionsOverview);