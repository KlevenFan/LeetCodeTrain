// 连接：https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  let map = new Map();
  for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  let max = 0;
  const dp = Array.from({length: arr.length}, ()=> new Array(arr.length).fill(2));
  for(let second = 0; second < arr.length - 1; second++) {
    for(let third = second + 1; third < arr.length; third++) {
      let f2 = arr[second];
      let f3 = arr[third];
      let f1 = f3 - f2;
      if(f1 < f2 && map.has(f1)) {
        dp[second][third] = Math.max(dp[map.get(f1)][second] + 1, dp[second][third]);
        max = Math.max(max, dp[second][third]);
      }
    }
  }

  return max;
};