import React, { Component } from 'react';
import Board from './Board';
import { checkWinner, checkDraw } from './utils';
import { NUM_COLS, NUM_ROWS, CELL_SIZE } from './constants';

class ConnectFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(NUM_COLS).fill(0).map(() => new Array(NUM_ROWS).fill(0)),
      tops: new Array(NUM_COLS).fill(0),
      currentPlayer: 1,
      winner: 0,
      draw: false,
    };
  }

  play = (column) => {
    const { board, tops, currentPlayer, winner, draw } = this.state;

    if (winner !== 0 || draw) {
      return;
    }

    const newBoard = board.slice();
    const newTops = tops.slice();
    const newCurrentPlayer = currentPlayer === 1 ? 2 : 1;

    if (newTops[column] < newBoard[column].length) {
      newBoard[column][newTops[column]] = currentPlayer;
      newTops[column]++;
      const newWinner = checkWinner(newBoard);
      const newDraw = checkDraw(newBoard);
      this.setState({
        ...this.state,
        board: newBoard,
        tops: newTops,
        currentPlayer: newCurrentPlayer,
        winner: newWinner,
        draw: newDraw,
      });
    }
  }

  reset = () => {
    this.setState({
      board: new Array(NUM_COLS).fill(0).map(() => new Array(NUM_ROWS).fill(0)),
      tops: new Array(NUM_COLS).fill(0),
      currentPlayer: 1,
      winner: 0,
      draw: false,
    })
  }

  render() {
    const { board, currentPlayer, winner, draw } = this.state;
    let turnMessage, winnerMessage, drawMessage;
    if (winner === 0 && !draw) {
      turnMessage = (
        <h2>
          Turn:&nbsp;
          <span style={
            currentPlayer === 1
              ? styles.player1
              : styles.player2
          }>
            Player {currentPlayer}
          </span>
        </h2>
      );
    } else if (winner === 0 && draw) {
      drawMessage = (
        <h2>Draw!</h2>
      );
    } else {
      winnerMessage = (
        <h2>
          Winner:&nbsp;
          <span style={
            winner === 1
              ? styles.player1
              : styles.player2
          }>
            Player {winner}
          </span>
        </h2>
      );
    }
    return (
      <div style={styles.container}>
        <h1>Connect Four</h1>
        <div style={styles.options}>
          <div>
            {turnMessage || drawMessage || winnerMessage}
          </div>
          <div>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
        <Board board={board} play={this.play}/>
      </div>
    );
  }
}

const styles = {
  container: {
    width: NUM_COLS*CELL_SIZE,
    margin: '0 auto',
    textAlign: 'center',
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  player1: {
    color: 'red',
  },
  player2: {
    color: 'yellow',
  },
}

export default ConnectFour;
