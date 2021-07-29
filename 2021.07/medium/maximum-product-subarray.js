// 连接：https://leetcode-cn.com/problems/maximum-product-subarray/submissions/
function getMaxMinProValue(nums, i, dp) {
  if(dp[i] || dp[i] === 0) {
    return dp[i];
  }

  if(i === 0) {
    dp[0] = {
      min: nums[0],
      max: nums[0]
    };
    return dp[0];
  }

  const preview = getMaxMinProValue(nums, i - 1, dp);

  dp[i] = {
    max: Math.max(preview.max * nums[i], Math.max(nums[i], preview.min * nums[i])),
    min: Math.min(preview.min * nums[i], Math.min(nums[i], preview.max * nums[i]))
  };

  return dp[i];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length === 0) {
    return 0;
  }

  const dp = {};
  let result = nums[0];

  for(let i = 0; i < nums.length; i++) {
    result = Math.max(result, getMaxMinProValue(nums, i, dp).max);
  }

  return result;
};