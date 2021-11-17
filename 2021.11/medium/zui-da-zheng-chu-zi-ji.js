// 连接：https://leetcode-cn.com/problems/largest-divisible-subset/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a-b);

  // 找出最大整除子集个数及最大整数值
  const dp = new Array(nums.length).fill(1);
  let maxSize = 1;
  let maxValue = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[i] % nums[j] === 0) {
         dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    if (dp[i] > maxSize) {
      maxSize = dp[i];
      maxValue = nums[i];
    }
  }

  // 推到求出最大子集
  const res = [];
  if (maxSize === 1) {
    res.push(nums[0]);
    return res;
  }

  const result = [];
  for(let i = nums.length - 1; i >= 0 && maxSize > 0; i--) {
    if (maxSize === dp[i] && maxValue % nums[i] === 0) {
      result.push(nums[i]);
      maxValue = nums[i];
      maxSize--;
    }
  }

  return result;
};