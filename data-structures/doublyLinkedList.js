/*
 * Doubly Linked List
 * -- Definition
 * A data structure that contains a head, tail and length.
 * Each element is a node. Each node has a value and a double pointer
 * which gives access to the previous and next nodes in the list.
 *
 * -- Characteristics
 * Better than Singly Linked Lists for finding nodes because can be
 * done in half the time. Otherwise similar to those:
 * No indexes
 * Connected via nodes with `next` and `prev` pointers
 * Random access is not allowed
 *
 * -- Complexity
 * Insertion: O(1)
 * Removal: O(1)
 * Searching: O(n) - Technically searching is O(n/2) but that's still O(n)
 * Access: O(n)
 */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node at the end of the list
  push(value) {
    let newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // Remove a node from the end of the list
  pop() {
    if (!this.head) return undefined;

    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;

    return currentTail;
  }

  // Remove a node from the beginning of the list
  shift() {
    if (this.length === 0) return undefined;

    let removedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }

    this.length--;

    return removedHead;
  }

  // Add a node at the beginning of the list
  unshift(value) {
    let newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // Access the node at a given position and returns its value
  get(position) {
    if (position < 0 || position >= this.length) return undefined;

    let count = 0;
    let current;

    if (position >= Math.round(this.length / 2)) {
      current = this.tail;
      while (count !== position) {
        current = current.prev;
        count--;
      }
      return current;
    } else {
      current = this.head;
      while (count !== position) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  // Replace the value of a node in the list at a given position
  set(position, value) {
    let node = this.get(position);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  // Add a node in the list at a given position
  insert(position, value) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(value);
    if (position === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(position - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return this;
  }

  // Remove a node at a given position
  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) return !!this.shift();
    if (position === this.length - 1) return !!this.pop();

    let removedNode = this.get(position);
    let prev = removedNode.prev;
    let next = removedNode.next;

    prev.next = next;
    next.prev = prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}
