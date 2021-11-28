// 连接：https://leetcode-cn.com/problems/delete-operation-for-two-strings/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const L1 = word1.length;
  const L2 = word2.length;
  const dp = new Array(L1 + 1).fill(0).map((_) => new Array(L2 + 1).fill(0));

  for (let i = 0; i <= L1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= L2; j++) {
    dp[0][j] = j;
  }

  for(let i = 1; i <= L1; i++) {
    let c1 = word1[i - 1];
    for(let j = 1; j<= L2; j++) {
      let c2 = word2[j - 1];
      if(c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i -1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[L1][L2];
};