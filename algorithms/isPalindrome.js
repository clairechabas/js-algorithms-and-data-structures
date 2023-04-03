// // Option 1
// function isPalindrome(str) {
//   const reversedStr = str.toLowerCase().split("").reverse().join("");

//   return reversedStr === str;
// }

// // Option 2: recursively
// function isPalindrome(str) {
//   if (str.length === 1) return true;

//   if (str[0] !== str[str.length - 1]) {
//     return false;
//   }

//   return isPalindrome(str.substring(1, str.length - 1));
// }

/**
 * Return true if a given string is a palindrome, false otherwise.
 */
function isPalindrome(string) {
  if (string.length % 2 === 0) return false;

  let left = 0;
  let right = string.length - 1;

  while (string[left] === string[right]) {
    if (left === right) return true;
    left++;
    right--;
  }

  return false;
}

function isAlsoPalindrome(string) {
  if (string.length % 2 === 0) return false;

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
