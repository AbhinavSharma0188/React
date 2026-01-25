import React from "react";

class Class extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      num: 1,
    };
  }

  componentDidMount() {
    this.dataFetch();
  }
  componentDidUpdate(prevprop,prevState){
    console.log(prevprop);
    console.log(prevState);
   if(prevState.num!=this.state.num){
    console.log("state changed");
   }
  }

  async dataFetch() {
    console.log("data fetching");
    // here you can call API using fetch or axios
  }


  render() {
    console.log("render");

    return (
      <>
        <h1>Hello</h1>
        <h2>{this.state.num}</h2>

        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Increase
        </button>

        <p>{this.state.num}</p>
      </>
    );
  }
}

export default Class;
