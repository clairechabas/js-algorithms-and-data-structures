/* SWAP */
// ES5
function swapEs5(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// ES6
export function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

/* MERGE */
// Merges two already sorted arrays
export function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
// Examples:
// console.log("merge", merge([100, 200], [1, 2, 3, 5, 6]));
// console.log("merge", merge([1, 8, 12], [3, 14, 78, 99]));

/* PIVOT */
// Return the index of the pivot used in Quick Sort.
export function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  // We move all values smaller than pivot to its left
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  // We place pivot in its new spot
  swap(arr, start, swapIndex);

  return swapIndex;
}
// Examples:
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
