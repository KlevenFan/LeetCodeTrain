// 连接： https://leetcode-cn.com/problems/super-egg-drop/
// 备注借助二分查找优化查找复杂度，通过选择磨一楼层鸡蛋摔碎与否的最大查找次数差值情况收敛二分查找范围
const memo = new Map();

function dp(k, n) {
  if (!memo.has(n * 100 + k)) {
    let result = 0;
    if(n === 0) {
      result = 0;
    } else if (k === 1) {
      result = n;
    } else {
      let lo = 1;
      let hi = n;
      while(lo + 1 < hi) {
        let x = Math.floor((lo + hi) / 2);
        let t1 = dp(k -1, x - 1);
        let t2 = dp(k, n - x);

        if (t1 < t2) {
          lo = x;
        } else if (t1 > t2) {
          hi = x;
        } else {
          lo = x;
          hi = x;
        }
      }

      result = 1 + Math.min(Math.max(dp(k - 1, lo -1), dp(k, n - lo)), Math.max(dp(k - 1, hi -1), dp(k, n - hi)));
    }

    memo.set(n * 100 + k, result);
  }

  return memo.get(n * 100 + k);
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  return dp(k, n);
};