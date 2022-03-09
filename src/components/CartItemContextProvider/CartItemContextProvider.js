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
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.productId,
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    }
    case "handleAddToCart": {
      const { cartItems } = state;
      const { products, productId } = action.payload;

      const prevCartItem = cartItems.find((item) => item.id === productId);
      const foundProduct = products.find((item) => item.id === productId);
      if (prevCartItem) {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id !== productId) {
            return { ...item };
          }
          // if (item.quantity >= item.unitsInStock) {
          //   return item;
          // }
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
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
      return {
        ...state,
        cartItems: [...cartItems, updatedProduct],
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
