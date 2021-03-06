import {createSelector} from 'reselect';

//input selector
const selectCart = state => state.cart;

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems //function which returns the value we are interested in
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    (items) => items.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.price * cartItem.quantity, 0)
);