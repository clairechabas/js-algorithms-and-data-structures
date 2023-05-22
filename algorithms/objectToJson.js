/**
 * Convert Object to JSON String
 * Given an object, return a valid JSON string of that object.
 * You may assume the object only inludes strings, integers, arrays,
 * objects, booleans, and null. The returned string should not include
 * extra spaces.
 * The order of keys should be the same as the order returned by Object.keys().
 *
 * Please solve it without using the built-in JSON.stringify method.
 *
 * @param {any} object
 * @return {string}
 */
var toJsonString = function (object) {
  // null
  if (object === null) {
    return "null";
  }

  // arrays
  if (Array.isArray(object)) {
    const elements = object.map((element) => toJsonString(element));
    return "[" + elements.join(",") + "]";
  }

  // objects
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const pairs = keys.map(
      (key) => '"' + key + '":' + toJsonString(object[key])
    );
    return "{" + pairs.join(",") + "}";
  }

  // strings
  if (typeof object === "string") {
    return '"' + object + '"';
  }

  // numbers, booleans, and undefined
  return String(object);
};

// Examples
console.log(toJsonString({ y: 1, x: 2 })); // "{"y":1,"x":2}"
console.log(
  toJsonString({
    name: "John",
    age: 30,
    hobbies: ["reading", "writing"],
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
    active: true,
    favoriteColor: null,
  })
); // {"name":"John","age":30,"hobbies":["reading","writing"],"address":{"street":"123 Main St","city":"New York","country":"USA"},"active":true,"favoriteColor":null}
