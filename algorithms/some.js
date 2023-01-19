// Implementing the JS some method with recursion
// If callback returns true for any value in the array return true,
// else return false.
function some(array, callback) {
  if (array.length === 0) return false;

  if (callback(array[0])) return true;

  return some(array.splice(1), callback);
}

const isOdd = (val) => val % 2 !== 0;
console.log(some([1, 2, 3, 4], isOdd)); // true
console.log(some([4, 6, 8], isOdd)); // false
console.log(some([4, 6, 8], (val) => val > 10)); // false
