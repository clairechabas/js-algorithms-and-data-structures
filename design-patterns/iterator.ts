// Iterator
// The iterator pattern allows you to traverse through a collection of objects.
// Modern languages provide abstraction for the iterator pattern like the for loop.

// Exercise: create a range method that allows you to iterate over
// an iterable object at a certain interval.
function range(start: number, end: number, step = 1) {
  return {
    // Adding the Symbol iterator allows you to use this range methods
    // with a for..of loop.
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (start < end) {
        start = start + step;

        return { done: false, value: start };
      }

      return { done: true, value: end };
    },
  };
}

// Example of use:
for (const n of range(0, 20, 5)) {
  console.log(n);
}
