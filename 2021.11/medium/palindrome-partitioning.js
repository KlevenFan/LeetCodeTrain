// 连接：https://leetcode-cn.com/problems/palindrome-partitioning/
function getDp(str) {
  const strLength = str.length;
  const dp = new Array(strLength).fill(0).map(() => new Array(strLength).fill(true));

  for(let i = strLength - 1; i >= 0; i--) {
    for(let j = i + 1; j < strLength; j++) {
      dp[i][j] = (str[i] === str[j]) && dp[i + 1][j - 1];
    }
  }

  return dp;
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const sLength = s.length;
  const dp = getDp(s);

  const ans = [];
  const ret =[]
  const dfs = (i) => {
    if (i === sLength) {
      ret.push(ans.slice());
      return;
    }

    for (let j = i; j < sLength; j++) {
      if (dp[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  }

  dfs(0);

  return ret;
};