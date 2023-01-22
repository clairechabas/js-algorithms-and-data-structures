// Merge sort
// Merge sort implements a divide and conquer approach. It takes advantage of
// the fact that merging sorted arrays is easy and that arrays of 0 or 1 in length
// are sorted by definition.
// We split the array into smaller arrays until we reach to arrays of 0 or 1
// in length and then we merge the arrays back together.
// Time Complexity: O(n)
import { merge } from "./sortingAlgorithms.helpers.js";

function mergeSort(arr) {
  // break up arr into 2 halves
  // again and again until their length is 1 or 0
  // good candidate for recursion
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

// Examples
console.log(mergeSort([10, 4, 87, 2, 9, 67, 12]));
