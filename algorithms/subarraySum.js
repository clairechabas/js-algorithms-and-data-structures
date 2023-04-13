/**
 * Subarray Sum Equals K
 *
 * Given an array of integers nums and an integer k, return the total number
 * of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Solution 1 - With Hash Map & Prefix Sum - 87ms - Beats 71.99%
var subarraySum = function (nums, k) {
  // 1. Init an answer array
  let answer = 0;
  let currentPrefixSum = 0;

  // 2. store prefix sum of nums in a hash map
  let numsPrefixSumMap = new Map();
  numsPrefixSumMap.set(0, 1);

  for (const num of nums) {
    currentPrefixSum += num;

    // Update answer if we have a subarray matching our constraint
    answer += numsPrefixSumMap.get(currentPrefixSum - k) || 0;

    // update hash map
    numsPrefixSumMap.set(
      currentPrefixSum,
      (numsPrefixSumMap.get(currentPrefixSum) || 0) + 1
    );
  }

  return answer;
};

// Examples
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
