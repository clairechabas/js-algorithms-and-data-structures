/**
 * linkedList
 *
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Example 1
 *
 * Given the head of a linked list with an odd number of nodes head,
 * return the value of the node in the middle.
 * For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.
 */
function linkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

/**
 * Example 2
 *
 * Given the head of a linked list, determine if the linked list has a cycle.
 *
 * There is a cycle in a linked list if there is some node in the list
 * that can be reached again by continuously following the next pointer.
 */
const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if ((fast = slow)) return true;
  }

  return false;
};
