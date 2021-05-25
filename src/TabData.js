import React, { Component } from "react";

class TabData extends Component {
  state = {
    phoneNumbers: [],
  };

  addPhone() {
    this.setState({ phoneNumbers: [...this.state.phoneNumbers, ""] });
  }
  handleChange(e, index) {
    e.preventDefault();
    this.state.phoneNumbers[index] = e.target.value;
    this.setState({ phoneNumbers: this.state.phoneNumbers });
  }
  handleSubmit(e) {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h6>Phone Numbers</h6>
        {this.state.phoneNumbers.map((numbers, index) => {
          return (
            <div key={index}>
              <input
                onChange={(e) => this.handleChange(e, index)}
                value={numbers}
              ></input>
            </div>
          );
        })}
        <button onClick={(e) => this.addPhone(e)}>
          Add another phone number
        </button>
        <br />
        <br />
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default TabData;
