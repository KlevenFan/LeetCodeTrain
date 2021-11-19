// 连接： https://leetcode-cn.com/problems/arithmetic-slices/solution/deng-chai-shu-lie-hua-fen-by-leetcode-so-g7os/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i]-nums[i-1] === nums[i-1]-nums[i-2] ? dp[i - 1] + 1 : 0;
  }

  return dp.reduce((sum, item) => sum + item, 0);
};