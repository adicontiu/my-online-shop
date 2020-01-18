import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
    </div>
);

const mapPropsToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//this is called a selector because we are computing a new value based on a value from state --> it is called every time one value from the state is modified  -> use memoization (reselect library)
const mapStateToProps = createStructuredSelector(
    {
      itemCount: selectCartItemsCount
    }
);
export default connect(
    mapStateToProps,
    mapPropsToDispatch)(CartIcon);