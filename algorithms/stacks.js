/**
 * Stacks
 */

/**
 * Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 * The string is valid if all open brackets are closed by the same type
 * of closing bracket in the correct order, and each closing bracket
 * closes exactly one open bracket.
 *
 * For example, s = "({})" and s = "(){}[]" are valid, but s = "(]"
 * and s = "({)}" are not valid.
 *
 * @param {string} s
 * @return {boolean}
 */
// Solution - 61ms - Beats 70%
var isValid = function (s) {
  const matchMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (const char of s) {
    if (char in matchMap) {
      // char is an opening
      stack.push(char);
    } else {
      // char is a closing
      if (!stack.length) return false;

      let previousChar = stack.pop();
      if (matchMap[previousChar] !== char) return false;
    }
  }

  // In the end, if the string is valid the stack should be empty
  return stack.length === 0;
};

// Test cases
// console.log(isValid("{}]")); // false
// console.log(isValid("[{}]")); // true

/**
 * Remove All Adjacent Duplicates In String
 *
 * You are given a string s. Continuously remove duplicates
 * (two of the same character beside each other) until you can't
 * anymore. Return the final string after this.
 *
 * For example, given s = "abbaca", you can first remove the "bb"
 * to get "aaca". Next, you can remove the "aa" to get "ca".
 * This is the final answer.
 *
 * @param {string} s
 * @return {string}
 */
// Solution - 79ms - Beats 77%
var removeDuplicates = function (s) {
  let stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

// Test case
// console.log(removeDuplicates("abbaca")); // ca

/**
 * Backspace String Compare
 *
 * Given two strings s and t, return true if they are equal when
 * both are typed into empty text editors. '#' means a backspace character.
 *
 * For example, given s = "ab#c" and t = "ad#c", return true.
 * Because of the backspace, the strings are both equal to "ac".
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1 - 74ms - Beats 9%
var backspaceCompare = function (s, t) {
  let stackS = [];
  let stackT = [];

  for (const char of s) {
    if (char !== "#") {
      stackS.push(char);
    } else if (stackS.length) {
      stackS.pop();
    }
  }

  for (const char of t) {
    if (char !== "#") {
      stackT.push(char);
    } else if (stackT.length) {
      stackT.pop();
    }
  }

  return stackS.join("") === stackT.join("");
};

// Solution 2 - 62ms - Beats 57%
var backspaceCompare2 = function (s, t) {
  const type = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "#") {
        stack.push(str[i]);
      } else if (stack.length) {
        stack.pop();
      }
    }

    return stack.join("");
  };

  return type(s) === type(t);
};

// // Test cases
// console.log(backspaceCompare("ab#c", "ad#c")); // true
// console.log(backspaceCompare("ab##", "c#d#")); // true
// console.log(backspaceCompare("a#c", "b")); // false
// console.log(backspaceCompare2("y#fo##f", "y#f#o##f")); // true

/**
 * Simplify Path
 *
 * Given a string path, which is an absolute path (starting with a slash '/')
 * to a file or directory in a Unix-style file system, convert it to the
 * simplified canonical path.
 *
 * In a Unix-style file system, a period '.' refers to the current directory,
 * a double period '..' refers to the directory up a level, and any multiple
 * consecutive slashes (i.e. '//') are treated as a single slash '/'.
 * For this problem, any other format of periods such as '...' are treated
 * as file/directory names.
 *
 * The canonical path should have the following format:
 * - The path starts with a single slash '/'.
 * - Any two directories are separated by a single slash '/'.
 * - The path does not end with a trailing '/'.
 * - The path only contains the directories on the path from the root directory
 * to the target file or directory (i.e., no period '.' or double period '..')
 *
 * @param {string} path
 * @return {string}
 */
// Solution - 68ms - Beats 50%
var simplifyPath = function (path) {
  let pathParts = path.split("/");

  let stack = [];
  for (let i = 0; i < path.length; i++) {
    if (pathParts[i] === "..") {
      stack.pop();
    } else if (pathParts[i] && pathParts[i] !== ".") {
      stack.push(pathParts[i]);
    }
  }

  return "/" + stack.join("/");
};

// Test cases
// console.log(simplifyPath("/home/")); // "/home"
// console.log(simplifyPath("/../")); // "/"
// console.log(simplifyPath("/home//foo/")); // "/home/foo"
// console.log(simplifyPath("/a/./b/../../c/")); // "/c"

/**
 * Make The String Great
 *
 * Given a string s of lower and upper case English letters.
 *
 * A good string is a string which doesn't have two adjacent characters
 * s[i] and s[i + 1] where:
 * - 0 <= i <= s.length - 2
 * - s[i] is a lower-case letter and s[i + 1] is the same letter but in
 * upper-case or vice-versa.
 *
 * To make the string good, you can choose two adjacent characters that
 * make the string bad and remove them. You can keep doing this until
 * the string becomes good.
 *
 * Return the string after making it good. The answer is guaranteed to
 * be unique under the given constraints.
 *
 * Notice that an empty string is also good.
 *
 * @param {string} s
 * @return {string}
 */
// Solution - 59ms - Beats 87%
var makeGood = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (
      stack.length &&
      stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      if (
        (/[A-Z]/.test(stack[stack.length - 1]) && /[a-z]/.test(s[i])) ||
        (/[a-z]/.test(stack[stack.length - 1]) && /[A-Z]/.test(s[i]))
      ) {
        // remove both letters
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

// Test cases
console.log(makeGood("leEeetcode")); // "leetcode"
console.log(makeGood("abBAcC")); // ""
console.log(makeGood("s")); // "s"
console.log(makeGood("")); // ""
