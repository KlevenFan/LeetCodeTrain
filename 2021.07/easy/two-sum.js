// 地址: https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const resultMap = {};

  for(let i = 0; i < nums.length; i++) {
    if (resultMap[target - nums[i]] !== undefined) {

      return [i, resultMap[target - nums[i]]]
    }

    resultMap[nums[i]] = i;
  }

  return [];
};
