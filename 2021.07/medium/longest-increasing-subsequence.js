// 找出以nums[i]为结尾的最长上升子序列
function getLTS(nums, i, dp) {
  // 如果递归过程中计算过以nums[i]为结尾的LTS，则直接返回，减少子问题的重复计算，即减少子问题的规模
  if (dp[i]) {
    return dp[i];
  }
  // 以nums[i]为结尾的最长上升子序列最小程度为1，即只有nums[i]元素自身；
  let result = 1;

  // 向更小的规模查找是否有比以nums[i]小的为结尾的LTS，如果有，则表明改长度可以增加1；
  for (let j = 0; j < i; j++) {
    if(nums[j] < nums[i]) {
      // 查找多有子问题中的最大值
      result = Math.max(result, getLTS(nums, j, dp) + 1);
    }
  }
  // 记忆以nums[i]为结尾的LTS的结果；
  dp[i] = result;
  return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = {};
  let result = 1;

  for(let i = 0; i < nums.length; i++) {
    result = Math.max(result, getLTS(nums, i, dp));
  }

  return result;
};