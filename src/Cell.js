import React from 'react';

const Cell = ({ type }) => (
  <div style={styles.cell}>
    {type === 0 && <div style={{ ...styles.circle, ...styles.white }} />}
    {type === 1 && <div style={{ ...styles.circle, ...styles.red }} />}
    {type === 2 && <div style={{ ...styles.circle, ...styles.yellow }} />}
  </div>
);

const cellSize = 80;
const circleSize = 50;

const styles = {
  cell: {
    backgroundColor: 'blue',
    width: cellSize,
    height: cellSize,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: 50,
    width: circleSize,
    height: circleSize,
  },
  white: {
    backgroundColor: 'white',
  },
  red: {
    backgroundColor: 'red',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
};

export default Cell;
