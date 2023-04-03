/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * Solution with two pointers
 * @param {string} sub
 * @param {string} string
 * @returns {boolean}
 */
function isSubsequence(sub, string) {
  let j = 0;

  for (let i = 0; i < string.length; i++) {
    if (sub[j] === string[i]) {
      j++;
    }
  }

  return j === sub.length;
}

// Examples
console.log(isSubsequence("ace", "abcde")); // true
