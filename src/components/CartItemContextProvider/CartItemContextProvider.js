import React, { useReducer } from "react";

import {
  CartItemStateContext,
  CartItemDispatchContext,
} from "../../context/CartItemContext";

export const cartItemInitialState = {
  id: "id",
  title: "title",
  img: "img",
  price: "price",
  unitsInStock: "unitsInStock",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  quantity: "quantity + 1",
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
