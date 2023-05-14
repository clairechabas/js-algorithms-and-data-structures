/**
 * Singly Linked Lists
 *
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Ex 1
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
 * Ex 2
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
 * Ex 3
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

/**
 * Ex 4: Middle of the Linked List
 *
 * Given the head of a singly linked list, return the middle node
 * of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/**
 * Ex 5: Remove Duplicates from Sorted List
 *
 * Given the head of a sorted linked list, delete all duplicates such
 * that each element appears only once. Return the linked list sorted as well.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

/**
 * Ex 6: Swap Nodes in Pairs
 *
 * Given the head of a linked list, swap every pair of nodes.
 *
 * For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6,
 * return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.
 */
const swapNodesInPairs = function (head) {
  // Handle case of list with an odd number of nodes
  if (!head || !head.next) {
    return head;
  }

  // storing the reference to the second node of the list
  // which in the end become the first node of the list
  // which we return
  let newStart = head.next;
  let prev = null;

  while (head && head.next) {
    // If this is not the first step
    if (prev !== null) {
      prev.next = head.next;
    }

    prev = head;

    // storing a reference to the rest of the list
    let nextNode = head.next.next;

    // turn the pointer of the second node back to the first node
    head.next.next = head;

    // swap the 2 nodes
    // 1. point the head next node to the rest of the list
    head.next = nextNode;
    // 2. move the head to become the nextNode (the first node of rest of the list)
    head = nextNode;
  }

  return newStart;
};

/**
 * Ex 7: Maximum Twin Sum of a Linked List
 *
 * In a linked list of size n, where n is even, the ith node (0-indexed) of the linked
 * list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
 *
 * For example, if n = 4, then node 0 is the twin of node 3,
 * and node 1 is the twin of node 2.
 * These are the only nodes with twins for n = 4
 * The twin sum is defined as the sum of a node and its twin.
 *
 * Given the head of a linked list with even length, return the
 * maximum twin sum of the linked list.
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// Solution with slow/fast pointers and list reversal - 124ms - Beats 94.12%
var maxTwinSum = function (head) {
  // 1. find the middle of the list  using fast & slow pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // now slow is located at the middle of the list

  // 2. reverse the second half of the list to have each twin node located at n/2
  let middle = slow;
  let prev = null;
  while (middle) {
    let nextNode = middle.next;

    middle.next = prev;
    prev = middle;

    middle = nextNode;
  }
  // now prev is located at the middle of the list

  // 3. use fast & slow pointers again, fast starting at n/2,
  // and update the sum at each iteration with the max
  let start = head;
  let twin = prev;
  let maxSum = 0;

  while (start && twin) {
    maxSum = Math.max(maxSum, start.val + twin.val);

    start = start.next;
    twin = twin.next;
  }

  return maxSum;
};

/**
 * Ex 8: Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
// Solution - 55ms - Beats 92.58%
const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};

/**
 * Ex 9: Reverse Linked List II
 *
 * Given the head of a singly linked list and two integers left and right
 * where left <= right, reverse the nodes of the list from position left
 * to position right, and return the reversed list.
 *
 * Example: head = [1,2,3,4,5], left = 2, right = 4
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  // 1. handle edge case of 0 or 1 element list
  if (!head || left === right) {
    return head;
  }

  // 2. keep a reference to head
  let newHead = new ListNode(-1);
  newHead.next = head;
  let before = newHead;

  // 3. iterate over until first element before the start of the sublist
  for (let i = 1; i < left; i++) {
    before = before.next;
  }

  // and keep reference to the first element of sublist
  let leftNode = before.next;

  // 4. reverse sublist
  // 4.1 `current` is our left (start of the sublist)
  let current = before.next;
  let prev = before;

  for (let i = left; i <= right; i++) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // 5. adjust remaining pointers
  // 5.1 point first element of sublist to next element after right
  leftNode.next = current;
  // 5.2 point before's next pointer to the last element of the sublist (right)
  before.next = prev;

  return newHead.next;
};
