// 连接：https://leetcode-cn.com/problems/shortest-way-to-form-string/solution/
const canShortest = function(source, target) {
  return Array.prototype.slice.call(target).every((item) => source.indexOf(item) !== -1)
}


const isSubsequence = function(target, source) {
  if (target.length > source.length) return false;

  let result = 0;
  for (let i = 0; i < source.length; i++) {
    if (result >= target.length) return true;
    if(target[result] === source[i]) {
      result++;
    }
  }
  return result >= target.length;
}
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
  if(!canShortest(source, target)) return -1;

  let temp = '';
  let result = 1;
  let tempResult = null;

  for (let i = 0; i < target.length; i++) {
    tempResult = result;
    temp += target[i];

    if (!isSubsequence(temp, source)) {
      temp = '';
      temp += target[i];
      tempResult = result + 1;
    }

    result = tempResult;
  }

  return result;
};

console.log(canShortest('abc', 'abcab'))