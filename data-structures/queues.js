/*
 * Queue
 * -- Definition
 * Stacks are an abstract data structure. It's a collection
 * of data implementing the FIFO rule: first in first out.
 *
 * -- Useful for
 * Insertion and removal because their constant time.
 * Wait lists
 * Background tasks on computers
 * Uploading resources
 * Printing processing
 *
 * -- Complexity
 * Insertion: O(1)
 * Removal: O(1)
 * Searching: O(n)
 * Access: O(n)
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding a value in the queue
  enqueue(value) {
    let newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // Removing a value from the queue
  dequeue() {
    if (!this.first) return null;

    let currentFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return currentFirst;
  }
}
