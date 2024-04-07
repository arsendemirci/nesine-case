import React, { useReducer } from "react";
import { couponReducer, defaultCouponState } from "./couponReducer";

const CouponContext = React.createContext({
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (code) => {},
  items: [],
});

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
