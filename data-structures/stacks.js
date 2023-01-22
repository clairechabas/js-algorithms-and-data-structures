/*
 * Stacks
 * -- Definition
 * Stacks are an abstract data structure. It's a collection
 * of data implementing the LIFO rule: last in first out.
 *
 * -- Useful for
 * Insertion and removal because their constant time.
 * Managing function invocations
 * Undo / Redo features
 * Routing (this history object) is treated like a stack
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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding a value in the stack
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // Removing a value from the stack
  pop() {
    if (!this.size) return null;
    let temp = this.first;

    // If there's only one node
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
