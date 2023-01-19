// Return the sum of all even numbers in an object
// which may contain nested objects.
function nestedEvenSum(obj) {
  let sum = 0;

  function helper(object) {
    while (Object.keys(object).length > 0) {
      for (const key in object) {
        if (typeof object[key] !== "object") {
          if (Number.isInteger(object[key]) && object[key] % 2 === 0) {
            sum += object[key];
          }
        } else {
          // It's an object
          helper(object[key]);
        }

        delete object[key];
      }
    }

    return sum;
  }

  helper(obj);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
