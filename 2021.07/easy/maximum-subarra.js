// 连接：https://leetcode-cn.com/problems/maximum-subarray/
function getSubArrayMaxValue(nums, i, dp) {
  if(dp[i] || dp[i] === 0) {
    return dp[i];
  }

  if(i === 0) {
    return nums[0];
  }

  dp[i] = Math.max(getSubArrayMaxValue(nums, i - 1, dp), 0) + nums[i];

  return dp[i];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let dp = {};
  let result = nums[0];

  for(let i = 0; i < nums.length; i++) {
    result = Math.max(result, getSubArrayMaxValue(nums, i, dp));
  }

  return result;
};