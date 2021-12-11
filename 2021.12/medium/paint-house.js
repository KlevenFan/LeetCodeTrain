// 连接：https://leetcode-cn.com/problems/paint-house/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  const dp = new Array(costs.length).fill(0).map(() => new Array(3).fill(0));
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for(let i = 1; i < costs.length; i++) {
    dp[i][0] = Math.min(dp[i - 1][1] + costs[i][0], dp[i - 1][2] + costs[i][0]);
    dp[i][1] = Math.min(dp[i - 1][0] + costs[i][1], dp[i - 1][2] + costs[i][1]);
    dp[i][2] = Math.min(dp[i - 1][0] + costs[i][2], dp[i - 1][1] + costs[i][2]);
  }

  return Math.min(dp[costs.length - 1][0],dp[costs.length - 1][1], dp[costs.length - 1][2]);
};

// 利用原数组计算
var minCost = function(costs) {
  const length = costs.length;

  for(let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }

  return Math.min(costs[length - 1][0],costs[length - 1][1], costs[length - 1][2]);
};
