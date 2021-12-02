// 连接： https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  const dp = new Array(nums1.length).fill(0).map((_) => [0, 0]);
  // 初试状态
  dp[0][0] = 0;
  dp[0][1] = 1;

  // 遍历
  for(let i = 1; i < nums1.length; i++) {
    // 如果 nums1[i] 和 nums2[i] 是有序的
    if (nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i]) {
      // 如果 nums1[i] nums1[i - 1] 和 nums2[i] nums2[i - 1] 是可以交叉的
      if (nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i]) {
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]);
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1;
      } else {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = dp[i - 1][1] + 1;
      }
    } else {
      dp[i][0] = dp[i - 1][1];
      dp[i][1] = dp[i - 1][0] + 1;
    }
  }

  return Math.min(dp[nums1.length - 1][0], dp[nums1.length - 1][1]);
};