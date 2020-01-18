export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
        (cartItem.id === cartItemToAdd.id) ? {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
            : cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const remoteItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(
      cartItem => cartItem.id !== cartItemToRemove.id);
};

export const increaseItemInCart = (cartItems, cartItemToIncrease) => {
  return cartItems
  .map(item => item.id === cartItemToIncrease.id ? {
    ...item,
    quantity: item.quantity + 1
  } : item);
};

export const decreaseItemInCart = (cartItems, cartItemToIncrease) => {
  return cartItems
  .map(item => item.id === cartItemToIncrease.id ? {
    ...item,
    quantity: item.quantity - 1
  } : item)
  .filter(item => item.quantity !== 0);
};