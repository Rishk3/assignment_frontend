import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Compo1 from "./components/compo-1";
// import Compo2 from "./components/compo-2";
// import Compo3 from "./components/compo-3";
// import Compo4 from "./components/compo-4";
import Compo5 from "./components/compo-5";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <div className="Main-div">
        <Compo5 />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
