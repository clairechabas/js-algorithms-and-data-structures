// Write a function which accepts an object and returns an array
// of all the values in the object that have a typeof string.
function collectStrings(obj) {
  let result = [];

  function helper(object) {
    while (Object.keys(object).length > 0) {
      for (const key in object) {
        if (typeof object[key] !== "object") {
          if (typeof object[key] === "string") {
            result.push(object[key]);
          }
        } else {
          helper(object[key]);
        }

        delete object[key];
      }
    }

    return result;
  }

  helper(obj);

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
