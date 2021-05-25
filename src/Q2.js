import React, { useState } from "react";
import CompY from "./CompY";

const CompX = ({ noX }) => {
  const [showY, setshowY] = useState(false);
  const [editName, setEditName] = useState(false);
  const [newName, setNewName] = useState("Click Edit to change Name");
  const [totalY, setTotalY] = useState([]);
  const handleOnclick = () => {
    setTotalY((totalX) => [...totalX, Math.random() * 100]);
    setshowY(true);
  };
  const handleEditName = () => {
    setEditName(true);
  };
  const handleInputName = (e) => {
    setNewName(e.target.value);
  };
  const saveNameClick = (e) => {
    setEditName(false);
  };
  return (
    <div className="compX">
      <h4>Component X</h4>
      <p className="my-2 shadow-lg">
        Name:
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
      <div className="d-flex">
        <button onClick={handleEditName} className="btn btn-primary">
          Edit
        </button>

        <button
          onClick={handleOnclick}
          style={{ fontSize: "24px" }}
          className="btn btn-success mx-5 "
        >
          +
        </button>
      </div>
      {showY &&
        totalY.map((p, idx) => {
          return <CompY key={idx} noX={noX} noY={idx} nameX={newName} />;
        })}
    </div>
  );
};

export default function Q2() {
  const [showX, setshowX] = useState(false);
  const [totalX, setTotalX] = useState([]);

  const handleOnclick = () => {};

  const handleAddX = () => {
    setshowX(true);
    setTotalX((totalX) => [...totalX, Math.random() * 1000]);
  };

  return (
    <div className="que2">
      <h2>Question 2</h2>

      <button onClick={handleAddX} className="btn btn-warning">
        Add X
      </button>
      <div className="btm">
        {showX &&
          totalX.map((p, idx) => {
            return <CompX key={idx} noX={idx} />;
          })}{" "}
      </div>
    </div>
  );
}
