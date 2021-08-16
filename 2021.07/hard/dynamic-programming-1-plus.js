// 连接：https://leetcode-cn.com/problems/max-submatrix-lcci/solution/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function(matrix) {
  const result = [];
  let maxSum = matrix[0][0];
  const N = matrix.length;
  const M = matrix[0].length;
  let b = [];
  let dp = 0;
  let bestr1 = 0;
  let bestc1 = 0;

  for (let i = 0; i < N; i++) {
    // js 中需要将每一个元素初始化为0，否则会出现undefined + number = NaN的情况
    for(let t = 0;t < M; t++ ) {
      b[t]=0;
    }
    for (let j = i; j < N; j++) {
      dp = 0;
      for (let k = 0; k < M; k++) {
        b[k] += matrix[j][k];

        if(dp > 0) {
          dp += b[k];
        } else {
          dp = b[k];
          bestr1 = i;
          bestc1 = k;
        }

        // 大于等于是为了满足[[0]]的场景
        if(dp >= maxSum) {
          maxSum = dp;
          result[0] = bestr1;
          result[1] = bestc1;
          result[2] = j;
          result[3] = k;
        }
      }
    }
  }

  return result;
};