/**
 * Anagram
 *
 * Write a function that accepts two strings and returns true
 * if the second string is an anagram of the first.
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

// Solution 1
var isAnagram = function (str1, str2) {
  // is not same length return false
  if (str1.length !== str2.length) return false;

  // store letter frequency for both string in a dictionary
  let str1Frequencies = {};
  let str2Frequencies = {};
  for (let letter of str1) {
    str1Frequencies[letter] = (str1Frequencies[letter] || 0) + 1;
  }
  for (let letter of str2) {
    str2Frequencies[letter] = (str2Frequencies[letter] || 0) + 1;
  }

  // compare dictionary key values
  for (let key in str2Frequencies) {
    if (
      !str1Frequencies[key] ||
      str1Frequencies[key] !== str2Frequencies[key]
    ) {
      return false;
    }
  }

  return true;
};

// Solution 2
var isAnagram = function (str1, str2) {
  // is not same length return false
  if (str1.length !== str2.length) return false;

  // store letter frequency for str1 in a dictionary
  let str1Frequencies = {};
  for (let letter of str1) {
    str1Frequencies[letter] = (str1Frequencies[letter] || 0) + 1;
  }

  // compare dictionary key values
  for (let letter of str2) {
    if (!str1Frequencies[letter]) {
      return false;
    } else {
      str1Frequencies[letter] -= 1;
    }
  }

  return true;
};

// Examples
console.log(isAnagram("", "")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("qwerty", "qeywrt")); // true
