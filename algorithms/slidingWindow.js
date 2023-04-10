/**
 * Slinding Window
 *
 */

/**
 * Example 1
 *
 * Given an array of positive integers nums and an integer k,
 * find the length of the longest subarray whose sum is less
 * than or equal to k.
 */
function longestSubLength(nums, k) {
  let left = 0;
  let length = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    length = Math.max(length, right - left + 1);
  }

  return length;
}

longestSubLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8);

/**
 * Example 2
 *
 * You are given a binary substring s (a string containing
 * only "0" and "1"). An operation involves flipping a "0"
 * into a "1".
 * What is the length of the longest substring containing only "1"
 * after performing at most one operation?
 */
function findLength(s) {
  let left,
    zeros,
    length = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      zeros++;
    }

    while (zeros > 1) {
      if (s[left] === "0") {
        zeros--;
      }
      left++;
    }

    length = Math.max(length, right - left + 1);
  }

  return length;
}

/**
 * Number of subarrays
 *
 * Given an array of positive integers nums and an integer k,
 * return the number of contiguous subarrays where the product
 * of all the elements in the subarray is strictly less than k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  // No subarray can fit for k <= 1 since the product
  // of its elements must be strictly less than k.
  if (k <= 1) return 0;

  let left,
    length = 0;
  let product = 1;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (left <= right && product >= k) {
      // we slide the window to the right
      product /= nums[left];
      left++;
    }

    length += right - left + 1;
  }

  return length;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100); // 8

/**
 * Fixed window size
 *
 * Given an integer array nums and an integer k, find the sum
 * of the subarray with the largest sum whose length is k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findBestSubarray = function (nums, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let sum = currentSum;

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum + nums[i] - nums[i - k];

    sum = Math.max(sum, currentSum);
  }

  return sum;
};

findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4); // 18
