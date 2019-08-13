import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true
  };

  plus = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? "Loading..." : "Go"}
        <h1>The number : {this.state.count}</h1>{" "}
        <button onClick={this.plus}>Plus</button>{" "}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
