/**
 * Two Sum
 * Given an array of integers nums (unsorted) and an integer target, return
 * indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Solution 1 - Hash Map - 60ms - Beats 90.87%
var twoSum = function (nums, target) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(target - nums[i])) {
      return [i, numsMap.get(target - nums[i])];
    } else {
      numsMap.set(nums[i], i);
    }
  }

  return [-1, -1];
};

// Examples
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

/**
 * Two Sum Variant
 * Given a sorted array of unique integers and a target integer,
 * return true if there exists a pair of numbers that sum to target, false otherwise.
 *
 * This si similar to twoSum which returns the index of the 2 integers in the array.
 */
// function hasTwoSumNaive(integers, target) {
//   for (let i = 0; i < integers.length; i++) {
//     for (let j = i + 1; j < integers.length; j++) {
//       if (integers[i] + integers[j] === target) return true;
//     }
//   }

//   return false;
// }

// function hasTwoSumRecursive(integers, target) {
//   if (integers.length <= 1) return false;

//   for (let i = 1; i < integers.length; i++) {
//     if (integers[0] + integers[i] === target) return true;
//   }

//   return hasTwoSumRecursive(integers.splice(1), target);
// }

// function hasTwoSumTwoPointers(integers, target) {
//   let left = 0;
//   let right = integers.length - 1;
//   let sum = 0;

//   while (left <= right) {
//     sum = integers[left] + integers[right];

//     if (sum === target) return true;

//     if (sum > target) {
//       right--;
//     }
//     if (sum < target) {
//       left++;
//     }
//   }

//   return false;
// }

// Examples
// console.log(hasTwoSumTwoPointers([1, 2, 4, 6, 8, 9, 14, 15], 13)); // true
