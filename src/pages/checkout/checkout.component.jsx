import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import CheckoutItem
  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span>
        </div>
        <div className="header-block"><span>Description</span>
        </div>
        <div className="header-block"><span>Quantity</span>
        </div>
        <div className="header-block"><span>Price</span>
        </div>
        <div className="header-block"><span>Remove</span>
        </div>
      </div>
      {cartItems.map(item =>
          <CheckoutItem key={item.id} cartItem={item}/>)}
      <div className="total">${total}
      </div>
      <StripeCheckoutButton price={total}/>
      Test card is 4242-4242-4242-4242, expiration 01/20, 123
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);