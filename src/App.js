import React from "react";
import "./App.css";
const data = [
  {
    C: "2002",
    N: "Real Madrid - Galatasaray",
    TYPE: "1",
    NID: "2146483649",
    D: "17.08.2023",
    T: "10:35",
    DAY: "Salı",
    S: "Open",
    LN: "Türkiye Süper Ligi",
    IMF: false,
    OCG: {
      1: {
        ID: "1",
        N: "Maç Sonucu",
        MBS: "4",
        SO: 1,
        OC: {
          0: {
            ID: "0",
            O: "6.71",
            N: "1",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
          1: {
            ID: "1",
            O: "4.63",
            N: "X",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
        },
      },
      2: {
        ID: "2",
        N: "Çifte Şans",
        MBS: "4",
        SO: 4,
        OC: {
          3: {
            ID: "3",
            O: "1.79",
            N: "1-X",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          4: {
            ID: "4",
            O: "2.89",
            N: "1-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          5: {
            ID: "5",
            O: "1.35",
            N: "X-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
        },
      },
      5: {
        ID: "5",
        N: "Alt/Üst 2,5 Gol",
        MBS: "4",
        SO: 2,
        OC: {
          25: {
            ID: "25",
            O: "7.34",
            N: "Alt",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
          26: {
            ID: "26",
            O: "1.51",
            N: "Üst",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
        },
      },
    },
    HEC: false,
  },
  {
    C: "2001",
    N: "PSV - AS Roma",
    TYPE: "1",
    NID: "2146483648",
    D: "12.08.2023",
    T: "01:59",
    DAY: "Perşembe",
    S: "Open",
    LN: "UEFA Şampiyonlar Ligi",
    IMF: false,
    OCG: {
      1: {
        ID: "1",
        N: "Maç Sonucu",
        MBS: "4",
        SO: 1,
        OC: {
          0: {
            ID: "0",
            O: "3.60",
            N: "1",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
          1: {
            ID: "1",
            O: "2.74",
            N: "X",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
        },
      },
      2: {
        ID: "2",
        N: "Çifte Şans",
        MBS: "4",
        SO: 4,
        OC: {
          3: {
            ID: "3",
            O: "7.79",
            N: "1-X",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          4: {
            ID: "4",
            O: "4.56",
            N: "1-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          5: {
            ID: "5",
            O: "4.78",
            N: "X-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
        },
      },
      5: {
        ID: "5",
        N: "Alt/Üst 2,5 Gol",
        MBS: "4",
        SO: 2,
        OC: {
          25: {
            ID: "25",
            O: "4.92",
            N: "Alt",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
          26: {
            ID: "26",
            O: "7.09",
            N: "Üst",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
        },
      },
    },
    HEC: false,
  },
  {
    C: "2003",
    N: "AC Milan - Osasuna",
    TYPE: "1",
    NID: "2146483650",
    D: "20.11.2023",
    T: "17:12",
    DAY: "Pazartesi",
    S: "Open",
    LN: "UEFA Avrupa Ligi",
    IMF: false,
    OCG: {
      1: {
        ID: "1",
        N: "Maç Sonucu",
        MBS: "4",
        SO: 1,
        OC: {
          0: {
            ID: "0",
            O: "6.17",
            N: "1",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
          1: {
            ID: "1",
            O: "6.51",
            N: "X",
            MBS: "4",
            G: "1",
            OD: 0,
            IMF: false,
          },
        },
      },
      2: {
        ID: "2",
        N: "Çifte Şans",
        MBS: "4",
        SO: 4,
        OC: {
          3: {
            ID: "3",
            O: "3.15",
            N: "1-X",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          4: {
            ID: "4",
            O: "1.64",
            N: "1-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
          5: {
            ID: "5",
            O: "4.95",
            N: "X-2",
            MBS: "4",
            G: "2",
            OD: 0,
            IMF: false,
          },
        },
      },
      5: {
        ID: "5",
        N: "Alt/Üst 2,5 Gol",
        MBS: "4",
        SO: 2,
        OC: {
          25: {
            ID: "25",
            O: "7.92",
            N: "Alt",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
          26: {
            ID: "26",
            O: "2.47",
            N: "Üst",
            MBS: "4",
            G: "5",
            OD: 0,
            IMF: false,
          },
        },
      },
    },
    HEC: false,
  },
];

const App = () => {
  return (
    <div>
      <table border="1" width="100%">
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
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
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
