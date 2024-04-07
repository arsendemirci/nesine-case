import React, { useReducer } from "react";
import { factor } from "#arrayUtils";

const CouponContext = React.createContext({
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (code) => {},
  items: [],
});

const defaultCouponState = {
  items: [],
  totalPrice: 0,
};

const couponReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    let existingCouponItemIndex = state.items.findIndex(
      (c) => c.code === action.item.code
    );

    if (existingCouponItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCouponItemIndex],
        rate: action.item.rate,
      };
      updatedItems = [...state.items];
      updatedItems[existingCouponItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: factor(updatedItems, "rate"),
    };
  }

  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter(
      (item) => item.code !== action.code
    );

    return {
      items: updatedItems,
      totalPrice: factor(updatedItems, "rate"),
    };
  }
  return defaultCouponState;
};

const CouponProvider = (props) => {
  const [couponState, dispatchCouponAction] = useReducer(
    couponReducer,
    defaultCouponState
  );

  const addItemToCouponHandler = (item) => {
    dispatchCouponAction({ type: "ADD", item: item });
  };
  const removeItemFromCouponHandler = (code) => {
    dispatchCouponAction({ type: "REMOVE", code });
  };

  const couponContext = {
    items: couponState.items,
    totalPrice: couponState.totalPrice,
    addItem: addItemToCouponHandler,
    removeItem: removeItemFromCouponHandler,
  };

  return (
    <CouponContext.Provider value={couponContext}>
      {props.children}
    </CouponContext.Provider>
  );
};

export { CouponProvider, CouponContext };
