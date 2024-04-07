import React, { useContext } from "react";
import "./ItemRow.scss";
import { CouponContext } from "#couponContext";
import { resolve } from "#arrayUtils";
/* resolve methodunu ornek olarak biraktim oncelik performans oldugu icin
  `item["OCG"]["5"]["OC"]["26"]["N"]` seklinde erismek en hizlisi olacaktir.
  ama daha dinamik bir yapi olusturmak istersek resolve kullanmamiz gerekir. */
const ItemRow = ({ item }) => {
  const ctx = useContext(CouponContext);

  const onClickHandler = (rate) => {
    ctx.onAddItem({ rate: 3.14, code: "5353", game: "fadsf maçı", no: 4 });
  };
  return (
    <tr>
      <td>
        <div className="topRow row-header">
          <div className="cell-lg">
            {item["D"]} {item["DAY"]} {item["LN"]}
          </div>
          <div className="cell-md"> Yorumlar</div>
          <div></div>
          <div>{resolve("OCG.1.OC.0.N", item)}</div>
          <div>{resolve("OCG.1.OC.1.N", item)}</div>
          <div>2</div>
          <div>{item["OCG"]["5"]["OC"]["25"]["N"]}</div>
          <div>{item["OCG"]["5"]["OC"]["26"]["N"]}</div>
          <div>H1</div>
          <div>1</div>
          <div>x</div>
          <div>2</div>
          <div>H2</div>
          <div>{item["OCG"]["2"]["OC"]["3"]["N"]}</div>
          <div>{item["OCG"]["2"]["OC"]["4"]["N"]}</div>
          <div>{item["OCG"]["2"]["OC"]["5"]["N"]}</div>
          <div>Var</div>
          <div>Yok</div>
          <div>+99</div>
        </div>
        <div className="topRow row-value">
          <div className="cell-lg">
            <b>{item["C"]}</b> {item["T"]} {item["N"]}
          </div>
          <div className="cell-md">Yorumlar</div>
          <div>{item["OCG"]["1"]["MBS"]}</div>
          <div onClick={onClickHandler}>{resolve("OCG.1.OC.0.O", item)}</div>
          <div onClick={onClickHandler}>{resolve("OCG.1.OC.1.O", item)}</div>
          <div></div>
          <div onClick={onClickHandler}>
            {item["OCG"]["5"]["OC"]["25"]["O"]}
          </div>
          <div onClick={onClickHandler}>
            {item["OCG"]["5"]["OC"]["26"]["O"]}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>{item["OCG"]["2"]["OC"]["3"]["O"]}</div>
          <div>{item["OCG"]["2"]["OC"]["4"]["O"]}</div>
          <div>{item["OCG"]["2"]["OC"]["5"]["O"]}</div>
          <div></div>
          <div></div>
          <div>3</div>
        </div>
      </td>
    </tr>
  );
};

export default ItemRow;
