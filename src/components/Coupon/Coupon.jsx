import React, { useContext } from "react";
import { CouponContext } from "#couponContext";
import "./Coupon.scss";

const Coupon = () => {
  const ctx = useContext(CouponContext);

  return (
    <div className="coupon-wrapper">
      {ctx.items.length > 0 && (
        <ul>
          {ctx.items.map((item, index) => (
            <li className="coupon-item" key={index}>
              4 Kod: {item.code} Maç: {item.game} <b>Oran: {item.rate}</b>
            </li>
          ))}
        </ul>
      )}
      <div className="coupon-total">Toplam Tutar : {ctx.totalPrice} TL</div>
    </div>
  );
};

export default Coupon;
