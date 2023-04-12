/**
 * Counting Elements
 *
 * Given an integer array arr, count how many elements x there are,
 * such that x + 1 is also in arr.
 *
 * If there are duplicates in arr, count them separately.
 *
 * @param {number[]} arr
 * @return {number}
 */
// Solution 1 - With Set - 58ms - Beats 71.51%
var countElements = function (arr) {
  // 1. create set with x+1 values of arr
  let arrSet = new Set(arr);

  // 2. loop on arr and check if map has x+1 value, if so increment counter
  let count = 0;
  for (const num of arr) {
    if (arrSet.has(num + 1)) {
      count++;
    }
  }

  return count;
};

// Examples
console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0
console.log(countElements([1, 3, 2, 3, 5, 0])); // 3
console.log(countElements([1, 1, 2, 2])); // 2
