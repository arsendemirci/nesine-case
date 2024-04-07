import React, { useReducer } from "react";

const CouponContext = React.createContext({
//   itemCount: 0,
//   isOpen: false,
  totalPrice: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
//   onClose: () => {},
//   onOpen: () => {},
  items: [],
});

const defaultCouponState = {
  items: [],
  totalPrice: 0
};

const couponReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalCost = state.totalPrice * action.item.rate;
    // const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    // const existingCartItemIndex = state.items.findIndex(
    //   (item) => item.id === action.item.id
    // );
    // const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // if (existingCartItem) {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     amount: existingCartItem.amount + action.item.amount,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // } else {
      updatedItems = state.items.concat(action.item);
    // }
    
    return {
      items: updatedItems,
      totalPrice: updatedTotalCost,
    //   totalAmount: updatedTotalAmount,
    //   isOpen: state.isOpen,
    };
  }
//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
//     const existingItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingItem.amount;
//     const updatedItemCount = state.itemCount - 1;
//     let updatedItems;
//     if (existingItem.amount === 1) {
//       updatedItems = state.items.filter((item) => item.id !== action.id);
//     } else {
//       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       itemCount: updatedItemCount,
//       totalAmount: updatedTotalAmount,
//       isOpen: state.isOpen,
//     };
//   }
//   if (action.type === "OPEN") {
//     return {
//       items: state.items,
//       itemCount: state.itemCount,
//       totalAmount: state.totalAmount,
//       isOpen: true,
//     };
//   }
//   if (action.type === "CLOSE") {
//     return {
//       items: state.items,
//       itemCount: state.itemCount,
//       totalAmount: state.totalAmount,
//       isOpen: false,
//     };
//   }
  return defaultCouponState;
};

const CouponProvider = (props) => {
  const [couponState, dispatchCouponAction] = useReducer(couponReducer, defaultCouponState);

  const addItemToCouponHandler = (item) => {
    console.log("Cart Add Item from Meals", item);
    dispatchCouponAction({ type: "ADD", item: item });
  };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };
//   const openCartHandler = () => {
//     dispatchCartAction({ type: "OPEN" });
//   };
//   const closeCartHandler = () => {
//     dispatchCartAction({ type: "CLOSE" });
//   };

  const couponContext = {
    items: couponState.items,
    totalPrice: couponState.totalPrice,
    // isOpen: cartState.isOpen,
    onAddItem: addItemToCouponHandler,
    // onRemoveItem: removeItemFromCartHandler,
    // totalAmount: cartState.totalAmount,
    // onOpen: openCartHandler,
    // onClose: closeCartHandler,
  };

  return (
    <CouponContext.Provider value={couponContext}>{props.children}</CouponContext.Provider>
  );
};

export { CouponProvider, CouponContext };
