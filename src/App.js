import React, { Component } from "react";
import Board from "./components/board/board";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Board />
      </div>
    );
  }
}

export default App;
