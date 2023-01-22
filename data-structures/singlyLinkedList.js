/*
 * Linked List
 * -- Definition
 * A data structure that contains a head, tail and length.
 * Each element is a node. Each node has a value and a single
 * pointer which gives access to another node.
 *
 * -- Characteristics
 * No indexes
 * Connected via nodes with a `next` pointer
 * Random access is not allowed
 *
 * -- Useful for
 * You'd want to build a linked list if you care about
 * insertion and deletion (two operations which are costly
 * with arrays) or need to access items in order and not randomly.
 *
 * -- Complexity
 * Insertion: O(1)
 * Removal: O(1) or O(n)
 * Searching: O(n)
 * Access: O(n)
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a value
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Remove the last item (the tail)
  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // Remove the first item (the head)
  shift() {
    if (!this.length) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  // Adding a new node at the beginning of the list
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // Retrieving a node by it's position
  get(position) {
    if (position < 0 || position >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count !== position) {
      current = current.next;
      count++;
    }

    return current;
  }

  // Changing the value of a node at a given position
  set(position, value) {
    let node = this.get(position);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  // Add a node at the specified position
  insert(position, value) {
    if (position < 0 || position > this.length) return false;

    if (position === 0) return !!this.unshift(value);
    if (position === this.length) return !!this.push(newNode);

    let newNode = new Node(value);

    let existingNodeAtPosition = this.get(position - 1);
    let tempExistingNext = existingNodeAtPosition.next;
    existingNodeAtPosition.next = newNode;
    newNode.next = tempExistingNext;

    this.length++;

    return true;
  }

  // Removing the node at a given position
  remove(position) {
    if (position < 0 || position >= this.length) return undefined;

    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();

    let nodeBeforeNodeToRemove = this.get(position - 1);
    let removedNode = nodeBeforeNodeToRemove.next;
    nodeBeforeNodeToRemove.next = removedNode.next;

    this.length--;

    return removedNode;
  }

  // Logs all values of the list in an array
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
  }

  // Reversing the Linked List in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
