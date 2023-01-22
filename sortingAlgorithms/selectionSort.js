// Selection sort
// We go over each item of an array keeping track of the smallest value
// and when we reach the end we place the smallest value at the begining
// of the array.
// Time Complexity: O(n^2)
import { swap } from "./sortingAlgorithms.helpers.js";

function selectionSort(arr) {
  let lowest;

  for (let i = 0; i < arr.length; i++) {
    lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
}

console.log(selectionSort([2, 1, 9, 76, 4]));
