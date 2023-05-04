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
// Option 1: Solution with slow and fast pointers
// Space complexity: O(1) / Time complextiy: O(n)
const hasCycleWithPointers = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if ((fast = slow)) return true;
  }

  return false;
};

// Option 2: Solution with hashing
// Space complexity: O(n) / Time complextiy: O(n)
const hasCycleWithHashing = (head) => {
  let set = new Set();

  while (head) {
    if (set.has(head)) return true;

    set.add(head);
    head = head.next;
  }

  return false;
};

/**
 * Example 3
 *
 * Given the head of a linked list and an integer K, return the Kth
 * node from the end.
 *
 * For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5
 * and k = 2, return the node with value 4, as it is the 2nd node from the end.
 */
// Space complexity: O(1) / Time complextiy: O(n)
let findNode = (head, k) => {
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.val;
};
