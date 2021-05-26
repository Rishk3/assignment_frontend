import React, { Component } from "react";
import ReactDOM from "react-dom";

const Compo2 = (props) => {
  return (
    <>
      <div
        className="compo2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          height: "200px",
          width: "200px",
          backgroundColor: "green",
          right: "0px",
          bottom: "0px",
          position: "absolute",
        }}
      >
        {props.text}
      </div>
    </>
  );
};

export default Compo2;
