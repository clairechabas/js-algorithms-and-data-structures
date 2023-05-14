/**
 * Monotonic
 *
 * A monotonic stack or queue is one whose elements are always sorted
 * (ascending or descending) and maintain their sorted property by removing
 * elements that would violate the property before adding new elements.
 *
 */

/**
 * Daily Temperatures
 *
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have
 * to wait after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Solution - 273ms - Beats 76%
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let answer = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }

  return answer;
};

/**
 * Sliding Window Maximum
 *
 * You are given an array of integers nums, there is a sliding window
 * of size k which is moving from the very left of the array to the
 * very right. You can only see the k numbers in the window. Each time
 * the sliding window moves right by one position.
 *
 * Return the max sliding window.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let answer = [];
  // We'll build a decreasing monotonic queue
  let queue = [];

  for (let i = 0; i < nums.length; i++) {
    // To keep our decreasing monotonic queue valid we remove
    // any new number that's higher than the last one in queue.
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);

    // queue[0] is the index of the maximum element.
    // if queue[0] + k == i then it's outside the window.
    if (queue[0] + k == i) {
      queue.shift();
    }

    // Add to answer once window has reached size k
    if (i >= k - 1) {
      answer.push(nums[queue[0]]);
    }
  }

  return answer;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
