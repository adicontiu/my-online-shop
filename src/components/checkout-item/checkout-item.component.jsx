import React from 'react';
import {removeItem} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';

const CheckoutItem = ({cartItem, removeItem}) => {
  const {imageUrl, name, price, quantity} = cartItem;
  return <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl}/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button"
         onClick={() => removeItem(cartItem)}>&#10005;</div>
  </div>;
};

const mapDispatchToState = dispatch => ({
      removeItem: item => dispatch(removeItem(item))
    }
);
export default connect(null, mapDispatchToState)(CheckoutItem);