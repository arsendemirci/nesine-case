import React from "react";
import "./ItemRow.scss";

const ItemRow = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="topRow">
          <div>{item["D"]}</div>
          <div>{item["DAY"]}</div>
          <div>{item["LN"]}</div>
          <div>Yorumlar</div>
          <div></div>
          <div>{item["OCG"]["1"]["OC"]["0"]["N"]}</div>
          <div>{item["OCG"]["1"]["OC"]["1"]["N"]}</div>
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
        <div className="topRow">
          <div>{item["C"]}</div>
          <div>{item["T"]}</div>
          <div>{item["N"]}</div>
          <div>Yorumlar</div>
          <div>{item["MBS"]}</div>
          <div>{item["OCG"]["1"]["OC"]["0"]["O"]}</div>
          <div>{item["OCG"]["1"]["OC"]["1"]["O"]}</div>
          <div></div>
          <div>{item["OCG"]["5"]["OC"]["25"]["O"]}</div>
          <div>{item["OCG"]["5"]["OC"]["26"]["O"]}</div>
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
