// 连接：https://leetcode-cn.com/problems/paint-house-ii/submissions/
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  const len = costs.length;

  if(len === 0) {
    return 0;
  }
  if(len === 1) {
    return Math.min(...costs[0]);
  }
  for(let i = 1; i < len; i++) {
    const nCost = costs[i];
    for (let j = 0; j< nCost.length; j++) {
      const previewNCost = [...costs[i -1]];
      previewNCost.splice(j, 1);
      nCost[j] += Math.min(...previewNCost);
    }
  }

  return Math.min(...costs[len - 1]);
};