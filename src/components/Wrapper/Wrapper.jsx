import React, { useContext, useCallback } from "react";
import { ItemRow, Coupon, HeadRow } from "#components";
import { CouponContext } from "#couponContext";
import "./Wrapper.scss";
import data from "#data";

/** Bu Wrapper componentini optimizasyon amaci ile yazdim
 * contexti ItemRow'dan kurtarip selectHandleri prop ile ItemRow'a
 * gondermeyi uygun buldum boylelikle useCallback ile burda memoize
 * edip ItemRow'un (her oran seciminde) 3000 kere re-render etmesini engelledim.
 * boylelikle oran secimindeki gecikmeyi gidermis oldum.
 */
const Wrapper = () => {
  const ctx = useContext(CouponContext);

  const onSelectHandler = useCallback((no, code, game, rate, add) => {
    if (!add) {
      ctx.removeItem(code);
    } else {
      ctx.addItem({ no, code, game, rate });
    }
  }, []);

  return (
    <div>
      <Coupon />
      <div>
        <table className="table-head">
          <tbody>
            <HeadRow rowCount={data.length} />
          </tbody>
        </table>
        <table className="table-data">
          <tbody>
            {data.map((item) => {
              return (
                <ItemRow
                  item={item}
                  key={item["C"]}
                  onSelect={onSelectHandler}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wrapper;
