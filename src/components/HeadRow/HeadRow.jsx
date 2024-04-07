import React, { memo } from "react";

/**fixed table header row,
 * style classlari ItemRow.scss ve Wrapper.scss'den geliyor 
 * (ayni anda ayni parent altinda yuklendikleri icin problem olmuyor)
 * css modulleri icin webpack konfigurasyonunu yapamadim
 * oyuzden cssler biraz karisti farkindayim
 */
const HeadRow = memo(({ rowCount }) => {
  return (
    <tr>
      <td>
        <div className="topRow row-header">
          <div className="cell-lg">Event Count: {rowCount}</div>
          <div className="cell-md"> Yorumlar</div>
          <div></div>
          <div>1</div>
          <div>X</div>
          <div>2</div>
          <div>Alt</div>
          <div>Ust</div>
          <div>H1</div>
          <div>1</div>
          <div>X</div>
          <div>2</div>
          <div>H2</div>
          <div>1-X</div>
          <div>I-2</div>
          <div>X-2</div>
          <div>Var</div>
          <div>Yok</div>
          <div>+99</div>
        </div>
      </td>
    </tr>
  );
});

export default HeadRow;
