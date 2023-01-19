// Option 1
// function isPalindrome(str) {
//   const reversedStr = str.toLowerCase().split("").reverse().join("");

//   return reversedStr === str;
// }

// Option 2: recursively
function isPalindrome(str) {
  if (str.length === 1) return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
