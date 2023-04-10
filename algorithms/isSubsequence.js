/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution with two pointers 1 - 109ms
var isSubsequence = function (s, t) {
  let pointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[pointer]) {
      pointer++;
      if (pointer === s.length) return true;
    }
  }

  return false;
};

// Solution with two pointers 2 - 52ms - Beats 93.73%
var isSubsequence2 = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;

    j++;
  }

  return i === s.length;
};

// Examples
console.log(isSubsequence2("abc", "ahbgdc")); // true
console.log(isSubsequence2("axc", "ahbgdc")); // false
