/**
 * Prefix Sum
 *
 * A prefix sum is a technique that can be used with integer arrays.
 * The idea is to create an array prefix where prefix[i] is the sum
 * of all elements up to the index i (inclusive).
 * Prefix sums allow us to find the sum of any subarray in O(1).
 */

/**
 * Example 1
 * Given an integer array nums, an array queries where
 * queries[i] = [x, y] and an integer limit, return a boolean
 * array that represents the answer to each query.
 * A query is true if the sum of the subarray from x to y is
 * less than limit, or false otherwise.
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @return {boolean[]}
 */
var answerQueries = function (nums, queries, limit) {
  // 1. Build a prefix sum array: [1, 7, 10, 12, 19, 21]
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[i - 1]);
  }

  // 2. Loop through queries and calculate each subarray sum
  let result = [];
  let subArrSum = 0;
  for (const [left, right] of queries) {
    subArrSum = prefix[right] - prefix[left] + nums[left];

    // 3. compare subarray sum with limit and store result
    result.push(subArrSum < limit);
  }

  return result;
};

// Test
console.log(
  answerQueries(
    [1, 6, 3, 2, 7, 2],
    [
      [0, 3],
      [2, 5],
      [2, 4],
    ],
    13
  )
); // [true, false, true]

/**
 * Example 2 - Number of Ways to Split Array
 *
 * Given an integer array nums, find the number of ways to split
 * the array into two parts so that the first section has a sum
 * greater than or equal to the sum of the second section.
 *
 * The second section should have at least one number.
 *
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1 - 116ms - Beats 43.75%
var waysToSplitArray = function (nums) {
  // 1. generate a prefix sum array: [10, 14, 6, 13]
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[i - 1]);
  }

  // 2. loop through the prefix array
  let count = 0;
  let subSumLeft,
    subSumRight = 0;
  for (let right = 0; right < prefix.length - 1; right++) {
    subSumLeft = prefix[right];
    subSumRight =
      prefix[prefix.length - 1] - prefix[right + 1] + nums[right + 1];

    if (subSumLeft >= subSumRight) {
      count++;
    }
  }

  return count;
};

// Solution 1 - 94ms - Beats 80%
var waysToSplitArray2 = function (nums) {
  let count = 0;
  let sumLeft = 0;
  let sumRight = 0;
  let sumTotal = 0;

  for (const num of nums) {
    sumTotal += num;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    sumLeft += nums[i];
    sumRight = sumTotal - sumLeft;

    if (sumLeft >= sumRight) {
      count++;
    }
  }

  return count;
};

// Tests
console.log(waysToSplitArray([10, 4, -8, 7])); // 2
console.log(waysToSplitArray([2, 3, 1, 0])); // 2

/**
 * Minimum Value to Get Positive Step by Step Sum
 *
 * Given an array of integers nums, you start with an initial positive value startValue.
 * In each iteration, you calculate the step by step sum of startValue plus elements
 * in nums (from left to right).
 * Return the minimum positive value of startValue such that the step by step sum
 * is never less than 1.
 *
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1 - 58ms - Beats 66.58%
var minStartValue = function (nums) {
  // The problem gets down to finding the lowest value in the running sum of nums
  // and returning its "difference" from 1
  let min = nums[0];

  // calculate the running sum
  let runningSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    runningSum.push(nums[i] + runningSum[i - 1]);
    min = Math.min(min, nums[i] + runningSum[i - 1]);
  }

  // Look for the lowest value and compare to 1
  return 1 - min > 0 ? 1 - min : 1;
};

// Solution 2 - 63ms - Beats 43.24%
var minStartValue = function (nums) {
  let min = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    min = Math.min(min, total);
  }

  return 1 - min;
};

// Tests
console.log(minStartValue([-3, 2, -3, 4, 2])); // 5
console.log(minStartValue([1, 2])); // 1
console.log(minStartValue([2, 3, 5, -5, -1])); // 1
