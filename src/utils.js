const checkColumns = (board) => {
  for (let i = 0; i < board.length; i++) {
    let count = 0;
    let player = 0;
    for (let j = 0; j < board[i].length; j++) {
      if (player !== 0 && board[i][j] === player) {
        count++;
      } else {
        count = 1;
        player = board[i][j];
      }
      if (count === 4) {
        return player;
      }
    }
  }
  return 0;
}

const checkRows = (board) => {
  for (let j = 0; j < board[0].length; j++) {
    let count = 0;
    let player = 0;
    for (let i = 0; i < board.length; i++) {
      if (player !== 0 && board[i][j] === player) {
        count++;
      } else {
        count = 1;
        player = board[i][j];
      }
      if (count === 4) {
        return player;
      }
    }
  }
  return 0;
}

const checkAscendingDiagonal = (board) => {
  for (let i = 0; i < board.length-4; i++) {
    for (let j = 0; j < board[0].length-4; j++) {
      if (board[i][j] !== 0) {
        let found = true;
        for (let k = 1; k < 4; k++) {
          if (board[i][j] !== board[i+k][j+k]) {
            found = false;
          }
        }
        if (found) {
          return board[i][j];
        }
      }
    }
  }
  return 0;
}

const checkDescendingDiagonal = (board) => {
  for (let i = 0; i < board.length-4; i++) {
    for (let j = 3; j < board[0].length; j++) {
      if (board[i][j] !== 0) {
        let found = true;
        for (let k = 1; k < 4; k++) {
          if (board[i][j] !== board[i+k][j-k]) {
            found = false;
          }
        }
        if (found) {
          return board[i][j];
        }
      }
    }
  }
  return 0;
}

export const checkWinner = (board) => {
  return (
    checkColumns(board)
    || checkRows(board)
    || checkAscendingDiagonal(board)
    || checkDescendingDiagonal(board)
  );
}

export const checkDraw = (board) => {
  return (
    !board.some(column => column.includes(0))
    && checkWinner(board) === 0
  );
}