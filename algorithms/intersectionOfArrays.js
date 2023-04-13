/**
 * Intersection of Multiple Arrays
 *
 * Given a 2D integer array nums where nums[i] is a non-empty array
 * of distinct positive integers, return the list of integers that
 * are present in each array of nums sorted in ascending order.
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
// Solution 1 - With Hash Map - 74ms - Beats 43.66%
var intersection = function (nums) {
  // Init hash map to store frequencies
  let frequencies = new Map();

  // loop through each subarray and update frequencies
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      frequencies.set(nums[i][j], (frequencies.get(nums[i][j]) || 0) + 1);
    }
  }

  // check in map if keys have a value === nums.length (nb of subarray)
  let result = [];
  for (const [num, freq] of frequencies) {
    if (freq >= nums.length) result.push(num);
  }

  // and store them in ascending order (see later)
  return result.sort((a, b) => a - b);
};

// Examples
console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
); // [3,4]
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // []
