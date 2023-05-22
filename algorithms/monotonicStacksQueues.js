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
  answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      previousDayIndex = stack.pop();
      answer[previousDayIndex] = i - previousDayIndex;
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

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
// console.log(maxSlidingWindow([1], 1)); // [1]

/**
 * Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 *
 * Given an array of integers nums and an integer limit, return the size
 * of the longest subarray such that the absolute difference between
 * any two elements of this subarray is less than or equal to limit.
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // The increasing queue first element while be the min
  let increasingQueue = [];
  // The decreasing queue first element while be the max
  let decreasingQueue = [];
  let left = 0;
  let answer = 0;

  for (let right = 0; right < nums.length; right++) {
    while (
      increasingQueue.length &&
      increasingQueue[increasingQueue.length - 1] > nums[right]
    ) {
      increasingQueue.pop();
    }
    while (
      decreasingQueue.length &&
      decreasingQueue[decreasingQueue.length - 1] < nums[right]
    ) {
      decreasingQueue.pop();
    }

    increasingQueue.push(nums[right]);
    decreasingQueue.push(nums[right]);

    while (decreasingQueue[0] - increasingQueue[0] > limit) {
      if (nums[left] === increasingQueue[0]) {
        increasingQueue.shift();
      }
      if (nums[left] === decreasingQueue[0]) {
        decreasingQueue.shift();
      }

      left++;
    }

    // We keep the max window size
    answer = max(answer, right - left + 1);
  }

  return answer;
};

console.log(longestSubarray([8, 2, 4, 7], 4)); // 2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)); // 4
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)); // 3
