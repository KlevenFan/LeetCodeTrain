// 连接：https://leetcode-cn.com/problems/largest-sum-of-averages/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, K) {
  const length = nums.length;
  const p = new Array(length + 1).fill(0);

  for(let i = 0; i < length; i++) {
    p[i + 1] = p[i] + nums[i];
  }

  const dp = new Array(length);
  for(let i = 0; i < length; i++) {
    dp[i] = (p[length] - p[i]) / (length - i);
  }

  for (let k = 1; k < K; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        dp[i] = Math.max(dp[i], dp[j] + (p[j]-p[i]) / (j-i));
      }
    }
  }

  return dp[0];
};