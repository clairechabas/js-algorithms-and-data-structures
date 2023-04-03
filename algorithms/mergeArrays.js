/**
 * Given two sorted integer arrays, return an array that combines both of them and is also sorted.
 */
/**
 * Solution with two pointers
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeArraysTwoPointers(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
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

// Example
console.log(mergeArraysRecursive([1, 4, 7, 20], [3, 5, 6]));
