// 连接：https://leetcode-cn.com/problems/count-good-nodes-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var goodNodes = function(root) {
  // 没有节点，即没有好节点
  if(!root) {
    return 0;
  }
  // 好节点计数
  let count = 0;
  function dfs(subRoot, max) {
    if (!subRoot) {
      return ;
    }

    if(subRoot.val >= max) {
      count++;
      max = subRoot.val;
    }

    dfs(subRoot.left, max);
    dfs(subRoot.right, max);
  }

  dfs(root, root.val);

  return count;
};