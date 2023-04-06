/**
 * Middle of the Linked List
 *
 * Given the head of a singly linked list, return the middle node
 * of the linked list. If there are two middle nodes, return the
 * second middle node.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solution 1 - 62ms - Beats 52.24%
var middleNode = function (head) {
  let end = head;
  let middle = head;

  while (end !== null && end.next !== null) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
};

// Solution 2
var middleNode = function (head) {
  // 1. Calculate list length
  let length = 0;
  let node = head;
  while (node.next) {
    node = node.next;
    length++;
  }

  // 2. Get middle index
  let middle = Math.floor(length / 2);

  // 3. Navigate list up to middle
  node = head;
  for (let i = 0; i < middle; i++) {
    node = node.next;
  }

  return node;
};

// Example
// head is a ListNode not an array so those can't be tested as is
console.log(middleNode([1, 2, 3, 4, 5])); // [3,4,5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); // [4,5,6]
