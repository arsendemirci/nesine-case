import React from "react";
import "./Loader.scss";

const Loader = ({ show }) => {
  return (
    <div className={`backdrop ${show ? "show" : ""}`}>
      <div className="wrapper">
        <div className="text">Please Wait...</div>
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
