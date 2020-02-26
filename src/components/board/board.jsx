import React from "react";
import BoardBox from "../board-box/board-box";
import "./board.css";
import { findWinner, isAllBoxesFilled } from "../../utils";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      isNext: true
    };
  }

  handleBoxClick(boxNumber) {
    const boxes = this.state.boxes;
    //set the value to 'x' or 'o'
    this.state.isNext ? boxes[boxNumber] = 'x' : boxes[boxNumber] = '0'
    this.setState({
      boxes: boxes,
      isNext: !this.state.isNext
    })

    //If all boxes are filled and no one wins
    isAllBoxesFilled(this.state.boxes) && alert('no one won')

    //Stop game if it is win condition
    findWinner(boxes, boxNumber) && alert(findWinner(boxes, boxNumber));
    return
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
