/**
 * Same
 *
 * Given two arrays of numbers. Write a function that returns true
 * if every value in the 1st array has its corresponding value
 * squared in the 2nd array.
 * The frequency of values must be the same.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {boolean}
 */
var same = function (nums1, nums2) {
  // check for arrays length to return early if diff
  if (nums1.length !== nums2.length) return false;

  // create a frequency dictionnary
  let nums1Freq = nums1.reduce((dictionnary, next) => {
    dictionnary[next] = (dictionnary[next] || 0) + 1;
    return dictionnary;
  }, {});

  // loop on nums2
  for (let i = 0; i < nums2.length; i++) {
    // check for each value if it's squared value is in the dic
    // if not return false
    if (!nums1Freq[Math.sqrt(nums2[i])]) return false;

    // if it is and the value is 1 : delete the entry
    if (nums1Freq[Math.sqrt(nums2[i])] === 1) {
      delete nums1Freq[Math.sqrt(nums2[i])];
    } else {
      // else : decrement the entry
      nums1Freq[Math.sqrt(nums2[i])]--;
    }
  }

  return true;
};

// Solution 2
var same2 = function (nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  let nums1Freq = {};
  let nums2Freq = {};
  for (let val of nums1) {
    nums1Freq[val] = (nums1Freq[val] || 0) + 1;
  }
  for (let val of nums2) {
    nums2Freq[val] = (nums2Freq[val] || 0) + 1;
  }

  for (let key in nums1Freq) {
    if (!nums2Freq[key ** 2]) return false;
    if (nums2Freq[key ** 2] !== nums1Freq[key]) return false;
  }

  return true;
};

// Examples
console.log(same2([3, 1, 2, 3], [9, 1, 9, 4])); // true
console.log(same2([5, 12, 3], [1, 9, 4])); // false
console.log(same2([5, 1, 3, 13], [25, 1, 9])); // false
console.log(same2([3, 1, 2, 5], [1, 9, 25, 4])); // true
