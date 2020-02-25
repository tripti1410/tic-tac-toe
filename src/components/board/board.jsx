import React from "react";
import BoardBox from "../board-box/board-box";
import "./board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null)
    };
  }

  render() {
    return (
      <div className="board">
        {this.state.boxes.map((box, index) => (
          <BoardBox box={box} key={`box-${index}`} />
        ))}
      </div>
    );
  }
}

export default Board;
