import React, { Component } from 'react';
import Column from './Column';

class Board extends Component {
  render() {
    const { board, play } = this.props;
    return (
      <div style={styles.board}>
        {board.map((cells, i) => <Column key={i} cells={cells} index={i} play={play} />)}
      </div>
    );
  }
}

const styles = {
  board: {
    display: 'flex',
  },
};

export default Board;
