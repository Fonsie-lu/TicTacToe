function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      if (board[i][j] == "") {
        board[i][j] = ai;
        let score = minmax(board, false);
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
          console.log(move);
        }
      }
    }
  }
  board[move.i][move.j] = ai;
  currentPlayer = human;
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minmax(board, isMaximizing) {
  let result = checkWinner();
  if (result !== null) {
    return scores[result];
  }
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        if (board[i][j] == "") {
          board[i][j] = ai;
          let score = minmax(board, false);
          board[i][j] = "";
          bestScore = max(bestScore, score);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        if (board[i][j] == "") {
          board[i][j] = human;
          let score = minmax(board, true);
          board[i][j] = "";
          bestScore = min(bestScore, score);
        }
      }
    }
    return bestScore;
  }
}
