import React, { useState } from "react";

export default function CompY({ noX, noY, nameX }) {
  const [showY, setshowY] = useState(false);
  const [editName, setEditName] = useState(true);
  const [newName, setNewName] = useState("Click Edit to change Name");
  const [totalY, setTotalY] = useState([]);
  const handleOnclick = () => {
    setTotalY((totalX) => [...totalX, Math.random() * 100]);
  };

  const handleInputName = (e) => {
    setNewName(e.target.value);
  };

  const saveNameClick = (e) => {
    let jsonData = [];
    setshowY(true);
    console.log("nox", noX);
    console.log("newName", nameX);
  };
  return (
    <div className="compY">
      <h5>Component Y</h5>
      <p className="my-2 ">
        NameY:
        {editName ? (
          <input onChange={handleInputName} placeholder="type new Name" />
        ) : (
          newName
        )}
        {editName && (
          <button onClick={saveNameClick} className=" btn btn-success mx-5">
            Save
          </button>
        )}
      </p>
      {showY && (
        <p>
          Final Result: X{noX + 1}:{nameX},Y{noY + 1}:{newName}
        </p>
      )}
    </div>
  );
}
