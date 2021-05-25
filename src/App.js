import React, { useState } from "react";
import "./index.css";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import "./css/pp.css";
export default function App() {
  const [queNo, setQueNo] = useState(1);

  return (
    <div className="app">
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          setQueNo(1);
        }}
      >
        Question 1
      </button>
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          setQueNo(2);
        }}
      >
        Question 2
      </button>
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          setQueNo(3);
        }}
      >
        Question 3
      </button>
      <button
        className="btn btn-primary mx-4"
        onClick={() => {
          setQueNo(4);
        }}
      >
        Question 4
      </button>
      {queNo === 1 && <Q1 />}
      {queNo === 2 && <Q2 />}
      {queNo === 3 && <Q3 />}
      {queNo === 4 && <Q4 />}
    </div>
  );
}
