/**
 * stringifyNumbers
 *
 * Write a function which takes an object and finds all of
 * the values which are numbers and converts them to strings.
 *
 * @param {object} obj
 * @returns object
 */

// Solution 1: modifying the original object
function stringifyNumbers(obj) {
  for (const key in obj) {
    // if it's a number convert to string
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else if (obj[key] && typeof obj[key] === "object") {
      // if it's an array or an object loop inside and repeat
      stringifyNumbers(obj[key]);
    }
  }

  return obj;
}

// Solution 2: creating a new object
function stringifyNumbers2(obj) {
  let result = {};

  function helper(object) {
    for (const key in object) {
      // if it's a number convert to string
      if (typeof object[key] === "number") {
        result[key] = object[key].toString();
      } else if (
        object[key] &&
        typeof object[key] === "object" &&
        !Array.isArray(object[key])
      ) {
        // if it's an array or an object loop inside and repeat
        result[key] = stringifyNumbers(object[key]);
      } else {
        result[key] = object[key];
      }
    }
  }
  helper(obj);

  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers2(obj));

// Previous solutions
// Option 1: with recursive helper function
// function stringifyNumbers(obj) {
//   let newObj = {};

//   function helper(object) {
//     for (const key in object) {
//       if (typeof object[key] !== "object") {
//         if (Number.isFinite(object[key])) {
//           newObj[key] = object[key].toString();
//         } else {
//           newObj[key] = object[key];
//         }
//       } else if (Array.isArray(object[key]) || object[key] === null) {
//         newObj[key] = object[key];
//       } else {
//         newObj[key] = stringifyNumbers(object[key]);
//       }
//     }

//     return newObj;
//   }

//   helper(obj);

//   return newObj;
// }

// // Option 2: pure recursion
// function stringifyNumbers(obj) {
//   let newObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// // Example
// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };
// console.log(stringifyNumbers(obj));
