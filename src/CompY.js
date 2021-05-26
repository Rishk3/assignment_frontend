import React, { useState } from "react";
import { useDataLayerValue } from "./context_api/DataLayer";

export default function CompY({ noX, noY, nameX }) {
  const [{ data }, dispatch] = useDataLayerValue();
  let xnameArr = [];
  let jsonData = [];
  let finalObj = {};
  data.forEach(({ nameX, nameAtY }) => {
    if (nameX in finalObj) {
      finalObj[nameX].push(nameAtY);
    } else {
      finalObj[nameX] = [nameAtY];
    }
  });
  jsonData.push(finalObj);
  console.log("final Json Data", jsonData);

  const [showY, setshowY] = useState(false);
  const [editName, setEditName] = useState(true);
  const [nameAtY, setnameAtY] = useState("Click Edit to change Name");
  const [totalY, setTotalY] = useState([]);
  const handleOnclick = () => {
    setTotalY((totalX) => [...totalX, Math.random() * 100]);
  };

  const handleInputName = (e) => {
    setnameAtY(e.target.value);
  };

  const saveNameClick = (e) => {
    dispatch({
      type: "SET_DATA",
      data: [
        ...data,
        { noX: noX + 1, noY: noY + 1, nameX: nameX, nameAtY: nameAtY },
      ],
    });
    let jsonData = [];
    setshowY(true);
  };
  return (
    <div className="compY">
      <h5>Component Y</h5>
      <p className="my-2 ">
        NameY:
        {editName ? (
          <input onChange={handleInputName} placeholder="type new Name" />
        ) : (
          nameAtY
        )}
        {editName && (
          <button onClick={saveNameClick} className=" btn btn-success mx-5">
            Save
          </button>
        )}
      </p>
      {showY && <p>Final Result:please check in console</p>}
    </div>
  );
}
