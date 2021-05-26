import React, { Component } from "react";
import ReactDOM from "react-dom";

const Compo1 = (props) => {
  return (
    <>
      <div
        className="compo1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          height: "200px",
          width: "200px",
          backgroundColor: "orange",
          left: "0",
          top: "0",
          position: "absolute",
        }}
      >
        {props.text}
      </div>
    </>
  );
};

export default Compo1;
