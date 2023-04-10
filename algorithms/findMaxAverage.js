/**
 * Maximum Average Subarray I
 *
 * You are given an integer array nums consisting of n elements,
 * and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum
 * average value and return this value. Any answer with a calculation error
 * less than 10-5 will be accepted.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution using a sliding window - 95 ms - Beats 65.59%
var findMaxAverage = function (nums, k) {
  // Note: the max average will be the one of the max sum
  // 1. calculate the first window average value
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;
  // 2. slide the window and recalculate average value with just adding right value and removing left value from total sum
  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - nums[i - k];

    // 3. keep the max between new and previous average values
    maxSum = Math.max(maxSum, currentSum);
  }

  // 4. return final average value kept
  return maxSum / k;
};

// Examples
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000
