/**
 * Given an array nums. We define a running sum of an array
 * as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// SOLUTION 1 - 66ms
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
};
// SOLUTION 2 - 65ms
var runningSum = function (nums) {
  let sum = 0;
  nums.map((num) => {
    sum += num;
    return sum;
  });
};
// SOLUTION 3 - 64ms
var runningSum = function (nums) {
  return nums.reduce(
    ({ acc, array }, current, index) => {
      array.push((current += acc));
      acc = current;
      return { acc, array };
    },
    { acc: 0, array: [] }
  ).array;
};
// SOLUTION 4 - 34ms
var runningSum = function (nums) {
  let result = [];
  result[0] = nums[0];
  let temp;
  for (let i = 1; i < nums.length; i++) {
    temp = nums[i] + result[i - 1];
    result.push(temp);
  }

  return result;
};

/**
 * Solution 5 - 55ms - Beats 87.71%
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum5 = function (nums) {
  let result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    result.push(nums[i] + result[i - 1]);
  }
  return result;
};

// Examples
console.log(runningSum5([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum5([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum5([3, 1, 2, 10, 1])); // [3,4,6,16,17]
