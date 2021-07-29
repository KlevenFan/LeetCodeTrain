// 连接：https://leetcode-cn.com/problems/russian-doll-envelopes/
function getLIS(nums, i, dp) {
  if(dp[i]) {
    return dp[i];
  }

  let result = 1;

  for(let j = 0; j < i; j++) {
    if(nums[j] < nums[i]) {
      result = Math.max(result, getLIS(nums, j, dp) + 1);
    }
  }
  dp[i] = result;

  return dp[i];
}
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if(envelopes.length === 0) {
    return 0;
  }

  const simpleEnveLopes = envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  }).map((item) => item[1]);

  const dp = {};
  let result = 1;

  for(let i = 0; i < simpleEnveLopes.length; i++) {
    result = Math.max(result, getLIS(simpleEnveLopes, i, dp));
  }

  return result;
};