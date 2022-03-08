import { createContext } from "react";

export const CartItemStateContext = createContext({
  id: "id",
  title: "title",
  img: "img",
  price: "price",
  unitsInStock: "unitsInStock",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  quantity: "quantity + 1",
});

export const CartItemDispatchContext = createContext(() => {});