import React from "react";
import BoardBox from "../board-box/board-box";
import "./board.css";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      isNext: true
    };
  }

  handleBoxClick(boxNumber) {
    console.log(boxNumber, "fff")
    const boxes = this.state.boxes;
    //set the value to 'x' or 'o'
    if (this.state.isNext) {
      boxes[boxNumber] = 'x'
    } else {
      boxes[boxNumber] = '0'
    }
    this.setState({
      boxes: boxes,
      isNext: !this.state.isNext
    })
    //Stop game if all boxes filled
    if (!this.state.boxes.includes(null)) {
      return
    }

  }

  resetGame() {
    this.setState({
      boxes: Array(9).fill(null),
      isNext: true
    });
  }

  render() {
    const boxes = this.state.boxes;
    return (
      <div>
        <div className="board">
          {boxes.map((box, index) => (
            <BoardBox value={box} onClick={() => this.handleBoxClick(index)} key={`box-${index}`} />
          ))}
        </div>
        <button role="button" onClick={() => this.resetGame()} className="reset-button">New Game</button>
      </div>
    );
  }
}

export default Board;
