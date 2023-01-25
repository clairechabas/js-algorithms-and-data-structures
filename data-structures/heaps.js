/*
 * Heaps
 * -- Definition
 * A heap is a tree structure.
 * In a MaxBinaryHeap parent nodes always bigger than the children.
 * In a MinBinaryHeap parent nodes always smaller than the children.
 * A binary heap is as compact as possible: every left and right are
 * always filled before moving down, and left is filled first.
 *
 * -- Useful for
 * To implement a priority queues, which are queues where
 * each item has an importance level.
 *
 * -- Complexity
 * Insertion: O(log(n))
 * Removal: O(log(n))
 * Searching: O(n) (it's actually O(n/2) but it's still O(n))
 */
class MaxBinaryHeap {
  /*
   *
   */
  // In a MaxBinaryHeap represented as an array:
  // For any parent node located at index n,
  // - the left child is located at index 2n+1,
  // - and the right at index 2n+2.
  // For any child node located at index n,
  // - the parent node is at index Math.floor((n-1)/2)
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // Add an element
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // Order the heap after insertion (which is pushed last in the array)
  bubbleUp() {
    // Start at the last index
    let index = this.values.length - 1;
    const element = this.values[index];

    // Compare to its parent
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      // If the child is bigger than the parent we swap them
      if (element > parent) {
        // Swap the values
        this.values[parentIndex] = element;
        this.values[index] = parent;

        // and update the index which is now in its parent place
        index = parentIndex;
      }
    }
  }

  // When removing an element we start with the bigger, so the root
  remove() {
    // Take the first element out and replace it by the last element
    const max = this.values[0];
    const last = this.values.pop();

    // We only want to bubble down if the array is not empty
    if (this.values.length > 0) {
      this.values[0] = last;
      // Compare the children and swap which either one which is bigger
      // starting with the left one
      // The bigger child index becomes the new index
      this.bubbleDown();
    }

    return max;
  }

  // Order the heap after removal (which removes the root)
  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = this.values[2 * index + 1];
      let rightChildIndex = this.values[2 * index + 2];
      let leftChild, rightChild;
      let swapIndex = null;

      // Make sure we're not out of bounce
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }

      // Make sure we're not out of bounce
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        /**
         * Either we haven't swapped already and the right
         * child is bigger than the parent
         * OR
         * we did swap but the right child is bigger than the
         * left child (meaning both children are bigger than the
         * parent but the right child is bigger than the left one)
         */
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log("Heap before", heap);
heap.insert(55);
console.log("Heap after insert", heap);
heap.insert(45);
console.log("Heap after insert again", heap);
console.log(heap.remove());
console.log("Heap after removal", heap);
