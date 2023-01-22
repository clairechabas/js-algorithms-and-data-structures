// Quick sort
// We use a pivot and move smaller values to its left.
import { pivot } from "./sortingAlgorithms.helpers.js";

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// Examples:
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
