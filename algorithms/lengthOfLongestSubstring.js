/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
// Solution 1 - With Hash Map - 96ms - Beats 51.14%
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0; // 3
  let left = 0;
  let lettersMap = new Map();

  for (let right = 0; right < s.length; right++) {
    lettersMap.set(s[right], (lettersMap.get(s[right]) || 0) + 1);

    while (lettersMap.get(s[right]) > 1) {
      // we reduce the window from the start
      lettersMap.set(s[left], lettersMap.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Solution 2 - With Set - 78ms - Beats 87.55%
var lengthOfLongestSubstring2 = function (s) {
  if (!s.length) return 0;

  let left = 0;
  let right = 0;
  let maxLength = 0;
  let uniqueSubstring = new Set();

  while (right < s.length) {
    if (!uniqueSubstring.has(s[right])) {
      uniqueSubstring.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, uniqueSubstring.size);
    } else {
      uniqueSubstring.delete(s[left]);
      left++;
    }
  }

  return maxLength;
};

// Examples
console.log(lengthOfLongestSubstring2("abcabcbb")); // 3
console.log(lengthOfLongestSubstring2("bbbbb")); // 1
console.log(lengthOfLongestSubstring2("pwwkew")); // 3
