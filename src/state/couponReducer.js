import { factor } from "#arrayUtils";

export const defaultCouponState = {
  items: [],
  totalPrice: 0,
};
export const couponReducer = (state, action) => {
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
