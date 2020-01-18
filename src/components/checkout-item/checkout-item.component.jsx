import React from 'react';
import {
  decreaseItem,
  increaseItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';

const CheckoutItem = ({cartItem, removeItem, decreaseItem, increaseItem}) => {
  const {imageUrl, name, price, quantity} = cartItem;
  return <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl}/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => increaseItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button"
         onClick={() => removeItem(cartItem)}>&#10005;</div>
  </div>;
};

const mapDispatchToState = dispatch => ({
      removeItem: item => dispatch(removeItem(item)),
      decreaseItem: item => dispatch(decreaseItem(item)),
      increaseItem: item => dispatch(increaseItem(item)),
    }
);
export default connect(null, mapDispatchToState)(CheckoutItem);