// 连接：https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/submissions/
// 解法1
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = Number.NEGATIVE_INFINITY;

  for(let i1 = 1; i1 <= rows; i1++) {
    for(let j1 = 1; j1 <= cols; j1++) {
      dp = genMatrix(rows + 1, cols + 1, 0);
      dp[i1][j1] = matrix[i1 - 1][j1 - 1];
      for(let i2 = i1; i2 <= rows; i2++) {
        for(let j2 = j1; j2 <= cols; j2++) {
          dp[i2][j2] = dp[i2 - 1][j2] + dp[i2][j2 - 1] - dp[i2 - 1][j2 - 1] + matrix[i2 - 1][j2 - 1];
          console.log('===>>> dp[i2][j2]', dp[i2][j2])
          if (dp[i2][j2] <= k && dp[i2][j2] > max) {
            max = dp[i2][j2];
          }
        }
      }
    }
  }

  return max;
};

function genMatrix(row, col, defaultValue) {
  const result = [];

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(!result[i]) {
        result[i] = [];
      }

      result[i][j] = defaultValue;
    }
  }

  return result;
}

// 解法2
