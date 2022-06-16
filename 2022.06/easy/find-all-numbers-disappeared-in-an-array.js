// 连接：https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
// 解法一
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  nums.sort((a, b) => a-b);

  let cur = 1;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if(cur === nums[i]) {
      cur++;
    }

    if (cur < nums[i]) {
      while(cur !== nums[i]) {
        result.push(cur);
        cur++;
      }
      i--;
    }
  }
  while(cur <= nums.length) {
    result.push(cur);
    cur++;
  }

  return result;
};

// 解法二