// 连接：https://leetcode-cn.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const f = new Array(s.length + 1).fill(0);
  f[0] = 1; // 仅用于初始值赋值，没有逻辑意义
  for(let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      f[i] += f[i - 1];
    }

    if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
      f[i] += f[i - 2];
    }
  }

  return f[s.length];
};

// 空间优化版本
var numDecodings = function(s) {
  const n = s.length;
  // a = f[i-2], b = f[i-1], c = f[i]
  // 注意 在第一个元素走完第一个if分支后，会对ab进行重新赋值，就会使a的值为1，所以赋值默认值时，a只用赋0即可
  let a = 0, b = 1, c = 0;
  for (let i = 1; i <= n; ++i) {
    c = 0;
    if (s[i - 1] !== '0') {
      c += b;
    }
    if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
};