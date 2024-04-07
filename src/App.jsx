import React, { useContext, useEffect, useState } from "react";
// import "./App.scss";
import { Loader, Wrapper } from "#components";
import { CouponProvider } from "#couponContext";
// import data from "./data/data";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    console.log("render has been finished");
    /*render islemi bitmesine ragmen eventlerin(hover,click) baslamasi gecikiyordu o sebepten loaderi 5 saniye daha uzattim */
    setTimeout(() => setShowLoader(false), 5000);
  }, []);
  return (
    <CouponProvider>
      <Loader show={showLoader} />
      <Wrapper />
    </CouponProvider>
  );
};

export default App;
