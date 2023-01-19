// Binary Search Algorithm
// O(log(n)) complexity
// Only works on sorted array
const arr = ["a", "b", "c", "d", "x", "y", "z"];

function findMe(target, start, end) {
  // 1. Base condition
  // Stop looping when reaching the end of the array
  if (start > end) {
    return "Not found";
  }

  // 2. Compute the middle index to compare it to the target
  const middle = Math.floor((start + end) / 2);

  // When middle equals the target you found the index
  if (arr[middle] === target) {
    return `Found it at index ${middle}`;
  }

  // 3. Continue searching
  if (arr[middle] > target) {
    // middle becomes end
    return findMe(target, start, middle - 1);
  }

  if (arr[middle] < target) {
    // middle becomes start
    return findMe(target, middle + 1, end);
  }
}
