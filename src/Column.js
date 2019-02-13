import React, { Component } from 'react';
import Cell from './Cell';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isHovering: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isHovering: false,
    })
  }

  render() {
    const { cells, index, play, currentPlayer, winner } = this.props;
    const { isHovering } = this.state;

    const newCells = cells.slice();

    if (isHovering && !winner) {
      for (let i = 0; i < newCells.length; i++) {
        if (newCells[i] === 0) {
          newCells[i] = currentPlayer;
          break;
        }
      }
    }

    return (
      <div
        style={styles.column}
        onClick={() => play(index)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {newCells.map((type, i) => <Cell key={i} type={type} />)}
      </div>
    );
  }
}

const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column-reverse',
    cursor: 'pointer',
  },
};

export default Column;
