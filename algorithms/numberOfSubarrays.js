/**
 * Count Number of Nice Subarrays
 *
 * Given an array of integers nums and an integer k. A continuous
 * subarray is called nice if there are k odd numbers on it.
 *
 * Return the number of nice sub-arrays.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  // 1. init counter and result
  let oddNumCount = 0;
  let result = 0;

  // 2. create hash map for odd numbers
  let oddNumsMap = new Map();
  oddNumsMap.set(0, 1);
  for (const num of nums) {
    if (num % 2 !== 0) {
      oddNumCount++;
      result += oddNumsMap.get(oddNumCount - k) || 0;

      oddNumsMap.set(oddNumCount, (oddNumsMap.get(oddNumCount - k) || 0) + 1);
    }
  }

  return result;
};

// Examples
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // 2
console.log(numberOfSubarrays([2, 4, 6], 1)); // 0
