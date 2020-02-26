import React, { Component } from "react";
import Board from "./components/board/board";
import "./app.css";
import Status from "./components/status/status";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Status message={this.state.message} />
        <Board gameResult={message => this.setState({ message })} />
      </div>
    );
  }
}

export default App;
