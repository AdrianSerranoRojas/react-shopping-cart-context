import React, { useReducer } from "react";

import {
  CartItemStateContext,
  CartItemDispatchContext,
} from "../../context/CartItemContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

export const cartItemInitialState = {
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
};

export function cartItemReducer(state, action) {
  switch (action.type) {
    case "handleRemove": {
      return {
        ...state,
        cartItem: state.cartItems.filter(
          (item) => item.id !== action.payload.productId,
        ),
      };
    }
    case "handleAddToCart": {
      console.log("adios")
      const foundProduct = action.payload.products.find(
        (item) => item.id === action.payload.productId,
      );
      const updatedProduct = {
        id: foundProduct.id,
        title: foundProduct.title,
        img: foundProduct.img,
        price: foundProduct.price,
        unitsInStock: foundProduct.unitsInStock,
        createdAt: foundProduct.createdAt,
        updatedAt: foundProduct.updatedAt,
        quantity: foundProduct.quantity + 1,
      };
      console.log(action.payload.products);
      console.log(state.cartItems);
      console.log(updatedProduct);
      console.log(state);
      return {
        ...state,
        cartItems: [...state.cartItems , updatedProduct],
      };
    }
    default:
      return state;
  }
}

function CartItemContextProvider({ children }) {
  const [cartItem, dispatch] = useReducer(
    cartItemReducer,
    cartItemInitialState,
  );

  return (
    <CartItemStateContext.Provider value={cartItem}>
      <CartItemDispatchContext.Provider value={dispatch}>
        {children}
      </CartItemDispatchContext.Provider>
    </CartItemStateContext.Provider>
  );
}
export default CartItemContextProvider;
