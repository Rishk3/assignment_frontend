import React, { Component } from "react";
import ReactDOM from "react-dom";

const Compo3 = (props) => {
  return (
    <>
      <div
        className="compo3"
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "blue",
          bottom: "0px",
          left: "0px",
          position: "absolute",
        }}
      >
        {props.text}
      </div>
    </>
  );
};

export default Compo3;
