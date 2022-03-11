import React, { useReducer } from "react";

import CheckoutsContext from "../../context/CheckoutsContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

const CHECKOUTS_LOCAL_STORAGE_KEY = "react-sc-state-checkouts";

export const CheckoutsInitialState = {
  checkouts: loadLocalStorageItems(CHECKOUTS_LOCAL_STORAGE_KEY, []),
  saveCheckoutTemp: () => {},
};

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "handleAddToCheckouts":
      console.log("hola");
      return {
        ...state,
        checkouts: [action.payload.newCheckout],
      };
    default:
      return {};
  }
}

function CheckoutsContextProvider({ children }) {
  const [checkouts, dispatch] = useReducer(
    checkoutReducer,
    CheckoutsInitialState,
  );

  function saveCheckoutTemp(newCheckout) {
    console.log("hola");
    dispatch({
      type: "handleAddToCheckouts",
      payload: {
        newCheckout: newCheckout,
      },
    });
  }

  return (
    <CheckoutsContext.Provider
      value={{
        checkouts,
        saveCheckoutTemp,
      }}
    >
      {children}
    </CheckoutsContext.Provider>
  );
}
export default CheckoutsContextProvider;
