/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let preview = null;
  let current = head;
  let temp = null;

  while(current.next) {
    temp = current.next;
    current.next = preview;
    preview = current;
    current = temp;
    temp = current.next;
  }

  current.next = preview;
  head = current;

  return head;
};