/**
 * Ransom Note
 * Given two strings ransomNote and magazine, return true if
 * ransomNote can be constructed by using the letters from
 * magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Solution 1 - 103ms - Beats 27.56%
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let ransomFreq = {};
  let magazineFreq = {};
  for (let i = 0; i < ransomNote.length; i++) {
    ransomFreq[ransomNote[i]] = (ransomFreq[ransomNote[i]] || 0) + 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    magazineFreq[magazine[i]] = (magazineFreq[magazine[i]] || 0) + 1;
  }

  for (const key in ransomFreq) {
    if (!magazineFreq[key] || magazineFreq[key] < ransomFreq[key]) return false;
  }
  return true;
};

// Solution 2 - 62ms - Beats 98.55%
var canConstruct2 = function (ransomNote, magazine) {
  // 0. Return early - Adding this check gets it runnning in 61ms and beats 98.74%
  if (ransomNote.length > magazine.length) return false;

  // 1. Create an array of 26 items (length of the alphabet) filled with 0s.
  let array = new Array(26).fill(0);

  // 2. Increment each item corresponding to a letter in ransomNote.
  for (let i = 0; i < ransomNote.length; i++) {
    array[ransomNote.charCodeAt(i) - 97] += 1;
  }

  // 3. Decrement each item corresponding to a letter in magazine.
  for (let i = 0; i < magazine.length; i++) {
    array[magazine.charCodeAt(i) - 97] -= 1;
  }

  // 4. If every value in the array are either 0 or negative
  // then magazine can construct ransomNote, otherwise it can't.
  return array.every((val) => val <= 0);
};

// Examples
console.log(canConstruct2("a", "b")); // false
console.log(canConstruct2("aa", "ab")); // false
console.log(canConstruct2("aa", "aab")); // true
console.log(
  canConstruct2("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
); // true
