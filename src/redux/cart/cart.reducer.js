import {CartActionTypes} from './cart.types';
import {
  addItemToCart,
  decreaseItemInCart,
  increaseItemInCart,
  remoteItemFromCart
} from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: remoteItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: increaseItemInCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemInCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;