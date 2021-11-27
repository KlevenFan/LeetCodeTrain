// 连接：https://leetcode-cn.com/problems/palindrome-partitioning-ii/

function getDp(str) {
  const strLength = str.length;
  const dp = new Array(strLength).fill(0).map((_) => new Array(strLength).fill(true));

  for(let i = strLength - 1; i >= 0; i--) {
    for(let j = i + 1; j < strLength; j++) {
      dp[i][j] = str[i] === str[j] && dp[i + 1][j - 1];
    }
  }

  return dp;
}

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const n = s.length;
  const dp = getDp(s);
  const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);

  for(let i = 0; i < n; i++) {
    if(dp[0][i]) {
      f[i] = 0;
    } else {
      for(let j = 0; j < i; j++) {
        if(dp[j + 1][i]) {
          f[i] = Math.min(f[i], f[j] + 1);
        }
      }
    }
  }

  return f[n - 1];
};