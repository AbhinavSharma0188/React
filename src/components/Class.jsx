import React from "react";

class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1
    };
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <h2>{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Increase
        </button>
        <p>{this.num}</p>
      </>
    );
  }
}

export default Class;
