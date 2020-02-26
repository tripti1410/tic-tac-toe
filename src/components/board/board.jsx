import React from "react";
import cs from 'classnames';

import { findWinner, isAllBoxesFilled } from "../../utils";
import BoardBox from "../board-box/board-box";
import Button from '../../components/button/button';

import "./board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      isNextPlayer: true,
      startNewGame: false
    };
  }

  handleBoxClick(boxNumber) {
    const boxes = this.state.boxes;
    //set the value to 'x' or 'o'
    this.state.isNextPlayer ? boxes[boxNumber] = 'x' : boxes[boxNumber] = '0'
    this.setState({
      boxes: boxes,
      isNextPlayer: !this.state.isNextPlayer
    })

    //Stop game if it is win condition
    if (findWinner(boxes, boxNumber)) {
      this.props.gameResult(findWinner(boxes, boxNumber));
      this.setState({ startNewGame: true })
    }

    //If all boxes are filled and no one wins
    if (isAllBoxesFilled(this.state.boxes)) {
      this.props.gameResult('No one won');
      this.setState({ startNewGame: true })
    }
  }

  resetGame() {
    this.setState({
      boxes: Array(9).fill(null),
      isNextPlayer: true,
      startNewGame: !this.state.startNewGame
    });
    this.props.gameResult('')
  }

  render() {
    const boxes = this.state.boxes;
    return (
      <React.Fragment>
        <div className="board">
          {boxes.map((box, index) => (
            <BoardBox value={box} onClick={() => this.handleBoxClick(index)} key={`box-${index}`} />
          ))}
        </div>
        <div className={cs('new-game-container', { 'slide-in': this.state.startNewGame })}>
          <Button clickHandle={() => this.resetGame()} buttonLabel="New Game" />
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
