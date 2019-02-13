import React, { Component } from 'react';
import Cell from './Cell';

class Column extends Component {
  render() {
    const { cells, index, play } = this.props;
    return (
      <div style={styles.column} onClick={() => play(index)}>
        {cells.map((type, i) => <Cell key={i} type={type} />)}
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
