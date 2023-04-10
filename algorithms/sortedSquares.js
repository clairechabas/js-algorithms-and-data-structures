/**
 * Squares of a Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution with two pointers 1 - 163ms - Beats 10%
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      result.unshift(nums[left] * nums[left]);
      left++;
    } else {
      result.unshift(nums[right] * nums[right]);
      right--;
    }
  }

  return result;
};

// Solution with two pointers 2 - 99ms - Beats 77.3%
// Assignment for already exisiting indexes in arrays is O(1)
// While in previous solution I used unshift which is O(n) at each loop
// Hence this solution is much more performant
var sortedSquares2 = function (nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};

// Examples
console.log(sortedSquares2([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares2([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
