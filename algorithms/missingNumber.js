/**
 * Missing Number
 *
 * Given an unsorted array nums containing n distinct numbers in the
 * range [0, n], return the only number in the range that is
 * missing from the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1 - With Array - 91ms
var missingNumber = function (nums) {
  let numsMap = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length + 1; i++) {
    numsMap[nums[i]] = 1;
  }

  return numsMap.indexOf(0);
};

// Solution 2 - With Sum - 60ms - Beats 89.87%
var missingNumber2 = function (nums) {
  let totalExpected = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    totalExpected += i;
  }

  let totalFromNums = 0;
  for (let i = 0; i < nums.length; i++) {
    totalFromNums += nums[i];
  }

  return totalExpected - totalFromNums || 0;
};

// Solution 3 - With Set - 67ms - Beats 71.14%
var missingNumber3 = function (nums) {
  let numsSet = new Set();

  for (const num of nums) {
    numsSet.add(num);
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (!numsSet.has(i)) return i;
  }

  return -1;
};

// Examples
console.log(missingNumber3([3, 0, 1])); // 2
console.log(missingNumber3([0, 1])); // 2
console.log(missingNumber3([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
