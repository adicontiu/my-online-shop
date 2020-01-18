import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = state => ({
      cartItems: selectCartItems(state)
    }
);
export default connect(mapStateToProps, null)(CartDropdown);