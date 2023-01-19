// Implement the JS flat method with recursion.
// Given an array of arrays, return an array flattened, with one level of depth.

// Option 1: with a for loop
function flatten(arrays) {
  let flat = []; // [1, 2, 3, 4]

  for (let i = 0; i < arrays.length; i++) {
    if (!Array.isArray(arrays[i])) {
      flat.push(arrays[i]);
    }

    // we loop through the inner array
    flat = flat.concat(flatten(arrays[i]));
  }

  return flat;
}

// Option 2: with reduce
function flatten(arrays) {
  return arrays.reduce(
    (acc, current) =>
      acc.concat(Array.isArray(current) ? flatten(current) : current),
    []
  );
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
