import { createContext } from "react";

const CheckoutsContext = createContext({
  checkouts: [],
  saveCheckoutTemp: () => {},
});
export default CheckoutsContext;
