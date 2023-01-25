/**
 * Priority Queues
 *
 * A priority queue is easily implemented with a heap.
 * We'll use a MinBinaryHeap because usually the priority
 * levels are treated descending: 0 is higher priority than 5.
 */
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Add an element based on its priority
  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }

  // Remove the element with the highest priority (= the root)
  dequeue() {
    const priorityElement = this.values[0];
    const last = this.values.pop();

    // We only reorder the queue if it's not empty
    if (this.values.length > 0) {
      // Then we reorder the queue by placing the last
      // element at the root and bubbling it down
      this.values[0] = last;
      this.bubbleDown();
    }

    return priorityElement;
  }

  // Order the queue after an insertion
  // based on priority levels
  bubbleUp() {
    // We start with the last index, meaning the
    // element that was just pushed in the queue
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // If the parent has a "higher" priority we're done
      if (element.priority >= parent.priority) break;

      // Otherwise we swap parent with child
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // And update the index to move forward up
      index = parentIndex;
    }
  }

  // Order the queue after a removal
  // based on priority levels
  bubbleDown() {
    let index = 0;
    const queueLength = this.values.length;
    const element = this.values[0]; // the element we need to relocate

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      // Check the left child priority
      if (leftChildIndex < queueLength) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex;
        }
      }

      // Check the right piority
      if (rightChildIndex < queueLength) {
        rightChild = this.values[rightChildIndex];

        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      // If we didn't swap, then element has the highest priority
      // than the children so we stop bubbling down
      if (swapIndex === null) break;

      // Otherwise we swap the values and update the index
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER);
console.log(ER.dequeue()); // gunshot wound
console.log(ER.dequeue()); // broken arm
console.log(ER.dequeue()); // glass in foot
console.log(ER.dequeue()); // high fever
console.log(ER.dequeue()); // common cold
