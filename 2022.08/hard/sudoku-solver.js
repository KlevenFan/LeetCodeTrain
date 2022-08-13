// 连接：https://leetcode.cn/problems/sudoku-solver/

function backTracking(board) {
  // 遍历行
  for (let i = 0; i < board.length; i++) {
    // 遍历列
    for (let j = 0; j < board[0].length; j++) {
      if(board[i][j] !== '.') continue;
      for (let attempt = 1; attempt < 10; attempt++) {
        if(isValid(i, j, `${attempt}`, board)) {
          board[i][j] = `${attempt}`;
          if(backTracking(board)) return true;
          board[i][j] = '.';
        };
      }

      return false;
    }
  }

  return true;
}

function isValid(raw, col, attempt, board) {
  const length = board.length;
  // 检查行
  for (let i = 0; i < length; i++) {
    if (board[raw][i] === attempt) return false;
  }

  // 检查列
  for (let i = 0; i < length; i++) {
    if (board[i][col] === attempt) return false;
  }

  // 检查正方形
  let rawStart = Math.floor(raw / 3) * 3;
  let colStart = Math.floor(col / 3) * 3;
  for (let i = rawStart; i < rawStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if(board[i][j] === attempt) return false;
    }
  }

  return true;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  backTracking(board);
  return board;
};
