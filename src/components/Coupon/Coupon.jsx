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
              4 Kod: {item.code} Maç: {item.game} Oran: <b>{item.rate}</b>
            </li>
          ))}
        </ul>
      )}
      <div>Toplam Tutar : 0 TL</div>
    </div>
  );
};

export default Coupon;
