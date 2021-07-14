// 连接：https://leetcode-cn.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

// 第1步 浅拷贝链表
function shadowCopy(head) {
  if(!head) {
    return null;
  }

  const result = new Node(head.val, head.next, null);
  let current = result;
  let previewNode = null;

  while(head.next) {
    previewNode = current;
    current = new Node(head.next.val, head.next.next, null);
    previewNode.next = current;
    head = head.next;
  }

  current.next = null;

  return result;
}

// 第2步 给每个节点拷贝 Random
function copyNodeRandom(head, newHead) {
  let p1 = head;
  let p2 = newHead;

  while (p1) {
    const randomOrdinal = getRandomNodeOrdinal(head, p1.random);
    p2.random = getNewLinkNodeRandom(newHead, randomOrdinal);
    p1 = p1.next;
    p2 = p2.next;
  }
}

// 第2.1步 找到每个节点 Random 在原链表中的序数
function getRandomNodeOrdinal(head, random) {
  if (!random) {
    return null;
  }

  let ordinal = 0;
  while(random !== head) {
    head = head.next;
    ordinal++;
  }

  return ordinal;
}

// 第2.2步 给新链表的相同节点赋值 Random
function getNewLinkNodeRandom(newHead, ordinal) {
  if (ordinal === null) {
    return null;
  }

  while(ordinal !== 0) {
    newHead = newHead.next;
    ordinal--;
  }

  return newHead;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const result = shadowCopy(head);
  copyNodeRandom(head, result);

  return result;
};