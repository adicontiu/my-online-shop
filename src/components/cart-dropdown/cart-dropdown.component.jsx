import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

//because we do not give a mapDispatch to connect --> we receive the dispatcher as props
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ?
            (cartItems.map(item => <CartItem key={item.id} item={item}/>))
            : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
      cartItems: selectCartItems
    }
);

export default withRouter(connect(mapStateToProps, null)(CartDropdown));