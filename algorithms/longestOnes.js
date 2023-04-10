/**
 * Max Consecutive Ones III
 *
 * Given a binary array nums and an integer k, return the maximum number
 * of consecutive 1's in the array if you can flip at most k 0's.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Solution 1 - 84ms - Beats 26.06%
var longestOnes = function (nums, k) {
  let maxLength = 0,
    zeros = 0,
    left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Solution 2 - ??ms - Beats ?%
var longestOnes2 = function (nums, k) {
  let zeros = 0;
  let result = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      right++;
    } else {
      zeros++;
      right++;

      if (zeros > k) {
        result = Math.max(result, right - left - 1);
        while (zeros > k) {
          if (nums[left] === 0) {
            zeros--;
          }
          left++;
        }
      }
    }
  }

  result = Math.max(result, right - left);
  return result;
};

// Examples
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
