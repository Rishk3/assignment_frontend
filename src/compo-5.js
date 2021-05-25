import React, { Component } from "react";
import ReactDOM from "react-dom";
import Compo1 from "./compo-1";
import Compo2 from "./compo-2";
import Compo3 from "./compo-3";
import Compo4 from "./compo-4";
class Compo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  OnType = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <input
          type="text"
          style={{
            top: "50%",
            left: "40%",
            position: "absolute",
            padding: "40px 50px",
          }}
          placeholder="type your text here"
          value={this.state.text}
          name="text"
          className="box-2"
          onChange={this.OnType}
        />
        <p style={{ position: "absolute", top: "65%", left: "40%" }}>
          your name is:{this.state.text}
        </p>
        <Compo1 text={this.state.text} />,
        <Compo2 text={this.state.text} />,
        <Compo3 text={this.state.text} />,
        <Compo4 text={this.state.text} />
      </>
    );
  }
}
export default Compo5;
