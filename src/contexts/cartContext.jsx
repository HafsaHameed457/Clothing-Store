import { createContext, useReducer } from "react";

import { createAction } from "../utlis/reducer/reducer.utils";
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, ItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== ItemToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const INITIAL_STATE = {
  cartTotal: 0,
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unknown action type: ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartTotal, cartCount, cartItems, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const cartItemsUpdateReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const setCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    cartItemsUpdateReducer(newCartItem);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItem = removeCartItem(cartItems, productToRemove);
    cartItemsUpdateReducer(newCartItem);
  };

  const clearItemFromCart = (ItemToRemove) => {
    const newCartItem = clearItem(cartItems, ItemToRemove);
    cartItemsUpdateReducer(newCartItem);
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
