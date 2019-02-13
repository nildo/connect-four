import React from 'react';
import { CELL_SIZE, CIRCLE_SIZE } from './constants';

const Cell = ({ type }) => (
  <div style={styles.cell}>
    {type === 0 && <div style={{ ...styles.circle, ...styles.white }} />}
    {type === 1 && <div style={{ ...styles.circle, ...styles.red }} />}
    {type === 2 && <div style={{ ...styles.circle, ...styles.yellow }} />}
  </div>
);

const styles = {
  cell: {
    backgroundColor: 'blue',
    width: CELL_SIZE,
    height: CELL_SIZE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: CIRCLE_SIZE/2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
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
