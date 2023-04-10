/**
 * Reverse String
 * Write a function that reverses a string. The input string
 * is given as an array of characters s.
 * You must do this by modifying the input array in-place
 * with O(1) extra memory.
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Solution 1 - 98ms
function reverseString(s) {
  let endIndex = s.length - 1;
  let temp = "";

  for (let i = 0; i < endIndex; i++) {
    temp = s[i];
    s[i] = s[endIndex];
    s[endIndex] = temp;
    endIndex--;
  }

  return s;
}

// Solution 2
function reverseStringRecursive(s) {
  if (!s.length) return [];
  let lastChar = s.pop();
  return [lastChar].concat(reverseStringRecursive(s));
}

// Solution 3 - 85ms - Beats 86.68%
function reverseStringNative(s) {
  return s.reverse();
}

// Solution 4 - 93ms - Beats 58.05%
function reverseArr(array) {
  let left = 0;
  let right = array.length - 1;
  let temp;

  while (left < right) {
    temp = array[right];
    array[right] = array[left];
    array[left] = temp;

    left++;
    right--;
  }

  return array;
}

// Examples
console.log(reverseArr(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseArr(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
