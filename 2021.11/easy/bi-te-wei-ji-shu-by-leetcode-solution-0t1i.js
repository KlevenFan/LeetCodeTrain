// 连接： https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/

/**
 * @param {number} n
 * @return {number[]}
 */
// 最高有效位
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;

  for(let i = 1; i <= n; i++) {
    if((i & (i - 1)) === 0) {
      highBit = i;
    }
    bits[i] = bits[i - highBit] + 1;
  }

  return bits;
};

// 最低有效位
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);

  for(let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }

  return bits;
};

// 最低设置位
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);

  for(let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1;
  }

  return bits;
};