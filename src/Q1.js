import React, { useState } from "react";

export default function Q1() {
  const [indexNo, setIndexNo] = useState(0);
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setIndexNo(Number(e.target.value));
  };
  const handleSearch = () => {
    let diff1 = 1;
    let diff2 = 7;
    let p = 0;
    let arr1 = [];
    let arr2 = [];
    while (p < 100000) {
      arr1.push(diff1);
      arr2.push(diff2);
      diff1 += 4;
      diff2 += 4;
      p++;
    }
    let fArr = [];
    let start = 2;
    let k = 0;
    while (k < 100000) {
      if (k % 2 == 0) {
        fArr.push(start);
        const d1 = arr1.shift();
        start += d1;
      } else {
        fArr.push(start);
        const d2 = arr2.shift();
        start += d2;
      }
      k++;
    }
    setResult(fArr[indexNo]);
  };
  return (
    <div className="que1">
      <div className="inner_que">
        <h1>Question 1</h1>
        <p>Given Series: 2,3,10,15,26,35,50,63.....</p>
        <p className="my-2">Enter any index below 10^5 </p>
        <input
          onChange={handleInput}
          type="text"
          className="form-control"
        ></input>
        <button onClick={handleSearch} className="btn btn-success my-2">
          Search
        </button>

        <p>
          Result==<b>{result ? result : "please Enter a valid input"}</b>{" "}
        </p>
      </div>
    </div>
  );
}
