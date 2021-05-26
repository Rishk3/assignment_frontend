import React, { Component } from "react";
import ReactDOM from "react-dom";

const Compo4 = (props) => {
  return (
    <>
      <div
        className="compo4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          height: "200px",
          width: "200px",
          backgroundColor: "red",
          right: "0px",
          top: "0px",
          position: "absolute",
        }}
      >
        {props.text}
      </div>
    </>
  );
};

export default Compo4;
