// 连接： https://leetcode-cn.com/problems/longest-valid-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let result = 0;
  const dp = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = 2 + dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i -1] - 2] : 0);
      }

      result = Math.max(result, dp[i]);
    }
  }

  return result;
};