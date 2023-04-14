/**
 * Largest Unique Number
 *
 * Given an integer array nums, return the largest integer that
 * only occurs once. If no integer occurs once, return -1.
 *
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1 - With Hash Map - 64ms - Beats 77.84%
var largestUniqueNumber = function (nums) {
  let intMap = new Map();

  for (const num of nums) {
    intMap.set(num, (intMap.get(num) || 0) + 1);
  }
  for (const [num, count] of intMap) {
    if (count > 1) {
      intMap.delete(num);
    }
  }

  if (!intMap.size) return -1;

  let max = 0;
  for (const num of intMap.keys()) {
    max = Math.max(max, num);
  }

  return max;
};

// Examples
console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])); // 8
console.log(largestUniqueNumber([9, 9, 8, 8])); // -1
